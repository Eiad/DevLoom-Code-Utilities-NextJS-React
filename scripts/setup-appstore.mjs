import * as jose from 'jose';
import * as fs from 'fs';

// Apple API credentials
const keyId = 'C2W4CXZYKM';
const issuerId = '6bdb800d-4d77-4d92-a04c-9b8cf73280d8';
const keyPath = '.keys/AuthKey_C2W4CXZYKM.p8';

// DevLoom config
const BUNDLE_ID = 'com.devloom.app';
const PROFILE_NAME = 'DevLoom Mac App Store';

async function getJWT() {
  if (!fs.existsSync(keyPath)) {
    console.error(`❌ API key not found at: ${keyPath}`);
    process.exit(1);
  }

  const privateKey = fs.readFileSync(keyPath, 'utf8');
  const key = await jose.importPKCS8(privateKey, 'ES256');

  return await new jose.SignJWT({})
    .setProtectedHeader({ alg: 'ES256', kid: keyId, typ: 'JWT' })
    .setIssuer(issuerId)
    .setIssuedAt()
    .setExpirationTime('20m')
    .setAudience('appstoreconnect-v1')
    .sign(key);
}

async function fetchAPI(endpoint, jwt, options = {}) {
  const response = await fetch(`https://api.appstoreconnect.apple.com/v1${endpoint}`, {
    ...options,
    headers: {
      'Authorization': `Bearer ${jwt}`,
      'Content-Type': 'application/json',
      ...options.headers,
    },
  });
  return { response, data: await response.json() };
}

async function getBundleId(jwt) {
  console.log(`🔍 Looking for bundle ID: ${BUNDLE_ID}`);
  const { data } = await fetchAPI(`/bundleIds?filter[identifier]=${BUNDLE_ID}`, jwt);

  if (data.data && data.data.length > 0) {
    const bundleIdResource = data.data[0];
    console.log(`✅ Found bundle ID resource: ${bundleIdResource.id}`);
    return bundleIdResource.id;
  }

  console.log('❌ Bundle ID not found');
  return null;
}

async function getCertificateId(jwt) {
  console.log('🔍 Looking for Mac App Distribution certificate...');
  const { data } = await fetchAPI('/certificates?filter[certificateType]=MAC_APP_DISTRIBUTION', jwt);

  if (data.data && data.data.length > 0) {
    const cert = data.data[0];
    console.log(`✅ Found certificate: ${cert.id} (${cert.attributes.name})`);
    return cert.id;
  }

  console.log('❌ No Mac App Distribution certificate found');
  return null;
}

async function getExistingProfile(jwt) {
  console.log('🔍 Checking for existing provisioning profile...');
  const { data } = await fetchAPI(`/profiles?filter[name]=${encodeURIComponent(PROFILE_NAME)}`, jwt);

  if (data.data && data.data.length > 0) {
    return data.data[0];
  }
  return null;
}

async function createProfile(jwt, bundleIdResourceId, certificateId) {
  console.log('📦 Creating provisioning profile...');

  const { response, data } = await fetchAPI('/profiles', jwt, {
    method: 'POST',
    body: JSON.stringify({
      data: {
        type: 'profiles',
        attributes: {
          name: PROFILE_NAME,
          profileType: 'MAC_APP_STORE'
        },
        relationships: {
          bundleId: {
            data: { type: 'bundleIds', id: bundleIdResourceId }
          },
          certificates: {
            data: [{ type: 'certificates', id: certificateId }]
          }
        }
      }
    })
  });

  if (response.status === 201) {
    return data.data;
  } else {
    console.error('❌ Failed to create profile:', JSON.stringify(data, null, 2));
    return null;
  }
}

async function downloadProfile(profile) {
  const profileContent = profile.attributes.profileContent;
  const profileBuffer = Buffer.from(profileContent, 'base64');
  const destPath = 'src-tauri/embedded.provisionprofile';
  fs.writeFileSync(destPath, profileBuffer);
  console.log(`✅ Profile saved to: ${destPath}`);
}

async function main() {
  console.log('==========================================');
  console.log('DevLoom - App Store Setup');
  console.log('==========================================');
  console.log('');

  const jwt = await getJWT();

  // Step 1: Get Bundle ID resource
  const bundleIdResourceId = await getBundleId(jwt);
  if (!bundleIdResourceId) process.exit(1);

  // Step 2: Get Certificate
  const certificateId = await getCertificateId(jwt);
  if (!certificateId) process.exit(1);

  // Step 3: Check for existing profile or create new one
  let profile = await getExistingProfile(jwt);

  if (profile) {
    console.log(`✅ Found existing profile: ${profile.attributes.name}`);
  } else {
    console.log('📝 No existing profile found, creating new one...');
    profile = await createProfile(jwt, bundleIdResourceId, certificateId);
    if (!profile) process.exit(1);
    console.log(`✅ Created profile: ${profile.attributes.name}`);
  }

  // Step 4: Download profile
  await downloadProfile(profile);

  console.log('');
  console.log('==========================================');
  console.log('✅ Setup Complete!');
  console.log('==========================================');
  console.log('');
  console.log('You can now run: npm run build:appstore');
}

main().catch(console.error);

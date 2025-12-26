# DevLoom - Mac App Store Build Process

## Prerequisites

### 1. Apple Developer Account
- Active Apple Developer Program membership
- Team ID: `LJK4SGP7TG`

### 2. Certificates (installed in Keychain)
- **3rd Party Mac Developer Application: Mohamed Ashraf (LJK4SGP7TG)** - for signing the app
- **3rd Party Mac Developer Installer: Mohamed Ashraf (LJK4SGP7TG)** - for signing the .pkg

### 3. Provisioning Profile
- File: `src-tauri/embedded.provisionprofile`
- Type: Mac App Store Distribution
- Bundle ID: `com.devloom.app`

### 4. API Key (for upload)
- Key ID: `C2W4CXZYKM`
- Issuer ID: `6bdb800d-4d77-4d92-a04c-9b8cf73280d8`
- Key File: `.keys/AuthKey_C2W4CXZYKM.p8`

---

## Build & Upload

### Quick Command
```bash
npm run build:appstore
```

This single command:
1. Builds universal binary (Intel + Apple Silicon)
2. Embeds provisioning profile
3. Signs app with App Store certificate
4. Creates signed .pkg installer
5. Uploads to App Store Connect

---

## Version Bumping

Before each upload, bump version in ALL these files:

1. `package.json`
2. `src-tauri/tauri.conf.json`
3. `src-tauri/tauri.appstore.conf.json`
4. `src-tauri/Cargo.toml`

```bash
# Example: Update from 0.3.1 to 0.3.2
sed -i '' 's/0.3.1/0.3.2/g' package.json src-tauri/tauri.conf.json src-tauri/tauri.appstore.conf.json src-tauri/Cargo.toml
```

---

## Configuration Files

### `src-tauri/tauri.appstore.conf.json`
App Store specific Tauri config:
- Minimum macOS: 12.0
- Entitlements: `Entitlements.appstore.plist`
- Signing Identity: `3rd Party Mac Developer Application: Mohamed Ashraf (LJK4SGP7TG)`

### `src-tauri/Entitlements.appstore.plist`
Required entitlements:
- App Sandbox: YES
- Network Client: YES
- User Selected Files (Read/Write): YES

### `scripts/build-appstore.sh`
The main build script that orchestrates the entire process.

---

## Post-Upload

1. Go to [App Store Connect](https://appstoreconnect.apple.com/apps/6472153898/testflight/macos)
2. Wait for build processing (~5-10 minutes)
3. Add build to TestFlight group for testing
4. Submit for App Review when ready

---

## Troubleshooting

### "Bundle version already used"
Bump version number in all 4 files listed above.

### Signing errors
Check certificates are valid:
```bash
security find-identity -v -p codesigning
```

### Profile errors
Re-download provisioning profile from Apple Developer portal:
1. https://developer.apple.com/account/resources/profiles/list
2. Download Mac App Store profile for `com.devloom.app`
3. Save as `src-tauri/embedded.provisionprofile`

---

## App Store Connect

- **App ID**: 6472153898
- **Bundle ID**: com.devloom.app
- **TestFlight URL**: https://appstoreconnect.apple.com/apps/6472153898/testflight/macos
- **App Page**: https://apps.apple.com/app/devloom-code-utilities/id6472153898

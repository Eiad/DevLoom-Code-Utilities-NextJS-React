#!/bin/bash

# DevLoom - Mac App Store Build Script
# Based on ChatFaster's build workflow

set -e

# Configuration
APP_NAME="DevLoom"
BUNDLE_ID="com.devloom.app"
TEAM_ID="LJK4SGP7TG"
APP_SIGNING_IDENTITY="3rd Party Mac Developer Application: Mohamed Ashraf (LJK4SGP7TG)"
INSTALLER_SIGNING_IDENTITY="3rd Party Mac Developer Installer: Mohamed Ashraf (LJK4SGP7TG)"
ENTITLEMENTS="src-tauri/Entitlements.appstore.plist"
PROVISIONING_PROFILE="src-tauri/embedded.provisionprofile"

# Apple API credentials for upload
API_KEY="C2W4CXZYKM"
API_ISSUER="6bdb800d-4d77-4d92-a04c-9b8cf73280d8"
API_KEY_PATH=".keys/AuthKey_${API_KEY}.p8"

# Paths
TAURI_CONFIG="src-tauri/tauri.appstore.conf.json"
BUILD_DIR="src-tauri/target/universal-apple-darwin/release/bundle/macos"
APP_BUNDLE="$BUILD_DIR/$APP_NAME.app"
PKG_OUTPUT="$BUILD_DIR/$APP_NAME.pkg"

echo "=========================================="
echo "DevLoom - Mac App Store Build"
echo "=========================================="

# Step 0: Setup - Get provisioning profile via API if not exists
if [ ! -f "$PROVISIONING_PROFILE" ]; then
    echo ""
    echo "📋 Step 0: Fetching provisioning profile via API..."
    npm run setup:appstore
fi

# Verify provisioning profile exists now
if [ ! -f "$PROVISIONING_PROFILE" ]; then
    echo "❌ Error: Provisioning profile not found at $PROVISIONING_PROFILE"
    exit 1
fi

# Step 1: Add Rust targets for universal binary
echo ""
echo "📦 Step 1: Adding Rust targets..."
rustup target add x86_64-apple-darwin
rustup target add aarch64-apple-darwin

# Step 2: Build universal binary
echo ""
echo "🔨 Step 2: Building universal binary..."
npx tauri build --config "$TAURI_CONFIG" --target universal-apple-darwin

# Step 3: Embed provisioning profile
echo ""
echo "📋 Step 3: Embedding provisioning profile..."
cp "$PROVISIONING_PROFILE" "$APP_BUNDLE/Contents/embedded.provisionprofile"

# Step 4: Update Info.plist
echo ""
echo "📝 Step 4: Updating Info.plist..."
/usr/libexec/PlistBuddy -c "Add :ITSAppUsesNonExemptEncryption bool false" "$APP_BUNDLE/Contents/Info.plist" 2>/dev/null || \
/usr/libexec/PlistBuddy -c "Set :ITSAppUsesNonExemptEncryption false" "$APP_BUNDLE/Contents/Info.plist"

# Step 5: Sign the app bundle
echo ""
echo "🔐 Step 5: Signing app bundle..."

# Sign frameworks and libraries first
find "$APP_BUNDLE/Contents/Frameworks" -type f \( -name "*.dylib" -o -name "*.framework" \) 2>/dev/null | while read -r file; do
    echo "  Signing: $file"
    codesign --force --options runtime --sign "$APP_SIGNING_IDENTITY" --entitlements "$ENTITLEMENTS" "$file"
done

# Sign the main executable
echo "  Signing main executable..."
codesign --force --options runtime --sign "$APP_SIGNING_IDENTITY" --entitlements "$ENTITLEMENTS" "$APP_BUNDLE/Contents/MacOS/$APP_NAME"

# Sign the entire app bundle
echo "  Signing app bundle..."
codesign --force --options runtime --sign "$APP_SIGNING_IDENTITY" --entitlements "$ENTITLEMENTS" "$APP_BUNDLE"

# Step 6: Verify app signature
echo ""
echo "✅ Step 6: Verifying app signature..."
codesign --verify --deep --strict --verbose=2 "$APP_BUNDLE"

# Step 7: Create installer package
echo ""
echo "📦 Step 7: Creating installer package..."
xcrun productbuild --component "$APP_BUNDLE" /Applications --sign "$INSTALLER_SIGNING_IDENTITY" "$PKG_OUTPUT"

# Step 8: Verify package signature
echo ""
echo "✅ Step 8: Verifying package signature..."
pkgutil --check-signature "$PKG_OUTPUT"

echo ""
echo "=========================================="
echo "✅ Build Complete!"
echo "=========================================="
echo ""
echo "Package location: $PKG_OUTPUT"

# Step 9: Upload to App Store Connect
echo ""
echo "🚀 Step 9: Uploading to App Store Connect..."
xcrun altool --upload-app --type macos --file "$PKG_OUTPUT" \
    --apiKey "$API_KEY" --apiIssuer "$API_ISSUER"

echo ""
echo "=========================================="
echo "✅ Upload Complete!"
echo "=========================================="
echo ""
echo "Check App Store Connect for your build:"
echo "https://appstoreconnect.apple.com/apps/6472153898/testflight/macos"
echo ""

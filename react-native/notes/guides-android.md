# Guide Android
## Generating Signed APK
Android requires that all apps be digitally signed with a certificate before they can be installed

### Generating a signing key
You can generate a private signing key using `keytool`. On Windows keytool must be run from `C:\Program Files\Java\jdkx.x.x_x\bin`

```
$ keytool -genkey -v -keystore my-release-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000
```

It wil generate the keystore as a file called `my-release-key.keystore`, valid for 10000 days

Remember to keep your keystore file private and never commit it to version control

### Setting up gradle variables
1. Place the `my-release-key.keystore` file under the `android/app` directory in your project folder
2. Edit the file `~/.gradle/gradle.properties` and add the following (replace `*****` with the correct keystore password, alias and key password)
```
MYAPP_RELEASE_STORE_FILE=my-release-key.keystore
MYAPP_RELEASE_KEY_ALIAS=my-key-alias
MYAPP_RELEASE_STORE_PASSWORD=*****
MYAPP_RELEASE_KEY_PASSWORD=*****
```

### Adding signing config to your app's gradle config
Edit the file `android/app/build.gradle` to add the signing config to this file

### Generating the release APK
Via command:
```
$ cd android && ./gradlew assembleRelease
```

The generated APK can be found under `android/app/build/outputs/apk/app-release.apk`, and is ready to be distributed.

## Building React Native from source
### Requirements:
#### Prerequisites
  - Install Android SDK version 23
  - SDK build tools version 23.0.1
  - Android Support Repository >= 17 
  - Android NDK

#### Building the source
  1. Clone source code
  2. Adding gradle dependencies: Add gradle-download-task as dependency in `android/build.gradle`
  3. Adding the `:ReactAndroid`
    - Adding the `:ReactAndroid` project in `android/settings.gradle`
    - Modify your `android/app/build.gradle` to use the `:ReactAndroid` project instead of the pre-compiled library
  4. Making 3rd-party modules use your fork: If you use 3rd-party React Native modules, you need to override their dependencies so that they don't bundle the pre-compiled library

#### Building from Android Studio
#### Building for Maven/Nexus deployment

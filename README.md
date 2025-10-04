# SpendManagement

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```
## Builder l'APK (Android)

Prérequis
- Node.js (utiliser la version projet recommandée via nvm, ex. 20).
- npm/yarn.
- Java JDK (17 ou 21) et JAVA_HOME configuré.
- Android SDK (platform-tools, platforms;android-XX, build-tools).
- Capacitor installé dans le projet (si vous utilisez Capacitor).
- (Optionnel) ImageMagick pour générer des icônes PWA.

Configuration d'environnement (exemples)
```sh
# Utiliser la bonne version de node (si vous avez nvm)
nvm use 20

# Java : installer et pointer JAVA_HOME (exemple pour OpenJDK 21)
export JAVA_HOME=/usr/lib/jvm/java-21-openjdk-amd64
export PATH=$JAVA_HOME/bin:$PATH

# Android cmdline-tools + SDK (exemples)
mkdir -p ~/Android/cmdline-tools
cd ~/Android/cmdline-tools
# télécharger la version adéquate depuis Google, dézipper dans latest/
# puis :
export ANDROID_HOME=$HOME/Android/Sdk
export PATH=$ANDROID_HOME/emulator:$ANDROID_HOME/platform-tools:$HOME/Android/cmdline-tools/latest/bin:$PATH

# installer plateforms/build-tools via sdkmanager
sdkmanager --sdk_root=$ANDROID_HOME "platform-tools" "platforms;android-34" "build-tools;34.0.0"
```

Flux de build rapide (Capacitor + Gradle)
1. Nettoyer / préparer le projet Android
```sh
# supprimer si vous voulez recréer le dossier android
rm -rf android/
```
2. Ajouter la plateforme Android (Capacitor)
```sh
npx cap add android
# ou si déjà présent, synchroniser
npx cap sync
```
3. Compiler l'app web (Vite)
```sh
npm run build
```
4. Ouvrir et construire avec Gradle
```sh
cd android
./gradlew clean assembleDebug --no-daemon
# ou pour une release (nécessite signature config)
./gradlew clean assembleRelease --no-daemon
```

Dépannage rapide
- Si Gradle échoue à cause de Java : vérifiez `java -version`, `javac --version` et que JAVA_HOME pointe sur le JDK.
- Si Android SDK manquant : utiliser `sdkmanager` pour installer platform-tools/platforms/build-tools.
- Si erreurs avec Capacitor : exécuter `npx cap sync` après `npm run build`.

Génération d'icônes PWA (optionnel) avec ImageMagick 
```sh
# exemple avec ImageMagick
convert epoketra.png -resize 192x192 pwa-192x192.png
convert epoketra.png -resize 512x512 pwa-512x512.png
```

Exemple de script récapitulatif
```sh
nvm use 20
export JAVA_HOME=/usr/lib/jvm/java-21-openjdk-amd64
export PATH=$JAVA_HOME/bin:$PATH
export ANDROID_HOME=$HOME/Android/Sdk
export PATH=$ANDROID_HOME/emulator:$ANDROID_HOME/platform-tools:$HOME/Android/cmdline-tools/latest/bin:$PATH

# build
rm -rf android/
npx cap add android
npm run build
npx cap sync
cd android
./gradlew clean assembleDebug --no-daemon
```

Notes
- Remplacer les versions Android/Java par celles compatibles avec votre projet.
- Pour produire un APK distribuable, configurez la signature et utilisez assembleRelease.
- Garder les commandes `sdkmanager`/cmdline-tools pour l'installation initiale de l'environnement Android.
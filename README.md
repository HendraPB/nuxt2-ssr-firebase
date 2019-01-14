# nuxt2-ssr-firebase
Use Firebase function as server to render Nuxt project SSR mode with various features in it. I took the Nuxt Firebase SSR template from https://github.com/atoka-tech/nuxt-firebase-ssr and Nuxt project from https://github.com/muhibbudins/nuxt-project as proof if the template doesn't only work on projects that are used but also on projects that use the nuxt feature is quite complete. In this project I will also integrates HTTP request using Express as in the official tutorial and try the template using Latest Nuxt version ie 2.3.4. Thanks to https://github.com/webcore-it/nuxt2-ssr-on-firebase I got a reference to overcoming the error in Express use in Firebase functions from here.

## Installation
``` bash
#clone repo
git clone https://github.com/HendraPB/nuxt2-ssr-firebase.git

# change your directory to project directory
cd nuxt2-ssr-firebase

# install Firebase cli(skip this step if you already installed it)
npm install -g firebase-tools

# Connects your local machine to Firebase(skip this step if your local machine already connects)
firebase login

# Setting up Firebase services needed(hosting and functions) and your project directory(choose your project) and make sure you choose other options by default
firebase init

# configure firebase.json
cp firebase.json.example firebase.json

# install project dependencies
npm install

# install Firebase function dependencies(skip this step if you already installed it on firebase init)
cd functions && npm install && cd ..

# build nuxt project
npm run build

# run it locally using Firebase on localhost:5000
npm run serve

# or deploy it on Firebase to run it online
npm run deploy
```

## Demo
https://playground-ssr.firebaseapp.com/

## How to use this repo to run other nuxt projects using firebase
Copy all folders inside your nuxt project(assets,components and etc.) except .nuxt and node-modules to src folder.
Add your dependencies to package.json and functions/package.json.
Change nuxt.config.js if needed but don't forget to add ```srcDir: 'src'``` in module.exports.
You can try to run it in development mode to test your project on Localhost:3000.
``` bash
npm run dev
```

## Credit
https://github.com/atoka-tech/nuxt-firebase-ssr
https://github.com/webcore-it/nuxt2-ssr-on-firebase
https://github.com/muhibbudins/nuxt-project
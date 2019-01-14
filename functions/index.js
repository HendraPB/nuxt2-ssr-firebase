const functions = require('firebase-functions');
const express = require('express');
const { Nuxt } = require('nuxt');

const app = express();

const config = {
	buildDir: 'ssr',
	dev: false,
	build: {
    	extractCSS: true
    }
}

const nuxt = new Nuxt(config);

function handleRequest(req, res) {
  	res.set('Cache-Control', 'public, max-age=1, s-maxage=1');
  	return new Promise((resolve, reject) => {
    	nuxt.render(req, res, (promise) => {
      		promise.then(resolve).catch(reject);
    	});
  	});
}

app.get('*', handleRequest);

app.use(handleRequest);
exports.ssr = functions.https.onRequest(app);
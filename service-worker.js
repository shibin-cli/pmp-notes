/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "1.html",
    "revision": "bd7213daadc3984b4e5299d872332c94"
  },
  {
    "url": "404.html",
    "revision": "590fc34054c01b8aa6e6751062214ff5"
  },
  {
    "url": "assets/css/0.styles.69de72f0.css",
    "revision": "c48beb867c49f1218d81b7f5577c3d2c"
  },
  {
    "url": "assets/img/1.5d2094df.jpg",
    "revision": "5d2094dfd17cc8e5306a2df4fa81e26f"
  },
  {
    "url": "assets/img/2.40dbd87a.png",
    "revision": "40dbd87a68d33df3e4ad716d42e2b85e"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.1982ae30.js",
    "revision": "60ce98470aa056b1c0b912ebfb8cd1cd"
  },
  {
    "url": "assets/js/2.c332e3ab.js",
    "revision": "4eea57f7bbcb6a6cac3c4b2e0b5f57da"
  },
  {
    "url": "assets/js/3.05041302.js",
    "revision": "96c1bb8b8c4de4e3324f0869f7526da4"
  },
  {
    "url": "assets/js/4.b4ac9dd5.js",
    "revision": "394b82ca983fbe96f4be9854adbdc17a"
  },
  {
    "url": "assets/js/5.08eed9c2.js",
    "revision": "cb641009371ccf040be5f98095a38bcb"
  },
  {
    "url": "assets/js/6.5ab47c14.js",
    "revision": "0f316908683460bd99c15bb80b606707"
  },
  {
    "url": "assets/js/7.4633576d.js",
    "revision": "d31c97b59d5ec9f08cc6830e2e318a1e"
  },
  {
    "url": "assets/js/8.4933f206.js",
    "revision": "32ed69b3886170882a1898a01f08055e"
  },
  {
    "url": "assets/js/9.ad0b99b2.js",
    "revision": "342a8d30cda21c4ca4ea78dfd001ed59"
  },
  {
    "url": "assets/js/app.cd183a9b.js",
    "revision": "44c903a65ab15907fc284d5c92546103"
  },
  {
    "url": "config.html",
    "revision": "62ead82a33b7f6cee8cb0f7270859a69"
  },
  {
    "url": "index.html",
    "revision": "1d2c83f63f543aa3fb6887b79dd3232c"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})

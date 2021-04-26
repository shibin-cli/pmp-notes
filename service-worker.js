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
    "revision": "066c631909a1fc16f0092ee67c8817b6"
  },
  {
    "url": "2.html",
    "revision": "398cc366c75dafda7e370e036cfa3bfa"
  },
  {
    "url": "3.html",
    "revision": "cbfce8492d47f5288f55d46bc6271425"
  },
  {
    "url": "4.html",
    "revision": "b3a829e68b7b7542db764fad51ded4de"
  },
  {
    "url": "404.html",
    "revision": "1534851982614d4471241c4e560e8ad4"
  },
  {
    "url": "5.html",
    "revision": "8d5aa13a05be7c4f48b5705e09630a4e"
  },
  {
    "url": "6.html",
    "revision": "b63869d5b0b5c9f0831bd761c339d3af"
  },
  {
    "url": "assets/css/0.styles.80888187.css",
    "revision": "c7a71d68f9d360b097c5143089866857"
  },
  {
    "url": "assets/img/1.5d2094df.jpg",
    "revision": "5d2094dfd17cc8e5306a2df4fa81e26f"
  },
  {
    "url": "assets/img/10.8222a15c.jpg",
    "revision": "8222a15cba712176ee2077b32f13f8c2"
  },
  {
    "url": "assets/img/11.1641f5c7.jpg",
    "revision": "1641f5c782e6a8f6f7dd3fd4df44ec2d"
  },
  {
    "url": "assets/img/12.bd5c5bab.jpg",
    "revision": "bd5c5babea2a8fbc33da0fc037a589e1"
  },
  {
    "url": "assets/img/13.2b29725f.jpg",
    "revision": "2b29725f7a60f08987bdc9c2531c97af"
  },
  {
    "url": "assets/img/2.40dbd87a.png",
    "revision": "40dbd87a68d33df3e4ad716d42e2b85e"
  },
  {
    "url": "assets/img/3.67864a62.jpg",
    "revision": "67864a627a50f56fc692f1f55f4bbf94"
  },
  {
    "url": "assets/img/4.07c7f0c7.jpg",
    "revision": "07c7f0c7bafd7508196a99235cc3013a"
  },
  {
    "url": "assets/img/5.4edd7f63.jpg",
    "revision": "4edd7f631765b606becc067882270654"
  },
  {
    "url": "assets/img/6.5eaea883.jpg",
    "revision": "5eaea88323b56fed4c39e2c76996fbdb"
  },
  {
    "url": "assets/img/7.b1e3fc5c.jpg",
    "revision": "b1e3fc5cd923183f0f78a156e1e2446d"
  },
  {
    "url": "assets/img/8.870db7e9.jpg",
    "revision": "870db7e9e9033bbfebd11312c966a050"
  },
  {
    "url": "assets/img/9.1bff1eb4.jpg",
    "revision": "1bff1eb4423e1a5c23599670a2fcf20e"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.5281c355.js",
    "revision": "b4996b0ecc79799b4ec018c7d035a186"
  },
  {
    "url": "assets/js/11.38fa8c6b.js",
    "revision": "500c5f275612f2eca1a0a499d7527b5f"
  },
  {
    "url": "assets/js/12.02e55387.js",
    "revision": "0e67c2156310d1e13fc1605f90f4cb07"
  },
  {
    "url": "assets/js/13.13d19171.js",
    "revision": "74dc5e08a88dcd55da3326dd03dbdd05"
  },
  {
    "url": "assets/js/14.501a4561.js",
    "revision": "5c775e6223465decaeee09809e9bd997"
  },
  {
    "url": "assets/js/15.1a582314.js",
    "revision": "0636ae8c8196d9564501df3e8275a1de"
  },
  {
    "url": "assets/js/2.fd545670.js",
    "revision": "175e3a316d8298998c7456c2eab4da17"
  },
  {
    "url": "assets/js/3.54f7df92.js",
    "revision": "dbf3f6de72a3b221bfacd302674bb819"
  },
  {
    "url": "assets/js/4.b089cf88.js",
    "revision": "ad300e01264202ebb0a9e74a306226a3"
  },
  {
    "url": "assets/js/5.7d7b3356.js",
    "revision": "eaa7f6d72a04ede0cab7fd5c6fb50cd8"
  },
  {
    "url": "assets/js/6.4ad5bd63.js",
    "revision": "1d3cbf3b70799123f1775f5bfe64ec4a"
  },
  {
    "url": "assets/js/7.ffc0d3b0.js",
    "revision": "9a8b2de23ba21e64c4303e422dd5fa4d"
  },
  {
    "url": "assets/js/8.63e36a7b.js",
    "revision": "5938abad1940de9809d17bc5db347001"
  },
  {
    "url": "assets/js/9.1e406ccb.js",
    "revision": "be5a6e6fa5b19da9a8a3f2547fe23cd0"
  },
  {
    "url": "assets/js/app.f2d9f80b.js",
    "revision": "0d48b1d6c9ddcde16f5b9456f5cd5120"
  },
  {
    "url": "config.html",
    "revision": "6a2efecffae0245db2c55fa288342bbe"
  },
  {
    "url": "index.html",
    "revision": "88d30414dacf921ebbee4faf251edfa4"
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

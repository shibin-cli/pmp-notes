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
    "revision": "9993cd269c17955a7ea51bfcaf96ab15"
  },
  {
    "url": "2.html",
    "revision": "1da0482c229f730567d373fca5124b08"
  },
  {
    "url": "3.html",
    "revision": "6bce7251c06bfad9b4df4e4e740c4778"
  },
  {
    "url": "4.html",
    "revision": "e53f2d83808e4c227cb9f83f3360b4eb"
  },
  {
    "url": "404.html",
    "revision": "f1b81fe101e89baf841cd35530189a20"
  },
  {
    "url": "5.html",
    "revision": "e27bd9770a26ede8bd2f97c3b02fe780"
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
    "url": "assets/js/10.9fd57682.js",
    "revision": "ae8f956973b0f6ca5ee7691156087842"
  },
  {
    "url": "assets/js/11.45522c96.js",
    "revision": "c923976b6bb43a7a03bdb3ef23f6c696"
  },
  {
    "url": "assets/js/12.4da76c55.js",
    "revision": "708b72b6fc4bc0481bee2803f03e9899"
  },
  {
    "url": "assets/js/13.5d80adea.js",
    "revision": "ce0656629cff8604a12403bda3c4074b"
  },
  {
    "url": "assets/js/14.b91be985.js",
    "revision": "f4fe40eee251cd76812cf9769b67cbe6"
  },
  {
    "url": "assets/js/2.fd545670.js",
    "revision": "175e3a316d8298998c7456c2eab4da17"
  },
  {
    "url": "assets/js/3.53adc834.js",
    "revision": "0457a9a8858be1c77f5d9b573132f714"
  },
  {
    "url": "assets/js/4.b089cf88.js",
    "revision": "ad300e01264202ebb0a9e74a306226a3"
  },
  {
    "url": "assets/js/5.ffa0489e.js",
    "revision": "b2ce2208fd78ff4b14a09bbdf2734d15"
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
    "url": "assets/js/9.b2a900d4.js",
    "revision": "d6132ed37069c25f0300a3cc4e75327c"
  },
  {
    "url": "assets/js/app.f2de6621.js",
    "revision": "cb87640e4650df47a16e74edb9b56922"
  },
  {
    "url": "config.html",
    "revision": "64aab5457e612a4fd55a639e55a3c569"
  },
  {
    "url": "index.html",
    "revision": "9e901106884bbcfa06f1ab6b9a68064b"
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

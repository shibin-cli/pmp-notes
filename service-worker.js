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
    "revision": "30cc00ec0317624b19659608b40a6e27"
  },
  {
    "url": "2.html",
    "revision": "a9d4df5933e8d6da1f39806eb21b3ae2"
  },
  {
    "url": "3.html",
    "revision": "1f664a2bd3bd7cf1c1b786185b68b11b"
  },
  {
    "url": "4.html",
    "revision": "febf27c6d3706a1bc42e8d0914873b36"
  },
  {
    "url": "404.html",
    "revision": "f2db763879e7077f2fb49001a24b8723"
  },
  {
    "url": "5.html",
    "revision": "b032c9eb33ecefcafda24469479a6587"
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
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.01247f00.js",
    "revision": "e56506106cd5102dd2572084f8f4abc6"
  },
  {
    "url": "assets/js/11.cc99ce7c.js",
    "revision": "3497536bab2c14fb060a0f407192fef6"
  },
  {
    "url": "assets/js/12.7f143d02.js",
    "revision": "aa139cc8f759b3ddcbf0bd4745ec7609"
  },
  {
    "url": "assets/js/13.7f772aec.js",
    "revision": "b20ea3065e71db189e360b036eb5898b"
  },
  {
    "url": "assets/js/14.98a60aac.js",
    "revision": "b335ee7dab090ec4719ec30248cbe131"
  },
  {
    "url": "assets/js/2.5a10160f.js",
    "revision": "06bc67f438c95697d2f445401d5c164c"
  },
  {
    "url": "assets/js/3.1c2e6ab4.js",
    "revision": "09fc2cc0e79dbf286f55ee1aca7251fe"
  },
  {
    "url": "assets/js/4.c0e0c75c.js",
    "revision": "be9a272bacbe7e27c10a38adc7f6d60f"
  },
  {
    "url": "assets/js/5.0966478b.js",
    "revision": "649c6322cfed157237885f75c3a68b0e"
  },
  {
    "url": "assets/js/6.f588f481.js",
    "revision": "f2f4df3dd61730c80c240a62076cccc4"
  },
  {
    "url": "assets/js/7.752b2360.js",
    "revision": "b9f704609e082642b4f40d037bf96f4c"
  },
  {
    "url": "assets/js/8.b76f7038.js",
    "revision": "a44c1207a9538ffc263159560ae1e82a"
  },
  {
    "url": "assets/js/9.c92b1c5d.js",
    "revision": "705d419b4cb88ac1ac678686d3c3ae90"
  },
  {
    "url": "assets/js/app.8ea9e5f9.js",
    "revision": "2167c0207cecb6153220c0cd3261d172"
  },
  {
    "url": "config.html",
    "revision": "b7153b0bbc41d69696687cb8e2e43e65"
  },
  {
    "url": "index.html",
    "revision": "fe9de4e73d6ed8eb375f74649fc097e1"
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

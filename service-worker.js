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
    "revision": "e69de22f5a2f6c04842e3d97b1784b24"
  },
  {
    "url": "2.html",
    "revision": "9a525d7a445152c867df58af2b55e6fb"
  },
  {
    "url": "3.html",
    "revision": "b82fa234a6ae7909cd75211a5514086e"
  },
  {
    "url": "4.html",
    "revision": "1da3849ee4a94db7006c353cd7d88b87"
  },
  {
    "url": "404.html",
    "revision": "35c5e3244bcbcbbe49000034a895c430"
  },
  {
    "url": "5.html",
    "revision": "876519f1349d737f8afbca8f57e2b69f"
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
    "url": "assets/img/6.5eaea883.jpg",
    "revision": "5eaea88323b56fed4c39e2c76996fbdb"
  },
  {
    "url": "assets/img/7.b1e3fc5c.jpg",
    "revision": "b1e3fc5cd923183f0f78a156e1e2446d"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.91fa73b7.js",
    "revision": "2040539409cb4405d3803695c42a6a63"
  },
  {
    "url": "assets/js/11.d1c39924.js",
    "revision": "2dc4805cc974a2ba8256780c68ba773c"
  },
  {
    "url": "assets/js/12.af13ea65.js",
    "revision": "4a9ba156c47bd25732baabe700891a9c"
  },
  {
    "url": "assets/js/13.74b06c85.js",
    "revision": "d06493d2fe84ee3116193921df8ce67f"
  },
  {
    "url": "assets/js/14.8468b493.js",
    "revision": "052dad7e0d28e452ef0634a14cf254af"
  },
  {
    "url": "assets/js/2.b78e43e4.js",
    "revision": "798cc1156ec36850c69fe1c14744ba33"
  },
  {
    "url": "assets/js/3.80d6c15f.js",
    "revision": "04ad70be530a3f8862b597e25c7a6891"
  },
  {
    "url": "assets/js/4.50733a0f.js",
    "revision": "712e92fec8408955025154fc050983e2"
  },
  {
    "url": "assets/js/5.beeb67b4.js",
    "revision": "8b190f0d576f80ab613a77539380f1a6"
  },
  {
    "url": "assets/js/6.42e3f3fc.js",
    "revision": "fce36c730d78a9edafe93e949fca3206"
  },
  {
    "url": "assets/js/7.77a3ad6f.js",
    "revision": "c91546ecaf3968e27b96c17c2c24632b"
  },
  {
    "url": "assets/js/8.1c9bf8a5.js",
    "revision": "b6a8aeb745e989853bb82bb0e69992b0"
  },
  {
    "url": "assets/js/9.d06b4478.js",
    "revision": "b4f47974b2b637dbaea4b08f55695fef"
  },
  {
    "url": "assets/js/app.6b6e674e.js",
    "revision": "dd0602ae70ffba28d2cbd52102093db3"
  },
  {
    "url": "config.html",
    "revision": "266e04e7989201d8ccca28c2dd68c53e"
  },
  {
    "url": "index.html",
    "revision": "4fef9ca451d5352facfa265fc0b50eb8"
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

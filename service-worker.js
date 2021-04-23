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
    "revision": "9789063510fb51e95dbf698ef711fc08"
  },
  {
    "url": "2.html",
    "revision": "480cb6dcf2e6c2d7440d01d6fbe21de0"
  },
  {
    "url": "3.html",
    "revision": "19c17754c35d37b36a34153c0eb82d1e"
  },
  {
    "url": "4.html",
    "revision": "eaeb6e92acaef7687dd347a0f7b641ed"
  },
  {
    "url": "404.html",
    "revision": "84b00f614fac13e369a10e03c2d0c050"
  },
  {
    "url": "5.html",
    "revision": "253b6496e789b02a97b3d94b49961062"
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
    "url": "assets/img/8.870db7e9.jpg",
    "revision": "870db7e9e9033bbfebd11312c966a050"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.b17561a0.js",
    "revision": "7b386526246643feed2a0647bd7643ec"
  },
  {
    "url": "assets/js/11.bc7d93bf.js",
    "revision": "b716e57b81135053d6a5b105b5b443c3"
  },
  {
    "url": "assets/js/12.919fde54.js",
    "revision": "13ad08b20787d1a16af4283408524f86"
  },
  {
    "url": "assets/js/13.b1d7b3f2.js",
    "revision": "7d0a0451edd53cc91d82a14a8cbe4d80"
  },
  {
    "url": "assets/js/14.e8c76713.js",
    "revision": "81d5fd5447e8ff8be37a4336c75a0d54"
  },
  {
    "url": "assets/js/2.e5767f68.js",
    "revision": "568488d134896d7b622e0e3087a5b88c"
  },
  {
    "url": "assets/js/3.5fd9b746.js",
    "revision": "5535b3d80b7076d483bcfb8abe913d85"
  },
  {
    "url": "assets/js/4.5439aafa.js",
    "revision": "ef1cc5bc0211f61f5aca53b2c684d164"
  },
  {
    "url": "assets/js/5.e478f066.js",
    "revision": "a48eb15bdcf7d3152d7f3712b7c0b390"
  },
  {
    "url": "assets/js/6.8856730b.js",
    "revision": "7b984ff51aa3d345b7ba4e3b02f7eda6"
  },
  {
    "url": "assets/js/7.c4ccabdc.js",
    "revision": "38655aa09f9b0565b0f6648fcabfd782"
  },
  {
    "url": "assets/js/8.2495ff4b.js",
    "revision": "2e312caf9018809c4c451364c4373af8"
  },
  {
    "url": "assets/js/9.410eb34a.js",
    "revision": "94c5d2f522006811539354bc8f80f9cf"
  },
  {
    "url": "assets/js/app.e8848a86.js",
    "revision": "802dddf7d755b02e29c4fe9c4158ae53"
  },
  {
    "url": "config.html",
    "revision": "41e1f3961f5f2bb62cf7e6805aa9bc99"
  },
  {
    "url": "index.html",
    "revision": "9803f403f631bc54092471b31a3202b1"
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

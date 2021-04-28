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
    "url": "404.html",
    "revision": "6ee1ff5a3bb47e0934870c84ab4f9e9c"
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
    "url": "assets/img/4-1_.6aaa7b3a.png",
    "revision": "6aaa7b3ad35c4f60f43802cb625eea79"
  },
  {
    "url": "assets/img/4-1.dab4487e.png",
    "revision": "dab4487eebd2e231d3501d6621176779"
  },
  {
    "url": "assets/img/4-2_.126f3457.png",
    "revision": "126f3457bab0e3ed838117687405e116"
  },
  {
    "url": "assets/img/4-2.3fcb9122.png",
    "revision": "3fcb9122352b1f21f7076219b3067943"
  },
  {
    "url": "assets/img/4.07c7f0c7.jpg",
    "revision": "07c7f0c7bafd7508196a99235cc3013a"
  },
  {
    "url": "assets/img/5-1.a75e3464.png",
    "revision": "a75e3464a69f39fdf33aca017f1626bc"
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
    "url": "assets/js/10.b26c98c7.js",
    "revision": "8aee9993742a575e0f72bf7fae0eb157"
  },
  {
    "url": "assets/js/11.3eb16996.js",
    "revision": "814a4edc626bcfa2a33078b288994ee9"
  },
  {
    "url": "assets/js/12.df717f83.js",
    "revision": "ced47db89c7552b69ea2d1a9c0cd3e28"
  },
  {
    "url": "assets/js/13.ccfd0b32.js",
    "revision": "7e2b0a9afbd41bce5ef0b9ad735e836c"
  },
  {
    "url": "assets/js/14.8e69ebfb.js",
    "revision": "8222c6e04e0b900e812a3d29e6a9bed2"
  },
  {
    "url": "assets/js/15.727e1ebf.js",
    "revision": "90da68157a7ba1ba25a0b6b09e9a8c59"
  },
  {
    "url": "assets/js/16.58f35aef.js",
    "revision": "62f9eccb0638a50a0cfed19eccb4b3dd"
  },
  {
    "url": "assets/js/17.556fe1d2.js",
    "revision": "e845a252664471162a9aace71da9a157"
  },
  {
    "url": "assets/js/18.ca9cd934.js",
    "revision": "19df47bb6bef7c15768490e4ab46153e"
  },
  {
    "url": "assets/js/19.7a380e4a.js",
    "revision": "d34fe33132b2bd150541587f2d975dd4"
  },
  {
    "url": "assets/js/2.7d8043ce.js",
    "revision": "5d2c0cf1709ed4aad1012831ceb19758"
  },
  {
    "url": "assets/js/3.6d51437c.js",
    "revision": "a7cb0f0d33be2ffca5b857f5fc52bd04"
  },
  {
    "url": "assets/js/4.749124b9.js",
    "revision": "99f37cae33751777dabee3bf4480155c"
  },
  {
    "url": "assets/js/5.9fba50cc.js",
    "revision": "a54ff5bc02daf47a59e64579defe69f9"
  },
  {
    "url": "assets/js/6.c16f192a.js",
    "revision": "17f0af1b8d22a685b51c6a0151acc10d"
  },
  {
    "url": "assets/js/7.7cff8c5e.js",
    "revision": "a0ad746d98a4a824e6e8f1b9c2f06bed"
  },
  {
    "url": "assets/js/8.152d3660.js",
    "revision": "3a1cc742776158d0d34ccf5d7900f3af"
  },
  {
    "url": "assets/js/9.ecbb8c01.js",
    "revision": "742a8885b85e82ebb2ee723ec472971b"
  },
  {
    "url": "assets/js/app.e5a093a5.js",
    "revision": "6a3b3b5f3a8f38090bae96978860bf65"
  },
  {
    "url": "config.html",
    "revision": "b2eb2aa5eea7d04581134567ff7ac3df"
  },
  {
    "url": "exercises/1.html",
    "revision": "73fe3d714d8ee45b831de38879afc57c"
  },
  {
    "url": "exercises/4.html",
    "revision": "f9382409d550761814097914ab2e9e77"
  },
  {
    "url": "exercises/5.html",
    "revision": "85a4ef83fb5087e2ca908e2809328bf2"
  },
  {
    "url": "guide/1.html",
    "revision": "1521200350dd55f5d5b7cc9f718d4c0f"
  },
  {
    "url": "guide/2.html",
    "revision": "04f82efd65869f69a75eb0cd4bee79a9"
  },
  {
    "url": "guide/3.html",
    "revision": "2a5262921a88f9ff7b5d496d037f4ba8"
  },
  {
    "url": "guide/4.html",
    "revision": "6b27bf614ad8c00d5765874c2d69bd37"
  },
  {
    "url": "guide/5.html",
    "revision": "48c2ff43d90ad36f06ba19379bce0140"
  },
  {
    "url": "guide/6.html",
    "revision": "4b9adfa54e8060ac07630911def9e3ac"
  },
  {
    "url": "guide/index.html",
    "revision": "765f27ed7f085d6bfab98a6a983c4032"
  },
  {
    "url": "icon.png",
    "revision": "2d919c57a08edbbfdb80c55a01fb8f5a"
  },
  {
    "url": "index.html",
    "revision": "bea465acdde53e471ced33da306c48b1"
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

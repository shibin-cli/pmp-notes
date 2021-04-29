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
    "revision": "11c7038d4f68533a89fd3ec2016c476b"
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
    "url": "assets/img/15.c7322006.jpg",
    "revision": "c732200638eb147a381a359d8be28985"
  },
  {
    "url": "assets/img/16.b8ccf3fc.jpg",
    "revision": "b8ccf3fc4c168cf3f362fb4001917a33"
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
    "url": "assets/img/5-1_.86e0c805.png",
    "revision": "86e0c8053928c0f7c0ba9ef02464cf08"
  },
  {
    "url": "assets/img/5-1.a75e3464.png",
    "revision": "a75e3464a69f39fdf33aca017f1626bc"
  },
  {
    "url": "assets/img/5-2_.cff427ed.png",
    "revision": "cff427ed3b7c49982438025153db2f73"
  },
  {
    "url": "assets/img/5-2.8e291070.png",
    "revision": "8e2910706f8cdbd7a2ee9ba374318850"
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
    "url": "assets/js/10.f951c6bf.js",
    "revision": "05d9de5fc847fa87c35e491f3a29dd2b"
  },
  {
    "url": "assets/js/11.aa79ee69.js",
    "revision": "3270a745706bfcb1e8a60e5d2e71adc8"
  },
  {
    "url": "assets/js/12.37d3f9ce.js",
    "revision": "15369d31c59177ba6f51f179023685f5"
  },
  {
    "url": "assets/js/13.7a9ad785.js",
    "revision": "2a85f55630194e5419eed22d4f793a28"
  },
  {
    "url": "assets/js/14.c0c4edf2.js",
    "revision": "e2ad8f0c58c5ecd86cf3cbc7c586dbc6"
  },
  {
    "url": "assets/js/15.1e650ae2.js",
    "revision": "2fcd0163a56e2ec638493de9e637c512"
  },
  {
    "url": "assets/js/16.33573466.js",
    "revision": "aa0687b96c688125487078e0d9b466aa"
  },
  {
    "url": "assets/js/17.1bcde246.js",
    "revision": "73a58f9b4688fdabdae59c37c9f9952c"
  },
  {
    "url": "assets/js/18.08c7f4cd.js",
    "revision": "8cd9bcc69da0b49d5ffc60bd6003fcac"
  },
  {
    "url": "assets/js/19.facd4808.js",
    "revision": "077fd4b11e7450f12e720c3d4dcab44a"
  },
  {
    "url": "assets/js/2.63b892d8.js",
    "revision": "c3ddd5d3a3f8b286a3f54c85883b9805"
  },
  {
    "url": "assets/js/3.9b39b9e2.js",
    "revision": "8454827cd56c6ef095c04baabc27087c"
  },
  {
    "url": "assets/js/4.0cdc2398.js",
    "revision": "263243e3e00936c2b4e6a06d132edaee"
  },
  {
    "url": "assets/js/5.5306ec36.js",
    "revision": "650297dba8b5a68095527151032b934d"
  },
  {
    "url": "assets/js/6.59ab63d4.js",
    "revision": "508e3bf7926f78d106a45d4abe138e18"
  },
  {
    "url": "assets/js/7.c0f36bb1.js",
    "revision": "15fc9f6ae9ee9b97de5a61c042080d6d"
  },
  {
    "url": "assets/js/8.fb2d5e04.js",
    "revision": "2d8d1d21c2e8d757df0c4ebdbfac8abc"
  },
  {
    "url": "assets/js/9.a14684ba.js",
    "revision": "7796a450c8dd0116f6889916edb894b6"
  },
  {
    "url": "assets/js/app.156d1c4d.js",
    "revision": "e55c339211614eb2758a1bd0de14e31f"
  },
  {
    "url": "config.html",
    "revision": "bf1708bb4a7ccd6591c9919bd734e88b"
  },
  {
    "url": "exercises/1.html",
    "revision": "5b48b5d5d7c1f8606822b5c2bfc62d7e"
  },
  {
    "url": "exercises/4.html",
    "revision": "c9f25629a76df334e063aadf93db61bf"
  },
  {
    "url": "exercises/5.html",
    "revision": "73f122de95f20ec1c6b2dfa9e6a99a3a"
  },
  {
    "url": "guide/1.html",
    "revision": "d5b3e6cebbf951e603fbdb2999b466af"
  },
  {
    "url": "guide/2.html",
    "revision": "f0a23d81d3a500dd1d2a039d29a9ae00"
  },
  {
    "url": "guide/3.html",
    "revision": "289eedb622877bc7715dd36f3bab1ff0"
  },
  {
    "url": "guide/4.html",
    "revision": "e05163aeb9127b58de020e9aa0d18b41"
  },
  {
    "url": "guide/5.html",
    "revision": "1479b198a226e2cc55d84a0cf5aab58e"
  },
  {
    "url": "guide/6.html",
    "revision": "944f074a04c54ba5d41251092b5039c8"
  },
  {
    "url": "guide/index.html",
    "revision": "730c6857f97c199c41e5a67829bd05d8"
  },
  {
    "url": "icon.png",
    "revision": "2d919c57a08edbbfdb80c55a01fb8f5a"
  },
  {
    "url": "index.html",
    "revision": "c76cecfa6e258c40e44adc210b755206"
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

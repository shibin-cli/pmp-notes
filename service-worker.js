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
    "revision": "25aed94f39fd997f39def329f0266bf0"
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
    "url": "assets/img/17.532dbaf4.jpg",
    "revision": "532dbaf44f41f9142f470d56dbe4b571"
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
    "url": "assets/img/6-1.6e409a96.png",
    "revision": "6e409a96c2dddadb35f63e824cda663c"
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
    "url": "assets/js/10.e122383f.js",
    "revision": "25f5386e6a2a964e2711398d6d268dc1"
  },
  {
    "url": "assets/js/11.9d3e1954.js",
    "revision": "9811cf9b1aadf834d3c1c02636f3e310"
  },
  {
    "url": "assets/js/12.911d6ee1.js",
    "revision": "67a523d80a4cf4d2531a4a1772b76b01"
  },
  {
    "url": "assets/js/13.715264e1.js",
    "revision": "7e7779d93c541e730992623dd30945c0"
  },
  {
    "url": "assets/js/14.c6bead6a.js",
    "revision": "e2ad8f0c58c5ecd86cf3cbc7c586dbc6"
  },
  {
    "url": "assets/js/15.0f2ee219.js",
    "revision": "b4a80b8a11619c59454ea2ff9849c7ad"
  },
  {
    "url": "assets/js/16.27a47c9b.js",
    "revision": "3bc57484cecbb9e01ee862bf8da78293"
  },
  {
    "url": "assets/js/17.bf07228b.js",
    "revision": "152f15260f5c640a344384d66799f337"
  },
  {
    "url": "assets/js/18.d1f60f0d.js",
    "revision": "6724b28aa845c6357dcefc5cf56e8d90"
  },
  {
    "url": "assets/js/19.8a2ee4d2.js",
    "revision": "ee4fcd0ef6726ff8a6d9891196376642"
  },
  {
    "url": "assets/js/2.17b7fd74.js",
    "revision": "0b38e3b5fbd5c9a52f6f686760ef98e0"
  },
  {
    "url": "assets/js/20.52b9d9ce.js",
    "revision": "5ea8dddcb690528f4751a624b05e7af9"
  },
  {
    "url": "assets/js/3.aa2cdbd0.js",
    "revision": "d698a73dcc67732496e86d8d76bfd2bf"
  },
  {
    "url": "assets/js/4.59723b2b.js",
    "revision": "fa5ae610ff1ad0853665cf4c52f5bca0"
  },
  {
    "url": "assets/js/5.c129cd40.js",
    "revision": "b60774b48fc733835a50c2cc8fe19eea"
  },
  {
    "url": "assets/js/6.5a36adcd.js",
    "revision": "bbabc0bad74caa899e47dce23e5640e9"
  },
  {
    "url": "assets/js/7.f05217e5.js",
    "revision": "2215aa4aee733e46a4604c3f53ee2f11"
  },
  {
    "url": "assets/js/8.1e7906f5.js",
    "revision": "c0c4fff296af7e17bc1ea88f0cb0488c"
  },
  {
    "url": "assets/js/9.d040f66d.js",
    "revision": "64c4fda5b5464e9340073dea3d10897c"
  },
  {
    "url": "assets/js/app.b6ce5193.js",
    "revision": "0549657c837539c5ea1bd3abbe7e2f77"
  },
  {
    "url": "config.html",
    "revision": "eccad77c2c28e63adc279d78b3148e50"
  },
  {
    "url": "exercises/1.html",
    "revision": "f6e0d997103c07a14dfcd0ae9ca8613c"
  },
  {
    "url": "exercises/4.html",
    "revision": "9992dba17228939dc38f0c052769d6b9"
  },
  {
    "url": "exercises/5.html",
    "revision": "673945982cd2ad36a0c3ef1f8b27eedb"
  },
  {
    "url": "exercises/6.html",
    "revision": "5ed255e40bafb0f911fe143ad4eaec8b"
  },
  {
    "url": "guide/1.html",
    "revision": "90463d298c43ce666cb746c657e692e1"
  },
  {
    "url": "guide/2.html",
    "revision": "539ad848b72d4903a99a6290c09c5565"
  },
  {
    "url": "guide/3.html",
    "revision": "9c19358b355cdacec31c237b91f34109"
  },
  {
    "url": "guide/4.html",
    "revision": "3b41d9ea8b81c581e8f1a939e38b930a"
  },
  {
    "url": "guide/5.html",
    "revision": "7bed9053e372a6d9ae4dbe4628042675"
  },
  {
    "url": "guide/6.html",
    "revision": "8beb0c54f8547a9a9778334f63db09d5"
  },
  {
    "url": "guide/index.html",
    "revision": "3779a1471cccf7218f6c21eab4606ce2"
  },
  {
    "url": "icon.png",
    "revision": "2d919c57a08edbbfdb80c55a01fb8f5a"
  },
  {
    "url": "index.html",
    "revision": "2bb432a70bd8dff515fcad06123b7513"
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

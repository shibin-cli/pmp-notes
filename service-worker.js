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
    "revision": "9adc03c954f717f434befdc1838d93f0"
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
    "url": "assets/img/10-1_.ac720e24.png",
    "revision": "ac720e24a848f190c0a0a8f4bceca27b"
  },
  {
    "url": "assets/img/10-1.e1f63191.png",
    "revision": "e1f631912c358525ec9bbed5cd39e967"
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
    "url": "assets/img/18.16df74fb.jpg",
    "revision": "16df74fb59828051c398690301641b76"
  },
  {
    "url": "assets/img/19.7c7195dd.jpg",
    "revision": "7c7195dd1891beba8b29a082eb8165d2"
  },
  {
    "url": "assets/img/2.40dbd87a.png",
    "revision": "40dbd87a68d33df3e4ad716d42e2b85e"
  },
  {
    "url": "assets/img/20.51ce1a29.jpg",
    "revision": "51ce1a295daa02a5f74e1c31e81c627b"
  },
  {
    "url": "assets/img/21.88480a2c.jpg",
    "revision": "88480a2c1d4b3795daf73bb31d4d9005"
  },
  {
    "url": "assets/img/22.63f70083.jpg",
    "revision": "63f700836cf88973f624c2e40559669d"
  },
  {
    "url": "assets/img/23.10a66a4e.jpg",
    "revision": "10a66a4eb8f0f0694203922e48088578"
  },
  {
    "url": "assets/img/24.d909dc76.png",
    "revision": "d909dc76b3a970277ee311c7c4b2cc67"
  },
  {
    "url": "assets/img/25.2f210212.jpg",
    "revision": "2f21021238c9ea7d7f8bdbceb8af85ae"
  },
  {
    "url": "assets/img/26.0eac54d0.png",
    "revision": "0eac54d0d3c8fa92375a039f534a4b09"
  },
  {
    "url": "assets/img/27.5e9cfd49.jpg",
    "revision": "5e9cfd49a77a680f23a673ea2c060cde"
  },
  {
    "url": "assets/img/28.872a11f1.png",
    "revision": "872a11f1724ace98cea5e3eb42ee817a"
  },
  {
    "url": "assets/img/29.3c4f5a19.jpg",
    "revision": "3c4f5a19f724eb137dd97056d2978fba"
  },
  {
    "url": "assets/img/3.67864a62.jpg",
    "revision": "67864a627a50f56fc692f1f55f4bbf94"
  },
  {
    "url": "assets/img/30.8adc1b7c.jpg",
    "revision": "8adc1b7c0c47c4c6699b3e3486eb0946"
  },
  {
    "url": "assets/img/31.12f0a517.jpg",
    "revision": "12f0a51741f22a08f36d44a87a14c518"
  },
  {
    "url": "assets/img/32.36b4a180.jpg",
    "revision": "36b4a180048bb1559e63bd767cf4cf2d"
  },
  {
    "url": "assets/img/33.b5a88d98.jpg",
    "revision": "b5a88d9807ab63ac803685d8f683e2cc"
  },
  {
    "url": "assets/img/34.e459a737.jpg",
    "revision": "e459a7372508f631be2f5a4eee40c145"
  },
  {
    "url": "assets/img/35.447af1b4.jpg",
    "revision": "447af1b41e48cb304e49cc133642930f"
  },
  {
    "url": "assets/img/36.3be27df0.jpg",
    "revision": "3be27df0551b88c544f42ee5e9a4de22"
  },
  {
    "url": "assets/img/37.0e5c0605.jpg",
    "revision": "0e5c0605ded72b56d8269c583061ae3b"
  },
  {
    "url": "assets/img/38.abac426f.jpg",
    "revision": "abac426f48b02163fe66c22450ffcbc8"
  },
  {
    "url": "assets/img/39.104efadf.png",
    "revision": "104efadf4cbde54681b65c82f61e0070"
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
    "url": "assets/img/40.2d1ca91b.png",
    "revision": "2d1ca91bbc38a9c63090bec801bbeff2"
  },
  {
    "url": "assets/img/41.5132eb07.jpg",
    "revision": "5132eb0796a0d7e80c8d171b1a2ea887"
  },
  {
    "url": "assets/img/42.f9feeedb.jpg",
    "revision": "f9feeedb96fea4894116263e2cc089e9"
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
    "url": "assets/img/6-2_.5d3b69d6.png",
    "revision": "5d3b69d6fc5c6e39d9100999d4a9497a"
  },
  {
    "url": "assets/img/6-2.fa15636a.png",
    "revision": "fa15636af01f0b9aaedb3f4d6036f7cc"
  },
  {
    "url": "assets/img/6.5eaea883.jpg",
    "revision": "5eaea88323b56fed4c39e2c76996fbdb"
  },
  {
    "url": "assets/img/7-1_.72192063.png",
    "revision": "72192063f0f09e3547d05dfc2add59df"
  },
  {
    "url": "assets/img/7-1.d70eb161.png",
    "revision": "d70eb1616a3ce3a4c34a7329df199a1f"
  },
  {
    "url": "assets/img/7-2_.f0b02d68.png",
    "revision": "f0b02d68afc1d6eaab10a1df927a61b3"
  },
  {
    "url": "assets/img/7-2.d57cfe49.png",
    "revision": "d57cfe49efa8021bf4e614060cc865c9"
  },
  {
    "url": "assets/img/7.b1e3fc5c.jpg",
    "revision": "b1e3fc5cd923183f0f78a156e1e2446d"
  },
  {
    "url": "assets/img/8-1_.22060d82.png",
    "revision": "22060d82c9db63324be38672159bfe74"
  },
  {
    "url": "assets/img/8-1.95b88cd8.png",
    "revision": "95b88cd8daac31ff0c3f0da10c6c87e0"
  },
  {
    "url": "assets/img/8-2_.ac4d0796.png",
    "revision": "ac4d079698c979d381eda0ba5f233d03"
  },
  {
    "url": "assets/img/8-2.e52cf175.png",
    "revision": "e52cf175e80eec633ce0dceb11a02b25"
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
    "url": "assets/js/10.20752013.js",
    "revision": "4cdcc7ce00b1e2d82feeea8882e09dd7"
  },
  {
    "url": "assets/js/11.7d1fa008.js",
    "revision": "bbd3d997d5ded764200b073fd40fa9a5"
  },
  {
    "url": "assets/js/12.7077d4c0.js",
    "revision": "728d76ea8dfcd51b90b1d303b30682ef"
  },
  {
    "url": "assets/js/13.fb770966.js",
    "revision": "da4787092370f27ee051ed8f9b95d113"
  },
  {
    "url": "assets/js/14.42ed8c8b.js",
    "revision": "939028aa0e85147fdf59e1ebb10e8bf7"
  },
  {
    "url": "assets/js/15.7bd92b1b.js",
    "revision": "dfcb40fdb23bbe83c0f4c5e4aa236f25"
  },
  {
    "url": "assets/js/16.0d1102d4.js",
    "revision": "ac33940171cc241fd95d03e06f7d8f3c"
  },
  {
    "url": "assets/js/17.ad6d9569.js",
    "revision": "8fa91382d13bc9ca79c0deb6837c0fa3"
  },
  {
    "url": "assets/js/18.53e4d54d.js",
    "revision": "a61a1d61e3e70143ae538ab35f8faf0a"
  },
  {
    "url": "assets/js/19.441891b5.js",
    "revision": "87dc01a988e43dfd639048f1767174c9"
  },
  {
    "url": "assets/js/2.72807f25.js",
    "revision": "1487ff88617a9d851bb96d5cf16d412e"
  },
  {
    "url": "assets/js/20.ae309b6e.js",
    "revision": "b8478aea350cd756b56b140e493ed4fb"
  },
  {
    "url": "assets/js/21.1fcd58e5.js",
    "revision": "daf9336e2f864ba43a59d03309423a9f"
  },
  {
    "url": "assets/js/22.b21643b1.js",
    "revision": "747c0b7878cc7eff60bfde7ed86e969a"
  },
  {
    "url": "assets/js/23.52403f3d.js",
    "revision": "e33ecea43ad756a99558c0e43943ebd2"
  },
  {
    "url": "assets/js/24.75613b67.js",
    "revision": "363e0a10f6506d3788a33521afd437af"
  },
  {
    "url": "assets/js/25.02a7ad7b.js",
    "revision": "5151525b3bc83b5e5ffc1c9f61a7604f"
  },
  {
    "url": "assets/js/26.e6cb4fd0.js",
    "revision": "f4bd0f020c637ece1650dc0d083d9c80"
  },
  {
    "url": "assets/js/27.8691d118.js",
    "revision": "ba7d1af534cd15b9973719986250c62a"
  },
  {
    "url": "assets/js/28.d1edc23f.js",
    "revision": "404bb813a0029a71bb39e0bed251afb9"
  },
  {
    "url": "assets/js/3.b27df26c.js",
    "revision": "c8ff11d24b0f5113ef7bd4dbcbe76260"
  },
  {
    "url": "assets/js/4.ddac1f76.js",
    "revision": "9b7b3a39cf6fdf11ba2bb7fdee23f0cb"
  },
  {
    "url": "assets/js/5.e4e9afc6.js",
    "revision": "5fdacb3e4baf40a27bebffcc288b8369"
  },
  {
    "url": "assets/js/6.c0b30ba1.js",
    "revision": "775a8db2e130293de42df3084167cf1c"
  },
  {
    "url": "assets/js/7.ec976841.js",
    "revision": "945ed1cf8c2927af3c7ab1c22cad90d8"
  },
  {
    "url": "assets/js/8.22e622bc.js",
    "revision": "8be3b46b606c560e72b52977962dbaa3"
  },
  {
    "url": "assets/js/9.3d6808ba.js",
    "revision": "dcee7a61c89c41c34f4b39dde835c982"
  },
  {
    "url": "assets/js/app.2d0ed8d1.js",
    "revision": "a48b9c5fa53f09feefcba0fbd1311d68"
  },
  {
    "url": "config.html",
    "revision": "2f5b91af2656236619c125c970802aaa"
  },
  {
    "url": "exercises/1.html",
    "revision": "e572f5ca0070ac0abe0f4ed9e8d8d756"
  },
  {
    "url": "exercises/10.html",
    "revision": "4784496dd68e7a6d9a74d455e9120190"
  },
  {
    "url": "exercises/4.html",
    "revision": "711b9c26c108ccd928333a76e58c97c7"
  },
  {
    "url": "exercises/5.html",
    "revision": "7e59236e493d9de06131aa12e0297c17"
  },
  {
    "url": "exercises/6.html",
    "revision": "308adbea61bab1daf35da986991caa6c"
  },
  {
    "url": "exercises/7.html",
    "revision": "d3916492899a4d33bb4106375e90b05f"
  },
  {
    "url": "exercises/8.html",
    "revision": "557421d6de2cf7d2d112562a3f27518e"
  },
  {
    "url": "exercises/9.html",
    "revision": "690e0095a938e7f2dd92adbdac20aab5"
  },
  {
    "url": "guide/1.html",
    "revision": "3a4dc887aeab0becc039a403ac327828"
  },
  {
    "url": "guide/10.html",
    "revision": "0dd007b5944bc7cdc7f7ffb9d9667ed6"
  },
  {
    "url": "guide/2.html",
    "revision": "4dbd52d740254bc6e1baa81031582b1d"
  },
  {
    "url": "guide/3.html",
    "revision": "644f8b7a65cd58a483d92216a0cfd359"
  },
  {
    "url": "guide/4.html",
    "revision": "96cfa4b8daf7da112745c96866088522"
  },
  {
    "url": "guide/5.html",
    "revision": "0ac359b44d6d37e0241189e5aee0a3d8"
  },
  {
    "url": "guide/6.html",
    "revision": "bceb37d4aac0be40b851924080b340fb"
  },
  {
    "url": "guide/7.html",
    "revision": "e00b747bffc283b12010f565e081cbee"
  },
  {
    "url": "guide/8.html",
    "revision": "37a9e2da92eb56b1dceca00d64822c54"
  },
  {
    "url": "guide/9.html",
    "revision": "2aeb804320af4586e98c63c8ca4f0fb5"
  },
  {
    "url": "guide/index.html",
    "revision": "9dbe83c18d4373512a9b753409309d92"
  },
  {
    "url": "icon.png",
    "revision": "2d919c57a08edbbfdb80c55a01fb8f5a"
  },
  {
    "url": "index.html",
    "revision": "963a4ec29b2b60ab3435d3dff3d00359"
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

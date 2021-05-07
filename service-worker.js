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
    "revision": "574e6828976e86a181c4ddeaea7a42a5"
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
    "url": "assets/js/10.2f95773f.js",
    "revision": "801f602a40646971b27544dc58fa9554"
  },
  {
    "url": "assets/js/11.a079c706.js",
    "revision": "d212c2c0fe5fac35a6b864cc9c061232"
  },
  {
    "url": "assets/js/12.ea3bedef.js",
    "revision": "dc8786bd1dbc42029a5cc0f91199a04a"
  },
  {
    "url": "assets/js/13.a6e19a1b.js",
    "revision": "306076e223b9329c3c79d635c2cf3006"
  },
  {
    "url": "assets/js/14.4cbf86c5.js",
    "revision": "89317d25ae832b74ab56e111ac6a2f47"
  },
  {
    "url": "assets/js/15.1c3786ae.js",
    "revision": "50fe882977a69c15a2049add493d3e2f"
  },
  {
    "url": "assets/js/16.f8429d9c.js",
    "revision": "7e86fad1effad96c7f7f0e08d0dcff99"
  },
  {
    "url": "assets/js/17.3e78ccea.js",
    "revision": "ac5dc5c99e3e18271f2dd4795fbefa6d"
  },
  {
    "url": "assets/js/18.e612389c.js",
    "revision": "56fcff05aa2c8dc7a943332ce813ddbe"
  },
  {
    "url": "assets/js/19.1bdb8d99.js",
    "revision": "a147c95d2714e065adef8174f50b6e94"
  },
  {
    "url": "assets/js/2.57fa3da7.js",
    "revision": "a075b575a32d6a30ed3255eabf0454b6"
  },
  {
    "url": "assets/js/20.c44a77d7.js",
    "revision": "30fa9c62d3cedb8c86d6c9f13eac5459"
  },
  {
    "url": "assets/js/21.e70d80d8.js",
    "revision": "e8b7772ac2aa8869bc588694b1a1fbb6"
  },
  {
    "url": "assets/js/22.523da4b6.js",
    "revision": "d35536589783cc42a02c7520c1b36869"
  },
  {
    "url": "assets/js/23.ff856d43.js",
    "revision": "307b760dab23e0de282d25ca0ff3987a"
  },
  {
    "url": "assets/js/24.34467688.js",
    "revision": "cf45ff42489057db797fd08d607fee76"
  },
  {
    "url": "assets/js/25.51152897.js",
    "revision": "f203174a083eca98fab796bedeb9f365"
  },
  {
    "url": "assets/js/26.133a80d7.js",
    "revision": "28db162cbf07b55f908b86fe553ee875"
  },
  {
    "url": "assets/js/3.595cc2b4.js",
    "revision": "3f2d37e6d6c3df14fd3c934756185fa2"
  },
  {
    "url": "assets/js/4.0f670a6d.js",
    "revision": "f75753cff9369a6c3358bd160eae6671"
  },
  {
    "url": "assets/js/5.48c1966d.js",
    "revision": "fbac086255003becfed0c464960d452a"
  },
  {
    "url": "assets/js/6.a8b4c0ef.js",
    "revision": "13955113793a43a807708197be611225"
  },
  {
    "url": "assets/js/7.af68f6ed.js",
    "revision": "14b8e50700863fe7e0fec03369b5072e"
  },
  {
    "url": "assets/js/8.c3349dc5.js",
    "revision": "d367005809ce0b218d1c210af5f38c07"
  },
  {
    "url": "assets/js/9.b974fc6f.js",
    "revision": "2ca0b9e06a13da398435899aa9f743ad"
  },
  {
    "url": "assets/js/app.d24b986d.js",
    "revision": "5ccbc66ee4cf18aec64dd3d14b40614a"
  },
  {
    "url": "config.html",
    "revision": "1c844d1a86b2a62d8eca190a0bb989ed"
  },
  {
    "url": "exercises/1.html",
    "revision": "cc7e83f6a6a8e3fb69090f67e52e4206"
  },
  {
    "url": "exercises/4.html",
    "revision": "55355cc3182bbd290b00e215c40ff988"
  },
  {
    "url": "exercises/5.html",
    "revision": "132891409f5c5b51b3b36c3d9885b8b7"
  },
  {
    "url": "exercises/6.html",
    "revision": "d1bca6717678a978b7e644451bff5259"
  },
  {
    "url": "exercises/7.html",
    "revision": "e276eab80bd6e99edcc18658fb228987"
  },
  {
    "url": "exercises/8.html",
    "revision": "af1c9450045abdd53a7745d7f41b1593"
  },
  {
    "url": "exercises/9.html",
    "revision": "6faf26839a2877acadd4395aac552940"
  },
  {
    "url": "guide/1.html",
    "revision": "f79e0788e850169e2cdc4db0f9da920b"
  },
  {
    "url": "guide/2.html",
    "revision": "79b66abdaa48a90f7cc47f7d32e12f99"
  },
  {
    "url": "guide/3.html",
    "revision": "47173a6a4cb160ba5565ae8eb58b976c"
  },
  {
    "url": "guide/4.html",
    "revision": "0056928d7301581d332e5b7a6539a2a6"
  },
  {
    "url": "guide/5.html",
    "revision": "3e31d0bc5069377405c59b0c6ba9cc5e"
  },
  {
    "url": "guide/6.html",
    "revision": "d5aa07b6a84342d15dfb0c0316f7a302"
  },
  {
    "url": "guide/7.html",
    "revision": "c5e4418bccf8911aee9f95949b0d686a"
  },
  {
    "url": "guide/8.html",
    "revision": "6588df123ed056d0e868c378b0a2f861"
  },
  {
    "url": "guide/9.html",
    "revision": "67c1ef6e1fedba4295d417bff81479e5"
  },
  {
    "url": "guide/index.html",
    "revision": "064c6b58ea7aa92c5187d97ca252ade4"
  },
  {
    "url": "icon.png",
    "revision": "2d919c57a08edbbfdb80c55a01fb8f5a"
  },
  {
    "url": "index.html",
    "revision": "b414bc497289eb50844882850e93aa12"
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

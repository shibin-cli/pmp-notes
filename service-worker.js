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
    "revision": "0b94fe375e02f920fac38b2c33d0b656"
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
    "url": "assets/img/11-1_.5a8f3045.png",
    "revision": "5a8f3045ff2a3d65be213a4ea012298f"
  },
  {
    "url": "assets/img/11-1.a54d7b9a.png",
    "revision": "a54d7b9a95526b6cf32519b12ef7eab7"
  },
  {
    "url": "assets/img/11-2_.a7105cc8.png",
    "revision": "a7105cc8d6a4ba42ec654302ad406212"
  },
  {
    "url": "assets/img/11-2.641e183b.png",
    "revision": "641e183b77608dec58fb9fdffe0002bb"
  },
  {
    "url": "assets/img/11-3.80ebae39.png",
    "revision": "80ebae398eac6f20e58fc51e395f3d05"
  },
  {
    "url": "assets/img/11.1641f5c7.jpg",
    "revision": "1641f5c782e6a8f6f7dd3fd4df44ec2d"
  },
  {
    "url": "assets/img/12-1_.37b7dd22.png",
    "revision": "37b7dd2287f8558ff56fb940b5a9c27f"
  },
  {
    "url": "assets/img/12-1.a694865c.png",
    "revision": "a694865c74d74866a54afbe189cc39d6"
  },
  {
    "url": "assets/img/12-2.9626fc32.png",
    "revision": "9626fc32a6543eb2ac47062bdb2f5637"
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
    "url": "assets/img/43.dea2dfde.jpg",
    "revision": "dea2dfde29e932a65a01e5ee851c04e9"
  },
  {
    "url": "assets/img/44.f55db2a8.jpg",
    "revision": "f55db2a8cc7973e2ff245dc5a18eb5b7"
  },
  {
    "url": "assets/img/45.b1d9a196.jpg",
    "revision": "b1d9a19623eb1d6a08fbca163194ed55"
  },
  {
    "url": "assets/img/46.06e3d1e7.jpg",
    "revision": "06e3d1e7845bd7d1005731796203ccf9"
  },
  {
    "url": "assets/img/47.87aafe50.jpg",
    "revision": "87aafe50cc86164b50d17e39fbecab11"
  },
  {
    "url": "assets/img/48.8cb84a4c.jpg",
    "revision": "8cb84a4c4701b0f51183ecee53848958"
  },
  {
    "url": "assets/img/49.ffaad1ee.png",
    "revision": "ffaad1ee0ef553d813c467dca940676e"
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
    "url": "assets/img/50.179d5fac.png",
    "revision": "179d5fac52bd4c4b89c33c3c1c908fcd"
  },
  {
    "url": "assets/img/51.872dd26c.jpg",
    "revision": "872dd26cd94f8613b0e9a78c2556b288"
  },
  {
    "url": "assets/img/52.f6112d3f.jpg",
    "revision": "f6112d3facf1291af0daa403b87e9dbb"
  },
  {
    "url": "assets/img/53.af3e746b.jpg",
    "revision": "af3e746be31585ad2f043bd3f8dacc9e"
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
    "url": "assets/js/10.63c43c0e.js",
    "revision": "d831969715cabb8eaa7a9aaaea9f7fc3"
  },
  {
    "url": "assets/js/11.57221467.js",
    "revision": "26abb2f1461e5ec4acc7d915dbf5ea3d"
  },
  {
    "url": "assets/js/12.21b1244b.js",
    "revision": "92678ef23efa66124b6fc085767ddbe1"
  },
  {
    "url": "assets/js/13.8da5fc30.js",
    "revision": "a5e0a9ebb6908e52868d8de221c039d0"
  },
  {
    "url": "assets/js/14.4ed57276.js",
    "revision": "0927339247ac3d862d0faec23f96c362"
  },
  {
    "url": "assets/js/15.f5c93c58.js",
    "revision": "52eb8880785b38acb39a8b6aab7db467"
  },
  {
    "url": "assets/js/16.df41d03c.js",
    "revision": "8f20ca1d68c5732a24848b2e8ae1ff2b"
  },
  {
    "url": "assets/js/17.55b8835b.js",
    "revision": "544871fa47a5009beb356a78b4afbac4"
  },
  {
    "url": "assets/js/18.10db17ae.js",
    "revision": "144f8684d7fc8d0d30ab2661b7cb53b8"
  },
  {
    "url": "assets/js/19.6f7ea4ae.js",
    "revision": "6028fd4d9649d52172df2aa6f6480422"
  },
  {
    "url": "assets/js/2.51c66cde.js",
    "revision": "1ec01e2a49bc3ba136a2bc6ec12b62de"
  },
  {
    "url": "assets/js/20.20a3f9a2.js",
    "revision": "6b472eb02a9ef12855b656d393b7e36c"
  },
  {
    "url": "assets/js/21.b5a67ce6.js",
    "revision": "af528d76809aad7fa761cf72b983361c"
  },
  {
    "url": "assets/js/22.d8099dbb.js",
    "revision": "7c475c938ea7bd8b21c30eb092e2bdba"
  },
  {
    "url": "assets/js/23.5928d3e8.js",
    "revision": "5f6f41b0be173253745e3b2d400ca043"
  },
  {
    "url": "assets/js/24.4e5d7ffd.js",
    "revision": "7f6dbb8b687c792ee1984cbb239b1798"
  },
  {
    "url": "assets/js/25.464ce57c.js",
    "revision": "0ba6dbeb0ad328a8a10e45038a1278d4"
  },
  {
    "url": "assets/js/26.897c37ee.js",
    "revision": "4e6bdc2059c5a10444f7df77aa8d0759"
  },
  {
    "url": "assets/js/27.5364b20d.js",
    "revision": "2acf8dec11f00b390355d44c1302dc2b"
  },
  {
    "url": "assets/js/28.235a1d41.js",
    "revision": "fa268bc16154928cb54835b4d807b0a0"
  },
  {
    "url": "assets/js/29.6b67c053.js",
    "revision": "7ea075ced2db36da0a1404196a5683b4"
  },
  {
    "url": "assets/js/3.fbfdf0c4.js",
    "revision": "972904f21cb15787477c71532eaf5814"
  },
  {
    "url": "assets/js/30.867d13b2.js",
    "revision": "fb72d70f0d658b49bd0ede92312b454b"
  },
  {
    "url": "assets/js/31.b908c338.js",
    "revision": "7aea9bfcf79b1573ba17128ef1e980ae"
  },
  {
    "url": "assets/js/32.3ed29cf6.js",
    "revision": "bc68c6552a11308e99da1a66d41f4b93"
  },
  {
    "url": "assets/js/4.0d8f5c46.js",
    "revision": "b565b0b8e8c8729a90f2729319783cad"
  },
  {
    "url": "assets/js/5.19f8f9cb.js",
    "revision": "576e29b073648198b530f0dcc9f7edc5"
  },
  {
    "url": "assets/js/6.24d1df57.js",
    "revision": "e671ca440a7ca5482a47c9143e1dbe58"
  },
  {
    "url": "assets/js/7.3e52a362.js",
    "revision": "6cf18b1e9fbdd9645a7d68e6adfa0fee"
  },
  {
    "url": "assets/js/8.3670d5a4.js",
    "revision": "19826978598e0c76154ff4556ef1baeb"
  },
  {
    "url": "assets/js/9.08c04767.js",
    "revision": "07dbc6f40ce673b374084be37efdebd1"
  },
  {
    "url": "assets/js/app.a264445a.js",
    "revision": "a49c30b5a93b73696aaa9709873ffa17"
  },
  {
    "url": "config.html",
    "revision": "a296dd2f7beca868215e2b330dc4142d"
  },
  {
    "url": "exercises/1.html",
    "revision": "a3877f012b030bbc0143b2f52f73b852"
  },
  {
    "url": "exercises/10.html",
    "revision": "08224f55b9b04152dc6e5f435a8335ea"
  },
  {
    "url": "exercises/11.html",
    "revision": "b4c387dfe3331e1420fc419386f3c2dd"
  },
  {
    "url": "exercises/12.html",
    "revision": "80c18beff9c6dd6642deadd3215c55b6"
  },
  {
    "url": "exercises/4.html",
    "revision": "54698967b99fa7edb747d945cf3c7c48"
  },
  {
    "url": "exercises/5.html",
    "revision": "680d9885522acdd78c9686361ccc1bb9"
  },
  {
    "url": "exercises/6.html",
    "revision": "b9723e228b4e3a340db316b2341b3731"
  },
  {
    "url": "exercises/7.html",
    "revision": "148b1c3ee1cc1177ebf9d1aab2928de0"
  },
  {
    "url": "exercises/8.html",
    "revision": "69c30c353aa7889de696073d8b3a4b0b"
  },
  {
    "url": "exercises/9.html",
    "revision": "2a792984838f00a5be32f45456ecacb9"
  },
  {
    "url": "guide/1.html",
    "revision": "8a6425b205032c09c94a36edb6237179"
  },
  {
    "url": "guide/10.html",
    "revision": "2638df09d40750f1fea2f39f1712b522"
  },
  {
    "url": "guide/11.html",
    "revision": "5e0f260472335a7d4f3ed78d458ee24f"
  },
  {
    "url": "guide/12.html",
    "revision": "530d10bc8e8595483336dc25d5356cbe"
  },
  {
    "url": "guide/2.html",
    "revision": "61d0178262dcb3e7e551e9681111e387"
  },
  {
    "url": "guide/3.html",
    "revision": "c913d814e42cc5f28622738235fdd16c"
  },
  {
    "url": "guide/4.html",
    "revision": "17a283f09cf06748b229cac46a6e773a"
  },
  {
    "url": "guide/5.html",
    "revision": "585ea49b56ab7ea6cdc9fc2283433e85"
  },
  {
    "url": "guide/6.html",
    "revision": "f5f252f54f9cde910e1add3cbd6d2230"
  },
  {
    "url": "guide/7.html",
    "revision": "1d8cc872627c4728f9f0721c5d0dbeab"
  },
  {
    "url": "guide/8.html",
    "revision": "3ed2a6a3874a6246b9e9edb2ed8481bd"
  },
  {
    "url": "guide/9.html",
    "revision": "636cabc9acc91bcca32d394b59818d5d"
  },
  {
    "url": "guide/index.html",
    "revision": "a5483955599280e3d04ea77eec191f8f"
  },
  {
    "url": "icon.png",
    "revision": "2d919c57a08edbbfdb80c55a01fb8f5a"
  },
  {
    "url": "index.html",
    "revision": "e76ed7e5ad013f238891569b69122ed2"
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

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
    "revision": "fca4313293a0ee7028e6221c2fda78bd"
  },
  {
    "url": "assets/css/0.styles.80888187.css",
    "revision": "c7a71d68f9d360b097c5143089866857"
  },
  {
    "url": "assets/img/1-1.46fe01d2.png",
    "revision": "46fe01d2e8e252bab955f5b0b3708c56"
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
    "url": "assets/img/12-2_.9b7cc39d.png",
    "revision": "9b7cc39db3929f94ad4c5fbe8aaa9ede"
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
    "url": "assets/js/10.e9471e51.js",
    "revision": "1c57d408b5d4d97a597f598cd62c4c02"
  },
  {
    "url": "assets/js/11.127ccaa9.js",
    "revision": "0e1f547384648e6b3c9ed9e1b3331a32"
  },
  {
    "url": "assets/js/12.e2debc9d.js",
    "revision": "3c9e10f404f00836700fb279db8608aa"
  },
  {
    "url": "assets/js/13.03c07ce3.js",
    "revision": "54e039faf818605a3d7d0b0b39770fa4"
  },
  {
    "url": "assets/js/14.ba7b8235.js",
    "revision": "2f2a9d6ea4b956dbd3d6db32e2a58806"
  },
  {
    "url": "assets/js/15.c8214831.js",
    "revision": "34dbf51d2bd70c14d92f7901efd251f8"
  },
  {
    "url": "assets/js/16.afcaea96.js",
    "revision": "6eb98bebe6e78f14d3356c23e90331d7"
  },
  {
    "url": "assets/js/17.60a8b7a6.js",
    "revision": "52552d3ff764d044eb939b93470ccd8c"
  },
  {
    "url": "assets/js/18.4a9f70bb.js",
    "revision": "27c37d3ed861291ceedac72763b4b67b"
  },
  {
    "url": "assets/js/19.6d2836c8.js",
    "revision": "7359b350d0b7c4588a66e22f164f6077"
  },
  {
    "url": "assets/js/2.1b1df6d3.js",
    "revision": "9b02f59c75faba1fa94e971dccca949c"
  },
  {
    "url": "assets/js/20.9226c665.js",
    "revision": "9c658e6c69a0ded0e4ba5478c21bbebf"
  },
  {
    "url": "assets/js/21.b921fcab.js",
    "revision": "3a3151ba14eaa6725199b988266f457d"
  },
  {
    "url": "assets/js/22.837dadbe.js",
    "revision": "336469caef4f6183dba990b28d52677e"
  },
  {
    "url": "assets/js/23.9d05cd6e.js",
    "revision": "2ad25e08f5bf129305e214c038d05d1f"
  },
  {
    "url": "assets/js/24.6a96dc28.js",
    "revision": "a6550222e3e52b6697e31c741ce00c76"
  },
  {
    "url": "assets/js/25.e94537be.js",
    "revision": "53f8acc86aef087c48f125bffcdc8288"
  },
  {
    "url": "assets/js/26.1521ad1b.js",
    "revision": "b3dca1675cd2ff2d9b70b059d244aadb"
  },
  {
    "url": "assets/js/27.59cb8a15.js",
    "revision": "6e5de5245438b31e88a51cd9a98eae7c"
  },
  {
    "url": "assets/js/28.13411532.js",
    "revision": "234d386dadf652b9e5ea5c336dec6b77"
  },
  {
    "url": "assets/js/29.41cc3ae2.js",
    "revision": "2e4ef5f0f4ad3d821a04a18d90c0b7db"
  },
  {
    "url": "assets/js/3.a6a5051e.js",
    "revision": "71da55149e8c4b8298b91037a16f60da"
  },
  {
    "url": "assets/js/30.689420be.js",
    "revision": "d983ce4daf54eb6498f5906d6fa28c44"
  },
  {
    "url": "assets/js/31.82b68c1f.js",
    "revision": "55656434c3259a899721a18927c9e597"
  },
  {
    "url": "assets/js/32.186ef5af.js",
    "revision": "39f6a9cecbe3e357a93a32b9673c9b3a"
  },
  {
    "url": "assets/js/33.20979900.js",
    "revision": "e4cc3c249ea2759abf95bffc85ab9386"
  },
  {
    "url": "assets/js/34.06856b26.js",
    "revision": "496b26efaf901e42f9889f65f26eb53c"
  },
  {
    "url": "assets/js/4.09aacc20.js",
    "revision": "2734d1f46bf2911b55db23671f3e4558"
  },
  {
    "url": "assets/js/5.880f2ad1.js",
    "revision": "9b65695109afbe5f61611522dd0ccf3b"
  },
  {
    "url": "assets/js/6.7a137efc.js",
    "revision": "9203c11171ed174e5e89708e23392ee0"
  },
  {
    "url": "assets/js/7.fc399e3c.js",
    "revision": "9267578168ff6cb9804c45f427377666"
  },
  {
    "url": "assets/js/8.824ae5c7.js",
    "revision": "b450c054f1123c66d8ab0b927222e4d4"
  },
  {
    "url": "assets/js/9.882d1baa.js",
    "revision": "bda876b782b4eb38282bf4f2ed155d07"
  },
  {
    "url": "assets/js/app.b419822d.js",
    "revision": "ce7a28c09cc550248539a3f5dc2e2279"
  },
  {
    "url": "config.html",
    "revision": "432ae86f5d1ac86e448135b29e5c85c3"
  },
  {
    "url": "exercises/1.html",
    "revision": "6bf28ef38602ac467b7fb384799c3e47"
  },
  {
    "url": "exercises/10.html",
    "revision": "e44c71d31ffe6070444a086350f1f4b0"
  },
  {
    "url": "exercises/11.html",
    "revision": "19f7521fd2cf3a978dd2a52cb6e8f096"
  },
  {
    "url": "exercises/12.html",
    "revision": "1319addefc4fefcf05cabfd635194b2d"
  },
  {
    "url": "exercises/13.html",
    "revision": "b37bb68ae404651b8db8eaab9ce52cc3"
  },
  {
    "url": "exercises/4.html",
    "revision": "5c4cb6c9789f48857b2a738c7368bbcf"
  },
  {
    "url": "exercises/5.html",
    "revision": "51b6cc22fd1c6556c30a4f3b0632b848"
  },
  {
    "url": "exercises/6.html",
    "revision": "df87f2ee9b5d3d039601ab1f638fdc5a"
  },
  {
    "url": "exercises/7.html",
    "revision": "fb885134b4816f536d20675f358976fb"
  },
  {
    "url": "exercises/8.html",
    "revision": "e633b57e46f560451b567bb9cb97e818"
  },
  {
    "url": "exercises/9.html",
    "revision": "37ef5da1a9a49c63dc5d1197031c2435"
  },
  {
    "url": "guide/1.html",
    "revision": "b401595964370edb72cc146dadf83672"
  },
  {
    "url": "guide/10.html",
    "revision": "3a763910b87be2bfb4de9dcc9fd76c52"
  },
  {
    "url": "guide/11.html",
    "revision": "cdaa878ac48731de15709cd6ddc41207"
  },
  {
    "url": "guide/12.html",
    "revision": "df956d6a1b922b34e943037b87e9ae73"
  },
  {
    "url": "guide/13.html",
    "revision": "1850a5bf7b7eb4f8486a43cc1c576dd1"
  },
  {
    "url": "guide/2.html",
    "revision": "861c9dbc9f5245dfbb075d8fbe500f31"
  },
  {
    "url": "guide/3.html",
    "revision": "36ab95d4f19d8e341d887706d5826126"
  },
  {
    "url": "guide/4.html",
    "revision": "6401744a7845fc979f8c6f73d0a85e6d"
  },
  {
    "url": "guide/5.html",
    "revision": "eef8d9f6265faff5a53c6b6ec779b565"
  },
  {
    "url": "guide/6.html",
    "revision": "245abc51d3f3e5fca017782169fbc45c"
  },
  {
    "url": "guide/7.html",
    "revision": "3e8d9b5198ad75884555203c1ed3b16d"
  },
  {
    "url": "guide/8.html",
    "revision": "3b500c43753c505b12f3cc3560ea7dee"
  },
  {
    "url": "guide/9.html",
    "revision": "04d0801c0324ec27be971d512e11bd5f"
  },
  {
    "url": "guide/index.html",
    "revision": "40dd11fd71c3108e0a2d40e06931349b"
  },
  {
    "url": "icon.png",
    "revision": "2d919c57a08edbbfdb80c55a01fb8f5a"
  },
  {
    "url": "index.html",
    "revision": "a6f8175bd1e459f09f1fc31d75160ee7"
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

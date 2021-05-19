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
    "revision": "fa0cc1bfceb8d928603312d7226f85bd"
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
    "url": "assets/img/54.1048df90.jpg",
    "revision": "1048df90af392d940fef19298c68a877"
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
    "url": "assets/js/10.dd8d97fc.js",
    "revision": "40943a244ef7c42ea08a7fac0beb84c6"
  },
  {
    "url": "assets/js/11.a1a9c07f.js",
    "revision": "ed224acdfe745c2f97f7217dd2b8c809"
  },
  {
    "url": "assets/js/12.4721f834.js",
    "revision": "5eefa8db61a28962164973e32da3754a"
  },
  {
    "url": "assets/js/13.cffd07c5.js",
    "revision": "464ce0903302399df0d374c8b6a37da5"
  },
  {
    "url": "assets/js/14.60dc3e35.js",
    "revision": "801bd269fec3c5eafdca797a28026a9c"
  },
  {
    "url": "assets/js/15.81f01db0.js",
    "revision": "af005e5f77b0a0fa86da23f76d85e89f"
  },
  {
    "url": "assets/js/16.87fcc157.js",
    "revision": "9a0562757ca690ba8d3245d68d5cf72c"
  },
  {
    "url": "assets/js/17.1184a905.js",
    "revision": "afa050f259ec9113326fa0fa49a96146"
  },
  {
    "url": "assets/js/18.c213b0fe.js",
    "revision": "6da4a98b1c6a47e5268f2bd9e68c75ef"
  },
  {
    "url": "assets/js/19.b247c9eb.js",
    "revision": "c671f80ec3362ad3c52a7ce0f300a7f3"
  },
  {
    "url": "assets/js/2.bcacb29d.js",
    "revision": "d49d6267a0c98898798a581c91d5f1ba"
  },
  {
    "url": "assets/js/20.46673ddb.js",
    "revision": "30c5961ff1250c07285004d28d76a0a8"
  },
  {
    "url": "assets/js/21.77085b96.js",
    "revision": "483873263d33c976b284c000a3484d8e"
  },
  {
    "url": "assets/js/22.f9ed5a3b.js",
    "revision": "9ab2c3db9f13a2a1902104e10c6cf95e"
  },
  {
    "url": "assets/js/23.0908cc1b.js",
    "revision": "ee0620a0042ac984c906a522bc33a74e"
  },
  {
    "url": "assets/js/24.f2d0b8d6.js",
    "revision": "205f889732875f93a3883b0c6d207121"
  },
  {
    "url": "assets/js/25.1be9f639.js",
    "revision": "1510e047ae2b6a9eee084e40442d9b2e"
  },
  {
    "url": "assets/js/26.c7ac14ea.js",
    "revision": "e8f200ac3ea6980454b37bb4ecdaa656"
  },
  {
    "url": "assets/js/27.0808d5db.js",
    "revision": "d9b1e4eb94ce9d328a22f36a8997b5cc"
  },
  {
    "url": "assets/js/28.161b2ac0.js",
    "revision": "53bc188a6d4f9899bd979254af5696c3"
  },
  {
    "url": "assets/js/29.9fa732fc.js",
    "revision": "a705fa7ed28e5c196d67b6e3abb32d7a"
  },
  {
    "url": "assets/js/3.1f769014.js",
    "revision": "adc3e1280e477f78dac8fd5073a12411"
  },
  {
    "url": "assets/js/30.0b249fa5.js",
    "revision": "980d5176c451bd4befbdc605231605e6"
  },
  {
    "url": "assets/js/31.385aa45e.js",
    "revision": "b997c99ecf7844d8c3bf4067fab7d29c"
  },
  {
    "url": "assets/js/32.11d1bab7.js",
    "revision": "b802fa99116fd1e7a03029a95dccec89"
  },
  {
    "url": "assets/js/33.900f7704.js",
    "revision": "887fe2e312d63205a24072a9e21382b2"
  },
  {
    "url": "assets/js/34.fb084539.js",
    "revision": "4adc7065898c966a8dc8f432db8f5073"
  },
  {
    "url": "assets/js/4.adf91fae.js",
    "revision": "a872acbb00e3cad0255f92a47d900ca7"
  },
  {
    "url": "assets/js/5.5ab36358.js",
    "revision": "84d2bf26aea50ed7981f1db83df610fc"
  },
  {
    "url": "assets/js/6.38ef46c0.js",
    "revision": "d7ce5872977749b2c0641d1da8f07973"
  },
  {
    "url": "assets/js/7.9121faae.js",
    "revision": "07d23eaa5d213f9611c23222c6626f35"
  },
  {
    "url": "assets/js/8.13f8b998.js",
    "revision": "9cea2ecd17c7d82076a1406c593ee8fd"
  },
  {
    "url": "assets/js/9.ad54a0f7.js",
    "revision": "19cfabdaec295822b3fe5fd3aeab7ac4"
  },
  {
    "url": "assets/js/app.c9db9ea8.js",
    "revision": "d5bbb57ee3ee213cd44e2eb04b8eb4fc"
  },
  {
    "url": "config.html",
    "revision": "25fa6638298cc1953856a818cd95bf89"
  },
  {
    "url": "exercises/1.html",
    "revision": "c4b8a12178d397bb15a0fa4f6be020a5"
  },
  {
    "url": "exercises/10.html",
    "revision": "978a1339043b7e5e904204518d6642dc"
  },
  {
    "url": "exercises/11.html",
    "revision": "57251282032ce2574c7babca3d2a6bb0"
  },
  {
    "url": "exercises/12.html",
    "revision": "164b570157152672b755044b754c4198"
  },
  {
    "url": "exercises/13.html",
    "revision": "c1cf187ffd7ebd19b2cf28b9feaf2c6d"
  },
  {
    "url": "exercises/4.html",
    "revision": "2f3f940cbdd2047544b2e3c963ca6bb5"
  },
  {
    "url": "exercises/5.html",
    "revision": "0911ef0d976fd32ffc05b1207054e1d9"
  },
  {
    "url": "exercises/6.html",
    "revision": "f4cc9068bfc48ce9b72f419195f100ef"
  },
  {
    "url": "exercises/7.html",
    "revision": "5c2d61487c24e930e0e255847ad0d9cd"
  },
  {
    "url": "exercises/8.html",
    "revision": "25046bbf85a6081a0abbc7a8d3c2df5d"
  },
  {
    "url": "exercises/9.html",
    "revision": "602eff042835baabec51135d3281cd0a"
  },
  {
    "url": "guide/1.html",
    "revision": "7aad6824bee009f2ac1b228014314ea2"
  },
  {
    "url": "guide/10.html",
    "revision": "108c3f3b99235dc1a6b083061d0b3eb9"
  },
  {
    "url": "guide/11.html",
    "revision": "0ec4b48759f999b88208409121933abf"
  },
  {
    "url": "guide/12.html",
    "revision": "ff9a32cd8a47c1af34718c296591d3da"
  },
  {
    "url": "guide/13.html",
    "revision": "509100c488aa47541cc8801d18c461e9"
  },
  {
    "url": "guide/2.html",
    "revision": "e9a9105f469a01d437f7e46a905add23"
  },
  {
    "url": "guide/3.html",
    "revision": "26554f66282f779f630201810f0bceb9"
  },
  {
    "url": "guide/4.html",
    "revision": "986e43d1afc5dad1a86f9a9fa88ec819"
  },
  {
    "url": "guide/5.html",
    "revision": "c46c1242f37a757f40632990c9af5cf4"
  },
  {
    "url": "guide/6.html",
    "revision": "d36d03560dfdd51136363967a57b16df"
  },
  {
    "url": "guide/7.html",
    "revision": "53228c4449547afba9e8d4b610ab4c22"
  },
  {
    "url": "guide/8.html",
    "revision": "ab07bc69cc7d24943dfc1d710e3c5bf2"
  },
  {
    "url": "guide/9.html",
    "revision": "847eabeee6489c6fd4debf6b8bbaecfa"
  },
  {
    "url": "guide/index.html",
    "revision": "0813d1a10625c08424745667df9331ef"
  },
  {
    "url": "icon.png",
    "revision": "2d919c57a08edbbfdb80c55a01fb8f5a"
  },
  {
    "url": "index.html",
    "revision": "e4fc88c0783a5cf99edd75eb47bcbe15"
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

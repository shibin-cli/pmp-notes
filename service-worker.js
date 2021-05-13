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
    "revision": "f2731a8ec758a9a2adfe25fc73c8509b"
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
    "url": "assets/js/10.ebd5c2b2.js",
    "revision": "a1e2646682f43695f2aef318ca90f9cd"
  },
  {
    "url": "assets/js/11.a867b4f5.js",
    "revision": "318778fafc4bf0e7d607c7bddd47cd6e"
  },
  {
    "url": "assets/js/12.17e278b0.js",
    "revision": "571b9137ed901fc910011acae4ecdb8d"
  },
  {
    "url": "assets/js/13.d021d560.js",
    "revision": "14d02f004d8273ef2f495105c4e5fa0d"
  },
  {
    "url": "assets/js/14.b96523a3.js",
    "revision": "421ff3a3d1d31c2c68e8d1037232b0ae"
  },
  {
    "url": "assets/js/15.56312072.js",
    "revision": "c978d5ad21097934aa2bff7ad49ea8a9"
  },
  {
    "url": "assets/js/16.22f77b99.js",
    "revision": "58b1d93410656b3ca05806e27d3fa5af"
  },
  {
    "url": "assets/js/17.5f669d86.js",
    "revision": "9b6874a96496dbe23b4a7997c2a7b69c"
  },
  {
    "url": "assets/js/18.be87992d.js",
    "revision": "b3a699ddbc178ff559ccb7a2b36589e6"
  },
  {
    "url": "assets/js/19.9a2d5af6.js",
    "revision": "8a2accfbbff60889be137126280c34c7"
  },
  {
    "url": "assets/js/2.74099dae.js",
    "revision": "e037af6be75e453ca6eba7c33fe1e600"
  },
  {
    "url": "assets/js/20.da163606.js",
    "revision": "5afe8c8ee1a482a0abdad335f4ae3392"
  },
  {
    "url": "assets/js/21.abef292a.js",
    "revision": "6e73db122b62d7a44b6b960c5b19faab"
  },
  {
    "url": "assets/js/22.e530e045.js",
    "revision": "0cf5630d5757028eb96a36b367a2e95b"
  },
  {
    "url": "assets/js/23.5cb3819c.js",
    "revision": "29fa2980b2fb1f50ac1c1afcf43a0502"
  },
  {
    "url": "assets/js/24.5a27b7c4.js",
    "revision": "75f848d30518fb011efd8d28d5369b8f"
  },
  {
    "url": "assets/js/25.73686636.js",
    "revision": "8be1f8ebd5486b5229a6eb3bae692d5e"
  },
  {
    "url": "assets/js/26.d693439d.js",
    "revision": "22ffc6ad02377e01672f1e18b39e7305"
  },
  {
    "url": "assets/js/27.a54f5421.js",
    "revision": "87dbe172affd2c5315935bcb8d278582"
  },
  {
    "url": "assets/js/28.bdb7c02f.js",
    "revision": "675f764f85b154b89a41a0af7990a95e"
  },
  {
    "url": "assets/js/29.0a61be93.js",
    "revision": "640149575a002d65e2c4d657727aa0e3"
  },
  {
    "url": "assets/js/3.cbf52245.js",
    "revision": "1d2917edc4fc42aa45fd29169bf604eb"
  },
  {
    "url": "assets/js/30.dd934742.js",
    "revision": "ad0564469e8c06d57b25992a80b7daf3"
  },
  {
    "url": "assets/js/31.7ac42f12.js",
    "revision": "4ef3bb9d7d2df6e23c3e1f3b533e9c80"
  },
  {
    "url": "assets/js/32.a8783921.js",
    "revision": "24d2a75780a37aa7a463ddc1732b82f3"
  },
  {
    "url": "assets/js/4.dbd99116.js",
    "revision": "733f054ba922b966e50972d348d7c9a8"
  },
  {
    "url": "assets/js/5.5e1372f9.js",
    "revision": "a160f744ef6a58f3c65e9aad7b7f655e"
  },
  {
    "url": "assets/js/6.6f2e1687.js",
    "revision": "d0c3e545479c22228ed079a1e2d41c04"
  },
  {
    "url": "assets/js/7.50235ddd.js",
    "revision": "c332eb889348ec022f93316605440947"
  },
  {
    "url": "assets/js/8.fff38855.js",
    "revision": "7c7341af3f23b99882a6e0d6c321ee79"
  },
  {
    "url": "assets/js/9.8e62f508.js",
    "revision": "3a26d081812a935af02fb1a4b8cb3762"
  },
  {
    "url": "assets/js/app.d5923c30.js",
    "revision": "befc1fb627a8681f8d68eb0043947969"
  },
  {
    "url": "config.html",
    "revision": "2ee6ec9ba1dab1750db1b45d99e60c09"
  },
  {
    "url": "exercises/1.html",
    "revision": "5a95107f6a66f2ec499e212e687d1939"
  },
  {
    "url": "exercises/10.html",
    "revision": "ab64dad3e355df46378a61874cec6488"
  },
  {
    "url": "exercises/11.html",
    "revision": "61d10c3ffc3dea310064626fb0c6ed87"
  },
  {
    "url": "exercises/12.html",
    "revision": "2459a39ab6759319f83d03fb8d7e6dcf"
  },
  {
    "url": "exercises/4.html",
    "revision": "26e9eff4312040ff1fe75b12a7c4e4fd"
  },
  {
    "url": "exercises/5.html",
    "revision": "c4d21e6825207b93762f52d650d954e8"
  },
  {
    "url": "exercises/6.html",
    "revision": "5e81d0da494e9dc7afbe90d2c0e50d82"
  },
  {
    "url": "exercises/7.html",
    "revision": "c5665abaf118afc9f5d20cfbcc541851"
  },
  {
    "url": "exercises/8.html",
    "revision": "4c23848670b79b32a2599e97155d6ac1"
  },
  {
    "url": "exercises/9.html",
    "revision": "200bce9c76cf1c558ac4daf50202e015"
  },
  {
    "url": "guide/1.html",
    "revision": "4a31a2cd592f72532533d76d7a49cafd"
  },
  {
    "url": "guide/10.html",
    "revision": "f10ea6d700e6836eed9e6e2268dbd39f"
  },
  {
    "url": "guide/11.html",
    "revision": "eff75daa5040ee870197b485d4d48beb"
  },
  {
    "url": "guide/12.html",
    "revision": "10262a386353bc3869578a59b05f886d"
  },
  {
    "url": "guide/2.html",
    "revision": "1fd7e82655da8d3e112507ba47041980"
  },
  {
    "url": "guide/3.html",
    "revision": "5ef91cdc2956ec044cc953b237ae9eaa"
  },
  {
    "url": "guide/4.html",
    "revision": "b40f7a052b9ad57ae5f17e6dde93590a"
  },
  {
    "url": "guide/5.html",
    "revision": "34e002926ae8ae3fdb9e1cce2792440e"
  },
  {
    "url": "guide/6.html",
    "revision": "53fc44b9b7d2aaef1517cfb9a9d7d6bf"
  },
  {
    "url": "guide/7.html",
    "revision": "1a265ce68e59e305599fc3b7be5da8cc"
  },
  {
    "url": "guide/8.html",
    "revision": "71856437c092409321bea8a25514d104"
  },
  {
    "url": "guide/9.html",
    "revision": "27640d0e0ceb96b07ec12fffa05bece7"
  },
  {
    "url": "guide/index.html",
    "revision": "91827020ff3b0a1272e06926b53506fd"
  },
  {
    "url": "icon.png",
    "revision": "2d919c57a08edbbfdb80c55a01fb8f5a"
  },
  {
    "url": "index.html",
    "revision": "2a177e1bb25360a24cadcc251790f59f"
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

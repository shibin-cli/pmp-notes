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
    "revision": "58d616a81942dad6b06750ff238d2711"
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
    "url": "assets/js/10.3c66f00b.js",
    "revision": "7bf9a637cc57f6575e00b0f5067c9cdc"
  },
  {
    "url": "assets/js/11.dab63fc5.js",
    "revision": "40a4d769106b2e285f3a37ccf9706505"
  },
  {
    "url": "assets/js/12.91c35dba.js",
    "revision": "867f68d821835a9f9829b01bb6365921"
  },
  {
    "url": "assets/js/13.758057a1.js",
    "revision": "d4288446f339b21272a9d42c7c7a34a3"
  },
  {
    "url": "assets/js/14.ff9dfe9e.js",
    "revision": "90e72432ffb1c54775be899416b1c3e7"
  },
  {
    "url": "assets/js/15.e724d273.js",
    "revision": "cbe2f6f427b981295b6016fb86e8e51f"
  },
  {
    "url": "assets/js/16.489ea040.js",
    "revision": "acfd8f51c71231763ce92833334dee23"
  },
  {
    "url": "assets/js/17.8bc87714.js",
    "revision": "02b881f66f6ef210530ec36105672280"
  },
  {
    "url": "assets/js/18.752081f6.js",
    "revision": "aa9a04a4231e06f362c8baf038f950c4"
  },
  {
    "url": "assets/js/19.555deec7.js",
    "revision": "ba1323c9915a6b858735951f6824a1ee"
  },
  {
    "url": "assets/js/2.87f1499f.js",
    "revision": "263ec0206bf72b3c4e590a9e050ab122"
  },
  {
    "url": "assets/js/20.200967c8.js",
    "revision": "b91726ebb188d3236564a5c45bc073a0"
  },
  {
    "url": "assets/js/21.8b3c5a6f.js",
    "revision": "9b0132a9caf3cb7324929b19d379ddf3"
  },
  {
    "url": "assets/js/22.c89758f7.js",
    "revision": "565d49548f142606e305226815807d40"
  },
  {
    "url": "assets/js/23.c98d7ac4.js",
    "revision": "78afe3eafc8c8214acafd427cb385d59"
  },
  {
    "url": "assets/js/24.117000c6.js",
    "revision": "a87c6af2bdb39c1178d1129510852df1"
  },
  {
    "url": "assets/js/25.9bbd1c81.js",
    "revision": "19e3170c6a6d06d71c8fe41a80010b4c"
  },
  {
    "url": "assets/js/26.c1ba29bd.js",
    "revision": "52fe6de750ef9a1914cee5077a8b9e98"
  },
  {
    "url": "assets/js/27.3da2212d.js",
    "revision": "503815b14686cbe439349a03c8205bd2"
  },
  {
    "url": "assets/js/28.4724afe9.js",
    "revision": "28f3dc1f3a6da97a341182c89792d5e2"
  },
  {
    "url": "assets/js/29.9a43a0ab.js",
    "revision": "f0c996969346e6f82b97a608424946ae"
  },
  {
    "url": "assets/js/3.991a958f.js",
    "revision": "829c9b632c0b5fb2abb8e9e5bd74c4ae"
  },
  {
    "url": "assets/js/30.fb968bce.js",
    "revision": "3416dcfebe9ed1fa899417429ff329ea"
  },
  {
    "url": "assets/js/4.516ebbb4.js",
    "revision": "6bc34727ff041e50db5ffc60254dbe32"
  },
  {
    "url": "assets/js/5.f07c6f3f.js",
    "revision": "b18234710b2c71615dbba64d30273330"
  },
  {
    "url": "assets/js/6.f10650a1.js",
    "revision": "69da3244a239ba7732a2d814b2531b13"
  },
  {
    "url": "assets/js/7.06c65378.js",
    "revision": "e81e22d8440cf170826ef64ff9ea0cde"
  },
  {
    "url": "assets/js/8.add212f3.js",
    "revision": "720059101578cfe9b549d452786d1d80"
  },
  {
    "url": "assets/js/9.ab960028.js",
    "revision": "abe055dfb4894bf887c7fbcd5df16e45"
  },
  {
    "url": "assets/js/app.8a54413f.js",
    "revision": "595eccb88ce7e03710d856cb2d6a58c1"
  },
  {
    "url": "config.html",
    "revision": "028195e61d88e5f81f7ed4cb1fd46188"
  },
  {
    "url": "exercises/1.html",
    "revision": "84efa5224d6dfb3acaf9c607cf20d1f3"
  },
  {
    "url": "exercises/10.html",
    "revision": "56befb1991059f9e1f50e9e90055da98"
  },
  {
    "url": "exercises/11.html",
    "revision": "44e79d6ff5d8a004907951c2245f0590"
  },
  {
    "url": "exercises/4.html",
    "revision": "58f535462049fd339a330c28d603a9ef"
  },
  {
    "url": "exercises/5.html",
    "revision": "8e55d0ef3d03f7630eef8f922f83d4e6"
  },
  {
    "url": "exercises/6.html",
    "revision": "c6c28f5cbffcbd9b8b0e47798760b38e"
  },
  {
    "url": "exercises/7.html",
    "revision": "ef403a7b2517ee0ca73aba0f44bae539"
  },
  {
    "url": "exercises/8.html",
    "revision": "7359edfc2bbf1e43ff470d3e23167525"
  },
  {
    "url": "exercises/9.html",
    "revision": "3f243892f63b5b85879f4bd0e33eddef"
  },
  {
    "url": "guide/1.html",
    "revision": "0e074292bc7ba7fcccbf152884efbb8b"
  },
  {
    "url": "guide/10.html",
    "revision": "400abf078c5b412d96cec20d8ede3b14"
  },
  {
    "url": "guide/11.html",
    "revision": "f6dd433113f2ee4b6cf2490e40e7ae6d"
  },
  {
    "url": "guide/2.html",
    "revision": "45b7998c608c25a8ff4e35f0903bb966"
  },
  {
    "url": "guide/3.html",
    "revision": "515871cb028ee0182ec722360c913f2c"
  },
  {
    "url": "guide/4.html",
    "revision": "ae302809434c65d1085c803ba5762a4a"
  },
  {
    "url": "guide/5.html",
    "revision": "1f0c60fe4975147045c73027fa5fb98f"
  },
  {
    "url": "guide/6.html",
    "revision": "bebab2318c79c58f573f9e2d2c1400f7"
  },
  {
    "url": "guide/7.html",
    "revision": "9df3cf1528e014d922e5e3e8322887bc"
  },
  {
    "url": "guide/8.html",
    "revision": "6cee5dde7499cda5ed67bf36871b156d"
  },
  {
    "url": "guide/9.html",
    "revision": "25c1ba85c6114532f7cacfa5fedf6ad9"
  },
  {
    "url": "guide/index.html",
    "revision": "530237b70c57075af61ea2c1a5989ed5"
  },
  {
    "url": "icon.png",
    "revision": "2d919c57a08edbbfdb80c55a01fb8f5a"
  },
  {
    "url": "index.html",
    "revision": "4834b086c3dd83fd4d3593cd557614df"
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

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
    "revision": "ba7e48c49e3d143a5e577ecf0363ec49"
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
    "url": "assets/js/10.c1096c63.js",
    "revision": "717a7e10608484070db23cfd99a92f6c"
  },
  {
    "url": "assets/js/11.670b2581.js",
    "revision": "af83892ec34dd0de0b9fc5d28636c293"
  },
  {
    "url": "assets/js/12.3940039f.js",
    "revision": "478d98c24cb465d5dab2a41fc8c59f7b"
  },
  {
    "url": "assets/js/13.dd7f14e9.js",
    "revision": "86b32c5c189a7f14a828a587efa6e969"
  },
  {
    "url": "assets/js/14.74c37e97.js",
    "revision": "dba7c13f8311efd043fa83d4d2d136a0"
  },
  {
    "url": "assets/js/15.dce8fd8d.js",
    "revision": "78bc5bc523825d04c8c580fbba36ec61"
  },
  {
    "url": "assets/js/16.d97d6521.js",
    "revision": "8ac7eeaca3cf4d1e10d514aec2c152c3"
  },
  {
    "url": "assets/js/17.0222e415.js",
    "revision": "967dbe98a693e3efccee1ad0aede1dc4"
  },
  {
    "url": "assets/js/18.b71bd5e6.js",
    "revision": "322d320615b4c0cd9e7ca4e91a3b5214"
  },
  {
    "url": "assets/js/19.526dfcb7.js",
    "revision": "654aae4d1d598ba7d4fb80e5bc162d69"
  },
  {
    "url": "assets/js/2.3a9dd648.js",
    "revision": "b77fd7319cc11f1858ebdd7a0cfbd27f"
  },
  {
    "url": "assets/js/20.d2ddec06.js",
    "revision": "c97e10be720b33d255fa1b4ddf131e88"
  },
  {
    "url": "assets/js/21.86e979de.js",
    "revision": "924f6e15573d6bba4a2209042242a2c4"
  },
  {
    "url": "assets/js/22.89298940.js",
    "revision": "aeda7aa1b0c0c71eaefdbeb11206b266"
  },
  {
    "url": "assets/js/23.de72907f.js",
    "revision": "ce9d153f1483dc66ea4d1bd7f2f908be"
  },
  {
    "url": "assets/js/24.56281864.js",
    "revision": "9c10c4b51ee4193011ffff415b29fd52"
  },
  {
    "url": "assets/js/25.917bdcfe.js",
    "revision": "2e1213e33812f7420cead836104541a9"
  },
  {
    "url": "assets/js/26.c49461ac.js",
    "revision": "3c8361dc11659650f7883f45cb62b8f8"
  },
  {
    "url": "assets/js/27.1690c59b.js",
    "revision": "6686f3283693088c70497142d0f62676"
  },
  {
    "url": "assets/js/28.b4d3e899.js",
    "revision": "fd6ab91b42e7b695ae77f9a7d523f841"
  },
  {
    "url": "assets/js/29.a4cc2617.js",
    "revision": "10d1b42550a0715195fc8489dd9f0fad"
  },
  {
    "url": "assets/js/3.790d6e8b.js",
    "revision": "73f5409bbd35e962b13d1203cc6ed878"
  },
  {
    "url": "assets/js/30.d1164bf3.js",
    "revision": "4322d43fc1074d5ad3d1249b1cf4d302"
  },
  {
    "url": "assets/js/4.bb266247.js",
    "revision": "75f504a3414636d13fb306803314ea49"
  },
  {
    "url": "assets/js/5.5bc4ffa6.js",
    "revision": "e30a4a47d498ab3ea2f71660ee7045c3"
  },
  {
    "url": "assets/js/6.2e1c3d22.js",
    "revision": "5de9a5ada898cd3893a6e33793f4dbb2"
  },
  {
    "url": "assets/js/7.e9249ad6.js",
    "revision": "8d22e7e00f4f4976c4a24c04c0fe349b"
  },
  {
    "url": "assets/js/8.490e05dc.js",
    "revision": "080bf06e6a72250d0430432b80af1591"
  },
  {
    "url": "assets/js/9.b9e610b4.js",
    "revision": "92f9f53be76e1998c6c2b7c27f8e23bb"
  },
  {
    "url": "assets/js/app.c753ffcd.js",
    "revision": "c91861b637633261bfa784516e444e24"
  },
  {
    "url": "config.html",
    "revision": "9f87f5e9f5b5a9a6c62a386836776b44"
  },
  {
    "url": "exercises/1.html",
    "revision": "c3b11f4f581ab4230a20d6bac5c1232b"
  },
  {
    "url": "exercises/10.html",
    "revision": "bd4fdb2cd9a6f6698107b6ea4f026953"
  },
  {
    "url": "exercises/11.html",
    "revision": "fdae4ecb75a340a2819dc0856f3b8b2f"
  },
  {
    "url": "exercises/4.html",
    "revision": "c412f6152b73b4cf852d0dfc6e3b4710"
  },
  {
    "url": "exercises/5.html",
    "revision": "6bc1b2a2bfb93cca60aebf127ebd56c7"
  },
  {
    "url": "exercises/6.html",
    "revision": "5c1c6bee1a77cfc4136bf2f56b726bff"
  },
  {
    "url": "exercises/7.html",
    "revision": "473d243e36383390a87a5a148856666a"
  },
  {
    "url": "exercises/8.html",
    "revision": "b7fca3ce87587e030e36a05729018352"
  },
  {
    "url": "exercises/9.html",
    "revision": "6be6507b8f7aeb8c3d237eac6582b96c"
  },
  {
    "url": "guide/1.html",
    "revision": "aaf4dc56004ad1acc4e3320fe6e9ca33"
  },
  {
    "url": "guide/10.html",
    "revision": "92c172ec3cdc4c0702f7617fab530aa5"
  },
  {
    "url": "guide/11.html",
    "revision": "2bcfdccad312bf8eb8dc8b049423d081"
  },
  {
    "url": "guide/2.html",
    "revision": "d8cc84d025aecb2f2630521c6bd44bdd"
  },
  {
    "url": "guide/3.html",
    "revision": "38b8fb7c9523e338943b911317895337"
  },
  {
    "url": "guide/4.html",
    "revision": "bd666d8eb4fff31c5b6336e3759f2d7b"
  },
  {
    "url": "guide/5.html",
    "revision": "ce066e45c3a940a72c500038e1a5a2f1"
  },
  {
    "url": "guide/6.html",
    "revision": "759b487b822fa8b12bbb653671c28056"
  },
  {
    "url": "guide/7.html",
    "revision": "1d03ab2ffb27bd193d6dd362028c71fb"
  },
  {
    "url": "guide/8.html",
    "revision": "9648b5fb18b57b3f862b62a60d4820a4"
  },
  {
    "url": "guide/9.html",
    "revision": "e2d9690bb9dd9e70db6ecf7fb7d91d31"
  },
  {
    "url": "guide/index.html",
    "revision": "ae3e555bb85e3e9d7d3c9037dcb0484c"
  },
  {
    "url": "icon.png",
    "revision": "2d919c57a08edbbfdb80c55a01fb8f5a"
  },
  {
    "url": "index.html",
    "revision": "396004a46f449c43abd9fba944899171"
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

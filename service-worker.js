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
    "revision": "0128072575cb2305716ff7c31d0a5ac5"
  },
  {
    "url": "assets/css/0.styles.2fc8f7fb.css",
    "revision": "e18e06ada1bd119760077b21d2536466"
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
    "url": "assets/img/4.1.9c79e439.jpg",
    "revision": "9c79e43987555759b4d52ecc0d67c185"
  },
  {
    "url": "assets/img/4.2.71f3e706.jpg",
    "revision": "71f3e706f98dcb6306c0f4ebd5b21eb4"
  },
  {
    "url": "assets/img/4.3.8027a832.jpg",
    "revision": "8027a8325eca19a99857af86f8f6f60f"
  },
  {
    "url": "assets/img/4.4.1c6b66e1.jpg",
    "revision": "1c6b66e191e8f8bcfdc13fc792ea2723"
  },
  {
    "url": "assets/img/4.5.ff47577c.jpg",
    "revision": "ff47577cb58434732aff6e62acae0a06"
  },
  {
    "url": "assets/img/4.6.0233d15b.jpg",
    "revision": "0233d15b2e46fc9711026761da14ea60"
  },
  {
    "url": "assets/img/4.7.15d2158d.jpg",
    "revision": "15d2158d05dc82bf5da186f9992ea56c"
  },
  {
    "url": "assets/img/4.9351ae0a.jpg",
    "revision": "9351ae0a1057b4bfe194c7bf82d6bbb6"
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
    "url": "assets/img/55.a6bf162e.jpg",
    "revision": "a6bf162e860102f9653b15f2b1b4e85e"
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
    "url": "assets/img/6.1.099ef237.jpg",
    "revision": "099ef237af6280bff538038916cd5f2a"
  },
  {
    "url": "assets/img/6.2.2dcfbf3b.jpg",
    "revision": "2dcfbf3bc0242bb493a21457cb42e8b3"
  },
  {
    "url": "assets/img/6.3.ae54b1b7.jpg",
    "revision": "ae54b1b73275008f6665e1e8396e8cc1"
  },
  {
    "url": "assets/img/6.4.74fa44a4.jpg",
    "revision": "74fa44a4b42021caba4bee86363c0ba0"
  },
  {
    "url": "assets/img/6.5.215c5f18.jpg",
    "revision": "215c5f1846cd60a5f62ae483cb5265b0"
  },
  {
    "url": "assets/img/6.5eaea883.jpg",
    "revision": "5eaea88323b56fed4c39e2c76996fbdb"
  },
  {
    "url": "assets/img/6.6.ce22f7f1.jpg",
    "revision": "ce22f7f11263a46365d84cab8fd5f3d7"
  },
  {
    "url": "assets/img/6.a6bf162e.jpg",
    "revision": "a6bf162e860102f9653b15f2b1b4e85e"
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
    "url": "assets/img/7.1.5f814938.jpg",
    "revision": "5f814938c4894f2177e894f59e339206"
  },
  {
    "url": "assets/img/7.2.d964da25.jpg",
    "revision": "d964da25aa77940c344d5f492e7748d4"
  },
  {
    "url": "assets/img/7.3.79b958f9.jpg",
    "revision": "79b958f92a7dde956a92565b2921207d"
  },
  {
    "url": "assets/img/7.4.62c4d000.jpg",
    "revision": "62c4d000baa8173cc5d1ed5ce2e9847c"
  },
  {
    "url": "assets/img/7.b1e3fc5c.jpg",
    "revision": "b1e3fc5cd923183f0f78a156e1e2446d"
  },
  {
    "url": "assets/img/7.e195de3e.jpg",
    "revision": "e195de3e5c5d3f5c6fffde0b6a4a6776"
  },
  {
    "url": "assets/img/7.n.a6c76250.png",
    "revision": "a6c7625013d6a127ff46ff86ee685c5d"
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
    "url": "assets/img/9.1.2d001ee5.jpg",
    "revision": "2d001ee5b32f97fa40daa6435e71ce16"
  },
  {
    "url": "assets/img/9.1bac159c.jpg",
    "revision": "1bac159c334d0ad54613dea2a5f03191"
  },
  {
    "url": "assets/img/9.1bff1eb4.jpg",
    "revision": "1bff1eb4423e1a5c23599670a2fcf20e"
  },
  {
    "url": "assets/img/9.2.a79fab95.jpg",
    "revision": "a79fab954f04fba410fb28134ba01452"
  },
  {
    "url": "assets/img/9.3.67dfc167.jpg",
    "revision": "67dfc1673e81fc6d14392149121d5fdc"
  },
  {
    "url": "assets/img/9.4.54cadb74.jpg",
    "revision": "54cadb7403492e0d47eb8c617d2a5b1f"
  },
  {
    "url": "assets/img/9.5.b1cca6a4.jpg",
    "revision": "b1cca6a45b6df53cb182e36944518684"
  },
  {
    "url": "assets/img/9.6.f37601a8.jpg",
    "revision": "f37601a8077f83a35faaf3d06fe64213"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.fb73f888.js",
    "revision": "2d86a9765b6086d3724391ce98295109"
  },
  {
    "url": "assets/js/11.b6b8c18a.js",
    "revision": "4a902f2871509841a5874e9a0fe873e9"
  },
  {
    "url": "assets/js/12.f4b61254.js",
    "revision": "eafd7f6e22247906d0358f1bcfdf0e8b"
  },
  {
    "url": "assets/js/13.88a42f16.js",
    "revision": "80fb4c6bbfcc81a54304295c0b43811e"
  },
  {
    "url": "assets/js/14.8d73c9d3.js",
    "revision": "20e5b4d0ec33a01ba1388f04b33d08ea"
  },
  {
    "url": "assets/js/15.3379c81f.js",
    "revision": "3faae748af27c1b573eb30bb957be59d"
  },
  {
    "url": "assets/js/16.c67c81fd.js",
    "revision": "05ac87b337a2b548bc5e0760b9f860fc"
  },
  {
    "url": "assets/js/17.43297d41.js",
    "revision": "16b527628a35df6e4697c477bea959da"
  },
  {
    "url": "assets/js/18.7053ae11.js",
    "revision": "fa3f144e908d3eed73cffbce9c99ecbd"
  },
  {
    "url": "assets/js/19.e516b0e6.js",
    "revision": "66284c3eb822e2662429f3e2053efca8"
  },
  {
    "url": "assets/js/2.9cfc3d89.js",
    "revision": "c286efcb8c0af535e002fd5ada503616"
  },
  {
    "url": "assets/js/20.a3823f5a.js",
    "revision": "176ea464550c2994d19c5b892823e57f"
  },
  {
    "url": "assets/js/21.53da23c5.js",
    "revision": "abdbebb6977020f03b16863db57c8c70"
  },
  {
    "url": "assets/js/22.749d3dd0.js",
    "revision": "20377372179cdcc1ba747070806b972c"
  },
  {
    "url": "assets/js/23.ff12e6ae.js",
    "revision": "c7f99cfd13d01421328e259079635ac3"
  },
  {
    "url": "assets/js/24.abab1d71.js",
    "revision": "bfc3b3196129e8d46a86834d36c3a19e"
  },
  {
    "url": "assets/js/25.8697a27c.js",
    "revision": "bace3fd4179877b43fdf2b66f82250b9"
  },
  {
    "url": "assets/js/26.0f996b8c.js",
    "revision": "2db0b969b231c81722ec35e491cbbf27"
  },
  {
    "url": "assets/js/27.6c207244.js",
    "revision": "6de8b3b126efcd009fe645378408a082"
  },
  {
    "url": "assets/js/28.7b3e1479.js",
    "revision": "0328fdf1075cfe40aaca905c57f03c8f"
  },
  {
    "url": "assets/js/29.dba3a8f1.js",
    "revision": "88ef35e6b655be665aa66812d3a77c09"
  },
  {
    "url": "assets/js/3.c4511ca3.js",
    "revision": "ec4296ee002594476d0c37bd40f54895"
  },
  {
    "url": "assets/js/30.45a01876.js",
    "revision": "5c701e39207000df46e25052cc8862bd"
  },
  {
    "url": "assets/js/31.e69b158a.js",
    "revision": "5f80a50e87e2af948df73c3cea9edb0b"
  },
  {
    "url": "assets/js/32.e5eb54d0.js",
    "revision": "1b8f77862213c94d9ce8758219c180d1"
  },
  {
    "url": "assets/js/33.8dc0886f.js",
    "revision": "d478009f059024504e8ad61c34cbaee3"
  },
  {
    "url": "assets/js/34.b724421c.js",
    "revision": "eb567ff589ca348990ec3ad90b048e09"
  },
  {
    "url": "assets/js/35.6f165120.js",
    "revision": "e5a855972af6716313fb9e944c75f010"
  },
  {
    "url": "assets/js/36.dec359dd.js",
    "revision": "8150e8581f92e2ea9baf9143e8de412d"
  },
  {
    "url": "assets/js/37.7983eae0.js",
    "revision": "6eef0a81b0af3f546aaac8290c9f6a8b"
  },
  {
    "url": "assets/js/38.75cdecc4.js",
    "revision": "35df31e9dcfa1b0fd6d97d3d96eb7cdb"
  },
  {
    "url": "assets/js/39.034db16a.js",
    "revision": "dc3b45145a8034e8707221987b9e1fd8"
  },
  {
    "url": "assets/js/4.2b7612dd.js",
    "revision": "279b6f0d7bb7b2d79c7b60fbebdf8a0f"
  },
  {
    "url": "assets/js/40.8b502838.js",
    "revision": "14fc20c9b3b3e88b7fac32e3a46296ac"
  },
  {
    "url": "assets/js/41.b987064b.js",
    "revision": "66c1e67430f950de9ffbd957704e1057"
  },
  {
    "url": "assets/js/42.ec79ed14.js",
    "revision": "0fd0f93845fd173db167c48384b362be"
  },
  {
    "url": "assets/js/43.04e7dbe4.js",
    "revision": "d0789c51fed0c9a71a0491d497b79bfe"
  },
  {
    "url": "assets/js/44.bc7da14e.js",
    "revision": "7d200f69cc225031c5a6cd954516c04f"
  },
  {
    "url": "assets/js/45.888c892b.js",
    "revision": "8a5474b101ee0f209938aa0f17b15c7d"
  },
  {
    "url": "assets/js/46.92d8a140.js",
    "revision": "f1c4696faf9b9600f27d4377db6684ad"
  },
  {
    "url": "assets/js/5.52a9ba54.js",
    "revision": "01dbda07d48fe16c546de2182464a2ef"
  },
  {
    "url": "assets/js/6.d0393866.js",
    "revision": "f15fef8600bf337741bb422a9f44a2ef"
  },
  {
    "url": "assets/js/7.7411a564.js",
    "revision": "cc2e40a1606c5d6cbfda0365fd9e9c7c"
  },
  {
    "url": "assets/js/8.3a58282e.js",
    "revision": "2e72f8b3daa329934e7ffac13a011c1d"
  },
  {
    "url": "assets/js/9.b013bb29.js",
    "revision": "f59a81fff2421af3b4b7a447627682ac"
  },
  {
    "url": "assets/js/app.559bc9b7.js",
    "revision": "83421ad28df949af5440348be853acbf"
  },
  {
    "url": "config.html",
    "revision": "27f2efeed09afc7fe3a21f0d6de918ed"
  },
  {
    "url": "exercises/1.html",
    "revision": "c9480278d70e0be6084b46adb111ac8a"
  },
  {
    "url": "exercises/10.html",
    "revision": "1d450dd9817df55fa11f385c91f2a42e"
  },
  {
    "url": "exercises/11.html",
    "revision": "54200fb6c45acdbbb7115e59889a75a6"
  },
  {
    "url": "exercises/12.html",
    "revision": "553c617e351cb0cac9b5bc1eb1e28aa3"
  },
  {
    "url": "exercises/13.html",
    "revision": "fe61a4d124e7187936140369d0ce3ea9"
  },
  {
    "url": "exercises/4.html",
    "revision": "c61b0f0dc7fd2693aa95d8220523f407"
  },
  {
    "url": "exercises/5.html",
    "revision": "4482ab26d3844cec61ae2e5fdbf40a9c"
  },
  {
    "url": "exercises/6.html",
    "revision": "1304c2602b7415efccb253762a5dd191"
  },
  {
    "url": "exercises/7.html",
    "revision": "a509c2d87f750e76464140bd36ae6f83"
  },
  {
    "url": "exercises/8.html",
    "revision": "5fc5ce14c83bd8dea0012de2fc008e81"
  },
  {
    "url": "exercises/9.html",
    "revision": "6da9e7731345b3be5736e942bf5184fe"
  },
  {
    "url": "guide/1.html",
    "revision": "f93cbb594e8452e05875834faa9c7a07"
  },
  {
    "url": "guide/10.html",
    "revision": "dfe1db19bc5daca53e20505ce179d7a6"
  },
  {
    "url": "guide/11.html",
    "revision": "98ff759660ddb928ca26a68ba07dd622"
  },
  {
    "url": "guide/12.html",
    "revision": "2b34db2070412c40228b30a48c10c06b"
  },
  {
    "url": "guide/13.html",
    "revision": "a657bb143f5a64933f636637886065de"
  },
  {
    "url": "guide/2.html",
    "revision": "f9c3b06df9febd792544771bd46b0b22"
  },
  {
    "url": "guide/3.html",
    "revision": "6413e6ccbbd2f50dee02b11199bd06c0"
  },
  {
    "url": "guide/4.html",
    "revision": "0bcb31d0b5275d3dad0eb43e98a93128"
  },
  {
    "url": "guide/5.html",
    "revision": "e7d6e8a7b943b26f1910c22314eef7e2"
  },
  {
    "url": "guide/6.html",
    "revision": "565994ea84fce57abab268bbdc1a1667"
  },
  {
    "url": "guide/7.html",
    "revision": "c27e211fa38b886b0f6e1017d0e3a924"
  },
  {
    "url": "guide/8.html",
    "revision": "8a5cf206bd4569e304ea5de0a2ab7939"
  },
  {
    "url": "guide/9.html",
    "revision": "c3b750bf764ff6b4256c8ebfeb60c5f5"
  },
  {
    "url": "guide/index.html",
    "revision": "77756e9bd71bc787b785d78f39fc7c48"
  },
  {
    "url": "icon.png",
    "revision": "2d919c57a08edbbfdb80c55a01fb8f5a"
  },
  {
    "url": "index.html",
    "revision": "64d1e420038fb97a28aa388ae0766a20"
  },
  {
    "url": "pmbok/1.html",
    "revision": "15eff09288565294e9857bad8db1c6f7"
  },
  {
    "url": "pmbok/10.html",
    "revision": "5c8f83e32badbbba3bcbd9044cf328b1"
  },
  {
    "url": "pmbok/11.html",
    "revision": "a0bdb8d4e2ef86f719fb47747509eb0a"
  },
  {
    "url": "pmbok/12.html",
    "revision": "0547ad52f1ab9e7246bf0d954edd8257"
  },
  {
    "url": "pmbok/13.html",
    "revision": "2e548b52b3f07c46452aa1b00bbdeb67"
  },
  {
    "url": "pmbok/4.html",
    "revision": "d28cc9b78da7a8d7efd26f96b70db163"
  },
  {
    "url": "pmbok/5.html",
    "revision": "a3f10cd53904ce00e2599dfd1b1cf41f"
  },
  {
    "url": "pmbok/6.html",
    "revision": "f44e4ed0ba12f5584e6a4d05ad01a40b"
  },
  {
    "url": "pmbok/7.html",
    "revision": "1dd06d2f7df0670e8a7cf0d2dcbdb15a"
  },
  {
    "url": "pmbok/8.html",
    "revision": "13da891acb93b9a28ac992c096fa838c"
  },
  {
    "url": "pmbok/9.html",
    "revision": "09a26c83c77163ad149d91007cc1ac12"
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

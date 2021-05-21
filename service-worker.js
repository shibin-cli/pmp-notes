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
    "revision": "810c7ecd2518069a69eeb8fb0b801bd0"
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
    "url": "assets/js/10.c843d354.js",
    "revision": "5f8c039ea546e94e5a64b90bddea7463"
  },
  {
    "url": "assets/js/11.6439f96e.js",
    "revision": "465861774b6e3de165f5bb92ff43c5ba"
  },
  {
    "url": "assets/js/12.54217174.js",
    "revision": "7ced5505577cecdc4d7a9f822fba7aa9"
  },
  {
    "url": "assets/js/13.90c140d0.js",
    "revision": "1f0a465af3abd4099145a5928e491266"
  },
  {
    "url": "assets/js/14.628fbcdf.js",
    "revision": "444eb550ecdb705f2585b2df07bb0e3d"
  },
  {
    "url": "assets/js/15.5d3d3c59.js",
    "revision": "dabc863a70ec0196c90c646e7971d953"
  },
  {
    "url": "assets/js/16.9c6ec376.js",
    "revision": "72b09765fcac63e74d6b1f8f3c13b6e1"
  },
  {
    "url": "assets/js/17.363d2f3c.js",
    "revision": "a08dc62055cd952a05224f4e0a014304"
  },
  {
    "url": "assets/js/18.87920021.js",
    "revision": "68da5c38ca9331f9283f0efc42426139"
  },
  {
    "url": "assets/js/19.a76768e6.js",
    "revision": "961dd66d7b32106728cedd37be89b8d6"
  },
  {
    "url": "assets/js/2.3d5ee923.js",
    "revision": "c7d424ddb7d6734d2d6696ff052cd23d"
  },
  {
    "url": "assets/js/20.8e354b7a.js",
    "revision": "c1afd1ea2d036c84216ce150369495b5"
  },
  {
    "url": "assets/js/21.b3df9cf2.js",
    "revision": "1533d490f7698981e35c6f6881b4683e"
  },
  {
    "url": "assets/js/22.8baff1e6.js",
    "revision": "9711f1bdd1a87691fe3ff91e536f9dc1"
  },
  {
    "url": "assets/js/23.cdf60bd5.js",
    "revision": "d50768cbadb1c606582acb82d3f95b44"
  },
  {
    "url": "assets/js/24.99132474.js",
    "revision": "51a7beb860972542e03cc32a3a23267c"
  },
  {
    "url": "assets/js/25.97882654.js",
    "revision": "e7963d12c84f9948a73a0b0429adb4d1"
  },
  {
    "url": "assets/js/26.5a05851b.js",
    "revision": "496a60cd890c25e3ecccb7ddd2fe7643"
  },
  {
    "url": "assets/js/27.0971062f.js",
    "revision": "1c55a9647e2c369d700247fe6bec509c"
  },
  {
    "url": "assets/js/28.59ba5e50.js",
    "revision": "17a6e5bbf8abd8be8cfd125cff99a969"
  },
  {
    "url": "assets/js/29.28977fb5.js",
    "revision": "670aa2963ad86b1ab8d4e3af8ec085ec"
  },
  {
    "url": "assets/js/3.543f42ba.js",
    "revision": "89fd511533d5f513c0622dc1630b6f4c"
  },
  {
    "url": "assets/js/30.2ebc733e.js",
    "revision": "f8ffbfa3b0ddb3903d0b4be06498d30d"
  },
  {
    "url": "assets/js/31.19cf2d81.js",
    "revision": "d1dbdd59eee61a942f60daaea4681cad"
  },
  {
    "url": "assets/js/32.9bd1d095.js",
    "revision": "5fa0b19a61ae046e60b8eafcff74647c"
  },
  {
    "url": "assets/js/33.281fbc47.js",
    "revision": "13857749cbb814a6f2ef566651fada44"
  },
  {
    "url": "assets/js/34.4a149cd4.js",
    "revision": "2b3da18bbd9174ee815e36161d7bf10b"
  },
  {
    "url": "assets/js/35.54fe19d0.js",
    "revision": "ec518fc2e1cacccab7e33152bc5914a1"
  },
  {
    "url": "assets/js/36.ed18b4f9.js",
    "revision": "a7c0ce5649e9ae6fb4e7b944386d3a91"
  },
  {
    "url": "assets/js/37.ac897282.js",
    "revision": "c6beea92d44e379b3766870509caaf84"
  },
  {
    "url": "assets/js/38.a7538791.js",
    "revision": "416c84635b9be2e21784c94f11b292e9"
  },
  {
    "url": "assets/js/39.351f3df1.js",
    "revision": "1b53e54d19d6731ada8377222ca85ca2"
  },
  {
    "url": "assets/js/4.c7866577.js",
    "revision": "f4bd6a050188843012d3871c17986cae"
  },
  {
    "url": "assets/js/40.7f794f6c.js",
    "revision": "a9dc3fe6cb7e2f4d5fab679de5ad582a"
  },
  {
    "url": "assets/js/41.a16d5bfe.js",
    "revision": "8d8e87226053ee2afced2d1bb877d1d2"
  },
  {
    "url": "assets/js/42.c2f3b95b.js",
    "revision": "9846143361d23819c4bf9942f7b43fdb"
  },
  {
    "url": "assets/js/43.bb91d184.js",
    "revision": "966836848b3c4c0e0d6da9892649523c"
  },
  {
    "url": "assets/js/44.552af487.js",
    "revision": "f0100d7ca87e92e543c02849afc97a0f"
  },
  {
    "url": "assets/js/45.b39aed41.js",
    "revision": "ea0eee3774bb6f51ba4425b0d01fa6b5"
  },
  {
    "url": "assets/js/46.9e1717a6.js",
    "revision": "47601eec6ffaa43842be1110130a924d"
  },
  {
    "url": "assets/js/5.b3ae676f.js",
    "revision": "149c533bf643967c128bde800a5825c7"
  },
  {
    "url": "assets/js/6.8fb2eccf.js",
    "revision": "1095c100386d7bc010c8e71bd9a543b8"
  },
  {
    "url": "assets/js/7.bf4152fc.js",
    "revision": "0161c87467860bc1a5ad10d250ea614f"
  },
  {
    "url": "assets/js/8.36dca2e3.js",
    "revision": "b360f18669a52c1a3dd78ded9b6bf6fe"
  },
  {
    "url": "assets/js/9.2d115a8d.js",
    "revision": "7737338dcd2e6f0e0b2854ca5551d9c4"
  },
  {
    "url": "assets/js/app.e308f894.js",
    "revision": "fd5a4853c101bfd8d6e69f72f8a19aaa"
  },
  {
    "url": "config.html",
    "revision": "c3b841f84fc259fb74199b04bb773852"
  },
  {
    "url": "exercises/1.html",
    "revision": "32a61ff749cfee7b2c4e76107d1f4114"
  },
  {
    "url": "exercises/10.html",
    "revision": "8921a53e5bbd7150951da5a3b921cfe3"
  },
  {
    "url": "exercises/11.html",
    "revision": "f2e67e94c340af00f745c4aeec2be38d"
  },
  {
    "url": "exercises/12.html",
    "revision": "041e6d834b62b3dcafc861b4152e8ccd"
  },
  {
    "url": "exercises/13.html",
    "revision": "37304af41f1291f2cf8ff269e7b3a7f9"
  },
  {
    "url": "exercises/4.html",
    "revision": "5216867c2adc4c0aba05b6d11a3dedc7"
  },
  {
    "url": "exercises/5.html",
    "revision": "d6206273e2b319e83734dda27a83d4a3"
  },
  {
    "url": "exercises/6.html",
    "revision": "c1d41fc23f42cd2c3ab17c968e1a3113"
  },
  {
    "url": "exercises/7.html",
    "revision": "631ffc3e8c2a49fa2f67c57b37ee35ec"
  },
  {
    "url": "exercises/8.html",
    "revision": "a2abb27ecf48d09734758f1144f51933"
  },
  {
    "url": "exercises/9.html",
    "revision": "f8df17077f2682fa39fc0382b596e8c2"
  },
  {
    "url": "guide/1.html",
    "revision": "4be73f03e845872efd1dbf3988b0e3ab"
  },
  {
    "url": "guide/10.html",
    "revision": "fac5957c744057b61367de3dd39bbefe"
  },
  {
    "url": "guide/11.html",
    "revision": "689063ef595c76ce624ae999c0050041"
  },
  {
    "url": "guide/12.html",
    "revision": "a4bc709e2057d88e2491c61935d1451f"
  },
  {
    "url": "guide/13.html",
    "revision": "55e3dd8ab7a21b70ed28e6e608926cdc"
  },
  {
    "url": "guide/2.html",
    "revision": "b30c9a69ba19e6d6267e680bb5a83e4c"
  },
  {
    "url": "guide/3.html",
    "revision": "b00d0546331d2f24a0143acca966602b"
  },
  {
    "url": "guide/4.html",
    "revision": "4abbad59b27f479eed1528ef6ef306cc"
  },
  {
    "url": "guide/5.html",
    "revision": "7a9ce71ba105efbd1961c0afe3ffd69b"
  },
  {
    "url": "guide/6.html",
    "revision": "baa9caa7966db45b492efc1685642959"
  },
  {
    "url": "guide/7.html",
    "revision": "68165c29d57f27a5db5b1954d0090a78"
  },
  {
    "url": "guide/8.html",
    "revision": "c0e6c120bb37448e980e75de3e0df42b"
  },
  {
    "url": "guide/9.html",
    "revision": "b885c47d730220addc3b1c47b31802ca"
  },
  {
    "url": "guide/index.html",
    "revision": "fe8eaffc0dd7894ff2e1bb9884a45348"
  },
  {
    "url": "icon.png",
    "revision": "2d919c57a08edbbfdb80c55a01fb8f5a"
  },
  {
    "url": "index.html",
    "revision": "2bf1d0d004b5c721cfad0b84db0638ad"
  },
  {
    "url": "pmbok/1.html",
    "revision": "cb52f2da1e083602140e921b9a85f7e5"
  },
  {
    "url": "pmbok/10.html",
    "revision": "7997d2b58ecc3b32cff96cf52f1f3799"
  },
  {
    "url": "pmbok/11.html",
    "revision": "b6b3440f3ff8caeba02d55ff3e00adcf"
  },
  {
    "url": "pmbok/12.html",
    "revision": "62cb5959107462a75d4f098dcfe448b0"
  },
  {
    "url": "pmbok/13.html",
    "revision": "1d5379c2df422475cb44854ef0c9f549"
  },
  {
    "url": "pmbok/4.html",
    "revision": "7718d4f1be6a22650612eec6bde39585"
  },
  {
    "url": "pmbok/5.html",
    "revision": "71522bc1ab39c09374aa43df92979d3f"
  },
  {
    "url": "pmbok/6.html",
    "revision": "53bdfe1e06420820e9061818900c952a"
  },
  {
    "url": "pmbok/7.html",
    "revision": "9259c196668650b38e230fa4f9f8728b"
  },
  {
    "url": "pmbok/8.html",
    "revision": "616ecd88a639f0ae14ee0556d0570187"
  },
  {
    "url": "pmbok/9.html",
    "revision": "6776a78c784b5215ba0ea8ccf79062d9"
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

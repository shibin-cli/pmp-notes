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
    "revision": "1f27479af05a1de0b0bb691f1bc57c1d"
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
    "url": "assets/img/8-1.4190d829.jpg",
    "revision": "4190d8290c3aa2a3a2a3d4f7e112b569"
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
    "url": "assets/img/8.1.47496318.jpg",
    "revision": "474963184a2e664dae9ef00ccab2265f"
  },
  {
    "url": "assets/img/8.2.c4b2b8e2.jpg",
    "revision": "c4b2b8e220ea200751432aacf6a72e4e"
  },
  {
    "url": "assets/img/8.3.a27d2ff3.jpg",
    "revision": "a27d2ff3f2d9d32ab3547e45efa65b73"
  },
  {
    "url": "assets/img/8.870db7e9.jpg",
    "revision": "870db7e9e9033bbfebd11312c966a050"
  },
  {
    "url": "assets/img/8.9e9316b0.jpg",
    "revision": "9e9316b06e0ef985ec82c5340d6b68cc"
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
    "url": "assets/js/10.04869d7e.js",
    "revision": "7ade95cc2c792f9ac81133ed7fa4b6e5"
  },
  {
    "url": "assets/js/11.132976fa.js",
    "revision": "bda3d55a701805493729d8fab9981923"
  },
  {
    "url": "assets/js/12.56852622.js",
    "revision": "4c0c0fe1aaa81f7af64ce063db57cf4a"
  },
  {
    "url": "assets/js/13.11a79cfa.js",
    "revision": "d2012d5896b30207e5f7085aa471a1a8"
  },
  {
    "url": "assets/js/14.b4c50d23.js",
    "revision": "0b6b11b0ffe8d6853e62283385d3cecc"
  },
  {
    "url": "assets/js/15.65922674.js",
    "revision": "a6eae2e6e165943f2b878b03d36b333b"
  },
  {
    "url": "assets/js/16.4720b353.js",
    "revision": "62b84c23a53f59d4ae4a45c095e9f5d6"
  },
  {
    "url": "assets/js/17.b25834f8.js",
    "revision": "297f6d6189d0046223b706b1f8d485f5"
  },
  {
    "url": "assets/js/18.11bf10f1.js",
    "revision": "213e6e84b6725fe818dd8ae03d8b9042"
  },
  {
    "url": "assets/js/19.e9209c13.js",
    "revision": "6dfab781ffd0949c659f7bf0af0922a9"
  },
  {
    "url": "assets/js/2.8df01c2d.js",
    "revision": "a11d3a1f8767c40dfc2759ec9d047eb8"
  },
  {
    "url": "assets/js/20.7c3d1cbc.js",
    "revision": "f0cb74f4cf8405a984b47914475abffa"
  },
  {
    "url": "assets/js/21.4c3b7044.js",
    "revision": "09900165ec801f0d25b3d012548cdf16"
  },
  {
    "url": "assets/js/22.451fb024.js",
    "revision": "f5780b89dc7970913c5c92bd2d2962ca"
  },
  {
    "url": "assets/js/23.1e9d4478.js",
    "revision": "c4a2c07702a677207bbee6d900649fff"
  },
  {
    "url": "assets/js/24.b9046324.js",
    "revision": "c091cb72348d353a65d620226940af3a"
  },
  {
    "url": "assets/js/25.2d2c17a7.js",
    "revision": "cc8c1b09c478b3e632f8a5addc094947"
  },
  {
    "url": "assets/js/26.ab55bcf7.js",
    "revision": "ff6fe063486d66fa0fcf0fa289e59962"
  },
  {
    "url": "assets/js/27.58563ff5.js",
    "revision": "77f3ac93dcbdc55030f979349e47822d"
  },
  {
    "url": "assets/js/28.53193af9.js",
    "revision": "51ec9eb12b8e09ad3b7c7da84f7b60d3"
  },
  {
    "url": "assets/js/29.df8c1e39.js",
    "revision": "4fe2f4dbaeba72db59c1d543f4c13061"
  },
  {
    "url": "assets/js/3.2257968a.js",
    "revision": "443b39968a84434cc19be3b34596b4d4"
  },
  {
    "url": "assets/js/30.577f3936.js",
    "revision": "e840b3285978c920e2ae56a09128f2ba"
  },
  {
    "url": "assets/js/31.7c8165ac.js",
    "revision": "739456fb5debcff557f185b3a0c0a653"
  },
  {
    "url": "assets/js/32.53708560.js",
    "revision": "9d5760a055acd03a519d91d212ef2c3a"
  },
  {
    "url": "assets/js/33.bcd245e4.js",
    "revision": "2508b62845e8ebd046b461752eeaac4f"
  },
  {
    "url": "assets/js/34.2e990c58.js",
    "revision": "e23a757f761057c72a172b6e99440d4b"
  },
  {
    "url": "assets/js/35.b420d105.js",
    "revision": "a548ef9b34b996591a5a7014b5a8441f"
  },
  {
    "url": "assets/js/36.91a3e805.js",
    "revision": "699c092904f2093f0cfe96cca2fa48a3"
  },
  {
    "url": "assets/js/37.859db24e.js",
    "revision": "08a062bdb5bdf2e0b2ba02b2e8bdc713"
  },
  {
    "url": "assets/js/38.f5a2abb7.js",
    "revision": "4f9991854803bcf8a27e141b04d15a53"
  },
  {
    "url": "assets/js/39.bca0e9ae.js",
    "revision": "892afb63646033953ff96040e30c10da"
  },
  {
    "url": "assets/js/4.c9b22521.js",
    "revision": "dbde19c2939f9f5b1e2aeb469b571ecb"
  },
  {
    "url": "assets/js/40.cfca3390.js",
    "revision": "d5685b52e9ea1eae87f60bdb3c0fd0ac"
  },
  {
    "url": "assets/js/41.912021e6.js",
    "revision": "0ccdb0fca6111282d82ee8bb02d7c9ba"
  },
  {
    "url": "assets/js/42.b5731e48.js",
    "revision": "2b2a22deb42354c147bc474b805193de"
  },
  {
    "url": "assets/js/43.bd24ed75.js",
    "revision": "d37d1c249c3c0d2625bfe6ed37870ec7"
  },
  {
    "url": "assets/js/44.2420ff1b.js",
    "revision": "ab9851168337b7e5634588fd2f01eb15"
  },
  {
    "url": "assets/js/45.2d56b9df.js",
    "revision": "d4fbddb046c43a514e82e78c3e18c651"
  },
  {
    "url": "assets/js/46.6eb132e0.js",
    "revision": "78ac5e0b49981d7e71699ae7eb227231"
  },
  {
    "url": "assets/js/5.cb8d40b3.js",
    "revision": "3a6414c3e5cf7ad9f8c425cd4b177540"
  },
  {
    "url": "assets/js/6.959196cb.js",
    "revision": "1ca73ec3cb8d603e4f859304ebc33661"
  },
  {
    "url": "assets/js/7.f1037ebd.js",
    "revision": "32aca03085138093827f7f0316e69bf6"
  },
  {
    "url": "assets/js/8.4503526e.js",
    "revision": "ccd8dcd84a0568e94e3119bcecccad99"
  },
  {
    "url": "assets/js/9.30668118.js",
    "revision": "b793ca1e7cdeeb8f9da484932c3602c3"
  },
  {
    "url": "assets/js/app.59a5c4c8.js",
    "revision": "e96d3f1a601e239e3e582b300227d13f"
  },
  {
    "url": "config.html",
    "revision": "69d562ca830c0810a148802026a608fb"
  },
  {
    "url": "exercises/1.html",
    "revision": "7d09caf13a0b84fbb22bb0a86cd4870b"
  },
  {
    "url": "exercises/10.html",
    "revision": "53d3353b4373a2fd6aafeb33bad9382a"
  },
  {
    "url": "exercises/11.html",
    "revision": "f1bc3d7dbe1d4b25bff3ee97a3e86553"
  },
  {
    "url": "exercises/12.html",
    "revision": "d5fe266a721dcf5c3a2b8c4d962180ee"
  },
  {
    "url": "exercises/13.html",
    "revision": "61b388321e10fda1353a39b00fb92ff8"
  },
  {
    "url": "exercises/4.html",
    "revision": "1888a6483d6b5cf68143cb6651c27f39"
  },
  {
    "url": "exercises/5.html",
    "revision": "a4dc92dc5b1693ed01da57d48b77c709"
  },
  {
    "url": "exercises/6.html",
    "revision": "3f2696aaf406b32f03ea29f234ba3fe2"
  },
  {
    "url": "exercises/7.html",
    "revision": "c7d55e95c5f043239cb0c3116b4e420f"
  },
  {
    "url": "exercises/8.html",
    "revision": "1a83fb2c733d133f5bf04b4069772fb2"
  },
  {
    "url": "exercises/9.html",
    "revision": "1c8f949658fd2131fa8b1d31df613fc5"
  },
  {
    "url": "guide/1.html",
    "revision": "d85ec335cb718f51e48531499b0ba25a"
  },
  {
    "url": "guide/10.html",
    "revision": "aaf24e7cd746e6f888a55a940ad28268"
  },
  {
    "url": "guide/11.html",
    "revision": "aab7db05837fbe654c7e14509a0227fc"
  },
  {
    "url": "guide/12.html",
    "revision": "7a865641d71a50f4a031f93a61762858"
  },
  {
    "url": "guide/13.html",
    "revision": "30eb8cfb17905ce8aae0aa1a9d8909a9"
  },
  {
    "url": "guide/2.html",
    "revision": "fcc6b67d903a6c09e5dfa91a2a1938f4"
  },
  {
    "url": "guide/3.html",
    "revision": "8e11dd0896e33b6873742e2677746cb9"
  },
  {
    "url": "guide/4.html",
    "revision": "6ca7a1c28530417ea7b3b36c9bcffcea"
  },
  {
    "url": "guide/5.html",
    "revision": "9ea1b6cfd53eac313017cff002d6d839"
  },
  {
    "url": "guide/6.html",
    "revision": "4fd5d60462e4300f6102e8a386531c41"
  },
  {
    "url": "guide/7.html",
    "revision": "bec3216e70432e999f3f54c369921c39"
  },
  {
    "url": "guide/8.html",
    "revision": "cf313627f99cb8bf945e489b6d258c20"
  },
  {
    "url": "guide/9.html",
    "revision": "8a80fb64934a5933128e245c8343dafa"
  },
  {
    "url": "guide/index.html",
    "revision": "b0fdc6af1e079c28511f0b6a954c9611"
  },
  {
    "url": "icon.png",
    "revision": "2d919c57a08edbbfdb80c55a01fb8f5a"
  },
  {
    "url": "index.html",
    "revision": "83b6b9f3071b640f77ad0d66a001df03"
  },
  {
    "url": "pmbok/1.html",
    "revision": "e23a4286b0cb8ac481964ad9398a46c7"
  },
  {
    "url": "pmbok/10.html",
    "revision": "a7761a077e0e6e0c128543127134daa1"
  },
  {
    "url": "pmbok/11.html",
    "revision": "1b48172b11274a3dc7600c75a45a349f"
  },
  {
    "url": "pmbok/12.html",
    "revision": "bb5ece7103da3538299600112287e7ba"
  },
  {
    "url": "pmbok/13.html",
    "revision": "e1265142ea15062a94ba71e4fafb499d"
  },
  {
    "url": "pmbok/4.html",
    "revision": "04f53bd0f785d98fe666313131e444f8"
  },
  {
    "url": "pmbok/5.html",
    "revision": "d85f6b79314d9fe0bcce7bb6a40ff882"
  },
  {
    "url": "pmbok/6.html",
    "revision": "02f7c054ed89d68e089544dc56b4fc9e"
  },
  {
    "url": "pmbok/7.html",
    "revision": "de5e6d588d7643c7453b3263718026e2"
  },
  {
    "url": "pmbok/8.html",
    "revision": "76023d13bec0b1e6e712cfd93467659f"
  },
  {
    "url": "pmbok/9.html",
    "revision": "8f51341c5c85e73993ebd4cd67755b8b"
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

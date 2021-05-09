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
    "revision": "a5c96e013a3ea5d01653f6bc7d9297cd"
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
    "url": "assets/js/10.b0c9d119.js",
    "revision": "4ebb8fffe0587797cc5d73897d6067e9"
  },
  {
    "url": "assets/js/11.35c95b7d.js",
    "revision": "ab411389e837f6ff46cbe73e618c7e1d"
  },
  {
    "url": "assets/js/12.d23395bf.js",
    "revision": "17aa27cb538d69d9a75499c9c486ad2c"
  },
  {
    "url": "assets/js/13.f52774ba.js",
    "revision": "42fdcf47324c05b4363fcacdc3cb27d3"
  },
  {
    "url": "assets/js/14.a665afc1.js",
    "revision": "93376f982e379369d6769680d487a22a"
  },
  {
    "url": "assets/js/15.92554584.js",
    "revision": "3b38ce641c323f96ffef432ec992f9d2"
  },
  {
    "url": "assets/js/16.8c641334.js",
    "revision": "b2145324e948394c3f7d77f98b9ae007"
  },
  {
    "url": "assets/js/17.e57e8b07.js",
    "revision": "f945a86aac37d564fb20aaef12100e1c"
  },
  {
    "url": "assets/js/18.0576d094.js",
    "revision": "a3d4d27439d4ea4330579465488fec95"
  },
  {
    "url": "assets/js/19.3106f1ef.js",
    "revision": "16a894bf8dec0ce55c9756e68f1108ca"
  },
  {
    "url": "assets/js/2.9e1824d7.js",
    "revision": "e2c721e4f06e3fa361fdba65c1527458"
  },
  {
    "url": "assets/js/20.e1c384fa.js",
    "revision": "38e134b52ae027f369fc6443d8981237"
  },
  {
    "url": "assets/js/21.d493d72f.js",
    "revision": "74f06caff6514547dd34247aee883252"
  },
  {
    "url": "assets/js/22.2c154c23.js",
    "revision": "cf4e237ecf3a3fab5b79c2de77906bb2"
  },
  {
    "url": "assets/js/23.be414609.js",
    "revision": "587c3811f0a53863aff3747c922d7234"
  },
  {
    "url": "assets/js/24.a12e086f.js",
    "revision": "997108f74ffe146e5caafc3e1682cec7"
  },
  {
    "url": "assets/js/25.ee3f0dc0.js",
    "revision": "94a0fc8c31519fff22690590135f8e70"
  },
  {
    "url": "assets/js/26.791670d8.js",
    "revision": "83708826b7d70a3dc0b852b7b7da8b01"
  },
  {
    "url": "assets/js/3.103f2049.js",
    "revision": "cfbee67056aef8de64f4713e73b1fc20"
  },
  {
    "url": "assets/js/4.0b4cb637.js",
    "revision": "d6ac10d2414ee686928e3e5cf418e201"
  },
  {
    "url": "assets/js/5.827d5fa6.js",
    "revision": "0cd1ffe1688e2658964556b330989a83"
  },
  {
    "url": "assets/js/6.c69065ea.js",
    "revision": "0b16ffbae4f9d67552d231cc1713838d"
  },
  {
    "url": "assets/js/7.f89bced9.js",
    "revision": "f1b989ae46150dca556cda697b677dbb"
  },
  {
    "url": "assets/js/8.bfdc8771.js",
    "revision": "53d6405a7a7dd39845b5b420c59a7edd"
  },
  {
    "url": "assets/js/9.14c4e847.js",
    "revision": "4604b90c7debe95b4e29873b22c2803c"
  },
  {
    "url": "assets/js/app.83dd9a4b.js",
    "revision": "a3474f361eb123a806399518d31acf87"
  },
  {
    "url": "config.html",
    "revision": "fec1ef4f0e51f4c38cd207bc6835141c"
  },
  {
    "url": "exercises/1.html",
    "revision": "3b788af594847172cf4f73cc0b41c468"
  },
  {
    "url": "exercises/4.html",
    "revision": "15cfdcb6ccfa15731022a36ef4b9e2f5"
  },
  {
    "url": "exercises/5.html",
    "revision": "74ea54acb789f33e7bf063a16269fced"
  },
  {
    "url": "exercises/6.html",
    "revision": "74e83cb39028c93959984ffc6c5423bc"
  },
  {
    "url": "exercises/7.html",
    "revision": "af6cfc9272edfee1a64d7eea7aaeb366"
  },
  {
    "url": "exercises/8.html",
    "revision": "a75a53dbe94e408975f99cf0ee952de1"
  },
  {
    "url": "exercises/9.html",
    "revision": "f42a77af7e37daf3ed3af483f0174580"
  },
  {
    "url": "guide/1.html",
    "revision": "6a43cf316a5ee725e970482425f71a81"
  },
  {
    "url": "guide/2.html",
    "revision": "7fe662d65b4ad1b7e99970a1916dd941"
  },
  {
    "url": "guide/3.html",
    "revision": "11ce1a12fca0bcc14b44050ee3ab4603"
  },
  {
    "url": "guide/4.html",
    "revision": "cb42d19ee15d113a7a8255e80fcadc21"
  },
  {
    "url": "guide/5.html",
    "revision": "7195e40b131bfe7e407589b44ba4a6fc"
  },
  {
    "url": "guide/6.html",
    "revision": "7f804ed4c199856d678ea5ab78f9efea"
  },
  {
    "url": "guide/7.html",
    "revision": "333543d35f057899a489da9e22288e08"
  },
  {
    "url": "guide/8.html",
    "revision": "844cce266e7225e75810e64ba67115fc"
  },
  {
    "url": "guide/9.html",
    "revision": "9a8239c2e4bf2ad6cfa1372a8c12d600"
  },
  {
    "url": "guide/index.html",
    "revision": "b4ffe7cf5cb36a139f2e955e95597897"
  },
  {
    "url": "icon.png",
    "revision": "2d919c57a08edbbfdb80c55a01fb8f5a"
  },
  {
    "url": "index.html",
    "revision": "2e7a7a4bfccc613e13d64430c3ff1381"
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

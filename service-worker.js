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
    "revision": "7efe781c6d0052ceae4f8d0233e73cc0"
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
    "url": "assets/js/10.7cfea058.js",
    "revision": "c2aa9d894b049adaf114517bace3a7ca"
  },
  {
    "url": "assets/js/11.06b9488c.js",
    "revision": "9bc58c95cfe7d4d1f427e58b62188fe0"
  },
  {
    "url": "assets/js/12.2438c08d.js",
    "revision": "e8e07c50547b2c3d3d40dfd201aa686c"
  },
  {
    "url": "assets/js/13.2abc89b3.js",
    "revision": "6374200088bc5272a86e306dfcf7a671"
  },
  {
    "url": "assets/js/14.3bca9caf.js",
    "revision": "e02f2797be7c6bad392da82e9fc0ddde"
  },
  {
    "url": "assets/js/15.9d23207f.js",
    "revision": "b6adc98298c004cb249190d27607075a"
  },
  {
    "url": "assets/js/16.64c25f74.js",
    "revision": "1637259e7d13d66461c4f9faac4994c7"
  },
  {
    "url": "assets/js/17.120b2846.js",
    "revision": "351bfee63258c4983b7fc588bf9cfdd2"
  },
  {
    "url": "assets/js/18.06d2d19a.js",
    "revision": "644eba09a27ba513dd90df51e8b269d7"
  },
  {
    "url": "assets/js/19.ccdad70e.js",
    "revision": "64fc553c000dbf5c9fa61fa873efc52f"
  },
  {
    "url": "assets/js/2.3eb3e1fd.js",
    "revision": "10acb895c746164462f0f39d73a8e9be"
  },
  {
    "url": "assets/js/20.b785a4a2.js",
    "revision": "79709dbda96ad6f3c9815ea45d7e3976"
  },
  {
    "url": "assets/js/21.2b712970.js",
    "revision": "64eedcd31bfd0bead23fb333205c529e"
  },
  {
    "url": "assets/js/22.5876e18a.js",
    "revision": "b24ee572414531d8ab93bd1177f4acd6"
  },
  {
    "url": "assets/js/23.fb547f7b.js",
    "revision": "afc8008f2eac9b1384e1adb5d4414231"
  },
  {
    "url": "assets/js/24.0b30b749.js",
    "revision": "7fd93d29272b1c3c47941ea017d01296"
  },
  {
    "url": "assets/js/25.b5399724.js",
    "revision": "1496129b65a0643c59678e38f3d9fe04"
  },
  {
    "url": "assets/js/26.29d30cb5.js",
    "revision": "7ec49ae55e86476f48781b99d6802459"
  },
  {
    "url": "assets/js/27.16697131.js",
    "revision": "42b059c0090745e7fed21aff30eb0f29"
  },
  {
    "url": "assets/js/28.66e56735.js",
    "revision": "8f97708a9024c307e6e379a31bbdd6a8"
  },
  {
    "url": "assets/js/29.2befeba8.js",
    "revision": "0d4068834fca9e36f873e672e8a61458"
  },
  {
    "url": "assets/js/3.5711bd44.js",
    "revision": "cd7969bf31cc227c3f45ddcebf6a43ef"
  },
  {
    "url": "assets/js/30.5f910fcf.js",
    "revision": "62a0430cbd81b31b1f0bef4bd480eb57"
  },
  {
    "url": "assets/js/4.64211807.js",
    "revision": "bf74c91390d1961e51aba1d6f8ec88ac"
  },
  {
    "url": "assets/js/5.8ef8c167.js",
    "revision": "962571237ad73a57000d281af20c019e"
  },
  {
    "url": "assets/js/6.b2838425.js",
    "revision": "2a929e60396449f6af264690c943f0e2"
  },
  {
    "url": "assets/js/7.9ca327b2.js",
    "revision": "c47e7ff521c9a896c0779021fc65f5ec"
  },
  {
    "url": "assets/js/8.736d060c.js",
    "revision": "f2d3d6a5d05e9f07bba26ca4dbf4fc0e"
  },
  {
    "url": "assets/js/9.11688c60.js",
    "revision": "937760af52e7d06f2a15b8be4130bdba"
  },
  {
    "url": "assets/js/app.d62c5fec.js",
    "revision": "bab10a188867384467ef6400ec1b1406"
  },
  {
    "url": "config.html",
    "revision": "1d4eb9a4be3c4cd2cca7f32d7245457d"
  },
  {
    "url": "exercises/1.html",
    "revision": "b71535bc619ec7a42490bb655264a3bd"
  },
  {
    "url": "exercises/10.html",
    "revision": "175f59b11292e3f6f2834a6e18d626eb"
  },
  {
    "url": "exercises/11.html",
    "revision": "afa04003b5b5373071c7c93724b9d471"
  },
  {
    "url": "exercises/4.html",
    "revision": "2ebbb009be4ade1b4e7b2bb763917d0a"
  },
  {
    "url": "exercises/5.html",
    "revision": "e4025ffeaf9779d8c35ff3ad1eaa8f89"
  },
  {
    "url": "exercises/6.html",
    "revision": "ef33e123e8816dcb7bec0812dcf21c31"
  },
  {
    "url": "exercises/7.html",
    "revision": "414947d7565a98994a0efd7ac6b67390"
  },
  {
    "url": "exercises/8.html",
    "revision": "5d51a7bcf6dc949bc72e2adfde91c6f4"
  },
  {
    "url": "exercises/9.html",
    "revision": "1e1a3f187c7dd8060a5db3f59671bdf8"
  },
  {
    "url": "guide/1.html",
    "revision": "6fd5d6ae76279af46791c004cd25ae09"
  },
  {
    "url": "guide/10.html",
    "revision": "d76aa0d688a0cfae3192c60a3b16f04c"
  },
  {
    "url": "guide/11.html",
    "revision": "3c4b9c684f7572a8c456529d8ad1584b"
  },
  {
    "url": "guide/2.html",
    "revision": "78e64160e55739934ab5ee76c7622bcc"
  },
  {
    "url": "guide/3.html",
    "revision": "c011fdcc276603d3e55517f91d899173"
  },
  {
    "url": "guide/4.html",
    "revision": "e83a1ce5ad3de38a1cee5f58f80e0109"
  },
  {
    "url": "guide/5.html",
    "revision": "df98e6e6bc8c362fb199f50f72aa7810"
  },
  {
    "url": "guide/6.html",
    "revision": "e8e6080de114b67e025c2a925ae95636"
  },
  {
    "url": "guide/7.html",
    "revision": "b97a1085e9984c4ffacc9409db4c47ed"
  },
  {
    "url": "guide/8.html",
    "revision": "beb807448a766dbf586b79e3fb4decbd"
  },
  {
    "url": "guide/9.html",
    "revision": "19859124abb5aff722c34186055bcf01"
  },
  {
    "url": "guide/index.html",
    "revision": "8aa010bc5113a69079f50f3b522a8f15"
  },
  {
    "url": "icon.png",
    "revision": "2d919c57a08edbbfdb80c55a01fb8f5a"
  },
  {
    "url": "index.html",
    "revision": "ff331eb95b2ee892bf6d5b01ca4f291c"
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

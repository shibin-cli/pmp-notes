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
    "revision": "1a26f88d2f6837776b473b9da4be3299"
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
    "url": "assets/img/3.67864a62.jpg",
    "revision": "67864a627a50f56fc692f1f55f4bbf94"
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
    "url": "assets/js/10.887387bc.js",
    "revision": "0a8b48333dbbe4b8f5fa3ac9b64c3701"
  },
  {
    "url": "assets/js/11.8ad8983d.js",
    "revision": "7b84844fecc0c5fd93d532f9f04abf2d"
  },
  {
    "url": "assets/js/12.be8bd9f1.js",
    "revision": "39359e58e312d47302602293651fef8b"
  },
  {
    "url": "assets/js/13.08483c4d.js",
    "revision": "ad748e9e0864a1d78c4f93a75fac19fc"
  },
  {
    "url": "assets/js/14.bfde4d00.js",
    "revision": "7d915a0198120f28161327a8af38ce07"
  },
  {
    "url": "assets/js/15.83b5dd2d.js",
    "revision": "ef633d579fe1a520e426d91d9ecaafd5"
  },
  {
    "url": "assets/js/16.a2308256.js",
    "revision": "ab1a832ca4fe9b8b65ae8c26b0ddeebe"
  },
  {
    "url": "assets/js/17.099a391d.js",
    "revision": "2172a7750ca6d90cb5be43a23c07af94"
  },
  {
    "url": "assets/js/18.ba40a489.js",
    "revision": "2c86f3a63b1083a32851288e431f0921"
  },
  {
    "url": "assets/js/19.c67935c2.js",
    "revision": "f9c764d025b6bccbef3c4a2cf626a66a"
  },
  {
    "url": "assets/js/2.223e7e44.js",
    "revision": "469b99b4ee036348b59b8d71c23406e7"
  },
  {
    "url": "assets/js/20.51b711db.js",
    "revision": "1c446ff04a7290b30d9080c2a621d342"
  },
  {
    "url": "assets/js/21.1d529c98.js",
    "revision": "52a4c651bc72aa3506fe2e88ac468798"
  },
  {
    "url": "assets/js/22.f4513077.js",
    "revision": "250921a99aa00a0a1738f2feda467e51"
  },
  {
    "url": "assets/js/23.9cca9835.js",
    "revision": "3c1fe82ba2be83bac233e7f9bf50c2fa"
  },
  {
    "url": "assets/js/24.36d5b82b.js",
    "revision": "4a55ca66e0ac86757d3e646589752f6f"
  },
  {
    "url": "assets/js/25.4800823f.js",
    "revision": "b09f75d4b6e9079223ceae9b6308f75c"
  },
  {
    "url": "assets/js/26.c57ef187.js",
    "revision": "59d52a7695231dec0233d2f9c0b2cbc2"
  },
  {
    "url": "assets/js/3.6747d73d.js",
    "revision": "b2849b962583c834a588980b183bba1b"
  },
  {
    "url": "assets/js/4.3447e988.js",
    "revision": "f5912b70216566ce5cec361cb5e01600"
  },
  {
    "url": "assets/js/5.edf81b03.js",
    "revision": "9a98b8c5a8e13645198503a1d654a7bc"
  },
  {
    "url": "assets/js/6.351e11ab.js",
    "revision": "6f8788afd499f9966d12d43dba2590b9"
  },
  {
    "url": "assets/js/7.398ade92.js",
    "revision": "6e93c754aecec9700aa7820eb1193982"
  },
  {
    "url": "assets/js/8.96d9e0e8.js",
    "revision": "1b21919d5d8f0536482b1b683bf5f454"
  },
  {
    "url": "assets/js/9.c2d0abc2.js",
    "revision": "32d1f21c6f05b54f1571d82ab0f6500b"
  },
  {
    "url": "assets/js/app.552a8541.js",
    "revision": "855c1ec2b3e4cacc596c241b0049ca39"
  },
  {
    "url": "config.html",
    "revision": "01183d08c394d597b766d6bb4c148b56"
  },
  {
    "url": "exercises/1.html",
    "revision": "ad1cf42073b1ad2fb56da62575faa784"
  },
  {
    "url": "exercises/4.html",
    "revision": "6f9a50b9f82529a7cb3838d9592f988b"
  },
  {
    "url": "exercises/5.html",
    "revision": "17a741821b799a95ef6fa908bf6ea6ca"
  },
  {
    "url": "exercises/6.html",
    "revision": "331bc16934bd1594f44eb6f8b90dbf69"
  },
  {
    "url": "exercises/7.html",
    "revision": "88f7fdefd9bb309458da92d21c4475b8"
  },
  {
    "url": "exercises/8.html",
    "revision": "5acee1632e5acb182be512f0649136fd"
  },
  {
    "url": "exercises/9.html",
    "revision": "92cbb5f276af676763518af217cfeb8d"
  },
  {
    "url": "guide/1.html",
    "revision": "9a3ffa6b5674059f62ecad808d8fdcda"
  },
  {
    "url": "guide/2.html",
    "revision": "734c59cb70294cfadc50dfcc6b1b4ebf"
  },
  {
    "url": "guide/3.html",
    "revision": "861db70bbf0819754f853ed2a2a9a996"
  },
  {
    "url": "guide/4.html",
    "revision": "85314aa0293317dbce2315d0168833b3"
  },
  {
    "url": "guide/5.html",
    "revision": "6f2cc596959b3ed6433c86494d591136"
  },
  {
    "url": "guide/6.html",
    "revision": "84c4799db183fbf2ffcf9855dc575dc1"
  },
  {
    "url": "guide/7.html",
    "revision": "eb7d738a348b6cc9423f0e827596d3ec"
  },
  {
    "url": "guide/8.html",
    "revision": "26c7d3695454cb0a73e58f5f0970cb4d"
  },
  {
    "url": "guide/9.html",
    "revision": "6a60baf0e649939a44d02bf40bb4274f"
  },
  {
    "url": "guide/index.html",
    "revision": "bb01bddeee1f7d3cf3acea70afd881a9"
  },
  {
    "url": "icon.png",
    "revision": "2d919c57a08edbbfdb80c55a01fb8f5a"
  },
  {
    "url": "index.html",
    "revision": "162804f3dfc9ffbbd49eba2975204574"
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

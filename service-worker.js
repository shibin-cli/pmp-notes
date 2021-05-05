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
    "revision": "7a7c448736aa94dc556f554e4f83144e"
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
    "url": "assets/img/7-1_.f0b02d68.png",
    "revision": "f0b02d68afc1d6eaab10a1df927a61b3"
  },
  {
    "url": "assets/img/7-1.d57cfe49.png",
    "revision": "d57cfe49efa8021bf4e614060cc865c9"
  },
  {
    "url": "assets/img/7-2_.22060d82.png",
    "revision": "22060d82c9db63324be38672159bfe74"
  },
  {
    "url": "assets/img/7-2.95b88cd8.png",
    "revision": "95b88cd8daac31ff0c3f0da10c6c87e0"
  },
  {
    "url": "assets/img/7.b1e3fc5c.jpg",
    "revision": "b1e3fc5cd923183f0f78a156e1e2446d"
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
    "url": "assets/js/10.deda789f.js",
    "revision": "3d92773585f58e42e6b36a88838804eb"
  },
  {
    "url": "assets/js/11.aad3babb.js",
    "revision": "a1e4d162a920002875ad902304bf07ca"
  },
  {
    "url": "assets/js/12.8edd0237.js",
    "revision": "38540aff3adb2588535471e6d9d8acd4"
  },
  {
    "url": "assets/js/13.761a97bd.js",
    "revision": "e8fe5eaa4bb7833dc7d1fa372ee80870"
  },
  {
    "url": "assets/js/14.c47e09e0.js",
    "revision": "b83d6f07bcbb6f2ffcdbe4386803177a"
  },
  {
    "url": "assets/js/15.5e22abf9.js",
    "revision": "17e306d3fd7f7fcb98b1737d9437abc2"
  },
  {
    "url": "assets/js/16.09e44039.js",
    "revision": "93cf29b5413f2f2b8753c912680b947c"
  },
  {
    "url": "assets/js/17.4b87febd.js",
    "revision": "4bf5f54bc76b5ad98b362e57f9db4500"
  },
  {
    "url": "assets/js/18.227920d3.js",
    "revision": "a35f2036d69b834c6a952d524442b60a"
  },
  {
    "url": "assets/js/19.2470e577.js",
    "revision": "47810f9a0d08593909d13701e005dafd"
  },
  {
    "url": "assets/js/2.e48b473a.js",
    "revision": "1f468de56f839e2140f957de003d4ad2"
  },
  {
    "url": "assets/js/20.9d694864.js",
    "revision": "5a669e491d4a4c27e528517ad43cb705"
  },
  {
    "url": "assets/js/21.2e082eb7.js",
    "revision": "dbea2dda7500ef381b09045a0134bedf"
  },
  {
    "url": "assets/js/22.22b59537.js",
    "revision": "e83ce2af5c5794b1d05d7b4280b8ae6d"
  },
  {
    "url": "assets/js/23.7ab0c99d.js",
    "revision": "4e249d4b88909970440e47510ce2eda4"
  },
  {
    "url": "assets/js/24.a67b731a.js",
    "revision": "e068d2197a6b202b5974fca576b5ac71"
  },
  {
    "url": "assets/js/25.be1e1ba8.js",
    "revision": "7645ebd974fe12a64af473755f3411aa"
  },
  {
    "url": "assets/js/26.cfac7673.js",
    "revision": "8b95072048b32763974a0c7a3bc7731d"
  },
  {
    "url": "assets/js/3.fa26f8f8.js",
    "revision": "44c49c1f3aa5977f1794643c9d16181e"
  },
  {
    "url": "assets/js/4.ddaf121a.js",
    "revision": "88cd20760e76bdbe30d6091f1c92ee32"
  },
  {
    "url": "assets/js/5.ef1f05d3.js",
    "revision": "4040cded6aa491819a881c17264da7b0"
  },
  {
    "url": "assets/js/6.7fba5e6e.js",
    "revision": "d98b222fb52a6440cba292fe4fe1366c"
  },
  {
    "url": "assets/js/7.ff69db74.js",
    "revision": "ae210d3994b7d64c0afddb55f676a151"
  },
  {
    "url": "assets/js/8.f0028820.js",
    "revision": "70252fa75cd7329e68c871694e069ddd"
  },
  {
    "url": "assets/js/9.4334f68d.js",
    "revision": "f0da934982ce5e046fc89aacc48d9250"
  },
  {
    "url": "assets/js/app.acc331ba.js",
    "revision": "9de1f2135e2dacb459b9ad3feb5a73ab"
  },
  {
    "url": "config.html",
    "revision": "6455d6e47f867607f1d356bf5303f5fb"
  },
  {
    "url": "exercises/1.html",
    "revision": "23b4a278fd353529dc35d3fe235f2dbe"
  },
  {
    "url": "exercises/4.html",
    "revision": "483f04a4aba948de00b67020f0cb8990"
  },
  {
    "url": "exercises/5.html",
    "revision": "36724f5315349172eb4cd04f86548e3f"
  },
  {
    "url": "exercises/6.html",
    "revision": "d76f3cb80143c617bb642daccf1f5ccd"
  },
  {
    "url": "exercises/7.html",
    "revision": "24508b628d08f8770ddb7c9e56518d5e"
  },
  {
    "url": "exercises/8.html",
    "revision": "1a159c7a345ee673211795b867d1e468"
  },
  {
    "url": "exercises/9.html",
    "revision": "dedd37273e9dece187d199be0c400b1d"
  },
  {
    "url": "guide/1.html",
    "revision": "f3ae6bc35e56660eb017da89bbbade09"
  },
  {
    "url": "guide/2.html",
    "revision": "66eaa1a52a27f3f75d4891d9f3431fa1"
  },
  {
    "url": "guide/3.html",
    "revision": "6dafd3ca1452526c7219568fdc547e8a"
  },
  {
    "url": "guide/4.html",
    "revision": "2237b6736f9e9f9c0be9deea8458ca46"
  },
  {
    "url": "guide/5.html",
    "revision": "9762108079c5e4293f0449bc319152ca"
  },
  {
    "url": "guide/6.html",
    "revision": "b94c8a2dffef8f1bdf351193377d91f5"
  },
  {
    "url": "guide/7.html",
    "revision": "72d92f5f645473f28a562a50b19ec181"
  },
  {
    "url": "guide/8.html",
    "revision": "8437d3f2139098fc549fa259d19ed5e2"
  },
  {
    "url": "guide/9.html",
    "revision": "5706356bd6b9712cd5b29dc45554a4cc"
  },
  {
    "url": "guide/index.html",
    "revision": "5f8476e0e15153a3de809c3d7cfa7e34"
  },
  {
    "url": "icon.png",
    "revision": "2d919c57a08edbbfdb80c55a01fb8f5a"
  },
  {
    "url": "index.html",
    "revision": "ff60b7330956972338bda7c98094dc0f"
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

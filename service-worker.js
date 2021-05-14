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
    "revision": "ef0f22f25836722252a14dbf7a372fcb"
  },
  {
    "url": "assets/css/0.styles.2fc8f7fb.css",
    "revision": "e18e06ada1bd119760077b21d2536466"
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
    "url": "assets/js/10.5d2a8908.js",
    "revision": "4be7fe6ec619260f92d214620da5580f"
  },
  {
    "url": "assets/js/11.dbb17759.js",
    "revision": "ffc993962a46e87a14b3f2b6d6632e8b"
  },
  {
    "url": "assets/js/12.fa592654.js",
    "revision": "037c95fc5308a5c665d6f9d26c5fef43"
  },
  {
    "url": "assets/js/13.dba39ffb.js",
    "revision": "6647159c83858800dcda31cd5fa67f14"
  },
  {
    "url": "assets/js/14.421aef37.js",
    "revision": "ffab84ed2fb9361f4a559f9513ac724f"
  },
  {
    "url": "assets/js/15.67ab11ec.js",
    "revision": "94e7ecc292972df5c53db932ea1f2962"
  },
  {
    "url": "assets/js/16.c4a4371d.js",
    "revision": "6fe299cea100c4d0bed967ccc081b936"
  },
  {
    "url": "assets/js/17.d78d2fd3.js",
    "revision": "2cff38847db7f49c935b925cb2e08865"
  },
  {
    "url": "assets/js/18.853f1850.js",
    "revision": "4d7d7dc162db75856c678270a348f8dc"
  },
  {
    "url": "assets/js/19.faff7fe4.js",
    "revision": "bcaa592a9a288b8ea09504df81574b80"
  },
  {
    "url": "assets/js/2.f1baf51a.js",
    "revision": "5299dcddb3c7ac11d672d154ce1c4b0c"
  },
  {
    "url": "assets/js/20.292370da.js",
    "revision": "1814c03958c56b4c06db2602ad09b78c"
  },
  {
    "url": "assets/js/21.c51b9ca0.js",
    "revision": "ecdcfb80c94bb4f46b96c516384241af"
  },
  {
    "url": "assets/js/22.7ae09c0e.js",
    "revision": "1036c453e91b1df8bae881e1da07904e"
  },
  {
    "url": "assets/js/23.b82d3060.js",
    "revision": "fc241b347422cc766d9739c2c5e1acdf"
  },
  {
    "url": "assets/js/24.5b2e7a82.js",
    "revision": "1a4fe6aeafc3cd05e73ae73fc9fcfab6"
  },
  {
    "url": "assets/js/25.1bcdadfa.js",
    "revision": "8ffc24514ec3e0a0e335fe0825ae0aa4"
  },
  {
    "url": "assets/js/26.833d43eb.js",
    "revision": "bad8281c0c8104f06dac3cb03cb24687"
  },
  {
    "url": "assets/js/27.02afbf98.js",
    "revision": "fa86e45345cddbd5832b867471e9cbda"
  },
  {
    "url": "assets/js/28.fc4aa3fd.js",
    "revision": "fb9ea68af0d74df5a81bcbca08c7c941"
  },
  {
    "url": "assets/js/29.b5e50d86.js",
    "revision": "9917fc14bda3cbbc3853e0e6acd7c5a8"
  },
  {
    "url": "assets/js/3.960bb918.js",
    "revision": "f2751f20023b286568378cf68267df1a"
  },
  {
    "url": "assets/js/30.bbfb3e2f.js",
    "revision": "d4002fbaa2804151ce7dcea5ee4e4376"
  },
  {
    "url": "assets/js/31.154081d9.js",
    "revision": "2246e529b78366f1028631e92af83f88"
  },
  {
    "url": "assets/js/32.315aefbc.js",
    "revision": "e7bb365deaaa3adf6bd15e9d9a6d0840"
  },
  {
    "url": "assets/js/33.3890a198.js",
    "revision": "3c6cf7709eff17752dcf1c3c60699523"
  },
  {
    "url": "assets/js/4.4d04e26b.js",
    "revision": "be64743a81c1cc701507ffed1149c0c8"
  },
  {
    "url": "assets/js/5.a9d2104f.js",
    "revision": "3aa0a3d34f7473b72dcc05416e944aff"
  },
  {
    "url": "assets/js/6.ef3781af.js",
    "revision": "81256ef2dcd0e3346f687c4e775129a1"
  },
  {
    "url": "assets/js/7.6e4b2fa5.js",
    "revision": "00bddf35633600032aba37faa20f160e"
  },
  {
    "url": "assets/js/8.8b4a45fe.js",
    "revision": "65eaa7fb4cd3fe00a742d4950ce39e0c"
  },
  {
    "url": "assets/js/9.7330d484.js",
    "revision": "e69ae76f57170162c86c864bc9049974"
  },
  {
    "url": "assets/js/app.1ff8a7ab.js",
    "revision": "3dec17a3611f5868883d34da6ca3bb13"
  },
  {
    "url": "config.html",
    "revision": "7815c6f56b2fb9c697b73345b98a81ad"
  },
  {
    "url": "exercises/1.html",
    "revision": "ba8f303ec9136bb57e4fdfa2a2fabddf"
  },
  {
    "url": "exercises/10.html",
    "revision": "b6f42e864f8f18663329e5985e426b0b"
  },
  {
    "url": "exercises/11.html",
    "revision": "efecc05a0aabc3a86180f8422c505ff2"
  },
  {
    "url": "exercises/12.html",
    "revision": "e90a584b3b838053c8ec9325fe922b68"
  },
  {
    "url": "exercises/4.html",
    "revision": "30f1ba2122ff63a7e06f717133ba6db5"
  },
  {
    "url": "exercises/5.html",
    "revision": "ad2b51692f3a638e345311f65d6a5192"
  },
  {
    "url": "exercises/6.html",
    "revision": "911447f5466a62ed61afdb122f7d04ae"
  },
  {
    "url": "exercises/7.html",
    "revision": "bfea941dd6622a8198d3d0a78dbef491"
  },
  {
    "url": "exercises/8.html",
    "revision": "2d6822bc6d38084fbd05588a543657b6"
  },
  {
    "url": "exercises/9.html",
    "revision": "14a5ad7898aceff9d6504b1b9b79d324"
  },
  {
    "url": "guide/1.html",
    "revision": "49ca6007917ca093f10b5bda2b37dfbc"
  },
  {
    "url": "guide/10.html",
    "revision": "752c1312549766f555c7dae31812e3f4"
  },
  {
    "url": "guide/11.html",
    "revision": "cd087f31605af5b210f7214d6eb37316"
  },
  {
    "url": "guide/12.html",
    "revision": "4dd8a572bc1c97494d416fc9a030361b"
  },
  {
    "url": "guide/2.html",
    "revision": "69a2c17944c5b92b7da5be73bbd08a22"
  },
  {
    "url": "guide/3.html",
    "revision": "e7298208d57b0d2598a342a94708a0cc"
  },
  {
    "url": "guide/4.html",
    "revision": "0abf1f8544d907d0b1bf51bf3a98efcb"
  },
  {
    "url": "guide/5.html",
    "revision": "6c3f613a0e21686b79aa167f72e14e37"
  },
  {
    "url": "guide/6.html",
    "revision": "ebd55e745d275228bffd56eee146c391"
  },
  {
    "url": "guide/7.html",
    "revision": "dcbf32432482bce76c62d796f34e570e"
  },
  {
    "url": "guide/8.html",
    "revision": "84682270fd16f6696bd58be436a9ac44"
  },
  {
    "url": "guide/9.html",
    "revision": "deed37f1b95e8d0101cbffea0fd7f1fc"
  },
  {
    "url": "guide/index.html",
    "revision": "166af7abb99b7596da0a5021143bc8f3"
  },
  {
    "url": "icon.png",
    "revision": "2d919c57a08edbbfdb80c55a01fb8f5a"
  },
  {
    "url": "index.html",
    "revision": "c1447fc8e492ae3ff45bb609491ca6d9"
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

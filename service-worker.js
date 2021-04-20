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
    "url": "1.html",
    "revision": "ec11164d2338966cd5d3a6e337e2c5f1"
  },
  {
    "url": "2.html",
    "revision": "4210de18d9cca3c1e11944c98a30cfb3"
  },
  {
    "url": "3.html",
    "revision": "ecd96cfb16906edac79be7d2bb69c215"
  },
  {
    "url": "404.html",
    "revision": "c85c066dbf7bfd4661e9a50f8c506b29"
  },
  {
    "url": "assets/css/0.styles.1de13907.css",
    "revision": "2834c3c54a479f28fb7ede30053d1847"
  },
  {
    "url": "assets/img/1.5d2094df.jpg",
    "revision": "5d2094dfd17cc8e5306a2df4fa81e26f"
  },
  {
    "url": "assets/img/2.40dbd87a.png",
    "revision": "40dbd87a68d33df3e4ad716d42e2b85e"
  },
  {
    "url": "assets/img/3.67864a62.jpg",
    "revision": "67864a627a50f56fc692f1f55f4bbf94"
  },
  {
    "url": "assets/img/4.07c7f0c7.jpg",
    "revision": "07c7f0c7bafd7508196a99235cc3013a"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.591eb740.js",
    "revision": "c7ed7076ff0ec1852c8ef3c91fab0062"
  },
  {
    "url": "assets/js/11.e5355956.js",
    "revision": "729718a868ef295334f8b89f6266e352"
  },
  {
    "url": "assets/js/12.10cced1d.js",
    "revision": "6e7c4e81567d488ddea465829ab367a8"
  },
  {
    "url": "assets/js/2.95ee40f9.js",
    "revision": "82438d267834c56bee867a4170d549df"
  },
  {
    "url": "assets/js/3.367ba58e.js",
    "revision": "2cc81cdf5f811fc5cfed3732a687f5cd"
  },
  {
    "url": "assets/js/4.8763ef15.js",
    "revision": "524c0045ecd6af72379caf9602d73784"
  },
  {
    "url": "assets/js/5.36b0082f.js",
    "revision": "6516d180b40f523988c56d7ef687551d"
  },
  {
    "url": "assets/js/6.7f81478e.js",
    "revision": "5486084dcd48c900f8caa8b0ca1f915e"
  },
  {
    "url": "assets/js/7.e1372bb1.js",
    "revision": "231cee11ebde84aa306b0f89e455e64f"
  },
  {
    "url": "assets/js/8.dfd2005f.js",
    "revision": "8a46aac131e3d38bbcdcc135b955620c"
  },
  {
    "url": "assets/js/9.af835044.js",
    "revision": "cfa8de1e1c3abf5e7455bf6d5193fa12"
  },
  {
    "url": "assets/js/app.e59ee988.js",
    "revision": "00ffbffbdba7563f2ce395d053de0cb6"
  },
  {
    "url": "config.html",
    "revision": "32c38d3f02f98bb5bc02ddbc9b216b91"
  },
  {
    "url": "index.html",
    "revision": "02e13b32e5e4eb925bacc0bd7bbaad9d"
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

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
    "revision": "c402c0526f174674c8b176ea30ea3fbe"
  },
  {
    "url": "404.html",
    "revision": "f8ba901bb8d22ddcb188375dd8a44f71"
  },
  {
    "url": "assets/css/0.styles.69de72f0.css",
    "revision": "c48beb867c49f1218d81b7f5577c3d2c"
  },
  {
    "url": "assets/img/1.5d2094df.jpg",
    "revision": "5d2094dfd17cc8e5306a2df4fa81e26f"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.2dee5474.js",
    "revision": "8e7bff47754ad740b748148fb857b358"
  },
  {
    "url": "assets/js/2.978f34fd.js",
    "revision": "c682621020d0a1a848b6767bd06d6f8b"
  },
  {
    "url": "assets/js/3.1cea7866.js",
    "revision": "b3cdd215346462219adb062ee9f7dc5c"
  },
  {
    "url": "assets/js/4.d7263414.js",
    "revision": "8e7bbe8213ef9e5d4f6ca03b092a80ed"
  },
  {
    "url": "assets/js/5.8570cc53.js",
    "revision": "907e3808d5ad19fb24abbb561231d866"
  },
  {
    "url": "assets/js/6.fa302eaf.js",
    "revision": "cb93da1a0f4cfd16c6ef93c00e5a104d"
  },
  {
    "url": "assets/js/7.484f9988.js",
    "revision": "1cfb862670332363fc4a7a14e6244d27"
  },
  {
    "url": "assets/js/8.4dc420ed.js",
    "revision": "3c0da54dfa05deca9d397cc4a3acfde2"
  },
  {
    "url": "assets/js/9.5e4d8ee2.js",
    "revision": "4f5d8ccd0b08945857a8651e537659f5"
  },
  {
    "url": "assets/js/app.ec4572aa.js",
    "revision": "8e222b06c25173038cf4cdb032e6aa23"
  },
  {
    "url": "config.html",
    "revision": "6ea77337bd6fa7d02dabea72f18f39a9"
  },
  {
    "url": "index.html",
    "revision": "5f5a9e2a42a34d76007adf4cdd4193d4"
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

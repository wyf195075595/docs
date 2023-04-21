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
    "revision": "2cc7ce0f7694802d646623ce28aa4493"
  },
  {
    "url": "assets/css/0.styles.7e0e013d.css",
    "revision": "dc81a8161d3b065a1b7f7c233f75b7a8"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.a0daa15f.js",
    "revision": "4f0311faf38d1a4d874762cfac2f5a12"
  },
  {
    "url": "assets/js/11.233de3d4.js",
    "revision": "6ba921d78e3796ddd3bd0c32f6a95b09"
  },
  {
    "url": "assets/js/12.5f45e768.js",
    "revision": "afffbc5b24af7d6b69592d6293ba3003"
  },
  {
    "url": "assets/js/13.02ee24dd.js",
    "revision": "bbfbe4a920250c6e8246c6536b1ef4c5"
  },
  {
    "url": "assets/js/14.24bcec2c.js",
    "revision": "4d8f4ef2c06969af01e6ea5997a6abdd"
  },
  {
    "url": "assets/js/2.3bece48d.js",
    "revision": "94232845ad9544b10633003a91a202d9"
  },
  {
    "url": "assets/js/3.0077fd2c.js",
    "revision": "2954a2e44180e5d4e26391d3f6e39070"
  },
  {
    "url": "assets/js/4.77448e89.js",
    "revision": "7deabbc0b5c08ad4fbb3e04dc5aef3f2"
  },
  {
    "url": "assets/js/5.b43396dd.js",
    "revision": "1137b8984da96c3276d596b6d8b21a76"
  },
  {
    "url": "assets/js/6.dbd4a116.js",
    "revision": "0488a57a4974bff7125a8d87af9cc133"
  },
  {
    "url": "assets/js/7.d4d0614d.js",
    "revision": "dba61e587f5942e2b31d5d1fb93b2e5c"
  },
  {
    "url": "assets/js/8.cf1dafd3.js",
    "revision": "82940f23366481bf3fbb85d5bd88c989"
  },
  {
    "url": "assets/js/9.841efbca.js",
    "revision": "7be6de90e97dc8e444b0aa405e94f04e"
  },
  {
    "url": "assets/js/app.344d82b7.js",
    "revision": "e26509f008acce7f391a5996ad98516c"
  },
  {
    "url": "config.html",
    "revision": "2bd5b3e6a272ef26a7bb78869dcb15a6"
  },
  {
    "url": "hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "icon-192x192.png",
    "revision": "984230cbe83830e37471fcf5f1b86787"
  },
  {
    "url": "icon-256x256.png",
    "revision": "8bcd365e8ab43eb468c3975501ee07a8"
  },
  {
    "url": "icon-384x384.png",
    "revision": "ec0f10342b147c5399d51bf9a6f275f9"
  },
  {
    "url": "icon-512x512.png",
    "revision": "046b228f1b5b5f86cddd42fb2fc01a1b"
  },
  {
    "url": "index.html",
    "revision": "b60cc16ce485f1a837853f90e5120e9b"
  },
  {
    "url": "java/index.html",
    "revision": "2fdd0dc88e5a2bc1f58f4706f001fd76"
  },
  {
    "url": "javascript/index.html",
    "revision": "c62f6fc977f29c9d1ae76f94c37ce597"
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

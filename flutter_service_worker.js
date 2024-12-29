'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/assets/java.png": "ba6f54079f9e1eb62eecf2a8dcdc20fd",
"assets/assets/javaScript.png": "0f5ce8f4d61d5e3202b9ec40847a72b3",
"assets/assets/flutter.png": "23ded1e93189e77c12bda66ca4274d08",
"assets/assets/mongoDb.png": "689bb66f5af8080e4f79ffeb16202f6a",
"assets/assets/dart.png": "2e0719b33b5cdd1ece46611b4d3d4a81",
"assets/assets/html-5.png": "f6ff1a4851e1797c3671bd1d426b4748",
"assets/assets/gitHub.png": "68d95aa861bb1bacabc3ad747e522e17",
"assets/assets/come_burbujas_portada.png": "b571f6df3effb2cc5bcaba818e49f832",
"assets/assets/css.png": "19502628a643f4cafa57e7eadac4ee64",
"assets/assets/plan_estudio_portada.png": "ea63831b09d46aa54aeaf48f526fadd0",
"assets/assets/firebase.png": "cf0918b3d77d6e4505a65f103e5f3382",
"assets/assets/linux.png": "ca981297d81ff8548662f2a519392769",
"assets/assets/sql.png": "9cbebd079bec99a850db9233b03f4be1",
"assets/assets/git.png": "5f551c335eb3dc4b81ae34cf93b9a7f1",
"assets/assets/api.png": "1a3626173b3a23e23ee8e7d940a653f0",
"assets/assets/clima_portada.png": "5a8f313c5d909c2876c91b214adf1671",
"assets/assets/react.png": "700a08a68c711155cf375053627afa70",
"assets/AssetManifest.bin.json": "7532087d9e1fd42ac6cff595189a0451",
"assets/AssetManifest.bin": "66a4488170b68fb5ff45165027f2e97a",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "a31c70a03961ce35ac38c672c938b079",
"assets/NOTICES": "164d566167343f52d3e7f577d6b0f4e5",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3ca5dc7621921b901d513cc1ce23788c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "a2eb084b706ab40c90610942d98886ec",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "cdfb02dea76c7baa84be0f84d2214927",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/AssetManifest.json": "b1b8d2397535d74b3092c37890345990",
"index.html": "a3c599489076f5fa9750c59dc525aa37",
"/": "a3c599489076f5fa9750c59dc525aa37",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"manifest.json": "a1ec19e6befc2710ff878d22153600ae",
"flutter_bootstrap.js": "c833a8480a686df3b0cb02f6dc58cafb",
"favicon.png": "54b96eb99b5c6b7befc43fe808869aeb",
"version.json": "711679ff19b309634bd50dfb162108cb",
"proyectos/planEstudio/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"proyectos/planEstudio/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"proyectos/planEstudio/icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"proyectos/planEstudio/icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"proyectos/planEstudio/portada.png": "ea63831b09d46aa54aeaf48f526fadd0",
"proyectos/planEstudio/assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"proyectos/planEstudio/assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"proyectos/planEstudio/assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"proyectos/planEstudio/assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"proyectos/planEstudio/assets/fonts/MaterialIcons-Regular.otf": "c04afbd9fdbfecf6b51ea813932df1f2",
"proyectos/planEstudio/assets/NOTICES": "585a017268b53db615ea339c33f53081",
"proyectos/planEstudio/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"proyectos/planEstudio/assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"proyectos/planEstudio/index.html": "ee47723daecbce90a7ca3a1ff824811d",
"proyectos/planEstudio/flutter.js": "f393d3c16b631f36852323de8e583132",
"proyectos/planEstudio/manifest.json": "61fcf3103b8819efe55e6cdd93a22ec8",
"proyectos/planEstudio/flutter_bootstrap.js": "116f39b1f4e2b48c76d398994cbfb516",
"proyectos/planEstudio/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"proyectos/planEstudio/version.json": "ffe4a61ee8792c65503feaca6698393b",
"proyectos/planEstudio/main.dart.js": "460b036f7da587550a268242445c6ad2",
"proyectos/planEstudio/canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"proyectos/planEstudio/canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"proyectos/planEstudio/canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"proyectos/planEstudio/canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"proyectos/planEstudio/canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"proyectos/planEstudio/canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"proyectos/planEstudio/canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"proyectos/planEstudio/canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"proyectos/planEstudio/canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"proyectos/planEstudio/canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"proyectos/climaApp/portada.png": "5a8f313c5d909c2876c91b214adf1671",
"proyectos/climaApp/style.css": "0a549e6356e4853201df0971a1232263",
"proyectos/climaApp/index.html": "04c9fa82f22f08965021d05e5ea88e3b",
"proyectos/climaApp/app.js": "a3bbe8170f8090190256c2b71493d25d",
"proyectos/come-burbujas/portada.png": "b571f6df3effb2cc5bcaba818e49f832",
"proyectos/come-burbujas/style.css": "678d34e3b1490eb6baa78bcc60436aec",
"proyectos/come-burbujas/index.html": "1bfc07567777ac88d712d9b547b13b68",
"proyectos/come-burbujas/README": "7130b8ec0eebeee0531ff196408b249c",
"proyectos/come-burbujas/main.js": "5fcb8e1f13571f0cffd8c0283b59155b",
"main.dart.js": "9257968db6951a23f6316e0b01dd2c5b",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

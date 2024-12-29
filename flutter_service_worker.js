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
"assets/assets/background-white.png": "238488401ed44335a0300166ee549b88",
"assets/assets/dart.png": "2e0719b33b5cdd1ece46611b4d3d4a81",
"assets/assets/html-5.png": "f6ff1a4851e1797c3671bd1d426b4748",
"assets/assets/gitHub.png": "68d95aa861bb1bacabc3ad747e522e17",
"assets/assets/come_burbujas_portada.png": "b571f6df3effb2cc5bcaba818e49f832",
"assets/assets/css.png": "19502628a643f4cafa57e7eadac4ee64",
"assets/assets/plan_estudio_portada.png": "53690c3ee2b3db6affb3d07fc64ab54f",
"assets/assets/firebase.png": "cf0918b3d77d6e4505a65f103e5f3382",
"assets/assets/linux.png": "ca981297d81ff8548662f2a519392769",
"assets/assets/sql.png": "9cbebd079bec99a850db9233b03f4be1",
"assets/assets/background.png": "21b82d8cba3b32791503922f48ac416b",
"assets/assets/git.png": "5f551c335eb3dc4b81ae34cf93b9a7f1",
"assets/assets/api.png": "1a3626173b3a23e23ee8e7d940a653f0",
"assets/assets/clima_portada.png": "5a8f313c5d909c2876c91b214adf1671",
"assets/assets/react.png": "700a08a68c711155cf375053627afa70",
"assets/AssetManifest.bin.json": "703fb26059ca0234340f1456ada1aca3",
"assets/AssetManifest.bin": "3e3d0059acc2175d9b314ec0ba3862b0",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "a31c70a03961ce35ac38c672c938b079",
"assets/NOTICES": "164d566167343f52d3e7f577d6b0f4e5",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3ca5dc7621921b901d513cc1ce23788c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "a2eb084b706ab40c90610942d98886ec",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "cdfb02dea76c7baa84be0f84d2214927",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/AssetManifest.json": "02b395c7e75e876d5bdd312b9c878f13",
"index.html": "a3c599489076f5fa9750c59dc525aa37",
"/": "a3c599489076f5fa9750c59dc525aa37",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"manifest.json": "a1ec19e6befc2710ff878d22153600ae",
"flutter_bootstrap.js": "a0838b6ff52df802ab4c1800cebb677a",
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
"main.dart.js": "e5874833951092ae9615b1e2917fc494",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "66233d8f1f4bfbdec93de2b71d0f5f69",
".git/logs/HEAD": "c2cb0672a55ea2fac98475efdc83f931",
".git/logs/refs/remotes/origin/main": "62999d035ec860af0f6595c82811ffa5",
".git/logs/refs/heads/main": "c2cb0672a55ea2fac98475efdc83f931",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/refs/remotes/origin/main": "8625efd5a6d432c6e432d8555f38fe61",
".git/refs/heads/main": "8625efd5a6d432c6e432d8555f38fe61",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/COMMIT_EDITMSG": "d778d8b1f42d0dd1bb284e5ca9549187",
".git/objects/6f/ace2ce5743be02ac285d1f8a2127e428c6f785": "8647b91e6808ffe05f71ca1dc554070a",
".git/objects/d5/91989c52571c5be69b0fbd19ab95849d33d474": "87664b1211272cf69c917b840c86388d",
".git/objects/c6/5e9ee371a7b79b770569c417c8a67f85cb5526": "171bb08242295b73aca793d145b51029",
".git/objects/3c/57102c90d8084e839e6a7c831ed242460bc37c": "763ccc63395a0c2a5587d7d0737b9838",
".git/objects/97/e11bfcae44f6886d339c529eace12068ec301c": "19bc9c831b5d3ae8f3a81500f215c041",
".git/objects/ec/7987a646d03a04ecbb7eac88a53d11d230c012": "05795a5a8a9b0b9bdb5830f309eb884c",
".git/objects/pack/pack-2abe53b16567ca2488fd876217f1d1fe43ca5379.pack": "0297e386aaf8b69cccd203cb96f78072",
".git/objects/pack/pack-2abe53b16567ca2488fd876217f1d1fe43ca5379.idx": "980de9e82071c53e2d93fb441519d71e",
".git/objects/pack/pack-2abe53b16567ca2488fd876217f1d1fe43ca5379.rev": "c8e60d855b37a26f068f2393b82cdc1e",
".git/objects/94/6dc8bb9a2a1db0e0c0fdd11e3929e015287a1b": "b8fcd33de85fc42646b749e0b3379a2b",
".git/objects/ce/e3c5bb4ad9ca1b7e02e3391cc1cbba998308b7": "8e23cc0d8eea61c17a30b19ec3ccb417",
".git/objects/ce/e89a24cf4745bf16695469d9a0a0ec86b93c66": "299dd58924590f3a89d61799f33da97a",
".git/objects/68/16b9b9cf6dc935ae0aa2d9f5f6c01853cef31c": "f60c701edd6b270857f573151fc7a38e",
".git/objects/8f/7f2bb499818b885edafc5cb1f772691d3ee056": "bf048da41575b2ba3b11d550750d2c97",
".git/objects/91/cffa0da4462013b3900b013e10339d93436fe5": "0da39d0445d183534b9b832e6cdaac1c",
".git/objects/8e/6a790a9583f9b093ecc1036b4eb63f3e068477": "7c4f1bf33e802ea333e69caa77a6f3d7",
".git/objects/7e/a93f6e2771a1b83875af84e9f614a0e3fd8fec": "06f99cc2e49176f81d6a3ba5b2084b69",
".git/objects/5f/c15b521d33796fc1c6664df37bf5ddca930494": "9d91929bbd9c45acac06019b2a889290",
".git/objects/5a/92094e0209d3f6a0a8870b85593654c5f3df2c": "9644bcc38367057146f230b6dcd4cb5d",
".git/objects/d0/d1d685891db23c4cd5e643ce2810969342a4e7": "da472bb4597cb88e6121d3fd7dd9ee6c",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/41/3759fe8d8548e4610025cd56133bde5850e9c4": "edb5f013c9c34602e60d7acb5c5470eb",
".git/objects/c7/09943f0ea86e50f454b991c38d64c6683ecb70": "ba66813b008a294764e44128ead950ad",
".git/objects/f0/3d2a0da4abed18fa7a8f7870c7e00338672fb9": "212e7aed63e360805d9a5020796241dd",
".git/objects/f0/d0798ba743b280854bb00526c599aea7a401bc": "e66d0732b47b9edd7b47dbb3c477cf58",
".git/objects/1a/82b9fc9b2ec992a83a335ee0cd88f65a0683b7": "b689ca65567e2e155d591eed52baac9f",
".git/objects/1a/1ddfeb3ac6bc1346db12310f2b9267800698f7": "efa24fda5a7992a85b2d88748b4c3654",
".git/objects/a1/9b347602cbc577630b8815dcad57e5c7db4b5e": "f9dc94fdd93aada3cccc1c263e22a252",
".git/objects/06/4901a7ae6c470191a304608d9208ead4e3006b": "089d3f8f6b8ecbc761c06d47281ad93b",
".git/objects/cd/db1f0a5212b3ebca8f667e758212e825191f04": "42b497dccc51d19ffdcaf7ebe8651b32",
".git/objects/d9/791236621d11380ad71f7dc7d50dcf979c9d1b": "9da701df5f5bf91d9893cb4fda4755af",
".git/objects/09/b090d09fc67a01cf5ec40aded550fe68131a26": "0eaf2acbd345246f7e040c66fb92949f",
".git/objects/60/9ebe4d98f20ec723d34f45df36c8cac46c4b86": "8531020be6288ca923dfd58d22af468c",
".git/objects/60/082fedcc52935733c57c659da0451ac549b416": "c81027404f4483a214066cf684b39777",
".git/objects/bb/1475fcce1fdc32d5bfa969b6862261f6e3a724": "bc3dcff272a560764ec739bfb6c44f9c",
".git/objects/47/c562c88fdb8b19ad0acae08d91524fb577bee4": "38ce67aaf16a294e86157f38e1573ef4",
".git/objects/1b/b30f9b64ae4aec36578c317eb3da6500ddaaff": "065134e73910512f48057f84f28fcfc6",
".git/objects/e5/de7737270d3c6e5dcb6555f0187f8660879060": "cac3f4777d7b7b8d1ca95631190c1b87",
".git/objects/27/6ff0cc39456cb382a0253c9ca081d5e367acb1": "8b4125a2003f5e110842c4fb1c3dc0ae",
".git/objects/13/09dc8517995a065a8c3b36e14ff5a05781c0a7": "85d9db3b822a54123c12b672e55aae63",
".git/objects/13/bb4c0f0ac9f4e69ff4ba864fc68f76fc4ac93a": "8ae3012f066a0b3f43615f90c7f04c41",
".git/objects/2b/da06ee6cb7b9bd1a60e8089be6ce2b5351f989": "72d54191f62fd72552999302e0850e37",
".git/objects/dd/c5a3beea6406fa0d6c04da4a71a1113d84cd3a": "dfaabd184a7d7158119933ff814494f8",
".git/objects/5e/bf37944a56f2b5e479e3858392c6e9030da2da": "d874f5ce1eb6512c7b77ebd17b676f00",
".git/objects/85/f6ec7207ae04ae7d6d35f988a193576f063f5d": "9530cda4dd324225ecca04dfac3ef536",
".git/objects/0a/a91cf69bf891b6a1922c83a1b1af9837d54d06": "b73b96bd483ce0c818db8c5eed877fd8",
".git/objects/58/93e57f4b15e4c723507c170d7225836a664566": "667f37fc0dc6f2a62f646667b1caeb00",
".git/index": "a3f5e7857ec2f6036a76c6d8773ac58f",
".git/config": "22dc666b056585a59ede2a6d940f02b2"};
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

'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "ebd181acd729a49a10a56ab76648253d",
".git/config": "fad2d9af2150acb4a04096b099727489",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "50ce8855a1ca5bd179b441b48e102c75",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "88e501bc10502c646fb99e232bedef69",
".git/logs/refs/heads/main": "74971dc2afcafe80677d8d16f6ca0974",
".git/logs/refs/remotes/origin/main": "4b7581f211de66053a4d7a2318e0f146",
".git/objects/03/214f6951bc9c8649dc283ce58bd5130a6deade": "390229297022dfe65791fb8ab1db253b",
".git/objects/0c/835282ae56f93ba827dd93d54c2f35f2e1c167": "e19bb870a89a01069565237745726936",
".git/objects/0e/ff2c82cac4679870e52cc052c1b5a3556f18ff": "4ba7b6641d34b54e411fa8e4b8688711",
".git/objects/11/dc4d8b86558c0b55ab25f28826e1000e626b9e": "d9777b3a9a1721ee5da1ea5035b32333",
".git/objects/13/79d0d703d4669bc3def125d693063a58365f90": "d13ec540f2792d17ad823b5b8addc539",
".git/objects/17/3491ca948922f1d7e302dae62fe838c70dff16": "271ae4a268eb98ef22b80c0d6983659c",
".git/objects/17/ebc1f45fb03e994291fe07390a2dbce6c79ad9": "6bf634836881987342527af2d105f777",
".git/objects/1a/d7683b343914430a62157ebf451b9b2aa95cac": "94fdc36a022769ae6a8c6c98e87b3452",
".git/objects/1e/aec9f58d1a97797cadc0bb917b10e53c458a59": "ae5dcd1d0ea5bb7ac9a57e418159bbdd",
".git/objects/1f/14d2262e8a3d60b70bef3d0a3dfd1f7a16de08": "744c8658a86a057db4573a668495570c",
".git/objects/26/0e1ea4dffe27686b5b98266834a69fa589205d": "4b7436ddf97a184d22bab3ca94fbc61c",
".git/objects/2a/d9b136cadf3a6a5b0a1dfdfc853f0800e4575b": "bc6a0200de3c5f53b364083ce06d759e",
".git/objects/32/d86bd947fc51c05182b97f5c6de128280ff2f1": "6c7ca8e5916782e8b96278fd21129fbb",
".git/objects/3d/f272cefa0dd492c6aa1794b8b2c8ca33f62e0c": "d49e79e72152c03fddc149f895f8570f",
".git/objects/4c/51fb2d35630595c50f37c2bf5e1ceaf14c1a1e": "a20985c22880b353a0e347c2c6382997",
".git/objects/4e/d8b3fb240c05b055cded47debb8fb7c335a25d": "7130bae1f26d5d3fe00ca56049f7b72c",
".git/objects/4f/0283458ae86d3e6a416c2428bc7e87c2a246e2": "f246c4330da151ea219c5566d2794ca8",
".git/objects/4f/2e957f29f2025ebf60aa7293e00f3c48956381": "cf5a0abf6e4ac737af7b1f9251433a1b",
".git/objects/50/e21173663201212c51bf213f0fa1f3521947d4": "46083a839bc90e3cc7d6b04244037095",
".git/objects/51/e6458dda0fd04e09a502f8c1f8bf71feb6ef43": "88ac81f8ec084a034168d4f2ae70ccc9",
".git/objects/52/69ada5bad5ad2b63da9a05465eda1b2891326e": "14032406b610c431bb90d60733a8b40f",
".git/objects/53/18a6956a86af56edbf5d2c8fdd654bcc943e88": "a686c83ba0910f09872b90fd86a98a8f",
".git/objects/53/3d2508cc1abb665366c7c8368963561d8c24e0": "4592c949830452e9c2bb87f305940304",
".git/objects/55/5fbf4fb524b97260d524b6ca2b54136928092b": "496966b628c79fb4f018d7de4eff2f2c",
".git/objects/5b/ddb61d38acfab05d9c83238ed03df8e0eac900": "e27cb695873adf21dfd0fabd5cd246e1",
".git/objects/5f/01d5b3a6f462424f523b023dc5491d1aca0619": "0c3106fa8058af0ae12ec941c68a8b77",
".git/objects/5f/cfe1f2b6ca534317415d82ef4afc32d2249843": "69ca8cf6dae5930c2b799a0865fa7498",
".git/objects/61/80a85eec80261ab97645876515a7b93d3b6135": "8bebb6a4b6ab0d1e5d5fab58dde0e73a",
".git/objects/61/b3e1dc8bddbb978f10b7669443a4fdef947b9f": "97e885832c618ccf705e37c83bc64323",
".git/objects/62/771e58785d5b17c283bc459f8305c43eb84295": "1b7b9d2f28cb235c42df29c6317f7db5",
".git/objects/64/e4a8189557a17b63fd7a77794207483e592972": "a70eaacf3b8037f9237cc8a8ad9f8521",
".git/objects/68/f21e1c8f800bd2fb8af3bcb5dcb23e61e85560": "c77e535ec6a2ecd6739d0350f4f97663",
".git/objects/6a/52fdeebc29582e72d6b084fe68cd3583c5ad06": "b9997b58387b270d9c91919149f6a131",
".git/objects/6d/1100bc32b4e7c12459dc405d1ddd28fdd8d493": "bed3a27d9c6588b62dd2dc08deb828f0",
".git/objects/6e/fbfbd0eb0e66c4de15bd3a7d37dab310631c63": "33ce8f80266a332282061bc4b24d559c",
".git/objects/6f/4366ba68607fa7e2267e78d6930452e7f993de": "2153edd5456101c67db70b111a9aa6aa",
".git/objects/6f/ca7b3d88e7bcf1fb317e7948fa7070f61ab690": "c7799556c7301eda247fa655673567c0",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "d95736cd43d2676a49e58b0ee61c1fb9",
".git/objects/71/cefccea69b09619f508c0f409b1f43a9c6be98": "41907dbae5b020c701f03e11803961f8",
".git/objects/72/549d856ceb41106142cb1cdf22dec45f8e530f": "9820ca9dbedd0176a3f7e730a1efed36",
".git/objects/73/c63bcf89a317ff882ba74ecb132b01c374a66f": "6ae390f0843274091d1e2838d9399c51",
".git/objects/75/40be5d5181f8c3117d238b429a74908810c099": "7b36dd0083814b28eebacb2b9dcfbda7",
".git/objects/7c/0b3d4207caad2c9412ec920c54a86c280a8e2e": "aa02af415237b120cd8ab990957db00c",
".git/objects/7c/5f38d3f6663bdad0846599842318fd6b57807a": "934f68d19e38b813291e827fe451870f",
".git/objects/7d/9a6c4c32d7e920b549caf531e390733496b6e0": "08fc72bf13310819ae18642e598966de",
".git/objects/7e/d9896badace14e5c2ea9f8ff40a393a7222504": "b68f1806a4a8fe02b369e16335c2ab56",
".git/objects/84/7dc4c6deb0aff02ab8dfbbdcc262559b4ea38f": "7c6cfcfc142e19ad4566ddb34d2c96e2",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/331cd85554a3a033757729aeab72e572b1882c": "1103381afd38822b225e21c71f639619",
".git/objects/8d/ffed5857f54db9f60243a9bd2616ad93c6a9c1": "9f33860ed87717a315c4516829221f42",
".git/objects/8e/3c7d6bbbef6e7cefcdd4df877e7ed0ee4af46e": "025a3d8b84f839de674cd3567fdb7b1b",
".git/objects/8e/3dd537450ebc0500c81ce18689e6ca539cd359": "d44e4c447be4f184b5378c0e8ebcb0cf",
".git/objects/9b/959f10486e3b19b093c3aa5569572e77531b7a": "dc6080496ffc611e14b9b9c64ec3254f",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "784f8e1966649133f308f05f2d98214f",
".git/objects/a2/2b1a6038bcbae19cd89e52256f67c4f95f1546": "d26f5a27a3f1a173ad3b4d51b4e2a64c",
".git/objects/aa/745700de5d2a667edf3fc5f2bfa0224d94d987": "3bbf045581fc4bba8c236cec036e48af",
".git/objects/b0/bbc31fc916cfb2e3dd0d19ff749e1376c96cd4": "3f00d1e2aa401eec2e29c4ebfc63837c",
".git/objects/b4/08a417806e6c1ee8ba3957d010899edb2826d0": "1daa8ac5457ef1973fd1ae504dddd108",
".git/objects/b6/c6d470e6da1fb3ad4dc6d365652ce211f6c6e2": "daf0aa7e5ab7dbacb88ba788b27d5985",
".git/objects/b6/ef7d0f5edd847f96fa63bcb8033c0e515df0ae": "0611ad5f7d772cb37f0fc36e7374e833",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "4227e5e94459652d40710ef438055fe5",
".git/objects/b9/73ae393c5a16edac9a9fb9e892ebd8809cfb89": "4cb59ff5aa5074279fa45e90cd4f1994",
".git/objects/bc/af27fd1e677a3bb4f895595dc6c7e29d5fbdc4": "99bafc2ebfab5367a0af3066180bdfe7",
".git/objects/be/c8019a0e8cc773ca555c8c7bad6e3c21eb9ed9": "6055026bdbca28860fc847b656aa7aa9",
".git/objects/c4/b6efd1dd2b7c0af0514e412f8a2980a4b578f3": "ac1c8b376b0b4262f8f247ce1f736301",
".git/objects/c8/08fb85f7e1f0bf2055866aed144791a1409207": "92cdd8b3553e66b1f3185e40eb77684e",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "761c08dfe3c67fe7f31a98f6e2be3c9c",
".git/objects/e0/7ac7b837115a3d31ed52874a73bd277791e6bf": "74ebcb23eb10724ed101c9ff99cfa39f",
".git/objects/e2/cc521d4fdeff4f34746d8c9fda95902edf80a8": "70b8d2b3f86a3bf59d8fc0d73014475f",
".git/objects/e8/07f116af99f25c052af98ea90622d2ff41e606": "9c499da7eaafa7f8a30bf3bdcf59fa18",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/24dbb40a618b624d9bd7b5527129d8f3ec872c": "975c664e9984fa6c0d645d9ae7c0c23f",
".git/objects/f1/020fe762ea1d8c00c5a71800c5e1482d7a5552": "edd4454546ff10ef4481a6685046ed6f",
".git/objects/f1/63c7f741eee9d5baf0dfd424a0f22e7a730ec6": "21b721f29ccfb711cf033ec47cdf30e7",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f7/a0d484ac000d9566de14b79baa00017c7ecece": "a6021f80cfaee6fd541926f2568ad28c",
".git/objects/fc/8e9fe9bf4d0fa27820d0e8108c880de2be6756": "7c111afedb7a5f2b866417e05d8fa0dd",
".git/refs/heads/main": "08cfaa004fcf1ad03d0a810d0575f9bc",
".git/refs/remotes/origin/main": "08cfaa004fcf1ad03d0a810d0575f9bc",
"assets/AssetManifest.bin": "669e345b858a4eab8f2d5cc29acde557",
"assets/AssetManifest.bin.json": "2978f90f9e3119635805f3bb2d2233f6",
"assets/AssetManifest.json": "6e038a378098a09711467b58680314c8",
"assets/assets/audio/alarm.mp3": "9887e6bb0f84a0dfc24d8fd7ec2f8d2c",
"assets/assets/fall.png": "b2d3141fb9c6081b73542f52251f9030",
"assets/assets/fonts/amiri-regular.ttf": "c24372085dc11ca81e2c4ab7ca60e325",
"assets/assets/fonts/ModamVF.woff": "b4e3642768fe3449dab37e028b806b45",
"assets/assets/fonts/Peyda-Black.ttf": "43249955f3bd35119ce1478bda1b0b0f",
"assets/assets/fonts/Peyda-Bold.ttf": "96a83a2e55297edcd2e89fab6274b1d2",
"assets/assets/fonts/Peyda-ExtraBold.ttf": "e09caba5a40fa7c79fc54670f8ec450e",
"assets/assets/fonts/Peyda-ExtraLight.ttf": "b163392c891abc5723066cf35183a6b4",
"assets/assets/fonts/Peyda-Light.ttf": "a9bfb3656271ac8f647109da7e44b688",
"assets/assets/fonts/Peyda-Medium.ttf": "f10f1143d8424b6ae9f4f185b5c8ba84",
"assets/assets/fonts/Peyda-Regular.ttf": "f57c7844233447987e0d96ce5f3c3586",
"assets/assets/fonts/Peyda-SemiBold.ttf": "bce1c29ae267994fd936d2722efbd0c1",
"assets/assets/fonts/Peyda-Thin.ttf": "f3ea98b350a400ebd8cd2b268724ed8d",
"assets/assets/fonts/Roboto-Regular.ttf": "5673da52c98bb6cb33ada5aaf649703e",
"assets/assets/fonts/Vazirmatn-Regular.ttf": "e8e9648f5b8fc824da409750ff331221",
"assets/assets/fonts/YekanBakh-VF.ttf": "fe56246e9b24744c654d239812cd7115",
"assets/assets/icon.png": "7146c0a6750063ce509b7b48adf7bb4c",
"assets/assets/spring.png": "890ae236f8fda6a5a54d5e2bd3cde7fc",
"assets/assets/summer.png": "ee1fe8bf1aa7b4fd2d0b65331f4cce14",
"assets/assets/winter.png": "ec72611a9b37a15d056d59549425fcbe",
"assets/FontManifest.json": "6c9da6ce1671978fb26361b19ec31a97",
"assets/fonts/MaterialIcons-Regular.otf": "ce7758cf4bb50f92827a3a9e779dffe3",
"assets/NOTICES": "9d888f9d07de937691dc961c33368b04",
"assets/packages/alarm/assets/long_blank.mp3": "d632dd58e2137a2e67849c108d5eb4b6",
"assets/packages/alarm/assets/not_blank.mp3": "71ac239a121767241ccfcc1b625d44e7",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "3c2b46f7c55d31696fb49a56d1cb2e06",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "ba9bcfd25e416971898c18200982043f",
"/": "ba9bcfd25e416971898c18200982043f",
"main.dart.js": "bb3c4ab117ae4c4562b3fda33922fe2e",
"manifest.json": "9d2b3b866b342fd562fa5a19cc47dd5c",
"version.json": "ea3076e1c1563c242ebcd1e7a910adaf"};
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

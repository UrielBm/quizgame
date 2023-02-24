//imports

importScripts(
  "https:////cdn.jsdelivr.net/npm/pouchdb@8.0.0/dist/pouchdb.min.js"
);
importScripts("service/sw-db.js");
importScripts("service/sw-helpers.js");

const STATIC_CACHE = "cache-static-v1";
const INMUTABLE_CACHE = "cache-inmutable-v1";
const DYNAMIC_CACHE = "cache-dynamic-v1";

const APP_SHELL_STATIC = [
  "/favicon.ico",
  "/index.html",
  "/pwa-192x192.png",
  "/registerSW.js",
  "/manifest.webmanifest",
  "/service/sw-helpers.js",
  "/service/sw-db.js",
];
const APP_SHELL_INMUTABLE = [
  "https://fonts.googleapis.com/css2?family=Raleway:wght@300;700;900&family=Ultra&display=swap",
  "https://fonts.gstatic.com/s/raleway/v28/1Ptug8zYS_SKggPNyC0ITw.woff2",
  "https://fonts.gstatic.com/s/ultra/v19/zOLy4prXmrtY-uT9wrI.woff2",
  "https://cdn.jsdelivr.net/npm/pouchdb@8.0.0/dist/pouchdb.min.js",
];
self.addEventListener("install", (event) => {
  const staticResponse = caches.open(STATIC_CACHE).then((cache) => {
    return cache.addAll(APP_SHELL_STATIC);
  });
  const inmutableResponse = caches.open(INMUTABLE_CACHE).then((cache) => {
    return cache.addAll(APP_SHELL_INMUTABLE);
  });
  event.waitUntil(Promise.all([inmutableResponse, staticResponse]));
});

self.addEventListener("activate", (event) => {
  const cleanCaches = caches.keys().then((keys) =>
    keys.forEach((key) => {
      //clean old caches
      if (key !== STATIC_CACHE && key.includes("static")) {
        return caches.delete(key);
      }
      if (key !== DYNAMIC_CACHE && key.includes("dynamic")) {
        return caches.delete(key);
      }
    })
  );
  event.waitUntil(cleanCaches);
});

self.addEventListener("fetch", (event) => {
  let response;
  if (
    event.request.url.includes(
      "https://backquizgame-production.up.railway.app/"
    )
  ) {
    response = updateApiResponse(DYNAMIC_CACHE, event.request);
  } else {
    response = event.request;
  }
  // } else if (event.request.url.includes("/assets/lotties/categories/")) {
  //   response = responseLotties(event.request);
  // } else {
  //   response = caches.match(event.request).then((res) => {
  //     if (res) {
  //       updateCacheStatic(STATIC_CACHE, event.request, APP_SHELL_INMUTABLE);
  //       return res;
  //     } else {
  //       return fetch(event.request).then((newResponse) => {
  //         return newResponse;
  //       });
  //     }
  //   });
  // }
  event.respondWith(response);
});

// tareas asíncronas
self.addEventListener("sync", (e) => {
  if (e.tag === "new-record") {
    // postear a BD cuando hay conexión
    const respuesta = postRecords();

    e.waitUntil(respuesta);
  }
});

//Escuchar PUSH
self.addEventListener("push", (e) => {
  const data = JSON.parse(e.data.text());
  const options = {
    body: data.messange,
    icon: "./favicon-32x32.png",
    badge: ".favicon.ico",
    image: "./quiz.jpg",
    vibrate: [
      80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 320, 160,
      320, 160, 320,
    ],
    openUrl: data.front_url,
    data: {
      url: data.front_url,
    },
  };
  e.waitUntil(self.registration.showNotification(data.title, options));
});

self.addEventListener("notificationclick", (e) => {
  const notification = e.notification;
  const response = clients.matchAll().then((clientes) => {
    let cliente = clientes.find((item) => {
      return item.visibilityState === "visible";
    });
    if (cliente !== undefined) {
      cliente.navigate(notification.data.url);
      cliente.focus();
    } else {
      clients.openWindow(notification.data.url);
    }
    return notification.close();
  });

  e.waitUntil(response);
});

//función para guardar el cache dinamico
const updateCacheDynamic = (dynamicCache, req, res) => {
  if (
    res.ok &&
    !res.url.includes("chrome-extension") &&
    !res.url.includes("?t=")
  ) {
    return caches.open(dynamicCache).then((cache) => {
      cache.put(req, res.clone());
      return res.clone();
    });
  } else {
    return res;
  }
};

// function para actualizar cache con conexión.
const updateCacheStatic = (staticCache, req, APP_SHELL_INMUTABLE) => {
  if (APP_SHELL_INMUTABLE.includes(req.url)) {
    // no hace falta actualizar nada
  } else {
    return fetch(req).then((res) => {
      return updateCacheDynamic(staticCache, req, res);
    });
  }
};

//Network with cache fallback  update
const updateApiResponse = (cacheName, req) => {
  if (req.url.includes("/notification/")) {
    return fetch(req);
  } else if (req.clone().method === "POST") {
    if (self.registration.sync) {
      //postear un nuevo puntaje
      return req
        .clone()
        .text()
        .then((body) => {
          //   console.log(body);
          const bodyData = JSON.parse(body);
          return saveRecord(bodyData);
        });
    } else {
      return fetch(req);
    }
  } else {
    return fetch(req)
      .then((res) => {
        if (res.ok) {
          updateCacheDynamic(cacheName, req, res.clone());
          cleanDynamicCache(cacheName, 10);
          return res.clone();
        } else {
          return caches.match(req);
        }
      })
      .catch((error) => {
        return caches.match(req);
      });
  }
};

//To lotties without connection
const responseLotties = (req) => {
  return fetch(req)
    .then((res) => {
      if (res.ok) {
        return res;
      } else {
        return caches.match(
          "/src/assets/lotties/categories/general.json?import"
        );
      }
    })
    .catch((error) => {
      return caches.match("/src/assets/lotties/categories/general.json?import");
    });
};
const cleanDynamicCache = (cacheName, maxItems) => {
  caches.open(cacheName).then((cache) => {
    return cache.keys().then((keys) => {
      if (keys.length >= maxItems) {
        cache.delete(keys[0]).then(cleanDynamicCache(cacheName, maxItems));
      }
    });
  });
};

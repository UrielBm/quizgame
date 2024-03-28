import {
  cleanupOutdatedCaches,
  createHandlerBoundToURL,
  precacheAndRoute,
} from "workbox-precaching";
import { CacheFirst, NetworkFirst, NetworkOnly } from "workbox-strategies";
import { NavigationRoute, registerRoute } from "workbox-routing";
import { BackgroundSyncPlugin } from "workbox-background-sync";

cleanupOutdatedCaches();
// self.__WB_MANIFEST is default injection point
precacheAndRoute(self.__WB_MANIFEST);

const bgSyncPlugin = new BackgroundSyncPlugin("postQueue", {
  maxRetentionTime: 24 * 60,
});

// to allow work offline
registerRoute(
  new NavigationRoute(createHandlerBoundToURL("index.html"), {
    denylist: [/^\/backoffice/],
  })
);
registerRoute(
  new RegExp(
    "https://fonts.googleapis.com/css2?family=Raleway:wght@300;700;900&family=Ultra&display=swap"
  ),
  new CacheFirst({
    cacheName: "cache-font",
  })
);
registerRoute(
  new RegExp("https://backquizgame-production.up.railway.app"),
  new NetworkFirst({
    cacheName: "api-response",
  })
);
registerRoute(
  new RegExp("https://backquizgame-production.up.railway.app/newscore"),
  new NetworkOnly({
    plugins: [bgSyncPlugin],
  }),
  "POST"
);

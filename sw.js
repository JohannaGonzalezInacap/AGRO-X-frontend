// Service worker mínimo: solo existe para que el navegador permita "Agregar a pantalla de
// inicio" (PWA). No cachea nada todavía — cada carga sigue yendo a la red, igual que una página
// normal. Si más adelante se quiere que funcione sin conexión, aquí es donde se agrega caché.

self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (event) => event.waitUntil(self.clients.claim()));
self.addEventListener("fetch", () => {
  // Deliberadamente vacío: deja que cada solicitud siga su camino normal a la red.
});

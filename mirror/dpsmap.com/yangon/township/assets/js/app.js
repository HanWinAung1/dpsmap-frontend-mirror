var http = "https://";
var url = `${window.location.hostname}`;
if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register(`${http}${url}/sw.js`)
    .then((reg) => console.log("Service Worker registered.", reg))
    .catch((err) => console.log("Service Worker registeration failed.", err));
}

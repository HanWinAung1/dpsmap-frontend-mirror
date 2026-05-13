// var http = "https://";
// var url = `${window.location.hostname}`;
// if ("serviceWorker" in navigator) {
//   navigator.serviceWorker
//     .register(`${http}${url}/sw.js`)
//     .then((reg) => console.log("Service Worker registered.", reg))
//     .catch((err) => console.log("Service Worker registeration failed.", err));
// }

// if ("serviceWorker" in navigator) {
//   navigator.serviceWorker
//     .register("/service-worker.js")
//     .then((reg) => {
//       console.log("Service Worker registered", reg);
//     })
//     .catch((err) => {
//       console.log("Service Worker registration failed", err);
//     });
// }

var http = "https://";
var url = `${window.location.hostname}`;

if ("serviceWorker" in navigator) {
    navigator.serviceWorker.getRegistrations().then((registrations) => {
        // Unregister all existing service workers (force update)
        registrations.forEach((registration) => {
            registration.unregister();
        });

        // Register the new service worker
        navigator.serviceWorker
            .register(`${http}${url}/sw.js`, { scope: "/" })
            .then((reg) => {
                console.log("Service Worker registered successfully.", reg);
            })
            .catch((err) => {
                console.error("Service Worker registration failed:", err);
            });
    });
}

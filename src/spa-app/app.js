import router from "./router";

(async function () {
  // 👉 Replace this with client creation 👈
  
  // handle user navigation
  window.addEventListener("hashchange", () => {
    router();
  });
  window.addEventListener("load", () => {
    // avoid calling router twice when handling redirect callback upon sign in
    if (!sessionStorage.getItem("reload")) {
      router();
      sessionStorage.setItem("reload", "true");
    }
  });

  //handle user reload of browser
  if (sessionStorage.getItem("reload")) {
    sessionStorage.setItem("reload", "true");
    await router();
  }
})();

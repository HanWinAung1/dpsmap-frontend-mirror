document.querySelectorAll(".dropdown-toggle").forEach((element) => {
  element.addEventListener("click", (e) => {
    var dropdown = e.target.parentElement.children[1];
    if (dropdown.classList.contains("show") === false) {
      dropdown.classList.add("show");
    } else {
      dropdown.classList.remove("show");
    }
  });
});

document.querySelector(".mobile-nav-open").addEventListener("click", (e) => {
  if (
    document
      .querySelector(".mobile-navbar-container")
      .classList.contains("hide-mobile-nav")
  ) {
    document
      .querySelector(".mobile-navbar-container")
      .classList.remove("hide-mobile-nav");
    document
      .querySelector(".mobile-navbar-container")
      .classList.add("show-mobile-nav");
  } else {
    document
      .querySelector(".mobile-navbar-container")
      .classList.add("show-mobile-nav");
  }
});

document.querySelector(".mobile-nav-close").addEventListener("click", (e) => {
  if (
    document
      .querySelector(".mobile-navbar-container")
      .classList.contains("show-mobile-nav")
  ) {
    document
      .querySelector(".mobile-navbar-container")
      .classList.remove("show-mobile-nav");
    document
      .querySelector(".mobile-navbar-container")
      .classList.add("hide-mobile-nav");
  } else {
    document
      .querySelector(".mobile-navbar-container")
      .classList.add("hide-mobile-nav");
  }
});

document.querySelectorAll(".img-card .img-card-title").forEach((element) => {
  element.addEventListener("click", (e) => {
    const newEle = document.createElement("div");
    newEle.setAttribute("class", "fullscr");
    newEle.innerHTML = `<span class='close-fullscr' onclick=closeFullScr()><i class='fa-solid fa-xmark'></i></span><div class='img-container'><img src='${e.target.parentElement.children[1].children[0].src}'></div>`;
    document.body.appendChild(newEle);
  });
});

function closeFullScr() {
  document.querySelector(".fullscr").remove();
}

function swiperFullScr() {
  const swiper = document.querySelector(".swiper-container");
  if (swiper.classList.contains("swiper-full-screen")) {
    swiper.classList.remove("swiper-full-screen");
  } else {
    swiper.classList.add("swiper-full-screen");
  }
}

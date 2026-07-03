const heart = document.querySelectorAll(".coracao");

// "forEach" significa que ele vai class por class ver se está preenchida ou não.
heart.forEach(function (heart) {
  heart.addEventListener("click", function () {
    if (heart.src.includes("heart-full.svg")) {
      heart.src = "./img/heart.svg";
    } else {
      heart.src = "./img/heart-full.svg";
    }
  });
});

let click = document.querySelector("button");
let body = document.querySelector("body");
click.addEventListener("click", (e) => {
  if (body.style.width < 880) {
    e.currentTarget.parentElement.classList.toggle("hide");
    body.classList.toggle("noScroll");
  }
});

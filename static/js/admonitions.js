const btns = document.querySelectorAll(".showhidden");

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const content = btn.parentNode
      .querySelector(".content")
      ?.querySelector(".body");
    content.classList.toggle("hidden");
    btn.classList.toggle("ri-arrow-down-s-line");
    btn.classList.toggle("ri-arrow-right-s-line");
  });
});

const onoswitch = document.querySelector(".onoswitch");
if (onoswitch) {
  onoswitch.addEventListener("click", () => {
    onoswitch.classList.toggle("active");
    document
      .querySelector(".theme")
      .classList.toggle("theme_color_project-inverse");
  });
}

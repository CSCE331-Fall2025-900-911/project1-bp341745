const toggleBtn = document.getElementById("theme-toggle");
const themeLink = document.getElementById("theme-style");

toggleBtn.addEventListener("click", () => {
  if (themeLink.getAttribute("href") === "style_modern_tech.css") {
    themeLink.setAttribute("href", "style2.css"); // switch to modern
  } else {
    themeLink.setAttribute("href", "style_modern_tech.css"); // switch back to default
  }
});



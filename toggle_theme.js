document.querySelectorAll(".portfolio-thumbnail-wrapper").forEach(wrapper => {
  const video = wrapper.querySelector("video");
  const img = wrapper.querySelector("img");
  let interval;

  wrapper.addEventListener("mouseenter", () => {
    img.style.display = "none";
    video.style.display = "block";
    video.currentTime = 0;

    interval = setInterval(() => {
      if (video.currentTime + 0.7 < video.duration) {
        video.currentTime += 0.7; 
      } else {
        video.currentTime = 0; 
      }
    }, 200);
  });

  wrapper.addEventListener("mouseleave", () => {
    clearInterval(interval);
    video.style.display = "none";
    img.style.display = "block";
  });
});


const toggleBtn = document.getElementById("theme-toggle");
const themeLink = document.getElementById("theme-style");

toggleBtn.addEventListener("click", () => {
  if (themeLink.getAttribute("href") === "style_modern_tech.css") {
    themeLink.setAttribute("href", "style_2.css"); // pixel
  } else {
    themeLink.setAttribute("href", "style_modern_tech.css");  // switch to modern
  }
});






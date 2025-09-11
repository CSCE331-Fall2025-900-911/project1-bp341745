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

// This is the JS script for paragraph visual
document.addEventListener("DOMContentLoaded", () => {
  const paragraphs = document.querySelectorAll(".paragraph-text");

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          obs.unobserve(entry.target); // only animate once
        }
      });
    },
    { threshold: 0.3 } // trigger when 30% of element is visible
  );

  paragraphs.forEach(p => observer.observe(p));
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






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



function initThemeToggle() {
        const toggleBtn = document.getElementById('theme-toggle');
        const themeLink = document.getElementById('theme-style');
        
        if (!toggleBtn || !themeLink) return;
        
        const themes = {
            'modern': 'style_modern_tech.css',
            'pixel': 'style_2.css'
        };
        
        function switchTheme() {
            const currentTheme = localStorage.getItem('selectedTheme') || 'modern';
            const newTheme = currentTheme === 'modern' ? 'pixel' : 'modern';
            
            themeLink.href = themes[newTheme];
            localStorage.setItem('selectedTheme', newTheme);
            
            updateThemeDisplay();
            
            console.log('Switched from', currentTheme, 'to', newTheme);
        }
        
        function updateThemeDisplay() {
            const currentTheme = localStorage.getItem('selectedTheme') || 'modern';
            document.querySelectorAll('[id^="current-theme-"]').forEach(el => {
                el.textContent = currentTheme.charAt(0).toUpperCase() + currentTheme.slice(1);
            });
        }
        
        toggleBtn.addEventListener('click', switchTheme);
        updateThemeDisplay();
    }


document.addEventListener('DOMContentLoaded', initThemeToggle);


document.addEventListener("DOMContentLoaded", () => {
  const paragraphs = document.querySelectorAll(".paragraph-text");

  const p_observer = new IntersectionObserver(
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

  paragraphs.forEach(p => p_observer.observe(p));

  //column texts in about me page

  const column_texts = document.querySelectorAll(".about-me-column-text");

  const column_text_observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.3 } 
  );

  column_texts.forEach(p => column_text_observer.observe(p));

  //service project texts in service page
  const service_project_texts = document.querySelectorAll(".service-project-text");

  const service_project_observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.3 } 
  );

  service_project_texts.forEach(p => service_project_observer.observe(p));


});











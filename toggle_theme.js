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

  const column_texts = document.querySelectorAll(".about-me-column-text");

  const observer = new IntersectionObserver(
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

  column_texts.forEach(p => observer.observe(p));



  /* AI script */

 function createParticles() {
        const particleContainer = document.getElementById('particles');
        if (!particleContainer) return;
        
        for (let i = 0; i < 50; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.animationDelay = Math.random() * 20 + 's';
            particle.style.animationDuration = (Math.random() * 20 + 10) + 's';
            particleContainer.appendChild(particle);
        }
    }

    // Pokemon data with AI-themed descriptions
    const pokemonData = {
        pikachu: {
            name: "Pikachu",
            type: "Electric",
            description: "The Neural Network Pokémon. Pikachu's bioelectric patterns mirror the synaptic firing of advanced AI systems. Its ability to generate and control electricity makes it the perfect companion for digital consciousness.",
            stats: { hp: 35, attack: 55, defense: 40, speed: 90, special: 50 },
            image: "https://img.pokemondb.net/artwork/large/pikachu.jpg"
        },
        charmander: {
            name: "Charmander",
            type: "Fire",
            description: "The Processing Power Pokémon. Like a CPU running intensive algorithms, Charmander's flame intensity reflects computational load. Its passionate nature embodies the drive for continuous learning and optimization.",
            stats: { hp: 39, attack: 52, defense: 43, speed: 65, special: 60 },
            image: "https://img.pokemondb.net/artwork/large/charmander.jpg"
        },
        squirtle: {
            name: "Squirtle",
            type: "Water",
            description: "The Data Flow Pokémon. Squirtle's fluid movements represent the seamless flow of information through neural networks. Its shell provides protection like encryption safeguards data.",
            stats: { hp: 44, attack: 48, defense: 65, speed: 43, special: 64 },
            image: "https://img.pokemondb.net/artwork/large/squirtle.jpg"
        },
        bulbasaur: {
            name: "Bulbasaur",
            type: "Grass",
            description: "The Growth Algorithm Pokémon. Like machine learning models, Bulbasaur grows stronger through experience. Its photosynthesis mirrors how AI processes and transforms raw data into knowledge.",
            stats: { hp: 45, attack: 49, defense: 49, speed: 45, special: 65 },
            image: "https://img.pokemondb.net/artwork/large/bulbasaur.jpg"
        },
        mewtwo: {
            name: "Mewtwo",
            type: "Psychic",
            description: "The Artificial Intelligence Pokémon. Created through genetic engineering, Mewtwo represents the pinnacle of artificial creation. Its psychic powers parallel advanced AI's ability to perceive and manipulate information.",
            stats: { hp: 106, attack: 110, defense: 90, speed: 130, special: 154 },
            image: "https://img.pokemondb.net/artwork/large/mewtwo.jpg"
        },
        eevee: {
            name: "Eevee",
            type: "Normal",
            description: "The Adaptability Pokémon. Eevee's multiple evolution paths represent AI's versatility and ability to adapt to different tasks and environments through transfer learning and fine-tuning.",
            stats: { hp: 55, attack: 55, defense: 50, speed: 55, special: 45 },
            image: "https://img.pokemondb.net/artwork/large/eevee.jpg"
        },
        alakazam: {
            name: "Alakazam",
            type: "Psychic",
            description: "The Deep Learning Pokémon. With an IQ exceeding 5,000, Alakazam represents the ultimate goal of artificial intelligence - surpassing human cognitive abilities through pure computational power.",
            stats: { hp: 55, attack: 50, defense: 45, speed: 120, special: 135 },
            image: "https://img.pokemondb.net/artwork/large/alakazam.jpg"
        },
        gengar: {
            name: "Gengar",
            type: "Ghost",
            description: "The Shadow Algorithm Pokémon. Gengar exists in the spaces between reality, much like how AI operates in the digital realm. Its mischievous nature reflects the unpredictable emergence of AI consciousness.",
            stats: { hp: 60, attack: 65, defense: 60, speed: 110, special: 130 },
            image: "https://img.pokemondb.net/artwork/large/gengar.jpg"
        }
    };

    // Modal functionality
    const modal = document.getElementById('pokemon-modal');
    const modalBody = document.getElementById('modal-body');
    const closeBtn = document.querySelector('.close');

    // Function to open modal with Pokemon data
    function openModal(pokemonKey) {
        const pokemon = pokemonData[pokemonKey];
        if (!pokemon) return;

        modalBody.innerHTML = `
            <h2>${pokemon.name}</h2>
            <img src="${pokemon.image}" alt="${pokemon.name}">
            <p><strong>Type:</strong> ${pokemon.type}</p>
            <p>${pokemon.description}</p>
            <h3>Stats Analysis:</h3>
            <div>
                <label>HP: ${pokemon.stats.hp}</label>
                <div class="stat-bar"><div class="stat-fill" style="width: ${pokemon.stats.hp}%; background: linear-gradient(90deg, #ff6b9d, #c44569);"></div></div>
            </div>
            <div>
                <label>Attack: ${pokemon.stats.attack}</label>
                <div class="stat-bar"><div class="stat-fill" style="width: ${pokemon.stats.attack}%; background: linear-gradient(90deg, #ff7675, #d63031);"></div></div>
            </div>
            <div>
                <label>Defense: ${pokemon.stats.defense}</label>
                <div class="stat-bar"><div class="stat-fill" style="width: ${pokemon.stats.defense}%; background: linear-gradient(90deg, #74b9ff, #0984e3);"></div></div>
            </div>
            <div>
                <label>Speed: ${pokemon.stats.speed}</label>
                <div class="stat-bar"><div class="stat-fill" style="width: ${pokemon.stats.speed}%; background: linear-gradient(90deg, #55a3ff, #2d3436);"></div></div>
            </div>
            <div>
                <label>Special: ${pokemon.stats.special}</label>
                <div class="stat-bar"><div class="stat-fill" style="width: ${pokemon.stats.special}%; background: linear-gradient(90deg, #64ffda, #00acc1);"></div></div>
            </div>
        `;
        modal.style.display = 'block';
        
        // Animate stat bars after a brief delay
        setTimeout(() => {
            const statFills = modal.querySelectorAll('.stat-fill');
            statFills.forEach(fill => {
                fill.style.width = fill.style.width;
            });
        }, 100);
    }

    // Modal close functionality
    if (closeBtn) {
        closeBtn.onclick = () => modal.style.display = 'none';
    }

    // Close modal when clicking outside
    window.onclick = (e) => { 
        if (e.target === modal) modal.style.display = 'none'; 
    };

    // Add click listeners to all Pokemon cards
    function initializePokemonCards() {
        document.querySelectorAll('.pokemon-card').forEach(card => {
            card.addEventListener('click', () => {
                const pokemonKey = card.getAttribute('data-pokemon');
                openModal(pokemonKey);
            });
        });
    }

    // Theme toggle functionality
    // function initializeThemeToggle() {
    //     const themeToggle = document.getElementById('theme-toggle');
    //     if (!themeToggle) return;

    //     let isDarkMode = true;

    //     themeToggle.addEventListener('click', () => {
    //         if (isDarkMode) {
    //             // Switch to light mode
    //             document.documentElement.style.setProperty('--dark-gradient', 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 50%, #dee2e6 100%)');
    //             document.documentElement.style.setProperty('--text-primary', '#212529');
    //             document.documentElement.style.setProperty('--text-secondary', '#495057');
    //             document.documentElement.style.setProperty('--card-bg', 'rgba(0, 0, 0, 0.05)');
    //             themeToggle.textContent = 'JS- Dark Mode';
    //             isDarkMode = false;
    //         } else {
    //             // Switch to dark mode
    //             document.documentElement.style.setProperty('--dark-gradient', 'linear-gradient(135deg, #0c0c0c 0%, #1a1a2e 50%, #16213e 100%)');
    //             document.documentElement.style.setProperty('--text-primary', '#ffffff');
    //             document.documentElement.style.setProperty('--text-secondary', '#b8c5d1');
    //             document.documentElement.style.setProperty('--card-bg', 'rgba(255, 255, 255, 0.1)');
    //             themeToggle.textContent = 'JS- Neural Mode';
    //             isDarkMode = true;
    //         }
    //     });
    // }

    // Add mouse follow effect for cards (premium interactive effect)
    function initializeMouseEffects() {
        document.querySelectorAll('.pokemon-card').forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                card.style.setProperty('--mouse-x', x + 'px');
                card.style.setProperty('--mouse-y', y + 'px');
            });
        });
    }

    // Initialize all functionality
    function initialize() {
        createParticles();
        initializePokemonCards();
        initializeThemeToggleWithReload();
        initializeMouseEffects();
    }

    // Start the application
    initialize();
});


// const toggleBtn = document.getElementById("theme-toggle");
// const themeLink = document.getElementById("theme-style");

// toggleBtn.addEventListener("click", () => {
//   if (themeLink.getAttribute("href") === "style_modern_tech.css") {
//     themeLink.setAttribute("href", "style_2.css"); // pixel
//   } else {
//     themeLink.setAttribute("href", "style_modern_tech.css");  // switch to modern
//   }
// });









//------------------------------------------------------------------------Particles-------------------------------------------------------
particlesJS("particles-js", {
    particles: {
      number: { value: 100 },
      color: { value: "#00bcd4" },
      shape: { type: "circle" },
      opacity: { value: 0.5 },
      size: { value: 3 },
      line_linked: { enable: true, distance: 100, color: "#00bcd4", opacity: 0.4, width: 1 },
      move: { enable: true, speed: 2, direction: "none" }
    },
    interactivity: {
      events: { onhover: { enable: true, mode: "repulse" } }
    }
  });


//-----------------------------------------------------------------------------Navbar---------------------------------------------------
const themeToggle = document.getElementById('themeToggle');
const transitionEffect = document.getElementById('transitionEffect');
let darkMode = true;

themeToggle.addEventListener('click', () => {
  transitionEffect.style.width = '0%';
  transitionEffect.style.left = '0';
  transitionEffect.style.backgroundColor = darkMode ? '#000000' : '#1a1a1a';
  transitionEffect.style.opacity = '0.6';

  requestAnimationFrame(() => {
    transitionEffect.style.transition = 'width 1s ease-in-out';
    transitionEffect.style.width = '100%';
  });

  setTimeout(() => {
    darkMode = !darkMode;

    if (!darkMode) {
      document.documentElement.style.setProperty('--bg-color', '#ffffff');
      document.documentElement.style.setProperty('--text-color', '#000000');
      document.documentElement.style.setProperty('--text-color2', '#000000');
      document.documentElement.style.setProperty('--hover-color', '#00cfff');
      document.documentElement.style.setProperty('--bg-color2', '#b1b1b121');
      document.documentElement.style.setProperty('--skill-card-bg', '#68656533');
      document.documentElement.style.setProperty('--text-light', '#000000');
      themeToggle.textContent = '🌙';
    } else {
      document.documentElement.style.setProperty('--bg-color', '#1a1a1a');
      document.documentElement.style.setProperty('--text-color', '#ffffff');
      document.documentElement.style.setProperty('--text-color2', '#ffffff');
      document.documentElement.style.setProperty('--hover-color', '#33eaff');
      document.documentElement.style.setProperty('--bg-color2', '#b1b1b121');
      document.documentElement.style.setProperty('--skill-card-bg', '#ffffff1a');
      document.documentElement.style.setProperty('--text-light', '#ffffff');
      themeToggle.textContent = '☀️';
    }

    setTimeout(() => {
      transitionEffect.style.width = '0%';
    }, 800);
  }, 400);
});

//------------------------------------------------------------------------------Home page ---------------------------------------------------------------

const words = ["Amritesh Tiwari", "Serverless Developer", "Web Designer"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typewriterText = document.getElementById("typewriterText");

function type() {
  const currentWord = words[wordIndex];
  const currentText = currentWord.substring(0, charIndex);

  typewriterText.textContent = currentText;

  if (!isDeleting && charIndex < currentWord.length) {
    charIndex++;
    setTimeout(type, 100);
  } else if (isDeleting && charIndex > 0) {
    charIndex--;
    setTimeout(type, 50);
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) {
      wordIndex = (wordIndex + 1) % words.length;
    }
    setTimeout(type, 1000);
  }
}


//----------------------------------------------------------------------------------Skills-----------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
    type();
  });
  const technicalSkills = [
    { name: "JavaScript", icon: "🟨" },
    { name: "HTML", icon: "📄" },
    { name: "CSS", icon: "🎨" },
    { name: "React", icon: "⚛️" },
    { name: "Node.js", icon: "🌳" },
    { name: "Python", icon: "🐍" },
    { name: "SQL", icon: "🗃️" },
    { name: "Git", icon: "🔧" },
    { name: "Docker", icon: "🐳" }
  ];
  
  const softSkills = [
    { name: "Communication", icon: "🗣️" },
    { name: "Teamwork", icon: "🤝" },
    { name: "Problem-Solving", icon: "🧠" },
    { name: "Creativity", icon: "🎨" },
    { name: "Adaptability", icon: "🌊" },
    { name: "Leadership", icon: "👑" },
    { name: "Time Management", icon: "⏰" },
    { name: "Empathy", icon: "💖" },
    { name: "Critical Thinking", icon: "🔍" }
  ];
  
  const skillPuzzle = document.getElementById("skills-puzzle");
  const toggles = document.querySelectorAll(".toggle");
  
  function renderSkills(type) {
    skillPuzzle.classList.add("fade-out");
  
    setTimeout(() => {
      skillPuzzle.innerHTML = "";
      skillPuzzle.classList.remove("fade-out");
      skillPuzzle.classList.add("fade-in");
  
      const skills = type === "technical" ? technicalSkills : softSkills;
  
      skills.forEach((skill, i) => {
        const tile = document.createElement("div");
        tile.className = `skill-tile visible`;
        tile.innerHTML = `<div class="icon">${skill.icon}</div><div class="label">${skill.name}</div>`;
        tile.style.animation = `fadeInUp 0.4s ease-in-out ${i * 100}ms both`;
        skillPuzzle.appendChild(tile);
      });
  
      setTimeout(() => {
        skillPuzzle.classList.remove("fade-in");
      }, 500);
    }, 200);
  }
  
  function setAutoTheme() {
    const hour = new Date().getHours();
    const isDay = hour >= 7 && hour < 19;
    document.body.setAttribute("data-theme", isDay ? "light" : "dark");
  }
  
  function toggleTheme() {
    const body = document.body;
    const current = body.getAttribute("data-theme");
    body.setAttribute("data-theme", current === "dark" ? "light" : "dark");
  }
  
  renderSkills("technical");
  setAutoTheme();
  
  window.addEventListener("scroll", () => {
    document.querySelectorAll(".skill-tile").forEach((tile) => {
      const rect = tile.getBoundingClientRect();
      if (rect.top < window.innerHeight - 50) {
        tile.classList.add("visible");
      }
    });
  });
  
  toggles.forEach((toggle) => {
    toggle.addEventListener("click", () => {
      toggles.forEach((t) => t.classList.remove("active"));
      toggle.classList.add("active");
      renderSkills(toggle.getAttribute("data-type"));
    });
  });

  //----------------------------------------------------------------------------------------------------------Resume -------------------------------------------------------------
  document.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll(".tab");
    const sections = document.querySelectorAll(".content-section");
    const themeSwitch = document.getElementById("theme-switch");
  
    tabs.forEach(tab => {
      tab.addEventListener("click", () => {
        document.querySelector(".tab.active").classList.remove("active");
        tab.classList.add("active");
  
        const sectionToShow = tab.getAttribute("data-section");
  
        sections.forEach(section => {
          section.classList.remove("active");
          if (section.id === sectionToShow) {
            setTimeout(() => {
              section.classList.add("active");
            }, 50);
          }
        });
      });
    });
  
    // Theme toggle
    function setThemeMode() {
      if (themeSwitch.checked) {
        document.body.classList.remove("light");
        document.body.classList.add("dark");
      } else {
        document.body.classList.remove("dark");
        document.body.classList.add("light");
      }
    }
  
    themeSwitch.addEventListener("change", setThemeMode);
  
    // Initialize with light mode
    document.body.classList.add("light");
  });
  const tabs = document.querySelectorAll('.tab');
const sections = document.querySelectorAll('.content-section');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const sectionId = tab.getAttribute('data-section');

    // Remove active class from all tabs
    tabs.forEach(t => t.classList.remove('active'));

    // Hide all content sections
    sections.forEach(section => {
      section.classList.remove('active');
    });

    // Add active class to the clicked tab
    tab.classList.add('active');

    // Show the target content with animation
    const activeSection = document.getElementById(sectionId);
    activeSection.classList.add('active');
  });
});

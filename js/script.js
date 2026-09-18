document.addEventListener("DOMContentLoaded", () => {
  // 1. Dynamic Time-of-Day Greeting
  const greetingEl = document.getElementById("greeting");
  const hour = new Date().getHours();
  
  if (hour < 12) {
    greetingEl.textContent = "Good Morning, Welcome!";
  } else if (hour < 18) {
    greetingEl.textContent = "Good Afternoon, Welcome!";
  } else {
    greetingEl.textContent = "Good Evening, Welcome!";
  }

  // 2. Dark / Light Theme Toggle with LocalStorage
  const themeToggleBtn = document.getElementById("theme-toggle");
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme) {
    document.documentElement.setAttribute("data-theme", savedTheme);
  }

  themeToggleBtn.addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  });

  // 3. Contact Form Submission Handling
  const contactForm = document.getElementById("contact-form");
  const formStatus = document.getElementById("form-status");

  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();

    formStatus.style.color = "var(--accent)";
    formStatus.textContent = `Thank you, ${name}! Your message has been received.`;
    contactForm.reset();

    setTimeout(() => {
      formStatus.textContent = "";
    }, 4000);
  });
});
document.addEventListener("DOMContentLoaded", () => {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll("#navItem1, #navItem2, #navItem3, #navItem4");
    navLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = e.target.getAttribute("href").slice(1);
        document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
      });
    });
  
    // Banner text animation
    const bannerHeading = document.querySelector(".banner-heading");
    const bannerCaption = document.querySelector(".banner-caption");
  
    setTimeout(() => {
      bannerHeading.style.transform = "scale(1.1)";
      bannerHeading.style.transition = "transform 0.5s ease";
    }, 1000);
  
    setTimeout(() => {
      bannerCaption.style.transform = "translateX(10px)";
      bannerCaption.style.transition = "transform 0.5s ease";
    }, 1500);
  
    // Button hover ripple effect
    const buttons = document.querySelectorAll(".custom-button, .custom-outline-button");
    buttons.forEach((button) => {
      button.addEventListener("mouseover", (e) => {
        const ripple = document.createElement("span");
        ripple.classList.add("ripple");
        button.appendChild(ripple);
        setTimeout(() => {
          ripple.remove();
        }, 500);
      });
    });
  
    // Card animations on scroll
    const cards = document.querySelectorAll(".wcu-card, .menu-item-card");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.transform = "translateY(0)";
            entry.target.style.opacity = "1";
            entry.target.style.transition = "all 0.5s ease";
          } else {
            entry.target.style.transform = "translateY(20px)";
            entry.target.style.opacity = "0";
          }
        });
      },
      { threshold: 0.1 }
    );
  
    cards.forEach((card) => {
      observer.observe(card);
    });
  
    // Floating social icons animation
    const socialIcons = document.querySelectorAll(".follow-us-icon-container");
    socialIcons.forEach((icon, index) => {
      setTimeout(() => {
        icon.style.transform = "scale(1.1)";
        icon.style.transition = "transform 0.5s ease";
      }, index * 200);
  
      icon.addEventListener("mouseover", () => {
        icon.style.transform = "scale(1.3) rotate(10deg)";
      });
  
      icon.addEventListener("mouseleave", () => {
        icon.style.transform = "scale(1.1)";
      });
    });
  });
  
document.addEventListener("DOMContentLoaded", () => {
    const checkbox = document.getElementById("toggleMenu");
    const menu = document.getElementById("circularMenu");
  
    checkbox.addEventListener("change", () => {
      if (checkbox.checked) {
        menu.classList.add("show");
      } else {
        menu.classList.remove("show");
      }
    });
  });


  
  
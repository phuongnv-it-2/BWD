
    const menubar = document.querySelector(".menu-bar");
    menubar.addEventListener("click", function () {
        menubar.classList.toggle("active");
      document.querySelector(".menu-items").classList.toggle("active");
    });

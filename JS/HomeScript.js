
    const menubar = document.querySelector(".menu-bar");
    menubar.addEventListener("click", function () {
        menubar.classList.toggle("active");
      document.querySelector(".menu-items").classList.toggle("active");
    });
      const topMenu = document.querySelector(".top");
    let lastScrollY = window.scrollY;
    
    window.addEventListener("scroll", () => {
        if (window.scrollY > lastScrollY) {
            // Cuộn xuống
            topMenu.style.transform = "translateY(-100%)"; // Ẩn thanh menu
        } else {
            // Cuộn lên
            topMenu.style.transform = "translateY(0)"; // Hiển thị thanh menu
        }
        lastScrollY = window.scrollY;
    });


  /*pageanimation-------------------------------------
  ------------------------------------------------
  ------------------------------------------------------*/
  
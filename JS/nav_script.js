let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let logo = document.querySelector(".logo").querySelector("img");
menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
}


$(window).scroll(function () {
    if ($(this).scrollTop() >= 100) {
        $('header').addClass('nav-fixed');
        logo.src='Img/logo.png';
    } else {
        $('header').removeClass('nav-fixed');
        logo.src='Img/logo.png';
    }
});

//btn login

// Lấy tham chiếu đến nút đăng nhập
var btnLogin = document.getElementById('btn-in');

// Gắn sự kiện click vào nút đăng nhập
btnLogin.addEventListener('click', function() {
  // Chuyển hướng đến trang login.html
  window.location.href = 'sign-in.html';
});
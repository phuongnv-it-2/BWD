let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let logo = document.querySelector(".logo").querySelector("img");
const header = document.querySelector('header');
let lastScrollTop = 0;
let hideTimeout = null;

// Xử lý menu toggle
menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
};

// Xử lý cố định header khi scroll xuống >= 100px
$(window).scroll(function () {
    if ($(this).scrollTop() >= 100) {
        $('header').addClass('nav-fixed');
        logo.src = 'Img/logo.png';
    } else {
        $('header').removeClass('nav-fixed');
        logo.src = 'Img/logo.png';
    }
});

// Xử lý nút đăng nhập
var btnLogin = document.getElementById('btn-in');
btnLogin.addEventListener('click', function () {
    window.location.href = 'login.html';
});

// Hàm ẩn header sau 3 giây không scroll
function scheduleAutoHide() {
    clearTimeout(hideTimeout);
    hideTimeout = setTimeout(() => {
        header.classList.add('hide');
    }, 3000); // 3 giây
}

// Xử lý scroll: ẩn khi kéo xuống, hiện khi kéo lên, và tự ẩn sau 3s
window.addEventListener('scroll', function () {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // Kéo xuống: ẩn header
        header.classList.add('hide');
    } else {
        // Kéo lên: hiện header
        header.classList.remove('hide');
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;

    scheduleAutoHide(); // Đặt lại hẹn giờ ẩn sau 3s
});

// Bắt đầu hẹn giờ ẩn khi tải trang
window.addEventListener('DOMContentLoaded', scheduleAutoHide);

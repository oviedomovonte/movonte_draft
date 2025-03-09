document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.getElementById('hamburger');
    const menuItems = document.getElementById('menu-items');

    hamburger.addEventListener('click', function () {
        menuItems.classList.toggle('active');
    });
});
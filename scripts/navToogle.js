document.getElementById('menu').addEventListener('click', function() {
    const navigation = document.querySelector('.navigation');
    const menuToggle = document.querySelector('.menu-toggle');
    const hamburgerIcon = menuToggle.querySelector('svg:nth-child(1)');
    const closeIcon = menuToggle.querySelector('svg:nth-child(2)');

    navigation.classList.toggle('active');
    menuToggle.classList.toggle('open');

    // Toggle the display of hamburger and close icons
    hamburgerIcon.style.display = menuToggle.classList.contains('open') ? 'none' : 'inline';
    closeIcon.style.display = menuToggle.classList.contains('open') ? 'inline' : 'none';
});

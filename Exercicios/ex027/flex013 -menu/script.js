    let menuMobileOpen = document.getElementById('open');
    let menuMobileClose = document.getElementById('close');
    let navItem = document.getElementById('nav-item');

    window.addEventListener('resize', function() {
        var largura = window.innerWidth;
        if (largura > 600) {
            menuClose()
        }
    })

function menuShow() {
    
    if (menuMobileOpen.classList.contains('open')) {
        menuMobileOpen.classList.remove('open');
        menuMobileClose.classList.add('close');
        navItem.classList.remove('nav-item');
    }
}

function menuClose() {

    if (menuMobileClose.classList.contains('close')) {
        menuMobileOpen.classList.add('open');
        menuMobileClose.classList.remove('close');
        navItem.classList.add('nav-item');
    }
}
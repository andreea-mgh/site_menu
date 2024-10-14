document.addEventListener('DOMContentLoaded', function() {
    const menuItems = document.querySelectorAll('.menu-item > a');
    const hamburger = document.querySelector('.hamburger');
    const menu = document.getElementById('menu');
    const overlay = document.createElement('div');

    overlay.classList.add('overlay');
    document.body.appendChild(overlay);

    hamburger.addEventListener('click', function() {
        menu.classList.toggle('active');
        overlay.classList.toggle('active');
    });

    overlay.addEventListener('click', function() {
        menu.classList.remove('active');
        overlay.classList.remove('active');
    });

    menuItems.forEach(item => {
        item.addEventListener('click', function(event) {
            const submenu = this.nextElementSibling;

            closeSiblingSubmenus(this);

            if (submenu && submenu.classList.contains('submenu')) {
                event.preventDefault();

                if (submenu.style.display === 'block') {
                    submenu.style.display = 'none';
                } else {
                    submenu.style.display = 'block';
                }
            }
        });
    });

    // pt cand se da click in afara lor
    document.addEventListener('click', function(event) {
        const isClickInsideMenu = event.target.closest('.menu-item');
        if (!isClickInsideMenu) {
            closeAllSubmenus();
        }
    });

    function closeSiblingSubmenus(currentItem) {
        const parentMenu = currentItem.closest('ul');
        const siblings = parentMenu.querySelectorAll('.submenu');

        siblings.forEach(submenu => {
            if (submenu !== currentItem.nextElementSibling) {
                submenu.style.display = 'none';
            }
        });
    }

    function closeAllSubmenus() {
        document.querySelectorAll('.submenu').forEach(submenu => {
            submenu.style.display = 'none';
        });
    }
});

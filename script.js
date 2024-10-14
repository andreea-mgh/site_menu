document.addEventListener('DOMContentLoaded', function() {
    const menuItems = document.querySelectorAll('.menu-item > a');

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

    function closeSiblingSubmenus(currentItem) {
        const parentMenu = currentItem.closest('ul');
        const siblings = parentMenu.querySelectorAll('.submenu');

        siblings.forEach(submenu => {
            if (submenu !== currentItem.nextElementSibling) {
                submenu.style.display = 'none';
            }
        });
    }

    // ca sa se inchida cand dai click inafara meniului
    document.addEventListener('click', function(event) {
        const isClickInsideMenu = event.target.closest('.menu-item');
        if (!isClickInsideMenu) {
            closeAllSubmenus();
        }
    });

    function closeAllSubmenus() {
        document.querySelectorAll('.submenu').forEach(submenu => {
            submenu.style.display = 'none';
        });
    }
});

window.addEventListener('DOMContentLoaded', () => {

    const hideMenuItem = (li) => {
        li.classList.add('hidden');
        li.classList.remove('visible');
    }

    const handleMenuClick = (e) => {
        hideMenuItem(e.target.closest('li'));
        const remainingFungi = document.querySelectorAll('.fungi-menu-item.visible');
        
        let i = 0;
        let hideMenuItems = setInterval(() => {
            hideMenuItem(remainingFungi[i]);
            i++;
            i >= remainingFungi.length && stopHidingMenu();
        }, "300");

        const stopHidingMenu = () => {
            clearInterval(hideMenuItems);
            hideMenuItems = null;
        }
       
    }

    document.querySelectorAll('.fungi-menu-image').forEach(fungi => {
        fungi.addEventListener('click', (e) => handleMenuClick(e));
    });
});


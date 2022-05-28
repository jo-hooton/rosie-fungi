window.addEventListener('DOMContentLoaded', () => {

    const hideMenuItem = (li) => {
        li.classList.add('hidden');
        li.classList.remove('visible');
    }

    revealFungi = (id) => {
        document.querySelector(`#fungi-page-${id}`).classList.add('current');
    }

    const handleMenuClick = (e) => {
        const selectedFungi = e.target.closest('li');
        hideMenuItem(selectedFungi);
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
        console.log(selectedFungi.dataset);
        revealFungi(selectedFungi.dataset.id);
        
       
    }

    document.querySelectorAll('.fungi-menu-image').forEach(fungi => {
        fungi.addEventListener('click', (e) => handleMenuClick(e));
    });
});


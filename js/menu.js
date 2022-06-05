window.addEventListener('DOMContentLoaded', () => {

    const hideMenuItem = (li) => {
        li.classList.add('hidden');
        li.classList.remove('visible');
    }

    // revealFungi = (id) => {
    //     document.querySelector(`#fungi-page-${id}`).classList.add('current');
    // }

    const handleMenuClick = (e) => {
        const selectedFungi = e.target.closest('li');
        hideMenuItem(selectedFungi);
        const remainingFungi = document.querySelectorAll('.fungi-menu-item.visible');
        
        let i = 0;
        let hideMenuItems = setInterval(() => {
            hideMenuItem(remainingFungi[i]);
            i++;
            if (i >= remainingFungi.length) {
                setTimeout(() => {
                    window.location = (`/rosie-fungi/fungi/fungi_${selectedFungi.dataset.id}`)
                }, 300)
                // stopHidingMenu();
            }

        }, "400");

        // const stopHidingMenu = () => {
        //     clearInterval(hideMenuItems);
        //     hideMenuItems = null;
        // }
        console.log(selectedFungi.dataset);
        
       
    }

    document.querySelectorAll('.fungi-menu-image').forEach(fungi => {
        fungi.addEventListener('click', (e) => handleMenuClick(e));
    });
});


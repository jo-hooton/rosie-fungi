window.addEventListener('beforeunload', () => {
    setTimeout(function () {
        window.scroll((document.documentElement.clientWidth/2),0);
    });
});

window.addEventListener('load', () => {
    document.querySelectorAll('.fungi-page').forEach((fungi) => fungi.classList.add('revealed'));
})
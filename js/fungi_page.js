window.addEventListener('beforeunload', () => {
    setTimeout(function () {
        window.scroll((document.documentElement.clientWidth/2),0);
    });     
});
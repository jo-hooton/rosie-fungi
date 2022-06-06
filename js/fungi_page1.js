const revealElement = (element) => {
    document.querySelector(element).classList.add('revealed');
}

window.addEventListener('load', () => {

    setTimeout(() => {
        window.scroll((document.documentElement.clientWidth/2),0);
        revealElement('.fruit-only');
    }, 300)
    
    setTimeout(() => {
        window.addEventListener('scroll', () => {
            revealElement('.strands')
        });
    }, 500)

});

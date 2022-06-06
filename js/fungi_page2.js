const revealElement = (element) => {
    document.querySelector(element).classList.add('revealed');
}

window.addEventListener('load', () => {

    setTimeout(() => {
        const body = document.body, html = document.documentElement;
        const height = Math.max( body.scrollHeight, body.offsetHeight, 
        html.clientHeight, html.scrollHeight, html.offsetHeight );
        window.scroll(0,height);
        revealElement('.fruit-only');
    }, 300)
    
    setTimeout(() => {
        window.addEventListener('scroll', () => {
            revealElement('.strands')
        });
    }, 500)

});

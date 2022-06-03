window.addEventListener('beforeunload', () => {
        // window.scroll((document.documentElement.clientWidth/2),0);
        document.querySelector('.fungi-page.fruit-only img').scrollIntoView({block: "center", inline: "center"});
});

const revealElement = (element) => {
    document.querySelector(element).classList.add('revealed');
}

window.addEventListener('load', () => {
    revealElement('.fruit-only');
    setTimeout(() => {
        window.addEventListener('scroll', () => {
            revealElement('.strands')
        });
    }, 500)
});



window.addEventListener('beforeunload', () => {
    setTimeout(function () {
        // window.scroll((document.documentElement.clientWidth/2),0);
        document.querySelector('.fungi-page.fruit-only img').scrollIntoView({block: "center", inline: "center"});

    });
});

const revealElement = (element) => {
    document.querySelector(element).classList.add('revealed');
}

window.addEventListener('load', () => {
    revealElement('.fungi-page.fruit-only');
    setTimeout(revealElement('.fungi-page.strands'), 1000)
});



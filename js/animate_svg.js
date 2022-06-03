// window.addEventListener('load', () => {
    
//     const svg = document.getElementById('fungi-strands').contentDocument;
//     const strands = svg.querySelectorAll('.single-strand');
//     strands.forEach(strand => strand.classList.add('test'))
//     setInterval(() => {
//         strands.forEach(strand => 
//             isInViewport(strand) ? strand.classList.add('animate-strand') :  strand.classList.remove('animate-strand'))
//     }, 3000)
    

//     function isInViewport(element) {
        
//         const rect = element.getBoundingClientRect();
//         const clientHeight = document.documentElement.clientHeight
//         const clientWidth = document.documentElement.clientWidth

//         return (
//             rect.top >= (clientHeight / 3) &&
//             rect.left >= (clientWidth / 3) &&
//             rect.bottom <= (clientHeight) &&
//             rect.right <= (clientWidth)
//         );
//     }

   
// })
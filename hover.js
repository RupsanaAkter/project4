const Circle=document.getElementById('circle');
Circle.addEventListener('mouseenter',()=>{
    if (!Circle.classList.contains('hover')) {
        Circle.classList.add('hover');
    }
   
})

Circle.addEventListener('mouseleave',()=>{
    if (Circle.classList.contains('hover')) {
        Circle.classList.remove('hover');
    }
   
})
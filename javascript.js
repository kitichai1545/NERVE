const imgTop = document.querySelector('.img-top');
const imgBottom = document.querySelector('.img-bottom');

/* หยุดแถวบนเมื่อวางเมาส์ */
imgTop.addEventListener('mouseenter', () => {
    imgTop.classList.add('paused');
});

imgTop.addEventListener('mouseleave', () => {
    imgTop.classList.remove('paused');
});

/* หยุดแถวล่างเมื่อวางเมาส์ */
imgBottom.addEventListener('mouseenter', () => {
    imgBottom.classList.add('paused');
});

imgBottom.addEventListener('mouseleave', () => {
    imgBottom.classList.remove('paused');
});
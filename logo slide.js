window.addEventListener('scroll', function() {
    const leftSlide = document.querySelector('.left-slide');
    const rightSlide = document.querySelector('.right-slide');
    const screenPosition = window.innerHeight;
    
    const leftPosition = leftSlide.getBoundingClientRect().top;
    const rightPosition = rightSlide.getBoundingClientRect().top;
    const leftBottomPosition = leftSlide.getBoundingClientRect().bottom;
    const rightBottomPosition = rightSlide.getBoundingClientRect().bottom;
  
    // ตรวจสอบเมื่อแถวบนเข้ามาในมุมมอง
    if (leftPosition < screenPosition && leftBottomPosition > 0) {
      leftSlide.classList.add('visible');
      leftSlide.classList.remove('hidden');
    } else {
      leftSlide.classList.remove('visible');
      leftSlide.classList.add('hidden');
    }
  
    // ตรวจสอบเมื่อแถวล่างเข้ามาในมุมมอง
    if (rightPosition < screenPosition && rightBottomPosition > 0) {
      rightSlide.classList.add('visible');
      rightSlide.classList.remove('hidden');
    } else {
      rightSlide.classList.remove('visible');
      rightSlide.classList.add('hidden');
    }
  });
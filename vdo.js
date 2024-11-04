window.onload = function() {
    if (window.innerWidth <= 768) {
        const video2 = document.querySelector('.background-video2');
        const video3 = document.querySelector('.background-video3');

        // หยุดวิดีโอและลบปุ่มควบคุม
        video2.pause();
        video2.removeAttribute('controls');

        video3.pause();
        video3.removeAttribute('controls');
    }
};
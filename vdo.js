window.onload = function() {
    if (window.innerWidth <= 768) {
        const video = document.querySelector('.background-video2');
        video.pause(); // หยุดเล่นวิดีโอ
        video.removeAttribute('controls'); // ลบปุ่มควบคุม
    }
};
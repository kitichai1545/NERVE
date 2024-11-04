window.onload = function() {
    // หยุดวิดีโอและลบปุ่มควบคุมสำหรับหน้าจอมือถือ
    if (window.innerWidth <= 768) {
        const video2 = document.querySelector('.background-video2');
        const video3 = document.querySelector('.background-video3');

        video2.pause(); // หยุดเล่นวิดีโอสำหรับ blog2
        video2.removeAttribute('controls'); // ลบปุ่มควบคุม

        video3.pause(); // หยุดเล่นวิดีโอสำหรับ blog3
        video3.removeAttribute('controls'); // ลบปุ่มควบคุม
    }
};
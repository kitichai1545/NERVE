function setVideoSource(videoId, desktopSrc, mobileSrc) {
    const videoElement = document.getElementById(videoId);

    if (window.innerWidth <= 768) {
        videoElement.src = mobileSrc;  // วิดีโอสำหรับมือถือ
    } else {
        videoElement.src = desktopSrc;  // วิดีโอสำหรับเดสก์ท็อป
    }

    videoElement.load();  // บังคับให้รีเฟรชการโหลดวิดีโอใหม่
}

window.addEventListener("load", function () {
    setVideoSource("video2", "S1_COM1.mp4", "S1_Mobile1.mp4");
    setVideoSource("video3", "S2_COM.mp4", "S2_Mobile.mp4");
    setVideoSource("video4", "S3_COM.mp4", "S3_Mobile.mp4");
    setVideoSource("video02", "S1_COM2.mp4", "S1_Mobile2.mp4");
    setVideoSource("video03", "S2_COM.mp4", "S2_Mobile.mp4");
    setVideoSource("video04", "S3_COM.mp4", "S3_Mobile.mp4"); 
});
;

window.addEventListener("resize", function () {
    setVideoSource("video2", "S1_COM1.mp4", "S1_Mobile1.mp4");
    setVideoSource("video3", "S2_COM.mp4", "S2_Mobile.mp4");
    setVideoSource("video4", "S3_COM.mp4", "S3_Mobile.mp4");
    setVideoSource("video02", "S1_COM2.mp4", "S1_Mobile2.mp4");
    setVideoSource("video03", "S2_COM.mp4", "S2_Mobile.mp4");
    setVideoSource("video04", "S3_COM.mp4", "S3_Mobile.mp4");
});

function setVideoSource(videoId, desktopSrc, mobileSrc) {
    const videoElement = document.getElementById(videoId);

    // ตรวจสอบว่า videoElement ถูกพบหรือไม่
    if (!videoElement) {
        console.error(`Video element with ID ${videoId} not found.`);
        return;
    }

    if (window.innerWidth <= 768) {
        videoElement.src = mobileSrc;
        console.log(`Setting mobile video for ${videoId}`);
    } else {
        videoElement.src = desktopSrc;
        console.log(`Setting desktop video for ${videoId}`);
    }

    videoElement.load();
    videoElement.play();
}

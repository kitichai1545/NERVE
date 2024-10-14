const imgContainerTop = document.querySelector('.img-top');
const imgContainerBottom = document.querySelector('.img-bottom');

// ฟังก์ชันสำหรับสลับรูปภาพจากหน้ามาไว้หลังสุด
function moveFirstImageToEnd(container) {
    const firstImage = container.querySelector('img:first-child');
    container.appendChild(firstImage);  // ย้ายรูปแรกไปไว้หลังสุด
}

// ฟังก์ชันสำหรับเลื่อนภาพอย่างนุ่มนวล
function slideImages() {
    // เลื่อนภาพในแถวบนไปทางซ้าย
    imgContainerTop.style.transition = 'transform 20s linear'; // เพิ่มการเปลี่ยนภาพแบบสมูท
    imgContainerTop.style.transform = 'translateX(-20%)';

    // หลังจากเลื่อนเสร็จ ย้ายภาพแรกไปหลังสุด
    setTimeout(() => {
        imgContainerTop.style.transition = 'none'; // ปิด transition ชั่วคราว
        moveFirstImageToEnd(imgContainerTop);
        imgContainerTop.style.transform = 'translateX(0)'; // รีเซ็ตตำแหน่ง
        setTimeout(() => {
            imgContainerTop.style.transition = 'transform 2s linear'; // เปิด transition อีกครั้ง
        }, 50);
    }, 2000); // ปรับเวลาให้ตรงกับ transition
}

// ฟังก์ชันสำหรับเลื่อนภาพในแถวล่างไปทางขวา
function slideImagesReverse() {
    // เลื่อนภาพในแถวล่างไปทางขวา
    imgContainerBottom.style.transition = 'transform 2s linear'; // เพิ่มการเปลี่ยนภาพแบบสมูท
    imgContainerBottom.style.transform = 'translateX(20%)';

    // หลังจากเลื่อนเสร็จ ย้ายภาพแรกไปหลังสุด
    setTimeout(() => {
        imgContainerBottom.style.transition = 'none'; // ปิด transition ชั่วคราว
        moveFirstImageToEnd(imgContainerBottom);
        imgContainerBottom.style.transform = 'translateX(0)'; // รีเซ็ตตำแหน่ง
        setTimeout(() => {
            imgContainerBottom.style.transition = 'transform 2s linear'; // เปิด transition อีกครั้ง
        }, 50);
    }, 2000); // ปรับเวลาให้ตรงกับ transition
}

// เรียกใช้ฟังก์ชันทุกๆ 2 วินาทีเพื่อเลื่อนภาพ
setInterval(slideImages, 2000);
setInterval(slideImagesReverse, 2000);
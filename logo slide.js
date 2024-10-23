document.addEventListener("DOMContentLoaded", function() {
  const logoContainer1 = document.getElementById('logo-container-1');
  const logoContainer2 = document.getElementById('logo-container-2');

  // เริ่มต้นให้โลโก้ชุดที่ 1 แสดง
  logoContainer1.classList.add('active');

  setInterval(() => {
    if (logoContainer1.classList.contains('active')) {
      // ถ้าโลโก้ชุดที่ 1 กำลังแสดง
      logoContainer1.classList.add('exit'); // ให้โลโก้ชุดที่ 1 เลื่อนออก
      setTimeout(() => {
        logoContainer1.classList.remove('active'); // ซ่อนโลโก้ชุดที่ 1
        logoContainer2.classList.add('active'); // ให้โลโก้ชุดที่ 2 เลื่อนเข้า
        logoContainer2.classList.remove('exit'); // รีเซ็ตคลาส exit
      }, 1500); // เวลาที่ใช้สำหรับเลื่อนออก
    } else {
      // ถ้าโลโก้ชุดที่ 2 กำลังแสดง
      logoContainer2.classList.add('exit'); // ให้โลโก้ชุดที่ 2 เลื่อนออก
      setTimeout(() => {
        logoContainer2.classList.remove('active'); // ซ่อนโลโก้ชุดที่ 2
        logoContainer1.classList.add('active'); // ให้โลโก้ชุดที่ 1 เลื่อนเข้า
        logoContainer1.classList.remove('exit'); // รีเซ็ตคลาส exit
      }, 1500); // เวลาที่ใช้สำหรับเลื่อนออก
    }
  }, 20000); // ตั้งให้สลับทุก 20 วินาที
});
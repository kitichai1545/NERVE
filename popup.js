// เปิด Popup เมื่อคลิกที่ปุ่มใน hero
document.getElementById("openPopupBtn").addEventListener("click", function(event) {
    event.preventDefault();  // ป้องกันการรีเฟรชหน้าเมื่อคลิกลิงก์
    document.getElementById("popupForm").style.display = "block";  // แสดง popup
});

// เปิด Popup เมื่อคลิกที่ปุ่มใน footer
document.getElementById("openPopupBtnFooter").addEventListener("click", function(event) {
    event.preventDefault();  // ป้องกันการรีเฟรชหน้าเมื่อคลิกลิงก์
    document.getElementById("popupForm").style.display = "block";  // แสดง popup
});

// ปิด Popup เมื่อคลิกที่ปุ่มปิด (ใช้เพียงครั้งเดียว)
document.getElementById("closePopupBtn2").addEventListener("click", function() {
    document.getElementById("popupForm").style.display = "none";  // ซ่อน popup
});
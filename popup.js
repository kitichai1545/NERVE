// เปิด Popup เมื่อคลิกที่ปุ่ม
document.getElementById("openPopupBtn").addEventListener("click", function(event) {
    event.preventDefault();  // ป้องกันการรีเฟรชหน้าเมื่อคลิกลิงก์
    document.getElementById("popupForm").style.display = "block";  // แสดง popup
});

// ปิด Popup เมื่อคลิกที่ปุ่มปิด
document.getElementById("closePopupBtn").addEventListener("click", function() {
    document.getElementById("popupForm").style.display = "none";  // ซ่อน popup
});

// ปิด Popup เมื่อคลิกปุ่ม "ปิด" ภายใน form
document.getElementById("closePopupBtn2").addEventListener("click", function() {
    document.getElementById("popupForm").style.display = "none";  // ซ่อน popup
});
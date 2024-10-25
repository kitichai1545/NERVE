// เปิด Popup เมื่อคลิกที่ปุ่มใน hero (index1)
let btnHero = document.getElementById("openPopupBtn") || document.getElementById("openPopupBtn2");
if (btnHero) {
    btnHero.addEventListener("click", function(event) {
        event.preventDefault();  // ป้องกันการรีเฟรชหน้าเมื่อคลิกลิงก์
        document.getElementById("popupForm").style.display = "block";  // แสดง popup
    });
}

// เปิด Popup เมื่อคลิกที่ปุ่มใน footer
let btnFooter = document.getElementById("openPopupBtnFooter");
if (btnFooter) {
    btnFooter.addEventListener("click", function(event) {
        event.preventDefault();  // ป้องกันการรีเฟรชหน้าเมื่อคลิกลิงก์
        document.getElementById("popupForm").style.display = "block";  // แสดง popup
    });
}

// ปิด Popup เมื่อคลิกที่ปุ่มปิด
let closeBtn = document.getElementById("closePopupBtn2");
if (closeBtn) {
    closeBtn.addEventListener("click", function() {
        document.getElementById("popupForm").style.display = "none";  // ซ่อน popup
    });
}
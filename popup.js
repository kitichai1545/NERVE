// เปิด Popup เมื่อคลิกที่ปุ่มใน hero (index1)
let btnHero = document.getElementById("openPopupBtn") || document.getElementById("openPopupBtn2");
if (btnHero) {
    btnHero.addEventListener("click", function(event) {
        event.preventDefault();  // ป้องกันการรีเฟรชหน้าเมื่อคลิกลิงก์
        document.getElementById("popupForm").style.display = "flex";  // แสดง popup แบบกึ่งกลาง
    });
}

// เปิด Popup เมื่อคลิกที่ปุ่มใน footer
let btnFooter = document.getElementById("openPopupBtnFooter");
if (btnFooter) {
    btnFooter.addEventListener("click", function(event) {
        event.preventDefault();  // ป้องกันการรีเฟรชหน้าเมื่อคลิกลิงก์
        document.getElementById("popupForm").style.display = "flex";  // แสดง popup แบบกึ่งกลาง
    });
}

// ปิด Popup เมื่อคลิกที่ปุ่มปิด
let closeBtn = document.getElementById("closePopupBtn2");
if (closeBtn) {
    closeBtn.addEventListener("click", function() {
        document.getElementById("popupForm").style.display = "none";  // ซ่อน popup
        // รีเซ็ตข้อความสำเร็จและแสดงปุ่มส่งข้อมูลอีกครั้ง
        document.getElementById("successMessage").style.display = "none";
        document.getElementById("submitPopupBtn").style.display = "block";
    });
}

// ฟังก์ชันสำหรับส่งข้อมูลจาก popup ไปยัง API
function submitPopupForm() {
    // รับค่าจากฟอร์มใน popup
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const url = document.getElementById('url').value;
    const phone = document.getElementById('phone').value;

    // ตรวจสอบว่าฟิลด์ทั้งหมดถูกกรอกครบถ้วน
    if (!name || !email || !url || !phone) {
        alert("กรุณากรอกข้อมูลให้ครบทุกช่อง");
        return;
    }

    // ส่งข้อมูลไปยัง API ของ Backend
    fetch('https://api.example.com/send-email', {  // เปลี่ยน URL ให้ตรงกับ API ของ Backend
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            email: email,
            url: url,
            phone: phone
        })
    })
    .then(response => response.json())
    .then(data => {
        // แสดงข้อความแจ้งเตือนสำเร็จ
        const successMessage = document.getElementById("successMessage");
        successMessage.style.display = "block";  // แสดงข้อความสำเร็จที่ซ่อนอยู่ใน HTML
        document.getElementById("submitPopupBtn").style.display = "none";  // ซ่อนปุ่มส่งหลังจากส่งสำเร็จ
    })
    .catch(error => {
        console.error('Error:', error);
        alert("เกิดข้อผิดพลาดในการส่งข้อมูล กรุณาลองใหม่อีกครั้ง");
    });
}

// เชื่อมโยงฟังก์ชันส่งข้อมูลกับปุ่มส่งข้อมูลใน popup
let submitBtn = document.getElementById("submitPopupBtn");
if (submitBtn) {
    submitBtn.addEventListener("click", function(event) {
        event.preventDefault();  // ป้องกันการรีเฟรชหน้า
        submitPopupForm();       // เรียกฟังก์ชันส่งข้อมูล
    });
}
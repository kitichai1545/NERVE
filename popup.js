// เปิด Popup เมื่อคลิกที่ปุ่มใน hero (index1)
document.querySelectorAll("#openPopupBtn, #openPopupBtn2, #openPopupBtnFooter").forEach(btn => {
    if (btn) {
        btn.addEventListener("click", (event) => {
            event.preventDefault();
            document.getElementById("popupForm").style.display = "flex"; // แสดง popup
        });
    }
});

// ปิด Popup เมื่อคลิกที่ปุ่มปิด
const closeBtn = document.getElementById("closePopupBtn2");
if (closeBtn) {
    closeBtn.addEventListener("click", () => {
        document.getElementById("popupForm").style.display = "none";
        document.getElementById("successMessage").style.display = "none";
        document.getElementById("submitPopupBtn").style.display = "block";
        document.querySelector('form').reset();
    });
}

// ฟังก์ชันสำหรับส่งข้อมูลจาก popup ไปยัง API
async function submitPopupForm() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const url = document.getElementById('url').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const budget = document.getElementById('Budget').value.trim();
    const services = Array.from(document.querySelectorAll('input[name="service"]:checked'))
        .map(checkbox => checkbox.value);

    if (!name || !email || !url || !phone || !budget || services.length === 0) {
        alert("กรุณากรอกข้อมูลให้ครบทุกช่อง");
        return;
    }

    try {
        console.log("Sending data:", { name, email, url, phone, budget, serve: services.join(', ') });

        const response = await fetch('https://nerve-qpl0.onrender.com/api/save-popup-data', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name,
                email,
                url,
                phone,
                budget,
                serve: services.join(', '),
            }),
        });

        console.log("Response status:", response.status);
        if (response.ok) {
            const data = await response.json();
            console.log('Success:', data);
            document.getElementById("successMessage").style.display = "block";
            document.getElementById("submitPopupBtn").style.display = "none";
        } else {
            const errorData = await response.json();
            console.error("Error response:", errorData);
            alert(errorData.message || "เกิดข้อผิดพลาดในการส่งข้อมูล กรุณาลองใหม่อีกครั้ง");
        }
    } catch (error) {
        console.error('Error:', error);
        alert("ไม่สามารถเชื่อมต่อเซิร์ฟเวอร์ได้ กรุณาลองใหม่อีกครั้ง");
    }
}

// เชื่อมโยงฟังก์ชันส่งข้อมูลกับปุ่มส่งข้อมูลใน popup
const submitBtn = document.getElementById("submitPopupBtn");
if (submitBtn) {
    submitBtn.addEventListener("click", (event) => {
        event.preventDefault();
        submitPopupForm();
    });
}
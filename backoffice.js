function uploadBackgroundVideo() {
    const token = localStorage.getItem('authToken');
    const videoFileInput = document.getElementById('background-video');
    const videoFile = videoFileInput ? videoFileInput.files[0] : null;

    if (videoFile && token) {
        const formData = new FormData();
        formData.append('video', videoFile);

        fetch('https://nerve-qpl0.onrender.com/upload-background-video', {
            method: 'POST',
            headers: { 'Authorization': `Bearer ${token}` },
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                if (data.message) alert(data.message);
                else console.error("Unexpected response:", data);
            })
            .catch(error => {
                console.error("Error uploading video:", error);
                alert("เกิดข้อผิดพลาดในการอัปโหลดวิดีโอ");
            });
    } else {
        alert("กรุณาเลือกไฟล์วิดีโอและตรวจสอบว่าได้เข้าสู่ระบบแล้ว");
    }
}

function uploadBackgroundImage() {
    const token = localStorage.getItem('authToken');
    const imageFileInput = document.getElementById('background-image');
    const imageFile = imageFileInput ? imageFileInput.files[0] : null;

    if (imageFile && token) {
        const formData = new FormData();
        formData.append('image', imageFile);

        fetch('https://nerve-qpl0.onrender.com/upload-background-image', {
            method: 'POST',
            headers: { 'Authorization': `Bearer ${token}` },
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                if (data.message) alert(data.message);
                else console.error("Unexpected response:", data);
            })
            .catch(error => {
                console.error("Error uploading image:", error);
                alert("เกิดข้อผิดพลาดในการอัปโหลดรูปภาพ");
            });
    } else {
        alert("กรุณาเลือกไฟล์รูปภาพและตรวจสอบว่าได้เข้าสู่ระบบแล้ว");
    }
}

function saveContent() {
    const token = localStorage.getItem('authToken');
    const content = document.getElementById('content-editor').value;

    if (content && token) {
        fetch('https://nerve-qpl0.onrender.com/save-content', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({ content })
        })
            .then(response => response.json())
            .then(data => alert(data.message))
            .catch(error => console.error("Error saving content:", error));
    }
}

function loadContent() {
    const token = localStorage.getItem('authToken');
    fetch('https://nerve-qpl0.onrender.com/get-content', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    .then(response => response.json())
    .then(data => {
        if (data && data.content) {
            document.getElementById('content-editor').value = data.content;
        } else {
            console.error("No content found.");
        }
    })
    .catch(error => console.error("Error loading content:", error));
}

function loadPopupData() {
    fetch('https://nerve-qpl0.onrender.com/api/get-popup-data', {
        method: 'GET',
        headers: { 
            'Authorization': `Bearer ${localStorage.getItem('authToken')}`
        }
    })
    .then(response => response.json())
    .then(data => {
        console.log('Received data:', data);
        const tableBody = document.querySelector('.popup-data-table tbody');
        tableBody.innerHTML = ''; // ล้างข้อมูลเก่า

        if (data && Array.isArray(data)) {
            data.forEach(entry => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${entry.name || 'N/A'}</td>
                    <td>${entry.email || 'N/A'}</td>
                    <td>${entry.url || 'N/A'}</td>
                    <td>${entry.phone || 'N/A'}</td>
                    <td>${entry.budget || 'N/A'}</td>
                    <td>${entry.serve || 'N/A'}</td>
                    <td>${entry.date || 'N/A'}</td>
                `;
                tableBody.appendChild(row);
            });
        } else {
            console.error('No valid data found');
        }
    })
    .catch(error => {
        console.error('Error loading popup data:', error);
        alert('ไม่สามารถโหลดข้อมูลได้ กรุณาลองใหม่อีกครั้ง');
    });
}

function submitPopupForm() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const url = document.getElementById('url').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const budget = document.getElementById('Budget').value;
    const services = Array.from(document.querySelectorAll('input[name="service"]:checked'))
                        .map(checkbox => checkbox.value);

    if (!name || !email || !url || !phone || !budget || services.length === 0) {
        alert("กรุณากรอกข้อมูลให้ครบทุกช่อง");
        return;
    }

    const token = localStorage.getItem('authToken');

    fetch('https://nerve-qpl0.onrender.com/api/save-popup-data', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
            name,
            email,
            url,
            phone,
            budget,
            serve: services.join(', ')
        })
    })
    .then(response => response.json())
    .then(data => {
        alert("บันทึกข้อมูลเรียบร้อย");
        loadPopupData();  // โหลดข้อมูลใหม่หลังจากบันทึกสำเร็จ
    })
    .catch(error => {
        console.error('Error submitting popup data:', error);
        alert("เกิดข้อผิดพลาดในการส่งข้อมูล กรุณาลองใหม่อีกครั้ง");
    });
}
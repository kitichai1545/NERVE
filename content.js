// เมื่อโหลดหน้าเว็บแล้วให้แอนิเมชันแสดง
window.onload = function() {
    // แสดงคอนเทนต์แรกเมื่อโหลดหน้าเสร็จ
    let content1 = document.getElementById('content1');
    content1.classList.add('visible'); // เพิ่มคลาสเพื่อแสดงแอนิเมชัน

    // ตั้งเวลา 20 วินาทีเพื่อเปลี่ยนคอนเทนต์
    setTimeout(function() {
        // ซ่อนคอนเทนต์แรก
        content1.style.display = 'none';

        // แสดงคอนเทนต์ที่สอง
        let content2 = document.getElementById('content2');
        content2.style.display = 'block'; // เปลี่ยนการแสดงคอนเทนต์ที่สอง
        content2.classList.add('visible'); // เพิ่มคลาสเพื่อแสดงแอนิเมชัน
    }, 20000); // 20 วินาที
};

window.onload = function() {
    let content1 = document.getElementById('content1');
    let content2 = document.getElementById('content2');
    let currentContent = 1; // เก็บสถานะของคอนเทนต์ที่แสดงอยู่

    // เริ่มต้นด้วยการแสดงคอนเทนต์แรก
    content1.classList.add('visible');
    content1.style.display = 'block';

    // ตั้งเวลาให้คอนเทนต์เปลี่ยนวนไปมา
    setInterval(function() {
        if (currentContent === 1) {
            // ค่อยๆ ซ่อนคอนเทนต์แรก
            content1.classList.remove('visible');
            setTimeout(function() {
                content1.style.display = 'none';
                
                // ค่อยๆ แสดงคอนเทนต์ที่สอง
                content2.style.display = 'block';
                content2.classList.add('visible');
            }, 1500); // ตรงกับเวลา transition 1.5 วินาที
            currentContent = 2;
        } else {
            // ค่อยๆ ซ่อนคอนเทนต์ที่สอง
            content2.classList.remove('visible');
            setTimeout(function() {
                content2.style.display = 'none';
                
                // ค่อยๆ แสดงคอนเทนต์แรก
                content1.style.display = 'block';
                content1.classList.add('visible');
            }, 1500); // ตรงกับเวลา transition 1.5 วินาที
            currentContent = 1;
        }
    }, 20000); // 20 วินาที
};
// Sample login function
async function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    try {
        const response = await fetch('https://nerve-qpl0.onrender.com/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        });

        if (response.ok) {
            const data = await response.json();
            const token = data.token; // รับ Token จาก API
            localStorage.setItem('authToken', token); // เก็บ Token ใน Local Storage
            console.log('Token stored:', token); // ตรวจสอบว่า Token ถูกเก็บสำเร็จหรือไม่
            document.getElementById("message").innerText = "Login successful!";
            // Redirect to dashboard or other page
            window.location.href = "/dashboard";
        } else {
            document.getElementById("message").innerText = "Invalid credentials. Please try again.";
        }
    } catch (error) {
        console.error("Error during login:", error);
        document.getElementById("message").innerText = "An error occurred. Please try again.";
    }
}
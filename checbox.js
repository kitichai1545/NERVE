document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
    checkbox.addEventListener('change', (event) => {
        if (event.target.checked) {
            console.log(`${event.target.id} ถูกเลือก`);
        } else {
            console.log(`${event.target.id} ไม่ถูกเลือก`);
        }
    });
});
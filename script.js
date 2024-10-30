document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    // แสดงข้อความยืนยัน ()
    document.getElementById('message').textContent = `เข้าสู่ระบบสำเร็จ! `;
    
    // ล้างฟอร์ม
    this.reset();
});

document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('registerName').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;

    // แสดงข้อความยืนยัน (การลงทะเบียน)
    document.getElementById('message').textContent = `ลงทะเบียนสำเร็จ!`;
    
    // ล้างฟอร์ม
    this.reset();
});

// เปลี่ยนฟอร์มระหว่าง Login และ Register
document.getElementById('showRegister').addEventListener('click', function() {
    document.getElementById('loginFormContainer').style.display = 'none';
    document.getElementById('registerFormContainer').style.display = 'block';
    document.getElementById('message').textContent = '';
});

document.getElementById('showLogin').addEventListener('click', function() {
    document.getElementById('registerFormContainer').style.display = 'none';
    document.getElementById('loginFormContainer').style.display = 'block';
    document.getElementById('message').textContent = '';
});

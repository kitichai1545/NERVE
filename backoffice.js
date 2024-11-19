const express = require('express');
const path = require('path');
const cors = require('cors');
const multer = require('multer');

const app = express();
const PORT = 3000;

// CORS Configuration
app.use(cors({
    origin: 'https://nerve-qpl0.onrender.com',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}));

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname)));

// Route สำหรับส่งไฟล์ HTML
app.get('/Login.html', (req, res) => res.sendFile(path.join(__dirname, 'Login.html')));
app.get('/index1', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));
app.get('/backoffice.html', (req, res) => res.sendFile(path.join(__dirname, 'backoffice.html')));

// Authentication Example
const VALID_USERNAME = 'admin';
const VALID_PASSWORD = 'password';

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    if (username === VALID_USERNAME && password === VALID_PASSWORD) {
        res.json({ token: 'sample-jwt-token' });
    } else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
});

// Array สำหรับเก็บข้อมูล popup
const popupData = [];
app.post('/api/save-popup-data', (req, res) => {
    const { name, email, url, phone, budget, serve } = req.body;

    if (!name || !email || !url || !phone || !budget || !serve) {
        console.error("Missing required fields:", req.body);
        return res.status(400).json({ message: 'Missing required fields' });
    }

    const date = new Date().toLocaleDateString();
    popupData.push({ name, email, url, phone, budget, serve, date });

    console.log("Saved data:", { name, email, url, phone, budget, serve, date });
    res.status(201).json({ message: 'Data saved successfully!' });
});

app.get('/api/get-popup-data', (req, res) => res.json(popupData));

// Upload Configuration
const upload = multer({ dest: 'uploads/' });
app.post('/upload-background-video', upload.single('video'), (req, res) => {
    if (!req.file) return res.status(400).json({ message: 'No video file uploaded' });
    res.json({ message: 'Background video uploaded successfully!', file: req.file });
});

app.post('/upload-background-image', upload.single('image'), (req, res) => {
    if (!req.file) return res.status(400).json({ message: 'No image file uploaded' });
    res.json({ message: 'Background image uploaded successfully!', file: req.file });
});

app.get('/get-content', (req, res) => {
    res.json({ content: "นี่คือเนื้อหาที่มีอยู่ที่ต้องการแก้ไข" });
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
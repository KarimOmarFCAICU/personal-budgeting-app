import express from 'express';
import path from 'path';

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, '../public')));

app.get('/', (req, res) => {
    res.redirect('/dashboard');
});

// مسارات الصفحات الأربعة
app.get('/dashboard', (req, res) => res.sendFile(path.join(__dirname, '../public/dashboard.html')));
app.get('/transactions', (req, res) => res.sendFile(path.join(__dirname, '../public/transactions.html')));
app.get('/budgets', (req, res) => res.sendFile(path.join(__dirname, '../public/budgets.html')));
app.get('/reports', (req, res) => res.sendFile(path.join(__dirname, '../public/reports.html')));

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
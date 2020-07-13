const express = require('express');
const connectDB = require('./config/db');
const app = express();
connectDB();
const PORT = process.env.PORT || 5000;

app.use(express.json({extended: true}));


app.get('/', (req, res) => {
    res.send('API running');
});

app.use('/api/user', require('./routes/api/user'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/message', require('./routes/api/message'));
app.use('/api/profile', require('./routes/api/profile'));

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});
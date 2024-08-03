const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

app.use(bodyParser.json());
app.use(cors());

const authRoutes = require('./routes/authRoutes')
 
// MongoDB Connection
mongoose.connect(`mongodb+srv://prasanth:prasanth%40123@prasanth.ceran1x.mongodb.net/siddhan-mean-stack-app?retryWrites=true&w=majority`).then(() => {
    console.log('Connected to MongoDB Atlas');
}).catch(err => {
    console.error('Error connecting to MongoDB Atlas', err);
});;


// Routes
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

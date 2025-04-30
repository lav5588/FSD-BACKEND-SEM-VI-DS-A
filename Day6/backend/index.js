import dotenv from 'dotenv';
dotenv.config({
    path:'./.env'
});
import express from 'express';
import cors from 'cors';
import connectDb from './db/connectDb.js';
import { registerUser } from './controllers/user.controller.js';


const app = express();
const PORT = process.env.PORT || 5000;

const corsOptions = {
    origin: 'http://localhost:3000',
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// do the routes here
app.get('/', (req, res) => {
    res.json({ message: 'Welcome to the backend Server 🐦‍🔥!' });
});

app.post('/register',registerUser)

connectDb().then(()=>{
    app.listen(PORT, () => {
        console.log(`Server is running on  http://localhost:${PORT}`);
    });
})


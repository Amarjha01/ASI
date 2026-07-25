import express from 'express';
import axios from 'axios';
import 'dotenv/config';
import authRoutes from './routes/auth.js';
import db from './config/db.js';

const app = express();
app.use(express.json());
app.use('/asi/v1' , authRoutes)


db().then(
    app.listen(process.env.PORT || 5001,()=>{
    console.log(`server is running on port ${process.env.port}`);
})
)

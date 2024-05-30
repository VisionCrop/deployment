import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouters from  './Routes/User.route.js';
import authRoutes from './Routes/auth.route.js';
import postRoutes from './Routes/post.route.js';
import commentRoutes from './Routes/comment.route.js';
import cookieParser from 'cookie-parser';
import path from 'path';

dotenv.config();

mongoose.connect(process.env.MONGO).then(
    () => { console.log('MongoDB Connected...') }
    ).catch(
        (err) => {console.error(err)});
    const __dirname = path.resolve();

const app = express();
app.use(express.json());
app.use(cookieParser());
app.listen(3000, () => {
    console.log('Server is running on port 3000!"');
});

app.use('/api/user',userRouters);
app.use('/api/auth',authRoutes);
app.use('/api/post', postRoutes);
app.use('/api/comment', commentRoutes);

app.use(express.static(path.join(__dirname,'/my-react-app/dist')))
app.get('*',(req, res)=>{
    res.sendFile(path.join(__dirname,'my-react-app','dist','index.html'));
});

app.use((err,req,res,next)=> {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(statusCode).json({
        success: false,
        statusCode,
        message
    });
});
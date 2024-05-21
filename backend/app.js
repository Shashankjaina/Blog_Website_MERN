import express from  'express';
import mongoose from  'mongoose';
import router from './routes/user-routes';
import blogRouter from  './routes/blog-routes';
import cors from   'cors';

const  app = express();
app.use(cors());
app.use(express.json());
app.use("/api/user",router);
app.use("/api/blog",blogRouter);
mongoose.connect('mongodb+srv://shashankjaina612:tzQK6B9TXll7RY1r@cluster0.wxogt14.mongodb.net/Blog?retryWrites=true&w=majority&appName=Cluster0').then(()=>app.listen(5000)).then(()=>console.log("Connected to database and listening to localhost 5000")).catch(()=>console.log(error));
    //tzQK6B9TXll7RY1r
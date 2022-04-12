import express from 'express';
import mongoose from 'mongoose';
import routes from './routes/index.js';
import serverConfig from './config/index.js';

// create the server express
const app = express();

// add middleware for parsing JSON
app.use(express.json());

// connect to mongoose
mongoose.connect(process.env.MONGODB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}, (err) => {
    if (err) throw err;
    console.log('Connected to MongoDB');
})

// set routes of the server
routes(app);
const port = process.env.PORT || serverConfig.PORT;
const hostname = process.env.HOST_NAME || serverConfig.HOSTNAME;

// app listener
app.listen(port, () => {
    console.log(`Server is running at https://${hostname}:${port}`)
})
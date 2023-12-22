import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import userRoutes from './routes/user.js';

const app = express();

// Set up CORS middleware to allow requests from all origins (*).
app.use(cors());

app.use(bodyParser.json({ limit: "20mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "20mb", extended: true }));

app.use('/users', userRoutes);

const CONNECTION_URL = "mongodb+srv://diapatel2703:Itgirl03271998@Cluster0.i0attrp.mongodb.net/ExpediaData?retryWrites=true&w=majority";

const PORT = 3000; // Make sure it's set to 5000 for localhost testing

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
        console.log('DB is Connected');
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB:', err);
    });


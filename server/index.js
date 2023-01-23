import express from 'express';
import dotevn from 'dotenv';
import Routes from './routes/route.js';
import cors from 'cors';
import bodyParser from 'body-parser';

import Connection from './database/db.js';

import DefaultData from './default.js';

dotevn.config(); 

const app = express()

const PORT = 8000;

const USERNAME = process.env.DB_USERNAME
const PASSWORD = process.env.DB_PASSWORD      

app.use(cors());

app.use( bodyParser.json({ extended : true }));
app.use( bodyParser.urlencoded({ extended: true }));

app.use('/', Routes);



Connection(USERNAME,PASSWORD);

app.listen(PORT, () => console.log(`Server is running successfully on port ${PORT}` ));

DefaultData();
import express from 'express';
import dotevn from 'dotenv';
import Router from './routes/route.js';
import cors from 'cors';
import bodyParser from 'body-parser';

import Connection from './database/db.js';

import DefaultData from './default.js';

const app = express()

dotevn.config();    

app.use(cors());

app.use( bodyParser.json({ extended : true }));
app.use( bodyParser.urlencoded({ extended: true }));

app.use('/', Router);

const PORT = 8000;

const USERNAME = process.env.DB_USERNAME
const PASSWORD = process.env.DB_PASSWORD

Connection(USERNAME,PASSWORD);

app.listen(PORT, () => console.log(`Server is running successfully on port ${PORT}` ));

DefaultData();
import express from 'express';
import { config as configureEnvironment } from 'dotenv';
import { initDatabase } from './database';
import entriesController from './controllers/entries';
import bodyParser from 'body-parser';

configureEnvironment();
initDatabase();

const app = express();

app.use(express.urlencoded({ extended: true}))
app.use(express.json());
app.use(entriesController)

const PORT = process.env.PORT ?? 5000;
app.listen(PORT, () => console.log('Listening on port: ', PORT));
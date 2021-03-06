import express from 'express'
import  cors from 'cors'
import cookieParser from 'cookie-parser'
import logger from 'morgan'
import path from 'path'
logger('dev')

import {default as indexRouter} from './routes/index'

var app = express();

app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);


module.exports = app;

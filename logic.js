const express = require('express');
const app = express();
const porta = 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


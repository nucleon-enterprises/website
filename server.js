const express = require('express');
const app = express();

app.use(express.json());
app.use('/api', require('./src/routes'));

app.listen(2003);
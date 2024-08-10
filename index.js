const express = require('express');
const cors = require('cors');
const api = require('./src/api');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use('/', api);

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on port ${PORT}`);
});
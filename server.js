const express = require('express');
const app = express();
const port = process.env.PORT || 1234;
const router = require('./src/http/router');

app.use((req, res, next) => {
  res.header('Test App');
  next();
});
app.use(express.json());
app.use(router);
app.listen(port, console.log(`Server running on port ${port}`));

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const billsRouter = require('./routes/bills');

const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use('/api', billsRouter);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

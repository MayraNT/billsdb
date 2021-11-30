const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const usersRouter = require("./routes/users");
const billsRouter = require("./routes/bills");
const banksRouter = require("./routes/banks");

const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use("/api", usersRouter);
app.use("/api", billsRouter);
app.use("/api", banksRouter);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

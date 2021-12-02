const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

const usersRouter = require("./routers/users");
const billsRouter = require("./routers/bills");
const banksRouter = require("./routers/banks");
const authRouter = require("./routers/auth");

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

app.use("/api", usersRouter);
app.use("/api", billsRouter);
app.use("/api", banksRouter);
app.use("/api", authRouter);

app.get("/", (req, res) => {
  res.send("Hello! Bills Tracker API.");
});

app.get("/api", (req, res) => {
  res.send("Hi! Bills Tracker API.");
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

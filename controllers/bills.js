const mysql = require("mysql");
const pool = require("../sql");

// list bills
const list = (req, res) => {
  let sql = `SELECT * FROM ??`;
  sql = mysql.format(sql, ["bills"]);
  pool.query(sql, (err, rows) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Oh no! Something went wrong.");
    }

    res.json(rows);
  });
};

// get bill by id
const show = (req, res) => {
  const { id } = req.params;

  let sql = `SELECT * FROM ?? WHERE ?? = ?`;
  let replacements = ["bills", "id", id];
  sql = mysql.format(sql, replacements);

  pool.query(sql, (err, row) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Oh no! Something went wrong.");
    }
    res.json(row);
  });
};

// create new bill
const create = (req, res) => {
  let newBill = {
    name: req.body.name,
    due_day: req.body.due_day,
    amount: req.body.amount,
    fixed_amount: req.body.fixed_amount,
    user_id: req.body.user_id
  }

  let sql = `INSERT INTO bills (name, due_day, amount, fixed_amount, user_id) VALUES (?, ?, ?, ?, ?)`;
  let replacements = [newBill.name, newBill.due_day, newBill.amount, newBill.fixed_amount, newBill.user_id];
  sql = mysql.format(sql, replacements);

  pool.query(sql, function(err, row){
    if (err) {
      console.error(err);
      return res.status(500).send("Oh no! Something went wrong.");
    }
    res.json(newBill);
  });
};

// update bill by id
const update = (req, res) => {
  const { id } = req.params;
  const { body } = req;

  let sql = `UPDATE ?? SET ? WHERE id = ?`;
  sql = mysql.format(sql, ["bills", body, id]);

  pool.query(sql, (err, row) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Oh no! Something went wrong.");
    }
    res.json(row.message);
  });
};

// delete bill by id
const remove = (req, res) => {
  const { id } = req.params;

  let sql = `DELETE FROM ?? WHERE ?? = ?`;
  sql = mysql.format(sql, ["bills", "id", id]);

  pool.query(sql, (err, row) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Oh no! Something went wrong.");
    }
    res.json(row.affectedRows);
  });
};

module.exports = { list, show, create, update, remove };

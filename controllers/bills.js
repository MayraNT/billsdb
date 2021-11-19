const mysql = require("mysql");
const pool = require("../sql");

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

const show = (req, res) => {
  const { id } = req.params;

  let sql = `SELECT * FROM ?? WHERE ?? = ?`;
  let replacements = ["bills", "bill_id", id];
  sql = mysql.format(sql, replacements);

  pool.query(sql, (err, row) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Oh no! Something went wrong.");
    }
    res.json(row);
  });
};

const create = (req, res) => {
  const { name, due_day, amount, fixed_amount } = req.body;

  let sql = `INSERT INTO ?? VALUES (?, ?, ?, ?, ?)`;
  let replacements = ["bills", null, name, due_day, amount, fixed_amount];
  sql = mysql.format(sql, replacements);

  pool.query(sql, (err, row) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Oh no! Something went wrong.");
    }
    res.json(row);
  });
};

const update = (req, res) => {
  const { id } = req.params;
  const { body } = req;

  let sql = `UPDATE ?? SET ? WHERE bill_id = ?`;
  sql = mysql.format(sql, ["bills", body, id]);

  pool.query(sql, (err, row) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Oh no! Something went wrong.");
    }
    res.json(row.message);
  });
};

const remove = (req, res) => {
  const { id } = req.params;

  let sql = `DELETE FROM ?? WHERE ?? = ?`;
  sql = mysql.format(sql, ["bills", "bill_id", id]);

  pool.query(sql, (err, row) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Oh no! Something went wrong.");
    }
    res.json(row.affectedRows);
  });
};

module.exports = { list, show, create, update, remove };

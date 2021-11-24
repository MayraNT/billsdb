const mysql = require("mysql");
const pool = require("../sql");

const list = (req, res) => {
  let sql = `SELECT * FROM ??`;
  sql = mysql.format(sql, ["banks"]);
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
  let replacements = ["banks", "id", id];
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
  // NEED TO FIGURE OUT HOW TO INSERT USER_ID (FK)
  // const { id } = req.params;
  const { name, address, user_id } = req.body;

  let sql = `INSERT INTO ?? VALUES (?, ?, ?, ?)`;
  let replacements = ["banks", null, name, address, user_id];
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

  let sql = `UPDATE ?? SET ? WHERE id = ?`;
  sql = mysql.format(sql, ["banks", body, id]);

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
  sql = mysql.format(sql, ["banks", "id", id]);

  pool.query(sql, (err, row) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Oh no! Something went wrong.");
    }
    res.json(row.affectedRows);
  });
};

module.exports = { list, show, create, update, remove };
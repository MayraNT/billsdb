const mysql = require("mysql");
const pool = require("../sql");

// get all users
const list = (req, res) => {
  let sql = `SELECT * FROM ??`;
  sql = mysql.format(sql, ["users"]);
  pool.query(sql, (err, rows) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Oh no! Something went wrong.");
    }

    res.json(rows);
  });
};

// get user by id
const show = (req, res) => {
  const { id } = req.params;

  let sql = `SELECT * FROM ?? WHERE ?? = ?`;
  let replacements = ["users", "id", id];
  sql = mysql.format(sql, replacements);

  pool.query(sql, (err, row) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Oh no! Something went wrong.");
    }
    res.json(row);
  });
};

// update user by id
const update = (req, res) => {
  const { id } = req.params;
  const { body } = req;

  let sql = `UPDATE ?? SET ? WHERE id = ?`;
  sql = mysql.format(sql, ["users", body, id]);

  pool.query(sql, (err, row) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Oh no! Something went wrong.");
    }
    res.json(row.message);
  });
};

// delete user by id
const remove = (req, res) => {
  const { id } = req.params;

  let sql = `DELETE FROM ?? WHERE ?? = ?`;
  sql = mysql.format(sql, ["users", "id", id]);

  pool.query(sql, (err, row) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Oh no! Something went wrong.");
    }
    res.json(row.affectedRows);
  });
};

module.exports = { list, show, update, remove };

const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const withAuth = require("./middleware");

const app = express();
const port = 5001;
const secret = "mySecret";

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(cookieParser());

app.listen(port, () => console.log(`Listening on port ${port}`));

const pool = mysql.createPool({
  connectionLimit: 10,
  host: "192.168.64.2",
  user: "carmen",
  password: "admin",
  database: "licenta_carmen",
});

app.post("/login", (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) {
      res.status(500).json({
        error: "Internal error please try again",
      });
    } else {
      const { email, password } = req.body;

      connection.query(
        `SELECT * from User where email="${email}" and password="${password}"`,
        (err, rows) => {
          connection.release();

          if (!err) {
            if (rows.length === 0) {
              console.log(req.body);
              res.status(401).json({
                error: "Incorrect email or password",
              });
            } else {
              console.log(err, rows);
              const [row] = rows;
              const { first_name, last_name, email } = row;
              const payload = { email };
              const token = jwt.sign(payload, secret, { expiresIn: "1h" });
              res.cookie("token", token, { httpOnly: true }).send({
                firstName: first_name,
                lastName: last_name,
              });
            }
          } else {
            res.status(500).json({
              error: "Internal error please try again",
            });
          }
        }
      );
    }
  });
});

app.get("/secret", withAuth, (req, res) => {
  res.send("HI!");
});

app.get("/checkToken", withAuth, function (req, res) {
  res.sendStatus(200);
});

app.post("/register", (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) {
      res.status(500).json({
        error: "Internal error please try again",
      });
    } else {
      const sql =
        "INSERT INTO User (first_name, last_name, email, password) VALUES (?)";
      const { firstName, lastName, email, password } = req.body;
      connection.query(
        sql,
        [[firstName, lastName, email, password]],
        (err, rows) => {
          connection.release();

          if (!err) {
            const payload = { email };
            const token = jwt.sign(payload, secret, { expiresIn: "1h" });
            res.cookie("token", token, { httpOnly: true }).sendStatus(200);
          } else {
            console.log(err);
            res.status(500).json({
              error: "Internal error please try again",
            });
          }
        }
      );
    }
  });
});

app.post("/logout", (req, res) => {
  const token =
    req.body.token ||
    req.query.token ||
    req.headers["x-access-token"] ||
    req.cookies.token;

  jwt.(token);
});

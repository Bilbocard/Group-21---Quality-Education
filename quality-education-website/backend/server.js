// Create express app
var express = require("express");
var app = express();
var db = require("./database.js");
var md5 = require("md5");

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");

  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true);

  // Pass to next layer of middleware
  next();
});

// Server port
var HTTP_PORT = 8000;
// Start server
app.listen(HTTP_PORT, () => {
  console.log("Server running on port %PORT%".replace("%PORT%", HTTP_PORT));
});
// Root endpoint
app.get("/", (req, res, next) => {
  res.json({ message: "Ok" });
});

// Insert here other API endpoints
app.get("/api/users", (req, res, next) => {
  var sql = "select * from user";
  var params = [];
  db.all(sql, params, (err, rows) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: "success",
      data: rows,
    });
  });
});
app.get("/api/videos", (req, res, next) => {
  var sql = "select * from Videos";
  var params = [];
  db.all(sql, params, (err, rows) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      data: rows,
    });
  });
});
app.get("/api/videos/:subject", (req, res, next) => {
  var sql = "select * from Videos where LOWER(subject) = LOWER(?)";
  var params = [req.params.subject];
  db.all(sql, params, (err, rows) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: "success",
      data: rows,
    });
  });
});
app.get("/api/videos/:subject/:tier", (req, res, next) => {
  var sql = "select * from Videos where LOWER(subject) = LOWER(?) and tier = ?";
  var params = [req.params.subject, req.params.tier];
  db.all(sql, params, (err, rows) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: "success",
      data: rows,
    });
  });
});
// api set endpoints
app.post("/api/user/", (req, res, next) => {
  var errors = [];
  if (!req.body.username) {
    errors.push("No username specified");
  }
  if (!req.body.password) {
    errors.push("No password specified");
  }
  if (!req.body.email) {
    errors.push("No email specified");
  }
  if (errors.length) {
    res.status(400).json({ error: errors.join(",") });
    return;
  }
  var data = {
    username: req.body.username,
    name: req.body.name,
    email: req.body.email,
    password: md5(req.body.password),
  };
  var sql =
    "INSERT INTO user (username, name, email, password) VALUES (?,?,?,?)";
  var params = [data.username, data.name, data.email, data.password];
  db.run(sql, params, function (err, result) {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: "success",
      data: data,
    });
  });
});
app.post("/api/video/", (req, res, next) => {
  var errors = [];
  if (!req.body.title) {
    errors.push("No title specified");
  }
  if (!req.body.subject) {
    errors.push("No subject specified");
  }
  if (!req.body.tier) {
    errors.push("No tier specified");
  }
  var data = {
    title: req.body.title,
    subject: req.body.subject,
    tier: req.body.tier,
  };
  var sql = "INSERT INTO Videos (title, subject, tier) VALUES (?,?,?)";
  var params = [data.title, data.subject, data.tier];
  db.run(sql, params, function (err, result) {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: "success",
      data: data,
      id: this.lastID,
    });
  });
});
// api update endpoints
app.patch("/api/user/:username", (req, res, next) => {
  var data = {
    username: req.body.username,
    name: req.body.name,
    email: req.body.email,
    password: req.body.password ? md5(req.body.password) : null,
  };
  db.run(
    `UPDATE user set 
         username = COALESCE(?, username),
         name = COALESCE(?,name), 
         email = COALESCE(?,email), 
         password = COALESCE(?,password) 
         WHERE username = ?`,
    [data.username, data.name, data.email, data.password, req.params.username],
    function (err, result) {
      if (err) {
        res.status(400).json({ error: res.message });
        return;
      }
      res.json({
        message: "success",
        data: data,
        changes: this.changes,
      });
    }
  );
});
// api delete endpoints
app.delete("/api/user/:username", (req, res, next) => {
  db.run(
    "DELETE FROM user WHERE username = ?",
    req.params.id,
    function (err, result) {
      if (err) {
        res.status(400).json({ error: res.message });
        return;
      }
      res.json({ message: "deleted", changes: this.changes });
    }
  );
});
// Default response for any other request
app.use(function (req, res) {
  res.status(404);
});

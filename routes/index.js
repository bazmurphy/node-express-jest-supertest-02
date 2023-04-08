const express = require("express");
const router = express.Router();

router.post("/register", (req, res, next) => {
  if (!req.body.firstName) {
    // 400 = Bad Request
    res.status(400).json("you need to pass a firstName");
    return;
  }
  // 201 = Created
  res.sendStatus(201);
});

module.exports = router;
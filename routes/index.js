const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.status(200).send("Please use POST on the /register Route")
})

router.post("/register", (req, res, next) => {

  const firstName = req.body?.firstName;
  console.log(firstName);
  const lastName = req.body?.lastName;
  console.log(lastName);

  if (!firstName && !lastName) {
    // 400 = Bad Request
    res.status(400).json({ success: false, message: "You need to provide a firstName and a lastName", data: null });
    return;
  }

  if (!firstName) {
    // 400 = Bad Request
    res.status(400).json({ success: false, message: "You need to provide a firstName", data: null });
    return;
  }

  if (!lastName) {
    // 400 = Bad Request
    res.status(400).json({ success: false, message: "You need to provide a lastName", data: null });
    return;
  }

  // 201 = Created
  res.status(201).json({ success: true, message: "Successfully created", data: { firstName, lastName } });
});

module.exports = router;
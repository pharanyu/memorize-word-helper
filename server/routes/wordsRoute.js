const express = require("express");
const router = express.Router();

// Word Model
const Word = require("../models/WordModel");

// Get All group names (not duplicate)
router.get("/", (req, res, next) => {
  Word.find({})
    .sort("group")
    .select({ group: 1, _id: 0 })
    .distinct("group")
    .exec((err, data) => {
      if (err) {
        return res
          .status(500)
          .send({ error: { message: err.message, code: err.code } });
      }
      res.status(200).send(data);
    });
});

// Get Word By Group
router.get("/:group", (req, res, next) => {
  Word.find({ group: req.params.group })
    .select({'_id': 0, '__v': 0})
    .exec((err, data) => {
      if (err) {
        return res
          .status(500)
          .send({ error: { message: err.message, code: err.code } });
      }
      res.status(200).send(data);
    });
});

// Add Word
router.post("/", (req, res, next) => {
  var doc = new Word(req.body);
  doc.save((err, data) => {
    if (err) {
      return res
        .status(500)
        .send({ error: { message: err.message, code: err.code } });
    }
    res.status(200).send({ success: "Add word success" });
  });
});

module.exports = router;

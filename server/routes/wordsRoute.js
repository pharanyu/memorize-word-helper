const express = require("express");
const router = express.Router();

/**
 *  >>>>> PRIVATE ROUTE <<<<<
 */

// Verify token funciton
const jwtHelper = require('../config/jwtHelper');

// Word Model
const Word = require("../models/WordModel");

// Get All group names (not duplicate)
router.get("/", jwtHelper.verifyJwtToken, (req, res, next) => {
  Word.find({ userName: req.userName })
    .select({ group: true, _id: false })
    .distinct("group")
    .exec((err, data) => {
      if (err) {
        return res
          .status(500)
          .send({ error: { message: err.message, code: err.code } });
      }
      res.status(200).send(data.sort());
    });
});

// Get Word By Group
router.get("/:group", jwtHelper.verifyJwtToken, (req, res, next) => {
  Word.find({ userName: req.userName, group: req.params.group })
    .select({ _id: false, __v: false })
    .exec((err, data) => {
      if (err) {
        return res
          .status(500)
          .send({ error: { message: err.message, code: err.code } });
      }
      res.status(200).send(data);
    });
});

// Get Word By List Group
router.post("/listgroup", jwtHelper.verifyJwtToken, (req, res, next) => {
  Word.find({userName: req.userName, group: req.body})
    .select({ _id: false, __v: false })
    .exec((err, data) => {
      if (err) {
        return res
          .status(500)
          .send({ error: { message: err.message, code: err.code } });
      }
      res.status(200).send(data);
  });
});

// Add Words
router.post("/", jwtHelper.verifyJwtToken, (req, res, next) => {
  req.body.forEach(eachBody => {
    var doc = new Word(eachBody);
    doc.userName = req.userName;
    doc.save((err, data) => {
      if (err) {
        return res
          .status(500)
          .send({ error: { message: err.message, code: err.code } });
      }
    });
  });
  res.status(200).send({ success: "Add words success" });
});

// Delete Words
router.post("/delete", jwtHelper.verifyJwtToken, (req, res, next) => {
  req.body.forEach(eachBody => {
    Word.findOneAndRemove({userName: req.userName, group: eachBody.group, word: eachBody.word, mean: eachBody.mean}).exec((err, data) => {
      if (err) {
        return res
          .status(500)
          .send({ error: { message: err.message, code: err.code } });
      }
    });
  });
  res.status(200).send({ success: "Delete words success" });
});

// Rename Group
router.put("/renamegroup/:old/:new", jwtHelper.verifyJwtToken, (req, res, next) => {
  // find old group name in db
  Word.find({ userName: req.userName, group: req.params.old }).exec((err, data) => {
    if (err) {
      return res
        .status(500)
        .send({ error: { message: err.message, code: err.code } });
    }
    // get list of old group name
    let oldGroups = data;
    oldGroups.forEach(oldGroup => {
      // update each old -> new group name
      Word.findByIdAndUpdate(
        oldGroup._id,
        { group: req.params.new },
        (err, data) => {
          if (err) {
            return res
              .status(500)
              .send({ error: { message: err.message, code: err.code } });
          }
        }
      );
    });
    res.status(200).send({ success: "Update groups name success" });
  });
});

module.exports = router;

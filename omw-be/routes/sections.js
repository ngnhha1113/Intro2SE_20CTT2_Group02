const express = require('express');
const router = express.Router();
const dbo = require('../db/connection');

router.get('/', function (req, res, next) {
  console.log(dbo.getDb());

  const dbConnect = dbo.getDb();
  dbConnect
    .collection('sections')
    .find({})
    .limit(50)
    .toArray(function (err, result) {
      if (err) {
        res.status(400).send('Error fetching listings!');
      } else {
        res.json(result);
      }
    });
});

module.exports = router;

const express = require('express');
const router = express.Router();

router.get("/main", (req, res) => {
    const sqlQuery = "SELECT * FROM product";
    
    query(sqlQuery, (err, result) => {
        res.send(result);
    });
});

module.exports = router;

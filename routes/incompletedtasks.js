const express = require('express');
const router = express.Router();

router.get('/',(req,res,next) => {
    res.render('../views/pages/tasks/incompletedtasks/index.html',{});
});

module.exports = router;

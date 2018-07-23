const express = require('express');
const router = express.Router();

router.get('/',(req,res,next) => {
    res.render('../views/pages/tasks/completedtasks/index.html',{});
});
module.exports = router;
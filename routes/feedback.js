const express = require('express');
const router = express.Router();

router.get('/',(req,res,next) => {
    res.render('../views/pages/feedback/index.html',{});
});
module.exports = router;
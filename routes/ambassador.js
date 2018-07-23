const express = require('express');
const router = express.Router();

router.get('/',(req,res,next) => {
    res.render('../views/pages/ambassador/index.html',{});
});
module.exports = router;
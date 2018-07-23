require('dotenv').config();
const ENV = process.env;
const express = require('express');
const bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: false })

global.app = express();
require('./config/view')();
app.use('/static', express.static('static'))

app.use('/login', require('./routes/login'));
app.use('/register',require('./routes/register'));
app.use('/forgotpassword',require('./routes/forgotpassword'));
app.use('/ambassador',require('./routes/ambassador'));
app.use('/awardedtasks',require('./routes/awardedtasks'));
app.use('/addtasks',require('./routes/addtasks'));
app.use('/incompletedtasks',require('./routes/incompletedtasks'));
app.use('/completedtasks',require('./routes/completetasks'));
app.use('/wallet',require('./routes/wallet'));
app.use('/feedback',require('./routes/feedback'));


app.listen(ENV.PORT, () => {
    console.log(`app listening on port ${ENV.PORT}`);
});

const nunjucks = require('nunjucks');
const view = () => {
    app.set('view engine', 'html');
    nunjucks.configure('views', {
        autoescape: true,
        express: app,
        watch: true
    });
}

module.exports = view;
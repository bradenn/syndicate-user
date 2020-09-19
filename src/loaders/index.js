let expressLoader = require('./express');
let mongooseLoader = require('./mongoose');

function init(){
    const app = expressLoader();
    mongooseLoader();
    return app;
}

module.exports = init;

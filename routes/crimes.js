const controller = require('../app/controllers/crimes');
const routes = require('./routes');

module.exports = function (app) {
    
    app.get(routes.especificCrime, controller.especificCrime);
    app.get(routes.allCrimes, controller.allCrimes);
    
    // Use this route if your database is empty
    app.get(routes.fillDatabase, controller.fillDatabase);
}
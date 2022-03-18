const accountRoutes = require('./account-routes');
const matchRoutes = require('./match-routes');

module.exports = (app) => {
    accountRoutes(app);
    matchRoutes(app);
}
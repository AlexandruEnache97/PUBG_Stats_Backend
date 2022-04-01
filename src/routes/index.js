import leaderboardRoutes from './leaderboardRoutes.js';
import matchRoutes from './match-routes.js';

export default (app) => {
    leaderboardRoutes(app);
    matchRoutes(app);
}
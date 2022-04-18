import leaderboardRoutes from './leaderboardRoutes.js';
import playerRoutes from './playerRoutes.js';

export default (app) => {
    leaderboardRoutes(app);
    playerRoutes(app);
}
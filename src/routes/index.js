import leaderboardRoutes from './leaderboardRoutes.js';
import playerRoutes from './playerRoutes.js';
import weaponsRoutes from './weaponsRoutes.js';

export default (app) => {
    leaderboardRoutes(app);
    playerRoutes(app);
    weaponsRoutes(app);
}
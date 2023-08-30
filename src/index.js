import './styles/style.css';
import Leaderboard from './modules/util';

const baseUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';

const leaderboard = new Leaderboard(baseUrl);


(async () => {
    try {
      await leaderboard.addScoreToGame('Stanley', 4);
      const scores = await leaderboard.getScoresForGame();
      console.log(scores);
    } catch (error) {
      console.error('Error:', error);
    }
  })();
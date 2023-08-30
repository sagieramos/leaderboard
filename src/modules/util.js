class Leaderboard {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
    this.gameName = 'microverse-leaderboard';
    this.gameList = [];
    this.gameId = localStorage.getItem(this.gameName);
    this.error = [];

    this.initGameId();
  }

  async initGameId() {
    if (!this.gameId) {
      try {
        this.gameId = await this.createGame(this.gameName);
        localStorage.setItem(this.gameName, this.gameId);
      } catch (error) {
        this.error.push(error);
      }
    }
  }

  async createGame(name) {
    const url = `${this.baseUrl}games/`;

    const requestData = {
      name,
    };

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestData),
    });

    const data = await response.json();
    return data.result;
  }

  async addScoreToGame(user, score) {
    const url = `${this.baseUrl}games/${this.gameId}/scores/`;

    const requestData = {
      user,
      score,
    };

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestData),
    });

    const data = await response.json();
    return data.result;
  }

  async getScoresForGame() {
    const url = `${this.baseUrl}games/${this.gameId}/scores/`;

    const response = await fetch(url);
    const data = await response.json();
    return data.result;
  }
}

export default Leaderboard;
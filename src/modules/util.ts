class Leaderboard {
  private baseUrl: string;
  private _gameId: string;
  private headers: Record<string, string> = {
    'Content-Type': 'application/json',
  };

  constructor(baseUrl: string, gameId: string) {
    this.baseUrl = baseUrl;
    this._gameId = gameId;
  }

  async createNewGame(name: string): Promise<any> {
      const url = `${this.baseUrl}games/`;
      const requestData = {
        name,
      };
      const response = await fetch(url, {
        method: 'POST',
        headers: this.headers,
        body: JSON.stringify(requestData),
      });

      if (!response.ok) {
        return `Failed to create game: ${response.statusText}`;
      }

      const data = await response.json();
      return data.result;
  }

  async addScoreToGame(user: string, score: number): Promise<any> {
      const url = `${this.baseUrl}games/${this._gameId}/scores/`;
      const requestData = {
        user,
        score,
      };
      const response = await fetch(url, {
        method: 'POST',
        headers: this.headers,
        body: JSON.stringify(requestData),
      });

      if (!response.ok) {
        return `Failed to add score: ${response.statusText}`;
      }
      const data = await response.json();
      return data.result;
  }

  async getScoresForGame(): Promise<any[]> {
      if (!this._gameId) return [];
      const url = `${this.baseUrl}games/${this._gameId}/scores/`;
      const response = await fetch(url);

      if (!response.ok) {
        return [`Failed to retrieve scores: ${response.statusText}`];
      }

      const data = await response.json();

      return data.result;
  }

  get gameId(): string {
    return this._gameId;
  }

  set gameId(newGameId: string) {
    this._gameId = newGameId;
  }
}

export default Leaderboard;

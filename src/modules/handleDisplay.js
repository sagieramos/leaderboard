import Leaderboard from './util.js';

const baseUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';

const leaderboard = new Leaderboard(baseUrl);

const scoreContainer = document.getElementById('scores');
const status = document.getElementById('status');

const handleDisplay = async () => {
  try {
    const scores = await leaderboard.getScoresForGame();

    const fragment = document.createDocumentFragment();
    scores.forEach((item) => {
      const newItem = document.createElement('li');
      newItem.innerHTML = `${item.user}: ${item.score}`;
      fragment.appendChild(newItem);
    });

    while (scoreContainer.firstChild) {
      scoreContainer.firstChild.remove();
    }
    scoreContainer.appendChild(fragment);
  } catch (error) {
    status.textContent = `${error}: Check your Internet`;
  }
};

const handleSubmit = async (e) => {
  const { target } = e;
  if (target.matches('#submit')) {
    e.preventDefault();
    status.textContent = 'Creating leaderboard score';
    status.classList.remove('hidden');

    const nameInput = document.getElementById('nameInut');
    const scoreInput = document.getElementById('scoreInput');
    const name = nameInput.value.trim();
    const score = parseFloat(scoreInput.value);

    if (name && score) {
      try {
        const result = await leaderboard.addScoreToGame(name, score);
        handleDisplay();
        status.textContent = result;
        nameInput.value = '';
        scoreInput.value = '';
      } catch (error) {
        status.textContent = `${error}: Check your Internet`;
      }

      setTimeout(() => {
        status.className = 'hidden';
      }, 3000);
    }
  } else if (target.matches('#refresh')) {
    window.location = `${window.location.href}?refresh=${Date.now()}`;
  }
};

export { handleDisplay, handleSubmit };

import Leaderboard from './util.ts';

const baseUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';

const leaderboard = new Leaderboard(baseUrl, 'Tf159LB89JEGXiktCs8K');

const scoreContainer = document.getElementById('scores');
const status = document.getElementById('status');

const handleDisplay = async () => {
  try {
    const scores = await leaderboard.getScoresForGame();

    const fragment = document.createDocumentFragment();
    scores.forEach((item) => {
      const newItem = document.createElement('li');
      newItem.className = 'score-list';
      newItem.innerHTML = `<p>${item.user}</p><p class='score-num'>${item.score}</p>`;
      fragment.appendChild(newItem);
    });

    while (scoreContainer.firstChild) {
      scoreContainer.firstChild.remove();
    }
    scoreContainer.appendChild(fragment);
    if (scores.length > 0) {
      scoreContainer.classList.add('border');
    } else {
      scoreContainer.innerHTML = `<div class="empty-warning">
      <h2>No Recent Scores</h2><p>Add a new score</P>
      </div>`;
    }
  } catch (error) {
    status.textContent = `${error}: Check your Internet`;
  }
};

const handleSubmit = async (e) => {
  const { target } = e;
  if (target.matches('#submit')) {
    e.preventDefault();
    status.classList.remove('hidden');
    status.textContent = 'Creating leaderboard score...';

    const nameInput = document.getElementById('nameInut');
    const scoreInput = document.getElementById('scoreInput');
    const name = nameInput.value.trim();
    const score = parseFloat(scoreInput.value);

    if (name && score) {
      try {
        const result = await leaderboard.addScoreToGame(name, score);
        handleDisplay();
        status.textContent = result;
        status.className = 'success';
        nameInput.value = '';
        scoreInput.value = '';
      } catch (error) {
        status.className = 'error';
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

import './styles/style.css';
import displayRecentScores from './modules/util';

document.addEventListener('DOMContentLoaded', () => {
    displayRecentScores('#scores', 'li');
})
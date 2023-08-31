import './styles/style.css';
import {handleDisplay, handleSubmit} from './modules/handleDisplay';

const init = () => {
    document.addEventListener('click', handleSubmit);
    handleDisplay();
}

window.addEventListener('DOMContentLoaded', init);


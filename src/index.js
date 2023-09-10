import './styles/style.scss';
import {handleDisplay, handleSubmit} from './modules/handleDisplay.js';
import formDisplay from './modules/form';
import addIcon from './assets/plus.svg';

document.getElementById('add-icon').src = addIcon;
const init = () => {
    document.addEventListener('click', (e) => {handleSubmit(e); 
        formDisplay(e)
    });
    handleDisplay();
}

window.addEventListener('DOMContentLoaded', init);


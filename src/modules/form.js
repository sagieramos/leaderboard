const addIcon = document.getElementById('add-icon');
const formContainer = document.getElementById('form-container');
const blackout = document.getElementById('blackout');
const formDisplay = (e) => {
    const { target } = e;
    
    if(target.matches('#add-icon')) {
       formContainer.classList.toggle('hide-form');
       addIcon.classList.toggle('hidden');
       blackout.classList.toggle('hidden');
    } else if (target.matches('#blackout')) {
        formContainer.classList.toggle('hide-form');
       target.classList.toggle('hidden');
       addIcon.classList.toggle('hidden');
    }
}

export default formDisplay;
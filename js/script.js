let burgerButton = document.querySelector('.js-burger-menu-btn');
let menu = document.querySelector('.js-menu');
let page = document.querySelector('body');


burgerButton.addEventListener('click', () => {
    burgerButton.classList.toggle('toggled');
    menu.classList.toggle('open');
    page.classList.toggle('freezed');
});

let options = ["js-option1", "js-option2", "js-option3", "js-option4", "js-option5"]

for (let i = 0; i < options.length; i++) {
    let option = document.getElementById(options[i]);
    option.addEventListener('click', () => {
        burgerButton.classList.toggle('toggled');
        menu.classList.toggle('open');
        page.classList.toggle('freezed');
    });
};
let numberContainer = document.querySelector('ul');
let numberSelect = document.querySelector('.numberSelect');
let btn = document.querySelector('.btn');
let main = document.getElementById('main');
let thanks = document.getElementById('thanks');

numberContainer.addEventListener('click', event => {
    let numSelect = event.target.innerText;
    numberSelect.innerText = numSelect;

})

btn.addEventListener('click', () => {
    main.style.display = 'none';
    thanks.style.display = 'inline'
})
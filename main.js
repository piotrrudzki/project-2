const input = document.querySelector('input');
const btnNumbers = [...document.querySelectorAll('button.number')];
const clearBtn = document.querySelector('.clear')
const backspaceBtn = document.querySelector('.backspace');
const resultBtn = document.querySelector('.result')


for (i = 0; i < btnNumbers.length; i++) {
    let btnNumber = btnNumbers[i];
    btnNumber.addEventListener('click', function () {
        input.value += btnNumber.dataset.options;
        console.log(input.value);
    })

}

clearBtn.addEventListener('click', function () {
    input.value = '';
})
backspaceBtn.addEventListener('click', function () {
    input.value = input.value.substring(0, input.value.length - 1);
})
resultBtn.addEventListener('click', function () {
    if (input.value === '') {
        alert('You have to enter a number')
    } else {
        let value = eval(input.value);
        input.value = value;
    }
})
let minValue = (parseInt(prompt('Минимальное знание числа для игры','0'),10) || 0);
minValue < -999 ? minValue = -999 : minValue = minValue;
let maxValue = (parseInt(prompt('Максимальное знание числа для игры','100'),10) || 100);
maxValue > 999 ? maxValue = 999 : maxValue = maxValue;
alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
let answerNumber  = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = true;

const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');

orderNumberField.innerText = orderNumber;
answerField.innerText = `Вы загадали число ${answerNumber }?`;

document.getElementById('btnRetry').addEventListener('click', function () {
    alert('Начинаем заново');
    let minValue = parseInt(prompt('Минимальное знание числа для игры','0'));
    let maxValue = parseInt(prompt('Максимальное знание числа для игры','100'));
    alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
    answerNumber  = Math.floor((minValue + maxValue) / 2);
    answerField.innerText = `Вы загадали число ${answerNumber }?`;
    let gameRun = true;

})

document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            minValue = answerNumber  + 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            
            const phraseRandom = Math.round( Math.random() * 3);
            switch (phraseRandom) {
                case 1:
                    answerPhrase = `Возможно это число \n\u{1F928}`;
                    break;
                case 2:
                    answerPhrase = `Это случайно не \n\u{1F9D0}`;
                    break;
                case 3:
                    answerPhrase = `Верным ли будет предложить, что это \n\u{1F644}`;
                    break;
                default:
                    answerPhrase = `ТО САМОЕ число \n\u{1F928}`;
            }
            answerField.innerText = answerPhrase;
            answerField.innerText = ` ${answerPhrase} ${answerNumber }?`;
        }
    }
})

document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            maxValue = answerNumber  - 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            
            const phraseRandom = Math.round( Math.random() * 3);
            switch (phraseRandom) {
                case 1:
                    answerPhrase = `Возможно это число \n\u{1F928}`;
                    break;
                case 2:
                    answerPhrase = `Это случайно не \n\u{1F9D0}`;
                    break;
                case 3:
                    answerPhrase = `Верным ли будет предложить, что это \n\u{1F644}`;
                    break;
                default:
                    answerPhrase = `ТО САМОЕ число \n\u{1F928}`;
            }
            answerField.innerText = answerPhrase;
            answerField.innerText = ` ${answerPhrase} ${answerNumber }?`;
        }
    }
})

document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun){
        answerField.innerText = `Я всегда угадываю\n\u{1F60E}`
        gameRun = false;
    }
})

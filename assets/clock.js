//Capturar nossos ponteiros para realizarmos funcoes
const hourHand = document.querySelector('.hour-hand'); 
const minuteHand = document.querySelector('.minute-hand');
const secondHand = document.querySelector('.second-hand');

const getTime = () => { //Criando função para buscar horario atual 
    const date = new Date(); //criando objeto DATE
    
    return { //Funçao para retornar horario
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds(),
    };
}


setInterval(() => {

    const { seconds } = getTime(); //Constante chamada segundo com valor seconds

    secondHand.style.transform = 'translate(0, -50%) rotate(40deg)';

}, 1000);

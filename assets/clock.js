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


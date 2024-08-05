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

    const { seconds, minutes, hours } = getTime(); //Constante chamada segundo com valor seconds

  // Calcula a rotação dos ponteiros com base na quantidade de segundos, minutos e horas que passaram
  const secondsAngle = (seconds * 6) + (minutes * 6 * 60) + (hours * 30 * 60 * 60);
  const minutesAngle = (minutes * 6) + (hours * 30 * 60);
  const hoursAngle = (hours * 30) + (minutes * 0.5);

  secondHand.style.transform = `translate(0, -50%) rotate(${secondsAngle}deg)`;
  minuteHand.style.transform = `translate(0, -50%) rotate(${minutesAngle}deg)`;
  hourHand.style.transform = `translate(0, -50%) rotate(${hoursAngle}deg)`;
}, 1000);

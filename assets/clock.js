

const getTime = () => { //Criando função para buscar horario atual 
    const date = new Date(); //criando objeto DATE
    
    return { //Funçao para retornar horario
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds(),
    }
}

getTime(); //Para visualizar, vamos executar esta função
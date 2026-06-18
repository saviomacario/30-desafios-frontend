const dias = document.getElementById('dia')
const horas = document.getElementById('horas')
const minutos = document.getElementById('minutos')
const segundos = document.getElementById('segundos')

const dataFinal = "25 dec 2026" //é nossa data final, é importante que esteja no formato EUA

function contagemRegressiva(){

    /* 
        Quando colocamos o dataFinal dentro do new Date estamos pedindo para o JavaScript transformar
        aquela string que está dentro da dataFinal em data de verdade assim evitando um erro na lógica.
    */
    const dataDeTermino = new Date(dataFinal); 
    const hoje = new Date(); // Data de hoje ou data atual de quando acessar o sistema

    //dividimos por 1000 porque new Date retorna em "milissegundos"
    const segTotal = (dataDeTermino - hoje) / 1000; 
    const finalDias = Math.floor(segTotal/60/60/24) //transformar segundos em dias
    const finalHoras = Math.floor(segTotal/60/60) % 24 // transformando segundos em horas e dividindo pelo resto
    const finalMinutos = Math.floor(segTotal/60)%60 //transformando segundos em minutos
    const finalSegundos = Math.floor(segTotal)%60

    /*
        Foi criada uma função chamada de "formatoTempo" para que adicione um 0 quando o número
        for menor que 10.
    */

    dias.innerHTML = finalDias;
    horas.innerHTML = formatoTempo(finalHoras); // Acrescenta um 0 quando o número for menor que 10
    minutos.innerHTML = formatoTempo(finalMinutos); // Acrescenta um 0 quando o número for menor que 10
    segundos.innerHTML = formatoTempo(finalSegundos);
}

/*
    Função responsável por verificar se nas horas e minutos o número é menor que 10.
*/
function formatoTempo(tempo){
    return tempo < 10 ? `0${tempo}` : tempo
}

contagemRegressiva(); //ela é executada aqui
setInterval(contagemRegressiva, 1000); //Responsável por atualizar a cada 1 segundo
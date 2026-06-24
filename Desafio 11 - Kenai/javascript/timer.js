/* Por opção própria irei fazer no formtato de 12h */ 

const timer = document.getElementById("clock");

function horaAtual (){
    // Pegando a data e jogando em uma constante
    const data = new Date();

    /*
        Agora vamos pegar apenas o que queremos que é hora e minuto,
        apos isso vamos atribuir a uma variável.
    */ 

    // Coloquei "let" porque vamos alterar o formato da hr então não pode ser constante
    let hora = data.getHours().toString().padStart(2, "0");
    const minuto = data.getMinutes().toString().padStart(2, "0");
    // Criando uma variável para colocar o "PM" e o "AM" (não passaremos nenhum valor para ela)
    let ampm;

    /* Criaremos uma lógica para que o sistema identifique se é am ou pm */
    if(hora >=12){
        ampm = "PM";
    }else{
        ampm = "AM";
    }

    // formatando a hora para o formato 12h
    hora = hora%12;
    if(hora===0){
        hora = 12;
    }

    let horaFormatada = `${hora}:${minuto} ${ampm}`;
    /* Precisamos colocar o textContent com a constante que resgata o id do html */
    timer.textContent = horaFormatada;
}

horaAtual();
setInterval(horaAtual, 1000);

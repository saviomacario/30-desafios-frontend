/*
    Tentei fazer uma pequena introdução a javascript em meu código, tive um pouco de dificuldade mas faz parte.
    Usei o LocalStrorage para guardar os dados das pessoas que queriam entrar em contato, sei que não é 
    recomendado porque quando limpo o histórico do navegador os dados salvos são apagados, mas usei para 
    treinar o conteúdo.
*/


const inNome = document.getElementById("inNome")
const inEmail = document.getElementById("inEmail");
const inAssunto = document.getElementById("inAssunto")

const btEntrar = document.getElementById("btEntrar");
btEntrar.addEventListener("click",(event) => {
    // Serve para o site não rescarregar quando executar a função
    event.preventDefault();

    let dadosContato = {
        nome: inNome.value,
        email: inEmail.value,
        assunto: inAssunto.value
    };

    // Serve para salvar os dados no LocalStrorage
    localStorage.setItem("Contato", JSON.stringify(dadosContato));

    // Serve para limpar os campos após o clicar no botão
    inNome.value = "";
    inEmail.value = "";
    inAssunto.value = "";

    alert("Contato enviado e salvo com Sucesso!")
})
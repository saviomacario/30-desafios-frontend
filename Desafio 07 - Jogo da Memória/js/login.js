const input = document.querySelector('.login_input');
const button = document.querySelector('.login_btn');
const form = document.querySelector('.login_form')

// Vai servir como uma contagem de caracteres para uma validação
const validateInput = ({target}) =>{
    if(target.value.length > 2){
        button.removeAttribute('disabled');
        return;
    }

    button.setAttribute('disabled', '');
}

// Para salvar os dados vamos usar o localStorage, lembrando que é salvo localmente no navegador...

const handleSubmit = (event) => {
    //Serve para não recarregar a página
    event.preventDefault(); 

    localStorage.setItem("Name: ", input.value)
    window.location = '../pages/game.html';
}

input.addEventListener("input", validateInput);
form.addEventListener('submit', handleSubmit);


// console.log(event.target.value); => aqui eu consigo ver o que é escrito no input no console
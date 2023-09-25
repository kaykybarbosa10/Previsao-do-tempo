const key = "8c479b1912d2a36163a3f72150a9eac0";

function colocarDadosNaTela(dados) {
    document.querySelector(".city").innerHTML = "Tempo em " + dados.name;
    document.querySelector(".temperature").innerHTML = Math.floor(dados.main.temp) + "°C";
    document.querySelector(".predictive-text").innerHTML = dados.weather[0].description;
    document.querySelector(".moisture").innerHTML = "Umidade: " + dados.main.humidity + "%";
    document.querySelector(".img-forecast").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`;

    console.log(dados);
}

async function buscarCidade(cidade) {

    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(response => response.json());

    colocarDadosNaTela(dados);
}

function cliqueiNoBotão() {
    const cidade = document.querySelector(".input-town").value

    buscarCidade(cidade);
}
async function getWeather() {
let cidade = document.getElementById('cidade').value

    //Conectar uma variavel para pegar o nome da cidade
  
    let resposta = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&units=metric&appid=64ed82577ced7f69cb1687f0ce536131`);

    let tempCelsius = resposta.data.main.temp
        
    console.log(tempCelsius)

    //Front-End
    //JQUERY
    document.getElementById('temperatura').innerHTML = `A temperatura atual de ${cidade} é: ${tempCelsius.toFixed(0)} °C`
}

//Chamar a Função
getWeather();
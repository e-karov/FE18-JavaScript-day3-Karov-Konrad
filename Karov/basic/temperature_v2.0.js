function showWeather() {
    let minNumber = -10;
    let maxNumber = 38;

    let temperature = Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber) ;
    let output = "";

    if (temperature < 0) {
        output = "It's freezing cold out there."
        document.getElementsByClassName("hero")[0].classList.add("freeze");
        document.getElementsByClassName("temperature")[0].innerHTML = `${temperature}C°`;
        document.getElementsByClassName("temperature")[0].style.color = "beige";
     
    } else if (temperature <= 10) {
        output = "The weather is cold."
        document.getElementsByClassName("hero")[0].classList.add("cold");
        document.getElementsByClassName("temperature")[0].innerHTML = `${temperature}C°`;
        document.getElementsByClassName("temperature")[0].style.color = "lightgrey";


    } else if (temperature <= 32) {
        output = "The weather is moderate."
        document.getElementsByClassName("hero")[0].classList.add("moderate");
        document.getElementsByClassName("temperature")[0].innerHTML = `${temperature}C°`;
        document.getElementsByClassName("temperature")[0].style.color = "white";


    } else {
        output = "The weather is hot."
        document.getElementsByClassName("hero")[0].classList.add("hot");
        document.getElementsByClassName("temperature")[0].innerHTML = `${temperature}C°`;
        document.getElementsByClassName("temperature")[0].style.color = "orange";

    }
    console.log("Temperature: ", temperature + "C°"); ;
    return output;
};

let output = showWeather();
console.log(output);
document.getElementById("output").innerHTML = output;
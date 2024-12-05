const tempInput = document.getElementById("temperature");
const fromScale = document.getElementById("from-scale");
const toScale = document.getElementById("to-scale");
const resultElement = document.getElementById("converted-temperature");

function convertTemperature() {
    const tempValue = tempInput.value.trim();

    if (isNaN(tempValue) || tempValue === "") {
        resultElement.textContent = "Please enter a valid number!";
        return;
    }

    const temp = parseFloat(tempValue);

    if (fromScale.value === toScale.value) {
        resultElement.textContent = `The temperature remains the same: ${temp}°${toScale.value.charAt(0).toUpperCase()}`;
        return;
    }

    let convertedTemp;

    if (fromScale.value === "celsius" && toScale.value === "fahrenheit") {
        convertedTemp = (temp * 9) / 5 + 32;
    } else if (fromScale.value === "celsius" && toScale.value === "kelvin") {
        convertedTemp = temp + 273.15;
    } else if (fromScale.value === "fahrenheit" && toScale.value === "celsius") {
        convertedTemp = ((temp - 32) * 5) / 9;
    } else if (fromScale.value === "fahrenheit" && toScale.value === "kelvin") {
        convertedTemp = ((temp - 32) * 5) / 9 + 273.15;
    } else if (fromScale.value === "kelvin" && toScale.value === "celsius") {
        convertedTemp = temp - 273.15;
    } else if (fromScale.value === "kelvin" && toScale.value === "fahrenheit") {
        convertedTemp = (temp - 273.15) * 9 / 5 + 32;
    }

    resultElement.textContent = `${convertedTemp.toFixed(2)}°${toScale.value.charAt(0).toUpperCase()}`;
}

tempInput.addEventListener("input", convertTemperature);
fromScale.addEventListener("change", convertTemperature);
toScale.addEventListener("change", convertTemperature);

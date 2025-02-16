document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", () => {
        // Remove "active" class from all links
        document.querySelectorAll("nav a").forEach(item => item.classList.remove("active"));
        // Add "active" class to the clicked link
        link.classList.add("active");
    });
});

// for area conversion

const areaConversionFactors = {
    "acres": 4046.86,
    "ares": 100,
    "hectares": 10000,
    "square centimeters": 0.0001,
    "square feet": 0.092903,
    "square inches": 0.00064516,
    "square meters": 1
};

function convertArea() {
    const fromUnit = document.getElementById("from-area").value;
    const toUnit = document.getElementById("to-area").value;
    const inputValue = parseFloat(document.querySelector(".input").value);

    if (isNaN(inputValue) || fromUnit === "none" || toUnit === "none") {
        alert("Please select valid units and enter a numeric value.");
        return;
    }

    const valueInSquareMeters = inputValue * areaConversionFactors[fromUnit];
    const convertedValue = valueInSquareMeters / areaConversionFactors[toUnit];

    document.querySelector(".output").value = convertedValue.toFixed(4);
}

// for lenght conversion
function convertLength() {
    const fromLength = document.getElementById("from-lenght").value;
    const toLength = document.getElementById("to-lenght").value;
    const input = document.querySelector(".input").value;
    const output = document.querySelector(".output");

    if (!input || fromLength === "none" || toLength === "none") {
        output.value = "Invalid Input";
        return;
    }

    const conversionRates = {
        milimerters: 1,
        centimeters: 10,
        meters: 1000,
        kilometer: 1e6,
        inches: 25.4,
        feet: 304.8,
        yards: 914.4,
        miles: 1.609e6,
    };

    const inputInMM = input * conversionRates[fromLength];
    const result = inputInMM / conversionRates[toLength];

    output.value = result.toFixed(6);
}

// for temprature conversion
function tempertureArea() {
    const fromUnit = document.getElementById("from-temperture").value;
    const toUnit = document.getElementById("to-temperture").value;
    const inputValue = parseFloat(document.querySelector(".input").value);

    if (isNaN(inputValue)) {
        alert("Please enter a valid number.");
        return;
    }

    if (fromUnit === "none" || toUnit === "none") {
        alert("Please select both units.");
        return;
    }

    let result;

    if (fromUnit === toUnit) {
        result = inputValue; 
    } else if (fromUnit === "celsuius" && toUnit === "fahrenheit") {
        result = (inputValue * 9/5) + 32;
    } else if (fromUnit === "celsuius" && toUnit === "kelvin") {
        result = inputValue + 273.15;
    } else if (fromUnit === "fahrenheit" && toUnit === "celsuius") {
        result = (inputValue - 32) * 5/9;
    } else if (fromUnit === "fahrenheit" && toUnit === "kelvin") {
        result = ((inputValue - 32) * 5/9) + 273.15;
    } else if (fromUnit === "kelvin" && toUnit === "celsuius") {
        result = inputValue - 273.15;
    } else if (fromUnit === "kelvin" && toUnit === "fahrenheit") {
        result = ((inputValue - 273.15) * 9/5) + 32;
    }

    document.querySelector(".output").value = result.toFixed(2);
}

// For Mass Conversion
function convertMass() {
    const fromUnit = document.getElementById("from-mass").value;
    const toUnit = document.getElementById("to-mass").value;
    const inputValue = parseFloat(document.querySelector(".input").value);

    if (isNaN(inputValue)) {
        alert("Please enter a valid number.");
        return;
    }

    if (fromUnit === "none" || toUnit === "none") {
        alert("Please select both units.");
        return;
    }

    const conversionRates = {
        Tons: 1000,
        tons: 100,
        pounds: 0.453592,
        kilogram: 1,
        grams: 0.001
    };

    const valueInKg = inputValue * (conversionRates[fromUnit] || 1);
    const result = valueInKg / (conversionRates[toUnit] || 1);

    document.querySelector(".output").value = result.toFixed(2);
}

// For Data conversion

function convertData() {
    const fromUnit = document.getElementById("from-data").value;
    const toUnit = document.getElementById("to-data").value;
    const inputValue = parseFloat(document.querySelector(".input").value);

    if (isNaN(inputValue)) {
        alert("Please enter a valid number.");
        return;
    }

    if (fromUnit === "none" || toUnit === "none") {
        alert("Please select both units.");
        return;
    }

    const conversionRates = {
        bits: 1,
        bytes: 8,
        kilobytes: 8192,
        megabytes: 8388608,
        gigabytes: 8589934592,
        terabytes: 8796093022208
    };

    const valueInBits = inputValue * (conversionRates[fromUnit] || 1);
    const result = valueInBits / (conversionRates[toUnit] || 1);

    document.querySelector(".output").value = result.toFixed(2);
}

// for Speed conversion
function convertSpeed() {
    const fromUnit = document.getElementById("from-speed").value;
    const toUnit = document.getElementById("to-speed").value;
    const inputValue = parseFloat(document.querySelector(".input").value);

    if (isNaN(inputValue)) {
        alert("Please enter a valid number.");
        return;
    }

    if (fromUnit === "none" || toUnit === "none") {
        alert("Please select both units.");
        return;
    }

    const conversionRates = {
        "meteres per second": 1,
        "meteres per hours": 3600,
        "kilomerters per second": 0.001,
        "kilomerters per hours": 3.6,
        "inches per second": 39.3701,
        "inches per hours": 141732.283,
        "feet per second": 3.28084,
        "feet per hours": 11811.0236,
        "miles per second": 0.000621371,
        "miles per hours": 2.23694,
        "knots": 1.94384
    };

    const valueInMetersPerSecond = inputValue * (conversionRates[fromUnit] || 1);
    const result = valueInMetersPerSecond / (conversionRates[toUnit] || 1);

    document.querySelector(".output").value = result.toFixed(2);
}

// for time convserion
function convertTime() {
    const fromUnit = document.getElementById("from-time").value;
    const toUnit = document.getElementById("to-time").value;
    const inputValue = parseFloat(document.querySelector(".input").value);

    if (isNaN(inputValue)) {
        alert("Please enter a valid number.");
        return;
    }

    if (fromUnit === "none" || toUnit === "none") {
        alert("Please select both units.");
        return;
    }

    const conversionRates = {
        milliseconds: 1,
        second: 1000,
        minutes: 60000,
        hours: 3600000,
        days: 86400000,
        weeks: 604800000
    };

    const valueInMilliseconds = inputValue * (conversionRates[fromUnit] || 1);
    const result = valueInMilliseconds / (conversionRates[toUnit] || 1);

    document.querySelector(".output").value = result.toFixed(2);
}

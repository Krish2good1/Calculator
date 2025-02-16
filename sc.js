function appendValue(value) {
    const result = document.getElementById('result');
    result.value += value;
}

function clearResult() {
    const result = document.getElementById('result');
    result.value = '';
}

function toggleSign() {
    const result = document.getElementById('result');
    if (result.value.charAt(0) === '-') {
        result.value = result.value.slice(1);
    } else {
        result.value = '-' + result.value;
    }
}

function calculateResult() {
    const result = document.getElementById('result');
    try {
        let expression = result.value;

        // Replace constants
        expression = expression.replace(/PI/g, Math.PI).replace(/e/g, Math.E);

        // Handle factorial
        expression = expression.replace(/(\d+)!/g, function (match, p1) {
            return factorial(parseInt(p1));
        });

        // Handle exponentiation (x^y)
        expression = expression.replace(/(\d+)\^(\d+)/g, function (match, p1, p2) {
            return Math.pow(parseFloat(p1), parseFloat(p2));
        });

        // Handle trigonometric functions
        expression = expression.replace(/sin\(/g, 'Math.sin(')
            .replace(/cos\(/g, 'Math.cos(')
            .replace(/tan\(/g, 'Math.tan(');

        // Handle inverse trigonometric functions (convert result to degrees)
        expression = expression.replace(/asin\(/g, 'radToDeg(Math.asin(')
            .replace(/acos\(/g, 'radToDeg(Math.acos(')
            .replace(/atan\(/g, 'radToDeg(Math.atan(');

        // Handle logarithmic functions
        expression = expression.replace(/log\(/g, 'Math.log10(')
            .replace(/ln\(/g, 'Math.log(');

        // Handle square root
        expression = expression.replace(/sqrt\(/g, 'Math.sqrt(');

        // Handle exponential function
        expression = expression.replace(/exp\(/g, 'Math.exp(');

        // Handle 10^x
        expression = expression.replace(/10\^/g, 'Math.pow(10,');

        // Evaluate the expression
        result.value = eval(expression);
    } catch (error) {
        result.value = 'Error';
    }
}

function factorial(n) {
    if (n === 0 || n === 1) return 1;
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

// Function to convert radians to degrees
function radToDeg(rad) {
    return rad * (180 / Math.PI);
}
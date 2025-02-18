// Array to hold the calculation history in memory
let history = [];

function appendValue(value) {
    const result = document.getElementById('result');
    result.value += value;
}

function clearResult() {
    document.getElementById('result').value = '';
}

function calculateResult() {
    const result = document.getElementById('result');
    try {
        const calculation = result.value.trim();
        if (!calculation) {
            throw new Error("Input is empty");
        }
        if (!/^[0-9+\-*/().% ]+$/.test(calculation)) {
            throw new Error("Invalid characters in input");
        }

        const calcResult = eval(calculation); // Evaluate the expression
        result.value = calcResult;

        // Add to in-memory history
        addHistory(calculation, calcResult);

        // Save to localStorage
        let currentHistory = [];
        try {
            const storedHistory = localStorage.getItem('calcHistory');
            if (storedHistory) {
                currentHistory = JSON.parse(storedHistory);
            }
        } catch (error) {
            console.error("Error reading history from localStorage:", error);
        }
        currentHistory.push(`${calculation} = ${calcResult}`);
        localStorage.setItem('calcHistory', JSON.stringify(currentHistory));
    } catch (error) {
        alert('Invalid input: ' + error.message);
        clearResult();
    }
}

function addHistory(calculation, result) {
    history.push(`${calculation} = ${result}`);
    displayHistory();
}

function displayHistory() {
    const historyList = document.getElementById('history-list');
    if (historyList) {
        historyList.innerHTML = '';
        history.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            historyList.appendChild(li);
        });
    }
}

function toggleSign() {
    const result = document.getElementById('result');
    if (result.value) {
        if (result.value.startsWith('-')) {
            result.value = result.value.substring(1);
        } else {
            result.value = '-' + result.value;
        }
    }
}

function navigateToHistoryPage() {
    // Save the history to localStorage before navigating
    localStorage.setItem('calcHistory', JSON.stringify(history));
    window.location.href = 'history.html'; // Navigate to the history page
}

document.addEventListener('keydown', function (event) {
    const result = document.getElementById('result');
    if (!result) return;

    if (event.key >= '0' && event.key <= '9') {
        appendValue(event.key);
    } else if (['+', '-', '*', '/'].includes(event.key)) {
        appendValue(event.key);
    } else if (event.key === 'Enter') {
        calculateResult();
    } else if (event.key === 'Backspace') {
        result.value = result.value.slice(0, -1);
    } else if (event.key === '.') {
        appendValue('.');
    } else if (event.key === 'Escape') {
        clearResult();
    }
});
function appendSymbol(symbol) {
    document.getElementById('result').value += symbol;
}

function clearResult() {
    document.getElementById('result').value = '';
}

function calculateResult() {
    const result = eval(document.getElementById('result').value);
    document.getElementById('result').value = result;
}

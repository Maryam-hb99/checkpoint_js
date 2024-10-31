// Importing the previously created functions
function reverseString(str) {
    return str.split('').reverse().join('');
}

function countCharacters(str) {
    return str.length;
}

function capitalizeWords(sentence) {
    return sentence.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
}

function findMax(arr) {
    return Math.max(...arr);
}

function findMin(arr) {
    return Math.min(...arr);
}

function sumArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}

function filterArray(arr, conditionFn) {
    return arr.filter(conditionFn);
}

function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}

function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function fibonacci(n) {
    let sequence = [0, 1];
    for (let i = 2; i < n; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence.slice(0, n);
}

// Display Functions for HTML Integration

function displayReverseString() {
    const str = document.getElementById('stringInput').value;
    document.getElementById('stringOutput').textContent = `Reversed: ${reverseString(str)}`;
}

function displayCountCharacters() {
    const str = document.getElementById('stringInput').value;
    document.getElementById('stringOutput').textContent = `Character Count: ${countCharacters(str)}`;
}

function displayCapitalizeWords() {
    const sentence = document.getElementById('stringInput').value;
    document.getElementById('stringOutput').textContent = `Capitalized: ${capitalizeWords(sentence)}`;
}

function displayFindMax() {
    const arr = document.getElementById('arrayInput').value.split(',').map(Number);
    document.getElementById('arrayOutput').textContent = `Max Value: ${findMax(arr)}`;
}

function displayFindMin() {
    const arr = document.getElementById('arrayInput').value.split(',').map(Number);
    document.getElementById('arrayOutput').textContent = `Min Value: ${findMin(arr)}`;
}

function displaySumArray() {
    const arr = document.getElementById('arrayInput').value.split(',').map(Number);
    document.getElementById('arrayOutput').textContent = `Sum: ${sumArray(arr)}`;
}

function displayFilterArray() {
    const arr = document.getElementById('arrayInput').value.split(',').map(Number);
    document.getElementById('arrayOutput').textContent = `Even Numbers: ${filterArray(arr, num => num % 2 === 0).join(', ')}`;
}

function displayFactorial() {
    const num = parseInt(document.getElementById('mathInput').value);
    document.getElementById('mathOutput').textContent = `Factorial: ${factorial(num)}`;
}

function displayIsPrime() {
    const num = parseInt(document.getElementById('mathInput').value);
    document.getElementById('mathOutput').textContent = `Is Prime: ${isPrime(num)}`;
}

function displayFibonacci() {
    const num = parseInt(document.getElementById('mathInput').value);
    document.getElementById('mathOutput').textContent = `Fibonacci Sequence: ${fibonacci(num).join(', ')}`;
}

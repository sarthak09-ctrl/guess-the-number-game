let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
const resultElement = document.getElementById('result');
const attemptsElement = document.getElementById('attempts');
const guessInput = document.getElementById('guess');
const submitButton = document.getElementById('submitGuess');
const restartButton = document.getElementById('restartGame');

submitButton.addEventListener('click', () => {
    const userGuess = parseInt(guessInput.value);

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        resultElement.textContent = 'Please enter a valid number between 1 and 100!';
        return;
    }

    attempts++;

    if (userGuess < randomNumber) {
        resultElement.textContent = 'Too low! Try again.';
    } else if (userGuess > randomNumber) {
        resultElement.textContent = 'Too high! Try again.';
    } else {
        resultElement.textContent = `Congratulations! You guessed the number in ${attempts} attempts.`;
        submitButton.disabled = true;
        restartButton.style.display = 'block';
    }

    attemptsElement.textContent = `Attempts: ${attempts}`;
    guessInput.value = '';
});

restartButton.addEventListener('click', () => {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    attemptsElement.textContent = `Attempts: 0`;
    resultElement.textContent = '';
    guessInput.value = '';
    submitButton.disabled = false;
    restartButton.style.display = 'none';
});
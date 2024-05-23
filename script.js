document.addEventListener("DOMContentLoaded", () => {
  const maxAttempts = 3;
  let attemptsLeft = maxAttempts;
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  const guessInput = document.getElementById("guessInput");
  const guessButton = document.getElementById("guessButton");
  const message = document.getElementById("message");
  const attempts = document.getElementById("attempts");

  function validateInput(input) {
    const number = parseInt(input);
    return Number.isInteger(number) && number >= 1 && number <= 100;
  }

  guessButton.addEventListener("click", () => {
    const userGuess = guessInput.value;

    if (!validateInput(userGuess)) {
      message.textContent = "Please enter a valid number between 1 and 100.";
      return;
    }

    const guess = parseInt(userGuess);
    attemptsLeft--;

    if (guess === randomNumber) {
      message.textContent = "Congratulations! You guessed the correct number!";
      guessButton.disabled = true;
      guessInput.disabled = true;
    } else if (attemptsLeft > 0) {
      if (guess < randomNumber) {
        message.textContent = "Too low! Try again.";
      } else {
        message.textContent = "Too high! Try again.";
      }
      attempts.textContent = `Attempts left: ${attemptsLeft}`;
    } else {
      message.textContent = `Sorry, you've used all your attempts. The correct number was ${randomNumber}.`;
      guessButton.disabled = true;
      guessInput.disabled = true;
    }

    guessInput.value = "";
    guessInput.focus();
  });

  attempts.textContent = `Attempts left: ${maxAttempts}`;
});

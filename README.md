# Number Guessing Game

A simple number guessing game built with vanilla JavaScript, HTML, and CSS. The user must guess a randomly generated number based on feedback provided by the interface. Ideal for practicing basic DOM manipulation, conditional logic, and user input handling.

[🔗 Live Demo](https://tjngoh.github.io/Number-Guessing-Game/)

## Features

- Random number generation within a predefined range  
- Real-time input validation and feedback  
- Incremental attempt tracking  
- Game restart functionality  
- Responsive layout with clean UI  

## Technologies Used

- HTML5  
- CSS3 (custom styling, no frameworks)  
- JavaScript (ES6+)  

## Project Structure

    ├── index.html        // Main HTML structure  
    ├── style.css         // Styling and layout rules  
    └── script.js         // Game logic and DOM manipulation

## How It Works

1. On page load, a random number between a defined min and max is generated.  
2. The user submits guesses via an input field.  
3. The script compares the guess to the target number and displays feedback:  
   - If the guess is too high or too low, a message is shown.  
   - If the guess is correct, a success message is displayed and the input is disabled.  
4. The user can reset the game to start over.  

## Getting Started

To run the project locally:

```bash
git clone https://github.com/tjngoh/Number-Guessing-Game.git
cd Number-Guessing-Game
open index.html


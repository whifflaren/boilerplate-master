const chalk = require('chalk');

/**
 * Greet a person with a colorful message
 * @param {string} name - Name to greet
 * @returns {string} Greeting message
 */
function greet(name) {
  return chalk.rainbow(`Hello, ${name}! 👋 Welcome to the CLI tool!`);
}

/**
 * Perform basic mathematical operations
 * @param {number} a - First number
 * @param {number} b - Second number
 * @param {string} operation - Operation to perform
 * @returns {number} Calculation result
 */
function calculate(a, b, operation) {
  switch (operation.toLowerCase()) {
    case 'add':
      return a + b;
    case 'subtract':
      return a - b;
    case 'multiply':
      return a * b;
    case 'divide':
      if (b === 0) {
        throw new Error('Division by zero is not allowed');
      }
      return a / b;
    default:
      throw new Error(`Unknown operation: ${operation}`);
  }
}

/**
 * Generate random data based on type
 * @param {string} type - Type of random data to generate
 * @param {number} length - Length for string generation
 * @returns {string|number} Random data
 */
function generateRandom(type, length = 10) {
  switch (type.toLowerCase()) {
    case 'number':
      return Math.floor(Math.random() * 1000);
    case 'string':
      const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      let result = '';
      for (let i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
      }
      return result;
    case 'uuid':
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        const r = Math.random() * 16 | 0;
        const v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
      });
    default:
      throw new Error(`Unknown type: ${type}`);
  }
}

/**
 * Display help information
 */
function showHelp() {
  console.log(chalk.cyan(`
Available commands:
  greet     - Greet someone
  calc      - Perform calculations
  random    - Generate random data
  interactive - Interactive mode
  help      - Show this help message
`));
}

module.exports = {
  greet,
  calculate,
  generateRandom,
  showHelp
};

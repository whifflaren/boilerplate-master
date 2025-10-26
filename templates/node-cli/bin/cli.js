#!/usr/bin/env node

const { program } = require('commander');
const chalk = require('chalk');
const inquirer = require('inquirer');
const ora = require('ora');
const boxen = require('boxen');
const { greet, calculate, generateRandom } = require('../lib/utils');

program
  .name('mycli')
  .description('A sample CLI tool built with Node.js')
  .version('1.0.0');

program
  .command('greet')
  .description('Greet someone')
  .option('-n, --name <name>', 'Name to greet')
  .action(async (options) => {
    if (options.name) {
      console.log(greet(options.name));
    } else {
      const answers = await inquirer.prompt([
        {
          type: 'input',
          name: 'name',
          message: 'What is your name?',
          default: 'World'
        }
      ]);
      console.log(greet(answers.name));
    }
  });

program
  .command('calc')
  .description('Perform calculations')
  .option('-a, --a <number>', 'First number')
  .option('-b, --b <number>', 'Second number')
  .option('-o, --operation <operation>', 'Operation (add, subtract, multiply, divide)')
  .action(async (options) => {
    if (options.a && options.b && options.operation) {
      const result = calculate(parseFloat(options.a), parseFloat(options.b), options.operation);
      console.log(chalk.green(`Result: ${result}`));
    } else {
      const answers = await inquirer.prompt([
        {
          type: 'number',
          name: 'a',
          message: 'Enter first number:'
        },
        {
          type: 'number',
          name: 'b',
          message: 'Enter second number:'
        },
        {
          type: 'list',
          name: 'operation',
          message: 'Select operation:',
          choices: ['add', 'subtract', 'multiply', 'divide']
        }
      ]);
      const result = calculate(answers.a, answers.b, answers.operation);
      console.log(chalk.green(`Result: ${result}`));
    }
  });

program
  .command('random')
  .description('Generate random data')
  .option('-t, --type <type>', 'Type of random data (number, string, uuid)')
  .option('-l, --length <length>', 'Length for string generation')
  .action(async (options) => {
    const spinner = ora('Generating random data...').start();
    
    setTimeout(() => {
      spinner.stop();
      const result = generateRandom(options.type || 'number', options.length);
      console.log(boxen(chalk.blue(`Random ${options.type || 'number'}: ${result}`), {
        padding: 1,
        margin: 1,
        borderStyle: 'round'
      }));
    }, 1000);
  });

program
  .command('interactive')
  .description('Interactive mode with multiple options')
  .action(async () => {
    console.log(chalk.yellow('Welcome to Interactive Mode!'));
    
    const answers = await inquirer.prompt([
      {
        type: 'list',
        name: 'action',
        message: 'What would you like to do?',
        choices: [
          'Get a greeting',
          'Perform calculation',
          'Generate random data',
          'Exit'
        ]
      }
    ]);

    switch (answers.action) {
      case 'Get a greeting':
        const nameAnswer = await inquirer.prompt([
          {
            type: 'input',
            name: 'name',
            message: 'What is your name?'
          }
        ]);
        console.log(greet(nameAnswer.name));
        break;
      case 'Perform calculation':
        const calcAnswers = await inquirer.prompt([
          {
            type: 'number',
            name: 'a',
            message: 'Enter first number:'
          },
          {
            type: 'number',
            name: 'b',
            message: 'Enter second number:'
          },
          {
            type: 'list',
            name: 'operation',
            message: 'Select operation:',
            choices: ['add', 'subtract', 'multiply', 'divide']
          }
        ]);
        const result = calculate(calcAnswers.a, calcAnswers.b, calcAnswers.operation);
        console.log(chalk.green(`Result: ${result}`));
        break;
      case 'Generate random data':
        const randomAnswer = await inquirer.prompt([
          {
            type: 'list',
            name: 'type',
            message: 'Select type:',
            choices: ['number', 'string', 'uuid']
          }
        ]);
        const randomResult = generateRandom(randomAnswer.type);
        console.log(boxen(chalk.blue(`Random ${randomAnswer.type}: ${randomResult}`), {
          padding: 1,
          margin: 1,
          borderStyle: 'round'
        }));
        break;
      case 'Exit':
        console.log(chalk.gray('Goodbye!'));
        process.exit(0);
    }
  });

program.parse();

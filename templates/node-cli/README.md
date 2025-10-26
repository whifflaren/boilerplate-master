# Node.js CLI Tool Template

A comprehensive Node.js command-line interface template with interactive features, colorful output, and testing setup.

## Features

- 🚀 **Commander.js** - Command-line argument parsing
- 🎨 **Chalk** - Colorful terminal output
- ❓ **Inquirer** - Interactive prompts
- ⏳ **Ora** - Elegant spinners
- 📦 **Boxen** - Beautiful boxes
- 🧪 **Jest** - Testing framework
- 📝 **JSDoc** - Documentation

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Make CLI executable:**
   ```bash
   chmod +x bin/cli.js
   ```

3. **Run the CLI:**
   ```bash
   node bin/cli.js --help
   ```

4. **Run tests:**
   ```bash
   npm test
   ```

## Available Commands

### Greet Command
```bash
# With option
node bin/cli.js greet --name "John"

# Interactive mode
node bin/cli.js greet
```

### Calculator Command
```bash
# With options
node bin/cli.js calc --a 10 --b 5 --operation add

# Interactive mode
node bin/cli.js calc
```

### Random Data Generator
```bash
# Generate random number
node bin/cli.js random --type number

# Generate random string
node bin/cli.js random --type string --length 15

# Generate UUID
node bin/cli.js random --type uuid
```

### Interactive Mode
```bash
node bin/cli.js interactive
```

## Project Structure

```
├── bin/
│   └── cli.js          # Main CLI entry point
├── lib/
│   └── utils.js        # Utility functions
├── tests/
│   └── utils.test.js   # Test files
├── index.js            # Main application file
├── package.json        # Dependencies and scripts
└── README.md           # This file
```

## CLI Features

### Command Options
- `--help, -h` - Show help information
- `--version, -v` - Show version number
- `--name, -n` - Specify name for greeting
- `--a, -a` - First number for calculation
- `--b, -b` - Second number for calculation
- `--operation, -o` - Operation type
- `--type, -t` - Type of random data
- `--length, -l` - Length for string generation

### Interactive Features
- Colorful terminal output
- Loading spinners
- Interactive prompts
- Beautiful message boxes
- Error handling

## Development

### Adding New Commands

1. Add command to `bin/cli.js`:
```javascript
program
  .command('newcommand')
  .description('Description of new command')
  .action((options) => {
    // Command logic here
  });
```

2. Add utility functions to `lib/utils.js`
3. Add tests to `tests/utils.test.js`

### Testing

Run tests with:
```bash
npm test
```

## Customization

- Update `package.json` with your CLI name and description
- Modify `bin/cli.js` to add/remove commands
- Extend `lib/utils.js` with your utility functions
- Update this README with your specific information

## Learn More

- [Commander.js Documentation](https://github.com/tj/commander.js)
- [Chalk Documentation](https://github.com/chalk/chalk)
- [Inquirer Documentation](https://github.com/SBoudrias/Inquirer.js)
- [Jest Testing](https://jestjs.io/)

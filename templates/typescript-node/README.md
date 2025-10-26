# TypeScript + Node.js Template

A production-ready TypeScript Node.js application template with Express.js, comprehensive testing, and modern development tools.

## Features

- 🚀 **TypeScript** - Type-safe JavaScript with modern features
- ⚡️ **Express.js** - Fast, unopinionated web framework
- 🛡️ **Security** - Helmet.js for security headers
- 🌐 **CORS** - Cross-Origin Resource Sharing enabled
- 📊 **Logging** - Custom logger with different levels
- 🧪 **Jest Testing** - Comprehensive test suite
- 🔧 **ESLint** - Code linting and formatting
- 📝 **JSDoc** - Type documentation
- 🏗️ **Architecture** - Clean separation of concerns

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up environment variables:**
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   npm start
   ```

5. **Run tests:**
   ```bash
   npm test
   ```

## Available Scripts

- `npm run dev` - Start development server with ts-node
- `npm run dev:watch` - Start development server with watch mode
- `npm run build` - Build TypeScript to JavaScript
- `npm start` - Start production server
- `npm test` - Run tests
- `npm run test:watch` - Run tests in watch mode
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues
- `npm run clean` - Clean build directory

## Project Structure

```
src/
├── controllers/         # Request handlers
│   └── ApiController.ts
├── middleware/          # Express middleware
│   └── errorHandler.ts
├── services/           # Business logic
│   └── UserService.ts
├── types/              # TypeScript type definitions
│   └── User.ts
├── utils/              # Utility functions
│   └── logger.ts
└── index.ts            # Application entry point

tests/                  # Test files
├── setup.ts           # Jest setup
└── UserService.test.ts

dist/                   # Compiled JavaScript (generated)
```

## API Endpoints

### Health Check
- `GET /api/health` - Server health status

### Users
- `GET /api/users` - Get all users
- `GET /api/users/:id` - Get user by ID
- `POST /api/users` - Create a new user
- `PUT /api/users/:id` - Update user
- `DELETE /api/users/:id` - Delete user

### General
- `GET /` - Welcome message and API info

## TypeScript Configuration

The project uses strict TypeScript configuration with:
- Strict type checking
- ES2020 target
- CommonJS modules
- Source maps for debugging
- Declaration files generation

## Testing

Comprehensive test suite using Jest and ts-jest:

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm test -- --coverage
```

## Code Quality

- **ESLint** - TypeScript-specific linting rules
- **Type Safety** - Strict TypeScript configuration
- **Error Handling** - Centralized error handling middleware
- **Logging** - Structured logging with different levels

## Environment Variables

Create a `.env` file:

```env
PORT=3000
NODE_ENV=development
```

## Development

### Adding New Features

1. **Types** - Define interfaces in `src/types/`
2. **Services** - Add business logic in `src/services/`
3. **Controllers** - Add request handlers in `src/controllers/`
4. **Middleware** - Add custom middleware in `src/middleware/`
5. **Tests** - Add tests in `tests/`

### Code Organization

- **Controllers** - Handle HTTP requests and responses
- **Services** - Contain business logic
- **Types** - Define TypeScript interfaces
- **Middleware** - Express middleware functions
- **Utils** - Utility functions and helpers

## Learn More

- [TypeScript Documentation](https://www.typescriptlang.org/)
- [Express.js Documentation](https://expressjs.com/)
- [Jest Testing](https://jestjs.io/)
- [ESLint TypeScript](https://typescript-eslint.io/)

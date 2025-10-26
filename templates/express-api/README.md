# Express.js API Template

A clean and production-ready Express.js API template with essential middleware and testing setup.

## Features

- 🚀 **Express.js** - Fast, unopinionated web framework
- 🛡️ **Security** - Helmet.js for security headers
- 🌐 **CORS** - Cross-Origin Resource Sharing enabled
- 📊 **Logging** - Morgan for HTTP request logging
- 🔧 **Environment Variables** - dotenv for configuration
- 🧪 **Testing** - Jest and Supertest for API testing
- 🔄 **Development** - Nodemon for auto-restart

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up environment variables:**
   ```bash
   cp env.example .env
   # Edit .env with your configuration
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```

4. **Start production server:**
   ```bash
   npm start
   ```

5. **Run tests:**
   ```bash
   npm test
   ```

## API Endpoints

### Health Check
- `GET /api/health` - Server health status

### Users
- `GET /api/users` - Get all users
- `POST /api/users` - Create a new user

### General
- `GET /` - Welcome message and API info

## Project Structure

```
├── server.js           # Main server file
├── package.json        # Dependencies and scripts
├── env.example         # Environment variables template
├── tests/              # Test files
│   └── server.test.js  # API tests
└── README.md           # This file
```

## Environment Variables

Create a `.env` file based on `env.example`:

```env
PORT=3000
NODE_ENV=development
```

## Available Scripts

- `npm start` - Start production server
- `npm run dev` - Start development server with nodemon
- `npm test` - Run tests

## Middleware Included

- **Helmet** - Security headers
- **CORS** - Cross-origin requests
- **Morgan** - HTTP request logging
- **Express.json()** - JSON body parsing
- **Express.urlencoded()** - URL-encoded body parsing

## Testing

The template includes comprehensive tests using Jest and Supertest:

```bash
npm test
```

## Customization

1. **Add new routes** in `server.js`
2. **Add middleware** as needed
3. **Configure database** connection
4. **Add authentication** if required
5. **Extend error handling** for specific needs

## Learn More

- [Express.js Documentation](https://expressjs.com/)
- [Jest Testing Framework](https://jestjs.io/)
- [Supertest API Testing](https://github.com/visionmedia/supertest)

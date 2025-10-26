// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({ 
    name: 'Next.js API',
    message: 'Hello from the API!',
    timestamp: new Date().toISOString()
  })
}

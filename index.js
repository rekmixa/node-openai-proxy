require('dotenv').config()

const path = require('path')
const express = require('express')
const PORT = process.env.PORT

const { createProxyMiddleware } = require('http-proxy-middleware')
const app = express()

app.use(express.static(path.join(__dirname, 'public')))

app.use(
  '/v1/',
  createProxyMiddleware({
    target: 'https://api.openai.com/v1',
    changeOrigin: true,
    onProxyReq: (proxyReq) => {
      console.log(req.originalUrl)
      proxyReq.setHeader('Authorization', `Bearer ${process.env.API_KEY}`)
    },
    onProxyRes: (proxyRes) => {
      proxyRes.headers['Access-Control-Allow-Origin'] = '*'
      proxyRes.headers['Access-Control-Allow-Headers'] =
        'Content-Type, Content-Length , Authorization, Accept, X-Requested-With'
    },
  })
)

app
  .listen(PORT, () => {
    console.log(process.env.API_KEY)
    console.log(`server running on http://localhost:${PORT}`)
  })
  .on('error', (err) => {
    console.log(err)
  })

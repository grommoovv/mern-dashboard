const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const mongoose = require('mongoose')
const AuthRouter = require('./modules/auth/router/AuthRouter')
const UserRouter = require('./modules/user/router/UserRouter')
const ShopRouter = require('./modules/shop/router/ShopRouter')
const ErrorMiddleware = require('./middlewares/ErrorMiddleware')
const AuthMiddleware = require('./middlewares/AuthMiddleware')
const CorsMiddleware = require('./middlewares/CorsMiddleware')

dotenv.config({ path: '.env.dev' })

const PORT = process.env.PORT || 4000
const CLIENT_URL = process.env.CLIENT_URL
const MONGO_CONNECT = process.env.MONGO_CONNECT

const app = express()

// middlewares
app.use(express.json())
app.use(cookieParser())
app.use(CorsMiddleware)

// routes
app.use('/api/auth', AuthRouter)
app.options('/api/users/get-users', (req, res) => {
  res.sendStatus(200)
})
app.use('/api/users', AuthMiddleware, UserRouter)
app.use('/api/shop', ShopRouter)
app.use(ErrorMiddleware)

const start = async () => {
  try {
    // Коннект к базе данных
    await mongoose
      .connect(MONGO_CONNECT)
      .then(() => console.log('Connected To MongoDB'))
      .catch((err) => console.log(`DB Connection Error: ${err}`))
    // Запуск сервера
    app.listen(PORT, () =>
      console.log(`Server started on http://localhost:${PORT}`)
    )
  } catch (e) {
    console.log(e)
  }
}

start()

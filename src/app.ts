import express, { Application, Request, Response } from 'express'
import cors from 'cors'

//Routes
import userRoutes from './app/modules/users/user.route'

const app: Application = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req: Request, res: Response) => {
  res.send("Working Successfully")
})

app.use('/api/v1/users', userRoutes)

export default app

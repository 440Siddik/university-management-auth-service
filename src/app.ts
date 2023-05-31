import express, { Application, Request, Response } from 'express'
import cors from 'cors'

//Routes
import userRoutes from './app/modules/users/user.route'

const app: Application = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req: Request, res: Response) => {
  res.send('Server is running')
})

app.use("/api/v1/" , userRoutes)

export default app

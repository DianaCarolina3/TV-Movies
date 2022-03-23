import app from 'express'
import path from 'path'

const router = app.Router()

const ROUTE: string = 'src/public/index.html'

router.get('/', (req: any, res: any) => {
  res.sendFile(path.resolve(ROUTE))
})

export default router

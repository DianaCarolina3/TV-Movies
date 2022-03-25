import path from 'path'
import app, { Request, Response, NextFunction, Router } from 'express'

const ROUTE: string = 'src/public/movies.html'
import controller from './controller'

const router = app.Router()

// ROUTER
router.get('/', page)
router.get('/list', listMovie)
router.get('/:id', getMovie)
router.post('/', upsertMovie)
router.delete('/:id', removeMovie)

function page(req: Request, res: Response, next: NextFunction) {
  try {
    res.sendFile(path.resolve(ROUTE))
  } catch (error) {
    next(error)
  }
}

async function listMovie(req: Request, res: Response, next: NextFunction) {
  try {
    const data = await controller.list()

    res.status(200).json({
      data: data,
    })
  } catch (error) {
    next(error)
  }
}

async function getMovie(req: Request, res: Response, next: NextFunction) {
  try {
    const data = await controller.get(req.params.id)

    res.status(200).json({
      data: data,
    })
  } catch (error) {
    next(error)
  }
}

async function upsertMovie(req: Request, res: Response, next: NextFunction) {
  try {
    const data = await controller.upsert(req.body, req.query.id as string)

    res.status(201).json({
      data: data,
    })
  } catch (error) {
    next(error)
  }
}

async function removeMovie(req: Request, res: Response, next: NextFunction) {
  try {
    const data = await controller.remove(req.params.id)

    res.status(200).json({
      data: data,
    })
  } catch (error) {
    next(error)
  }
}

export default router

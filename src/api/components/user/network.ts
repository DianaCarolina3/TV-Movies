import app, { Request, Response, NextFunction } from 'express'

import controller from './controller'

const router = app.Router()

// ROUTER
router.get('/list', listUser)
router.get('/:id', getUser)
router.post('/', upsertUser)
router.delete('/:id', removeUser)

async function listUser(req: Request, res: Response, next: NextFunction) {
  try {
    //
  } catch (error) {
    next(error)
    //
  }
}

async function getUser(req: Request, res: Response, next: NextFunction) {
  try {
    //
  } catch (error) {
    next(error)
    //
  }
}

async function upsertUser(req: Request, res: Response, next: NextFunction) {
  try {
    const data = await controller.insert(req.body)

    res.status(201).json({
      data: data,
    })
  } catch (error) {
    next(error)
  }
}

async function removeUser(req: Request, res: Response, next: NextFunction) {
  try {
    //
  } catch (error) {
    next(error)
    //
  }
}

export default router

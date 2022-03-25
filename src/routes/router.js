import { application } from 'express'
import home from '../api/components/home'
import movie from '../api/components/movie/network'
import user from '../api/components/user/network'

const HOME_PAGE = '/home'

// @ts-ignore
const routerApp = (app) => {
  app.use(HOME_PAGE, home)
  app.use(HOME_PAGE + '/movie', movie)
  app.use(HOME_PAGE + '/user', user)
}

export default routerApp

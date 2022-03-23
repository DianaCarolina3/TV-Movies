import home from '../api/components/home'

// @ts-ignore
const routerApp = (app) => {
  app.use('/', home)
}

export default routerApp

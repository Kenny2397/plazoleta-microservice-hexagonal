import express from 'express'
import restaurantRouter from './restaurant-routes'
// import dishesRouter from './dishes-routes'

function RouterApi (app: express.Application): void {
  const router = express.Router()
  app.use('/api/v1', router)

  router.use('/restaurants', restaurantRouter)
  // router.use('/dishes', dishesRouter)
}

export default RouterApi

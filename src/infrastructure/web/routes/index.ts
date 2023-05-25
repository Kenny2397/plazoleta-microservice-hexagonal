import express from 'express'
import restaurantRouter from './restaurant-routes'
import categoryRouter from './category-routes'
import dishRouter from './dish-routes'
import orderRouter from './order-routes'

function RouterApi (app: express.Application): void {
  const router = express.Router()
  app.use('/api/v1', router)

  router.use('/restaurants', restaurantRouter)
  router.use('/categories', categoryRouter)
  router.use('/dishes', dishRouter)
  router.use('/orders', orderRouter)
}

export default RouterApi

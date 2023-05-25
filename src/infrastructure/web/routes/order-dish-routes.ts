import { Router } from 'express'
import passport from '../../authentication/index'
import { checkRoles } from '../../middlewares/auth-handler'
import { ROLES } from '../utils/shared/role-constants'
import { orderDishController } from '../dependencies/container'

const router = Router()

router.post('/', passport.authenticate('jwt', { session: false }), checkRoles(ROLES.CLIENT),
  orderDishController.createOrderDish.bind(orderDishController))

export default router

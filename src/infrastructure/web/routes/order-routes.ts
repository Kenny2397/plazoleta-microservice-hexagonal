import { Router } from 'express'
import passport from '../../authentication/index'
import { checkRoles } from '../../middlewares/auth-handler'
import { ROLES } from '../utils/shared/role-constants'
import { orderController } from '../dependencies/container'

const router = Router()

router.post('/', passport.authenticate('jwt', { session: false }), checkRoles(ROLES.CLIENT, ROLES.OWNER, ROLES.ADMIN),
  orderController.createOrder.bind(orderController))

export default router

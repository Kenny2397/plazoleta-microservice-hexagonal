import { Router } from 'express'
import passport from './../../authentication/index.ts'
import { checkRoles } from '../../middlewares/auth-handler'
import { ROLES } from '../utils/shared/role-constants'

import { restaurantController } from './../dependencies/container'
const router = Router()

// import validatorHandler from '../../middlewares/validator-handler'
// import { createRestaurantSchema } from './../schemas/restaurant-schema'

/**
 * @openapi
 * /api/v1/restaurants:
 *    post:
 *      tags:
 *        - Restaurant
 *      summary: "Create a new restaurant"
 *      description: Create a restaurant by validating in Owner profile
 *      requestBody:
 *          content:
 *            application/json:
 *              schema:
 *                 $ref: "#/components/schemas/CreateRestaurant"
 *      responses:
 *        '200':
 *          description: Successful operation
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/CreateRestaurant"
 *            application/xml:
 *              schema:
 *                $ref: '#/components/schemas/CreateRestaurant'
 *        '400':
 *          description: "Error: Bad Request"
 *        '401':
 *          description: "Error: Unauthorized"
 *        '403':
 *          description: "Error: Forbidden"
 *        '409':
 *          description: "Error: Conflict"
 *      security:
 *        - bearerAuth: []
 */
router.post('/', passport.authenticate('jwt', { session: false }), checkRoles(ROLES.ADMIN), restaurantController.create.bind(restaurantController))

export default router

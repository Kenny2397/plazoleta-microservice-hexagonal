import { Router } from 'express'
import passport from './../../authentication/index'
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
router.post('/', passport.authenticate('jwt', { session: false }),
  checkRoles(ROLES.ADMIN),
  restaurantController.createRestaurant.bind(restaurantController))

/**
 * @openapi
 * /api/v1/restaurants:
 *    get:
 *      tags:
 *        - Restaurant
 *      summary: "Get all restaurants"
 *      description: Get all restaurants by validating in Owner profile
 *      parameters:
 *        - name: limit
 *          in: query
 *          description: limit of restaurants
 *          required: false
 *          schema:
 *            type: integer
 *            format: int64
 *            default: 10
 *        - name: offset
 *          in: query
 *          description: offset of restaurants
 *          required: false
 *          schema:
 *            type: integer
 *            format: int64
 *            default: 0
 *      responses:
 *        '200':
 *          description: Successful operation
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/AllRestaurants"
 *            application/xml:
 *              schema:
 *                $ref: '#/components/schemas/AllRestaurants'
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
router.get('/', passport.authenticate('jwt', { session: false }),
  checkRoles(ROLES.ADMIN, ROLES.OWNER, ROLES.CLIENT, ROLES.EMPLOYEE),
  restaurantController.getAllRestaurants.bind(restaurantController))

/**
 * @openapi
 * /api/v1/restaurants/:id/dishes::
 *    get:
 *      tags:
 *        - Restaurant
 *      summary: "Get all dishes of a restaurant"
 *      description: Get all dishes of a restaurant by validating in Owner profile
 *      parameters:
 *        - name: limit
 *          in: query
 *          description: limit of dishes of a restaurant
 *          required: false
 *          schema:
 *            type: integer
 *            format: int64
 *            default: 10
 *        - name: offset
 *          in: query
 *          description: offset dishes of a restaurant
 *          required: false
 *          schema:
 *            type: integer
 *            format: int64
 *            default: 0
 *      responses:
 *        '200':
 *          description: Successful operation
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/GetAllDishesInRestaurants"
 *            application/xml:
 *              schema:
 *                $ref: '#/components/schemas/GetAllDishesInRestaurants'
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
router.get('/:id/dishes', passport.authenticate('jwt', { session: false }),
  checkRoles(ROLES.ADMIN, ROLES.OWNER, ROLES.CLIENT, ROLES.EMPLOYEE),
  restaurantController.getDishesRestaurant.bind(restaurantController))

export default router

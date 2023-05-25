import { Router } from 'express'
import passport from '../../authentication/index'

import { checkRoles } from '../../middlewares/auth-handler'
import { ROLES } from '../utils/shared/role-constants'
import { dishController } from '../dependencies/container'

const router = Router()

/**
 * @openapi
 * /api/v1/dishes:
 *    post:
 *      tags:
 *        - Dish
 *      summary: "Create a new dish"
 *      description: Create a dish by validating in Owner profile
 *      requestBody:
 *          content:
 *            application/json:
 *              schema:
 *                 $ref: "#/components/schemas/CreateDish"
 *      responses:
 *        '200':
 *          description: Successful operation
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/CreateDish"
 *            application/xml:
 *              schema:
 *                $ref: '#/components/schemas/CreateDish'
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
router.post('/', passport.authenticate('jwt', { session: false }), checkRoles(ROLES.OWNER), dishController.createDish.bind(dishController))

/**
 * @openapi
 * /api/v1/dishes:
 *    patch:
 *      tags:
 *        - Dish
 *      summary: "Update dish"
 *      description: Update a dish by validating in Owner profile
 *      parameters:
 *        - name: DishId
 *          in: path
 *          description: ID of dish to return
 *          required: true
 *          schema:
 *            type: integer
 *            format: int64
 *      requestBody:
 *          content:
 *            application/json:
 *              schema:
 *                 $ref: "#/components/schemas/UpdateDish"
 *      responses:
 *        '200':
 *          description: Successful operation
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/UpdateDish"
 *            application/xml:
 *              schema:
 *                $ref: '#/components/schemas/UpdateDish'
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
router.patch('/:id', passport.authenticate('jwt', { session: false }), checkRoles(ROLES.OWNER), dishController.updateDish.bind(dishController))

router.patch('/:id/toggle-activate', passport.authenticate('jwt', { session: false }), checkRoles(ROLES.OWNER), dishController.toggleActiveDish.bind(dishController))
export default router

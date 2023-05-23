import { Router } from 'express'
import passport from './../../authentication/index.ts'

import { checkRoles } from '../../middlewares/auth-handler'
import { ROLES } from '../utils/shared/role-constants'
import { dishController } from '../dependencies/container'

const router = Router()

/**
 * @openapi
 * /api/v1/dishs/owner:
 *    post:
 *      tags:
 *        - dish
 *      summary: "Create a new owner dish"
 *      description: Create an owner dish by validating in Administrator profile
 *      requestBody:
 *          content:
 *            application/json:
 *              schema:
 *                 $ref: "#/components/schemas/dish"
 *            application/xml:
 *              schema:
 *                $ref: '#/components/schemas/dish'
 *            application/x-www-form-urlencoded:
 *              schema:
 *                $ref: '#/components/schemas/dish'
 *      responses:
 *        '200':
 *          description: Successful operation
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/dish"
 *            application/xml:
 *              schema:
 *                $ref: '#/components/schemas/dish'
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

export default router

import { Router } from 'express'
import passport from '../../authentication/index'
import { categoryController } from '../dependencies/container'
import { checkRoles } from '../../middlewares/auth-handler'
import { ROLES } from '../utils/shared/role-constants'
const router = Router()

/**
 * @openapi
 * /api/v1/categories:
 *    post:
 *      tags:
 *        - categories
 *      summary: "Create a new owner categories"
 *      description: Create an owner categories by validating in Administrator profile
 *      requestBody:
 *          content:
 *            application/json:
 *              schema:
 *                 $ref: "#/components/schemas/CreateCategory"
 *            application/xml:
 *              schema:
 *                $ref: '#/components/schemas/CreateCategory'
 *            application/x-www-form-urlencoded:
 *              schema:
 *                $ref: '#/components/schemas/CreateCategory'
 *      responses:
 *        '200':
 *          description: Successful operation
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/CreateCategory"
 *            application/xml:
 *              schema:
 *                $ref: '#/components/schemas/CreateCategory'
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
router.post('/', passport.authenticate('jwt', { session: false }), checkRoles(ROLES.OWNER), categoryController.createCategory.bind(categoryController))

export default router

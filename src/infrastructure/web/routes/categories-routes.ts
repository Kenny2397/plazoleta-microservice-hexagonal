import { Router } from 'express'

import { categoryController } from './../dependencies/container'
// import { checkRoles } from '../../middlewares/auth-handler'
// import { roles } from '../../../shared/constants/roles'
const router = Router()

/**
 * @openapi
 * /api/v1/categoriess/owner:
 *    post:
 *      tags:
 *        - categories
 *      summary: "Create a new owner categories"
 *      description: Create an owner categories by validating in Administrator profile
 *      requestBody:
 *          content:
 *            application/json:
 *              schema:
 *                 $ref: "#/components/schemas/categories"
 *            application/xml:
 *              schema:
 *                $ref: '#/components/schemas/categories'
 *            application/x-www-form-urlencoded:
 *              schema:
 *                $ref: '#/components/schemas/categories'
 *      responses:
 *        '200':
 *          description: Successful operation
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/categories"
 *            application/xml:
 *              schema:
 *                $ref: '#/components/schemas/categories'
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
router.post('/', categoryController.createCategory.bind(categoryController))

export default router

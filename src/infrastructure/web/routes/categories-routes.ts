import { Router } from 'express'
import CategoriesController from './../controllers/categories-controller'
import CategoriesService from '../../../application/services/categories-service'
import { CategoriesRepository } from '../../../domain/repositories/categories-repository'
import CategoriesRepositoryImpl from '../../database/repositories/sequelize-categories-repository'

// import { checkRoles } from '../../middlewares/auth-handler'
// import { roles } from '../../../shared/constants/roles'

const categoriesRepository: CategoriesRepository = new CategoriesRepositoryImpl()
const categoriesService: CategoriesService = new CategoriesService(categoriesRepository)

const categoriesController: CategoriesController = new CategoriesController(categoriesService)
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
router.post('', categoriesController.create.bind(categoriesController))

export default router

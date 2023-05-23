import { Router } from 'express'
import DishController from './../controllers/dish-controller'
import DishService from '../../../application/services/dish-service'
import { DishRepository } from '../../../domain/repositories/dish-repository'
import DishRepositoryImpl from '../../database/repositories/sequelize-dish-repository'

// import { checkRoles } from '../../middlewares/auth-handler'
// import { roles } from '../../../shared/constants/roles'

const dishRepository: DishRepository = new DishRepositoryImpl()
const dishService: DishService = new DishService(dishRepository)

const dishController: DishController = new DishController(dishService)
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
router.post('', dishController.create.bind(dishController))

export default router

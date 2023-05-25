'use strict'
const CATEGORY_TABLE = 'categories'
const RESTAURANT_TABLE = 'restaurants'
const DISH_TABLE = 'dishes'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, sequelize) {
    const categories = [
      { name: 'LOS PLATOS', description: 'Platos de fondo', created_at: new Date() },
      { name: 'PASTAS', description: 'Seleccion de pastas italianas', created_at: new Date() },
      { name: 'ENTRADAS Y PIQUEOS', description: 'Seleccionde pastas y piqueos', created_at: new Date() },
      { name: 'ENSALADAS', description: 'Seleccion de ensaladas', created_at: new Date() }
    ]

    const restaurants = [
      {
        name: 'tanta',
        address: 'jiron ica 123 lince',
        phone: '712344529',
        url_logo: 'https://random.io',
        nit: 12134324,
        owner_id: '2',
        created_at: new Date()
      },
      {
        name: 'Mayta',
        address: 'Av. La Mar 1285, Miraflores',
        phone: '936765456',
        url_logo: 'https://random.io',
        nit: 4534563,
        owner_id: '2',
        created_at: new Date()
      }
    ]

    const dishes = [
      {
        name: 'lomo saltado',
        description: 'El lomo saltdo es un plato tipico de Perú',
        price: 50,
        url_image: 'https://lomo.png',
        category_id: 1,
        restaurant_id: 1,
        created_at: new Date()
      },
      {
        name: 'Tallarines verdes',
        description: 'El tallarin verde es un plato tipico de Perú',
        price: 45,
        url_image: 'https://tallarinesverdes.png',
        category_id: 2,
        restaurant_id: 2,
        created_at: new Date()
      },
      {
        name: 'Ensalada blanca',
        description: 'La ensalada blanca es un plato tipico de Perú',
        price: 25,
        url_image: 'https://ensaladablanca.png',
        category_id: 3,
        restaurant_id: 1,
        created_at: new Date()
      }
    ]

    await queryInterface.bulkInsert(CATEGORY_TABLE, categories, {})
    await queryInterface.bulkInsert(RESTAURANT_TABLE, restaurants, {})
    await queryInterface.bulkInsert(DISH_TABLE, dishes, {})
  },

  async down (queryInterface, Sequelize) {

  }
}

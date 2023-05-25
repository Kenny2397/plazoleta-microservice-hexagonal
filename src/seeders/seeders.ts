// import axios from 'axios'
// const URI_USER = 'http://localhost:4000/api/v1/'
// // const URI_PLAZOLETA = 'http://localhost:3000/api/v1/'
// // const TOKEN_ADMIN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjMsInJvbGVJZCI6MSwiaWF0IjoxNjg0OTQxMjY3fQ.kMC5bpQOHK9K5c2Agrpu0dSnlLwKVDM8nn9bTC2DJZU'
// // const TOKEN_OWNER = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjQsInJvbGVJZCI6MiwiaWF0IjoxNjg0OTQxMzU4fQ.xM7kfGWjiBmktuopSP5HujP7XznCDpfzNT0ubd1LUAc'

// async function requestHttp (uri: string, data: any, token: string): Promise<any> {
//   async function reqAxios (element: any): Promise<any> {
//     try {
//       if (token === 'noToken') {
//         const response = await axios.post(uri, element)
//         console.log('--' + uri, response.data)
//       } else {
//         const options = {
//           headers: {
//             Authorization: 'Bearer ' + token
//           }
//         }
//         const response = await axios.post(uri, element, options)
//         console.log(response.data)
//       }
//     } catch (error: any) {
//       console.log(error.message, data)
//     }
//   }

//   for (let index = 0; index < data.length; index++) {
//     await reqAxios(data[index])
//   }
// }

// const roles = [
//   { name: 'Administrador', description: 'El rol de Administrador' },
//   { name: 'Propietario', description: 'El rol Propietario' },
//   { name: 'Empleado', description: 'El rol Empleado' },
//   { name: 'Cliente', description: 'El rol cliente' }
// ]

// const users = [
//   {
//     name: 'Administrador',
//     lastName: 'luque',
//     identifier: '7475445955',
//     phone: '+234234564',
//     email: 'kenny1@pragma.com',
//     password: 'root',
//     roleId: 1
//   },
//   {
//     name: 'Propietario',
//     lastName: 'luque',
//     identifier: '124564529',
//     phone: '+234234563',
//     email: 'kenny2@pragma.com',
//     password: 'root',
//     roleId: 2
//   },
//   {
//     name: 'Empleado',
//     lastName: 'luque',
//     identifier: '2345569456',
//     phone: '+2342344556',
//     email: 'ke3nny3@pragma.com',
//     password: 'root',
//     roleId: 3
//   },
//   {
//     name: 'Cliente',
//     lastName: 'luque',
//     identifier: '23499869456',
//     phone: '+23423444556',
//     email: 'kewnny4@pragma.com',
//     password: 'root',
//     roleId: 4
//   }
// ]

// // const categories = [
// //   { name: 'LOS PLATOS', description: 'Platos de fondo', created_at: new Date() },
// //   { name: 'PASTAS', description: 'Seleccion de pastas italianas', created_at: new Date() },
// //   { name: 'ENTRADAS Y PIQUEOS', description: 'Seleccionde pastas y piqueos', created_at: new Date() },
// //   { name: 'ENSALADAS', description: 'Seleccion de ensaladas', created_at: new Date() }
// // ]

// // const restaurants = [
// //   {
// //     name: 'tanta',
// //     address: 'jiron ica 123 lince',
// //     phone: '712344529',
// //     url_logo: 'https://random.io',
// //     nit: 12134324,
// //     owner_id: '2',
// //     created_at: new Date()
// //   },
// //   {
// //     name: 'Mayta',
// //     address: 'Av. La Mar 1285, Miraflores',
// //     phone: '936765456',
// //     url_logo: 'https://random.io',
// //     nit: 4534563,
// //     owner_id: '2',
// //     created_at: new Date()
// //   }
// // ]

// // const dishes = [
// //   {
// //     name: 'lomo saltado',
// //     description: 'El lomo saltdo es un plato tipico de Perú',
// //     price: 50,
// //     url_image: 'https://lomo.png',
// //     category_id: 1,
// //     restaurant_id: 1,
// //     created_at: new Date()
// //   },
// //   {
// //     name: 'Tallarines verdes',
// //     description: 'El tallarin verde es un plato tipico de Perú',
// //     price: 45,
// //     url_image: 'https://tallarinesverdes.png',
// //     category_id: 2,
// //     restaurant_id: 2,
// //     created_at: new Date()
// //   },
// //   {
// //     name: 'Ensalada blanca',
// //     description: 'La ensalada blanca es un plato tipico de Perú',
// //     price: 25,
// //     url_image: 'https://ensaladablanca.png',
// //     category_id: 3,
// //     restaurant_id: 1,
// //     created_at: new Date()
// //   }
// // ]

// // requestHttp(URI_USER + 'roles', roles, 'noToken')
// // requestHttp(URI_USER + 'users', users, 'noToken')

// // requestHttp(URI_PLAZOLETA + 'categories', categories, TOKEN_OWNER)
// // requestHttp(URI_PLAZOLETA + 'restaurants', restaurants, TOKEN_ADMIN)
// // requestHttp(URI_PLAZOLETA + 'dishes', dishes, TOKEN_OWNER)


const URI = 'mysql://user:admin123@localhost:33060/plazoletamicroservice'
// console.log(URI)
module.exports = {
  development: {
    url: URI,
    dialect: 'mysql'
  },
  production: {
    url: URI,
    dialect: 'mysql'
  }
}

const db = require('../../data/db-config')

const getAll = async () => {
  // DO YOUR MAGIC
  return await db('cars')
}

const getById = async (id) => {
  // DO YOUR MAGIC
  return await db('cars').where("id", id).first()

}

const create = async (car) => {
  // DO YOUR MAGIC
  const [id] = await db('cars').insert(car)
  const getCar = getById(id)
  return getCar
}

module.exports = {
  getAll,
  getById,
  create
}
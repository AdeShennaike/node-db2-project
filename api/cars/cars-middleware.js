const Cars = require('./cars-model')
const db = require('../../data/db-config')

const checkCarId = (req, res, next) => {
  // DO YOUR MAGIC
  const carId = Cars.getById(req.params.id)
  if (!carId) {
    next({ status: 404, message: `car with id ${carId} is not found` })
  } else {
    next()
  }
}

const checkCarPayload = (req, res, next) => {
  // DO YOUR MAGIC
  const { vin, make, model, mileage } = req.body
  if (!vin) {
    next({ status: 400, message: `vin is missing` })
  }else if(!make) {
    next({ status: 400, message: `make is missing` })
  }else if(!model) {
    next({ status: 400, message: `model is missing` })
  }else if(!mileage) {
    next({ status: 400, message: `mileage is missing` })
  } else {
    next()
  }
}

const checkVinNumberValid = (req, res, next) => {
  // DO YOUR MAGIC
  if(req.body.vin.length !== 17){
    next({ status: 400, message: "vin <vin number> is invalid" })
  }else {
    next()
  }
}

const checkVinNumberUnique = async (req, res, next) => {
  // DO YOUR MAGIC
  try{
    const exist = await db('cars').where("vin", req.body.vin).first()
  if (exist) {
    next({ status: 400, message: `vin ${req.body.vin} already exists` })
  } else {
    next()
  }
  }catch(err){
    next(err)
  }
}

module.exports = {
  checkCarId,
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique
}

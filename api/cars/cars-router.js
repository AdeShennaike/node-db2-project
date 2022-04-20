// DO YOUR MAGIC
const router = require('express').Router();
const Cars = require('./cars-model')
const { checkCarId, checkCarPayload, checkVinNumberValid, checkVinNumberUnique} = require('./cars-middleware')

router.get('/', async (req,res,next) => {
    try{
        const getCars = await Cars.getAll()
        res.status(200).json(getCars)
    }
    catch(err){
        next(err)
    }
})

router.get('/:id', checkCarId, async(req, res, next) => {
    try{
      const getCar = await Cars.getById(req.params.id)
      res.json(getCar)
    }
    catch(err){
        next(err)
    }
})

router.post('/', checkCarPayload, checkVinNumberUnique, checkVinNumberValid,  async(req, res, next) => {
    try{
       const newCar = await Cars.create(req.body)
        res.status(201).json(newCar)
    }
    catch(err){
        next(err)
    }
})

router.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        message: err.message || 'uh oh! looks like something went wrong'
    })
})

module.exports = router
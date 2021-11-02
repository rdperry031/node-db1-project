const router = require('express').Router()
const md = require('./accounts-middleware')
const Account = require('./accounts-model')


router.get('/',  async (req, res, next) => {
  
  try{
    const accounts = await Account.getAll()
    res.status(200).json(accounts)
  }catch(err){
    next(err)
  }
})

router.get('/:id', md.checkAccountId, async (req, res, next) => {
  res.status(200).json(req.account) 
})

// router.post('/', (req, res, next) => {
  
// })

// router.put('/:id', (req, res, next) => {
  
// });

// router.delete('/:id', (req, res, next) => {
  
// })

// router.use((err, req, res, next) => { 
  
// }) 

router.use(( err, req, res, next ) =>{
  res.status(err.status || 500).json({
    message: err.message,
  })
})

module.exports = router;

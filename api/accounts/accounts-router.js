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

router.post('/', md.checkAccountPayload, md.checkAccountNameUnique, (req, res, next) => {
  Account.create({ name: req.body.name.trim(), budget: req.body.budget})
    .then(account => res.status(201).json(account))
    .catch(next);
})

router.use(( err, req, res, next ) =>{
  res.status(err.status || 500).json({
    message: err.message,
  })
})

module.exports = router;

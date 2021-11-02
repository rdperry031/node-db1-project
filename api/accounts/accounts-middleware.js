const Account = require('./accounts-model')

exports.checkAccountPayload = async(req, res, next) => {
  try{
    const { name, budget } = req.body
    if( !name || budget === undefined){
      next({ status: 400, message: 'Name and budget are required' })
    }else if(typeof name !== 'string'){
      next({ status: 400, message: 'name must be a string'})
    }else if (name.trim().length < 3 || name.trim().length> 100){
      next({ status: 400, message: 'name must be between 3 and 100'})
    }else if(typeof budget !== 'number' || isNaN(budget)){
      next({ status:400, message: 'must be a number'})
    }else if(budget < 0 || budget > 1000000){
      next({ status:400, message: 'budget is too large or too small'})
    }else{
      next()
    }
  }catch(err){
    next(err)
  }
}

exports.checkAccountNameUnique = async(req, res, next) => {
  try{
    const accounts = await Account.getAll()
    if(accounts.find( account => account.name === req.body.name.trim())){
      next({ status: 400, message: 'Name is taken'})
    }else{
      next()
    }
  }catch(err){
    next(err)
  }
}


exports.checkAccountId = async(req, res, next) => {
  try{
    const account = await Account.getById(req.params.id)
    if(!account){
      next({ status: 404, message: 'Account not found'})
    }else{
      req.account = account
      next()
    }
  }catch(err){
    next(err)
  }
 }

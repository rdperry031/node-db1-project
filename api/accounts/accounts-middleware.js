const { getById, getAll } = require("./accounts-model")
const Account = require('./accounts-model')

 const yup = require('yup')

//  const accountSchema = yup.object().shape({
//    name: yup
//     .string()
//     .required()
//     .trim(),
//    budget: yup
//    .number()
//    .positive() 
//    .required()
//  })


exports.checkAccountPayload = async(req, res, next) => {
  // DO YOUR MAGIC
  // try{
  //   const validated = accountSchema.validate(
  //     req.body, { strict: true, stripUnknown: true }
  //   )
  //   req.body = validated
  //   next()
  // }catch(err){
  //   next(err)
  // }
}

exports.checkAccountNameUnique = async(req, res, next) => {
  // DO YOUR MAGIC
  // try{
  //   const accounts = await getAll()
  //   if(accounts.find( account => account.name === req.body.name.trim())){
  //     next({ status: 400, message: 'Name already exists'})
  //   }else{
  //     next()
  //   }
  // }catch(err){
  //   next(err)
  // }
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

const db = require('../../data/db-config');


const getAll = () => {
return db('accounts')
}

const getById = id => { 
 return db('accounts').where('id', id).first()
}

const create = async account => {
  let [id] = await db('accounts').insert(account)
  let newAccount = await getById(id)
  return newAccount
}

const updateById = async(id, account) => {
 await db('accounts').where('id', id).update(account)
 return getById(id)
}

const deleteById = id => {
 
  const query = db('accounts').del().where('id', id)
  return query
}

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
}
         
const db = require('../../data/db-config');


const getAll = () => {
  // DO YOUR MAGIC
return db('accounts')
}

const getById = id => {
  // DO YOUR MAGIC
 return db('accounts').where('id', id).first()
}

const create = account => {
  // DO YOUR MAGIC
  let [id] = db('accounts').insert(account)
  let newAccount = getById(id)
  return newAccount
}

const updateById = (id, account) => {
  // DO YOUR MAGIC
  db('accounts').update(account).where('id', id)
  return getById(id)
}

const deleteById = id => {
  // DO YOUR MAGIC
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

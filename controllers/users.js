const { request, response } = require('express');

const usersGet = ( req = request, res = response ) => {

  const { q, name, page = '1', limit = '5' } = req.query

  res.json({
    msg: 'Api |-> get',
    q,
    name,
    page,
    limit
  });
}
const usersPut = ( req, res = response ) => {

  const { id } = req.params

  res.json({
    msg: 'Api |-> put',
    id
  });
}
const usersPost = ( req, res = response ) => {
  const { name, age } = req.body;

  res.json({
    msg: 'Api |-> post',
    name,
    age
  });
}
const usersPatch = ( req, res = response ) => {
  res.json({
    msg: 'Api |-> patch'
  });
}
const usersDelete = ( req, res = response ) => {
  res.json({
    msg: 'Api |-> delete'
  });
}

module.exports = {
  usersGet,
  usersPut,
  usersPost,
  usersPatch,
  usersDelete
}
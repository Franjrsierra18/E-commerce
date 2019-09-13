var express = require('express');
var router = express.Router();
const ProductModel = require('../models/Product');

/* GET users listing. */
router.get('/', function(req, res, next) {
  ProductModel.find({})
    .then(products=>res.send(products))
    .catch(err=>res.status(500).send(error));
});
router.get('/:id', function(req, res, next) {
  ProductModel.find({_id: req.params.id})
    .then(product=>res.send(product))
    .catch(err=>res.status(500).send(error));
});
router.post('/',(req,res)=>{
  const product = new ProductModel(req.body).save()
    .then(product=>res.status(201).send(product))
    .catch(err=>res.status(500).send(error));
})
router.patch('/:id',(req,res)=>{
  ProductModel.findByIdAndUpdate(req.params.id, req.body, {new:true})
    .then(product=>res.status(200).send(product))
    .catch(err=>res.status(500).send(error));
})
router.delete('/:id',(req,res)=>{
  ProductModel.findByIdAndDelete(req.params.id)
    .then(product=>res.send(product))
    .catch(err=>res.status(500).send(error));
})


module.exports = router;

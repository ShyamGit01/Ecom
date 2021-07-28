var express = require('express');
var router = express.Router();
const {database} = require('../config/helper');

/* GET users listing. */
router.get('/', function(req, res, next) {
  var page = (req.query.page != undefined && req.query.page != 0) ? req.query.page : 1;
  const limit = (req.query.limit != undefined && req.query.limit != 0) ? req.query.limit : 10;

  let startvalue;
  let endvalue;

    if(page > 0){
        startvalue = (page * limit) - limit;
        endvalue = page * limit;
    } else {
        startvalue = 0;
        endvalue = 10;
    }

    database.table('products as p')
    .join([{
        table: 'categories as c',
        on: 'c.id  = p.cat_id'
    }])
    .withFields(['c.title as catagory','p.title as name','p.price','p.quantity','p.image'])
    .slice(startvalue, endvalue)
    .sort({id: .1})
    .getAll()
    .then(prods => {
        if(prods.length > 0) {
            res.status(200).json({
                count: prods.length,
                products: prods
            });
        } else {
            res.status(400).json({
                message: "no product found"
            })
        }
    }).catch(err => console.log(err))
});

module.exports = router;

var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/bulk', function(req, res, next) {
  try{
    var data = req.body;
    console.log(data);
    var final_count = Object.keys(data).length;
    var count = 0;
    while(count <= final_count){
      console.log(data[count].product_Id);
      count++;
    }
   
  } catch(error){
    res.status(400).json({
      status: 0,
      message: "bulk initiating error"
    });
  }
});

module.exports = router;

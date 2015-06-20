var express = require('express');
var router = express.Router();
var fs=require('fs');
//var bodyParser=require('body-parser');
//objects={};
var contacts=[];
var num=-1;
var index;
/* GET contacts */
router.get('/:id', function(req, res, next) {

     console.log(req.params);
     res.json(contacts[+(req.params.id)]);
     //res.send(req.params.id);
});
//router.use(bodyParser.json());
//router.use(bodyParser.urlencoded({extended:true}));
router.post('/messages/:id', function(req, res, next) {
  console.log("in post searching for body");
  console.log(req.body);
  contacts[parseInt(req.params.id)].message=req.body.message;
  console.log(contacts[(req.params.id)]);
  res.json(contacts[parseInt(req.params.id)]);
});
router.post('/', function(req, res, next) {
   num=num+1;

   contacts.push(req.body);
  console.log(req.body);
  console.log(num);
  var string=JSON.stringify(req.body);
  fs.writeFile("C:\\dist\\spec\\tests\\data\\" + num + "-Contact.json", string, function (err) {
        if (err) throw err;
        console.log('It\'s saved!');
  });
  res.json(num);
});
router.put('/:id', function(req, res, next) {
  var ID=parseInt(req.params.id);
  //console.log("id=");
  //console.log(ID);
   var obj1=contacts[+(req.params.id)];//.firstName=req.body.id
   var obj2=req.body;
   for(var i in obj2)
   	obj1[i]=obj2[i];
  // res.json(contacts[+(req.params.id)]); //.firstName
   var string=JSON.stringify(obj1);
  fs.writeFile("C:\\dist\\spec\\tests\\data\\" + ID + "-Contact.json", string, function (err) {
        if (err) throw err;
        console.log('in put');
  });
   res.json(obj1);
   console.log(req.body);

});

router.get('/messages/:id',function(req,res,next){
  console.log(req.params);
     res.json(contacts[+(req.params.id)]);
});
module.exports = router;

const express = require('express')
const router = express.Router()
//const path = require("path")
router.get('/', function(req, res) {
  console.log(req.session.data)
  res.render(__dirname + '/views/index.html');
});

router.get('/name_your_ENS', function(req, res) {
  console.log(req.session.data)
  res.render(__dirname + '/views/name_your_ENS.html');
});

router.get('/choose_carrier', function(req, res) {
  console.log(req.session.data)
  res.render(__dirname + '/views/choose_carrier.html');
});

router.get('/define_weight', function(req, res) {
  console.log(req.session.data)
  res.render(__dirname + '/views/define_weight.html');
});

router.get('/item_commerical_reference_number', function(req, res) {
  console.log(req.session.data)
  res.render(__dirname + '/views/item_commerical_reference_number.html');
});

router.get('/item_provide_crn', function(req, res) {
  console.log(req.session.data)
  res.render(__dirname + '/views/item_provide_crn.html');
});

router.get('/item_add_doc', function(req, res) {
  console.log(req.session.data)
  res.render(__dirname + '/views/item_add_doc.html');
});

router.get('/item_what_doc_type', function(req, res) {
  console.log(req.session.data)
  res.render(__dirname + '/views/item_what_doc_type');
});

router.get('/item_dangerous_goods', function(req, res) {
  console.log(req.session.data)
  res.render(__dirname + '/views/item_dangerous_goods');
});

router.get('/item_what_dangerous_goods', function(req, res) {
  console.log(req.session.data)
  res.render(__dirname + '/views/item_what_dangerous_goods');
});

router.get('/item_identify_consignor', function(req, res) {
  console.log(req.session.data)
  res.render(__dirname + '/views/item_identify_consignor');
});

router.get('/item_consignor_eori', function(req, res) {
  console.log(req.session.data)
  res.render(__dirname + '/views/item_consignor_eori');
});

router.get('/item_consignor_name', function(req, res) {
  console.log(req.session.data)
  res.render(__dirname + '/views/item_consignor_name');
});

router.get('/item_consignor_address', function(req, res) {
  console.log(req.session.data)
  res.render(__dirname + '/views/item_consignor_address');
});

router.get("/same_type_border_transport", function (req, res) {
  res.render(__dirname + "/views/same_type_border_transport");
});

/* router.get("/transport_details", function (req, res) {
  req.session.data["is-second-mode-of-transport"] = "same_type_border_transport";
  if (req.session.data["changed-transport"] === "yes") {
    res.render(__dirname + "/views/transport_details");
  } else {
    res.render(__dirname + "/views/transport_details_mode_of_transport");
  }
}); */

router.get("/transport_contract_ref_numbers", function (req, res) {
  res.render(__dirname + "/views/transport_contract_ref_numbers");
});

router.get("/carrier_paid_options", function (req, res) {
  res.render(__dirname + "/views/carrier_paid_options");
});

router.get("/transport_details_check_your_answers", function (req, res) {
  res.render(__dirname + "/views/transport_details_check_your_answers");
});


module.exports = router



// GENERIC NEXT PAGE ELEMENT
/*router.post('*', function (req, res, next) {
    console.log(req.body);
  
    if (req.body['next-page']) {
      res.redirect(req.body['next-page']);
    } else {
      next();
    }
  });*/
  
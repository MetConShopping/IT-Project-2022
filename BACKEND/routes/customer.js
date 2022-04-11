const router = require('express').Router();
let path = require('path');
let Customer = require('../models/customer');

router.route('/add').post((req, res) => {
    const nic = req.body.nic;
    const name = req.body.name;
    const age = Number(req.body.age);
    const gender = req.body.gender;
    const address = req.body.address;
    const contactNo = Number(req.body.contactNo);
    const email = req.body.email;

    const newCustomerData = {
        nic,
        name,
        age,
        gender,
        address,
        contactNo,
        email
    }

    const newCustomer = new Customer(newCustomerData);

    newCustomer.save()
           .then(() => res.json('Customer Added'))
           .catch(err => res.status(400).json('Error: ' + err));
});

router.route("/").get((req , res)=>{ //route for display all
    
    Customer.find().then((customer)=>{
        res.json(customer);
    }).catch((err)=>{
        console.log(err);
    });

});

router.route("/update/:nic").put(async (req , res)=>{  //update data
    let cusNic = req.params.nic;
    const nic = req.body.nic;
    const name = req.body.name;
    const age = req.body.age;
    const gender = req.body.gender;
    const address = req.body.address;
    const contactNo = req.body.contactNo;
    const email = req.body.email;

    const updateCustomer = {nic, name , age , gender , address, contactNo, email};

    await Customer.findOneAndUpdate({nic:cusNic}, updateCustomer)
    .then(()=>{
        res.status(200).send({status : "Customer Updated"});
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status : "Error with updating data" , error : err.message});
    });
});

router.route("/delete/:nic").delete(async (req , res)=>{  //delete data
    let cusNic = req.params.nic;
    await Customer.findOneAndDelete({nic:cusNic})
    .then(()=>{
        res.status(200).send({status : "Customer has successfully deleted"});

    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status : "Error with deleting data" , error : err.message});
    });
});

router.route("/get/:nic").get(async (req , res)=>{  //search data
    let cusNic = req.params.nic;

    await Customer.findOne({nic:cusNic})
    .then((customer)=>{
        res.status(200).send({customer});

    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status : "Error with fetching data" , error : err.message});
    });
});

module.exports = router;
const router = require('express').Router();
const multer = require('multer');
const { v4: uuidv4 } = require('uuid');
let path = require('path');
let Supplier = require('../models/supplier');

const storage = multer.diskStorage({

    destination: function(req, file, cb) {

        cb(null, './frontend/public/images');

    },

    filename: function(req, file, cb) {  

        cb(null, uuidv4() + '-' + Date.now() + path.extname(file.originalname));

    }

});



const fileFilter = (req, file, cb) => {

    const allowedFileTypes = ['image/jpeg', 'image/jpg', 'image/png'];

    if(allowedFileTypes.includes(file.mimetype)) {

        cb(null, true);

    } else {

        cb(null, false);

    }

}



let upload = multer({ storage, fileFilter });

router.route('/add').post(upload.single('photo'), (req, res) => {
    const supid = req.body.supid;
    const fullname = req.body.fullname;
    const address = req.body.address;
    const experience = req.body.experience;
    const itempurchesed = req.body.itempurchesed;
    const photo = req.file.filename;
    

    const newSupplierData = {
        supid,
        fullname,
        address,
        experience,
        itempurchesed,
        photo
        
    }

    const newSupplier = new Supplier(newSupplierData);

    newSupplier.save()
           .then(() => res.json('Supplier Added'))
           .catch(err => res.status(400).json('Error: ' + err));
});

router.route("/").get((req , res)=>{ //route for display all
    
    Supplier.find().then((supplier)=>{
        res.json(supplier);
    }).catch((err)=>{
        console.log(err);
    });

});

router.route("/update/:supid").put(async (req , res)=>{  //update data
    let suppid = req.params.supid;
    const supid = req.body.supid;
    const fullname = req.body.fullname;
    const address = req.body.address;
    const experience = req.body.experience;
    const itempurchesed = req.body.itempurchesed;
    const photo = req.file.filename;

    const updateSupplier = {supid, fullname , address, experience , itempurchesed , photo};

    await Supplier.findOneAndUpdate({supid:suppid}, updateSupplier)
    .then(()=>{
        res.status(200).send({status : "Supplier Updated"});
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status : "Error with updating data" , error : err.message});
    });
});

router.route("/delete/:supid").delete(async (req , res)=>{  //delete data
    let suppid = req.params.supid;
    await Supplier.findOneAndDelete({supid:suppid})
    .then(()=>{
        res.status(200).send({status : "Supplier has successfully deleted"});

    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status : "Error with deleting data" , error : err.message});
    });
});

router.route("/get/:supid").get(async (req , res)=>{  //search data
    let suppid = req.params.supid;

    await Supplier.findOne({supid:suppid})
    .then((supplier)=>{
        res.status(200).send({supplier});

    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status : "Error with fetching data" , error : err.message});
    });
});

module.exports = router;
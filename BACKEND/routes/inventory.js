const router = require('express').Router();
const multer = require('multer');
const { v4: uuidv4 } = require('uuid');
let path = require('path');
let Inventory = require('../models/inventory');

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
    const itemId = req.body.itemId;
    const itemName = req.body.itemName;
    const stock = req.body.stock;
    const stockIn = req.body.stockIn;
    const stockOut = req.body.stockOut;
    const unitPrice = Number(req.body.unitPrice);
    const photo = req.file.filename;

    const newInventoryData = {
        itemId,
        itemName,
        stock,
        stockIn,
        photo,
        stockOut, 
        unitPrice
    }

    const newInventory = new Inventory(newInventoryData);

    newInventory.save()
           .then(() => res.json('Inventory Added'))
           .catch(err => res.status(400).json('Error: ' + err));
});

router.route("/").get((req , res)=>{ //route for display all
    
    Inventory.find().then((Inventorys)=>{
        res.json(Inventorys);
    }).catch((err)=>{
        console.log(err);
    });

});

router.route("/update/:id").put(upload.single('photo') , async (req , res)=>{  //update data
    let InventoryID = req.params.id;
    const itemId = req.body.itemId;
    const itemName = req.body.itemName;
    const stock = req.body.stock;
    const stockIn = req.body.stockIn;
    const stockOut = req.body.stockOut;
    const unitPrice = Number(req.body.unitPrice);
    const photo = req.file.filename;


    const updateInventory = {itemId , itemName , stock , stockIn , photo , stockOut , unitPrice};

    await Inventory.findByIdAndUpdate(InventoryID , updateInventory)
    .then(()=>{
        res.status(200).send({status : "Inventory Updated"});
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status : "Error with updating data" , error : err.message});
    });
});

router.route("/delete/:id").delete(async (req , res)=>{  //delete data
    let InventoryID = req.params.id;

    await Inventory.findByIdAndDelete(InventoryID)
    .then(()=>{
        res.status(200).send({status : "Inventory has successfully deleted"});

    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status : "Error with deleting data" , error : err.message});
    });
});

router.route("/get/:id").get(async (req , res)=>{  //search data
    let InventoryID = req.params.id; 

    await Inventory.findById(InventoryID)
    .then((Inventorys)=>{
        res.json(Inventorys);

    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status : "Error with fetching data" , error : err.message});
    });
});

module.exports = router;
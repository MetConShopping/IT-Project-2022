const router = require('express').Router();
const multer = require('multer');
const { v4: uuidv4 } = require('uuid');
let path = require('path');
let Promotion = require('../models/item');
const Item = require('../models/item');

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
    const item_Id = req.body.item_Id;
    const item_name = req.body.item_name;
    const description = req.body.description;
    const discount_Rate = Number(req.body.discount_Rate);
    const price = Number(req.body.price);
    const photo = req.file.filename;

    const newItemData = {
        item_Id,
        item_name,
        description,
        discount_Rate,
        price,
        photo
    }

    const newItem = new Item(newItemData);

    newItem.save()
           .then(() => res.json('Item Added'))
           .catch(err => res.status(400).json('Error: ' + err));
});

router.route("/").get((req , res)=>{ //route for display all
    
    Item.find().then((students)=>{
        res.json(students);
    }).catch((err)=>{
        console.log(err);
    });

});

router.route("/update/:id").put(upload.single('photo') , async (req , res)=>{  //update data
    let ItemID = req.params.id;
    const item_Id = req.body.item_Id;
    const item_name = req.body.item_name;

    const description  = req.body.description;
    const discount_Rate =Number(req.body.discount_Rate);
    const price = Number(req.body.price);
    const photo = req.file.filename;

    const updateStudent = {item_Id ,item_name , description , discount_Rate, price ,  photo};

    await Item.findByIdAndUpdate(ItemID , updateStudent)
    .then(()=>{
        res.status(200).send({status : "Item Updated"});
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status : "Error with updating data" , error : err.message});
    });
});

router.route("/delete/:id").delete(async (req , res)=>{  //delete data
    let ItemID = req.params.id;

    await Item.findByIdAndDelete(ItemID)
    .then(()=>{
        res.status(200).send({status : "Item has successfully deleted"});

    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status : "Error with deleting data" , error : err.message});
    });
});

router.route("/get/:id").get(async (req , res)=>{  //search data
    let ItemID = req.params.id; 

    await Item.findById(ItemID)
    .then((students)=>{
        res.json(students);

    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status : "Error with fetching data" , error : err.message});
    });
});

module.exports = router;
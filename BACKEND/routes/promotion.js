const router = require('express').Router();
const multer = require('multer');
const { v4: uuidv4 } = require('uuid');
let path = require('path');
let Promotion = require('../models/promotion');

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
    const item_name = req.body.item_name;
    const quantity = Number(req.body.quantity);
    const description = req.body.description;
    const discount_Rate = Number(req.body.discount_Rate);
    const prior_price = Number(req.body.prior_price);
    const present_price = Number(req.body.present_price);
    const photo = req.file.filename;

    const newPromotionData = {
        item_name,
        quantity,
        description,
        discount_Rate,
        prior_price,
        present_price,
        photo
    }

    const newPromotion = new Promotion(newPromotionData);

    newPromotion.save()
           .then(() => res.json('Promotion Added'))
           .catch(err => res.status(400).json('Error: ' + err));
});

router.route("/").get((req , res)=>{ //route for display all
    
    Promotion.find().then((students)=>{
        res.json(students);
    }).catch((err)=>{
        console.log(err);
    });

});

router.route("/update/:id").put(upload.single('photo') , async (req , res)=>{  //update data
    let PromotionID = req.params.id;
    const item_name = req.body.item_name;
    const quantity = Number(req.body.quantity);
    const description = req.body.description;
    const discount_Rate = Number(req.body.discount_Rate);
    const prior_price = Number(req.body.prior_price);
    const present_price = Number(req.body.present_price);
    const photo = req.file.filename;

    const updateStudent = {item_name , quantity , description , discount_Rate, prior_price, present_price, photo};

    await Promotion.findByIdAndUpdate(PromotionID , updateStudent)
    .then(()=>{
        res.status(200).send({status : "Promotion Updated"});
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status : "Error with updating data" , error : err.message});
    });
});

router.route("/delete/:id").delete(async (req , res)=>{  //delete data
    let PromotionID = req.params.id;

    await Promotion.findByIdAndDelete(PromotionID)
    .then(()=>{
        res.status(200).send({status : "Promotion has successfully deleted"});

    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status : "Error with deleting data" , error : err.message});
    });
});

router.route("/get/:id").get(async (req , res)=>{  //search data
    let PromotionID = req.params.id; 

    await Promotion.findById(PromotionID)
    .then((students)=>{
        res.json(students);

    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status : "Error with fetching data" , error : err.message});
    });
});

module.exports = router;
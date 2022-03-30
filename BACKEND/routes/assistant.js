const router = require('express').Router();
const multer = require('multer');
const { v4: uuidv4 } = require('uuid');
let path = require('path');
let Assistant = require('../models/assistant');

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
    const name = req.body.name;
    const age = Number(req.body.age);
    const gender = req.body.gender;
    const address = req.body.address;
    const phone = Number(req.body.phone);
    const email = req.body.email;
    const photo = req.file.filename;

    const newAssistantData = {
        name,
        age,
        gender,
        address,
        phone,
        email,
        photo
    }

    const newAssistant = new Assistant(newAssistantData);

    newAssistant.save()
           .then(() => res.json('assistant Added'))
           .catch(err => res.status(400).json('Error: ' + err));
});

router.route("/").get((req , res)=>{ //route for display all
    
    Assistant.find().then((students)=>{
        res.json(students);
    }).catch((err)=>{
        console.log(err);
    });

});

router.route("/update/:id").put(upload.single('photo') , async (req , res)=>{  //update data
    let AssistantID = req.params.id;
    const name = req.body.name;
    const age = req.body.age;
    const gender = req.body.gender;
    const address = req.body.address;
    const phone = req.body.phone;
    const email = req.body.email;
    const photo = req.file.filename;

    const updateStudent = {name , age , gender , address, phone, email, photo};

    await Assistant.findByIdAndUpdate(AssistantID , updateStudent)
    .then(()=>{
        res.status(200).send({status : "Assistant Updated"});
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status : "Error with updating data" , error : err.message});
    });
});

router.route("/delete/:id").delete(async (req , res)=>{  //delete data
    let AssistantID = req.params.id;

    await Assistant.findByIdAndDelete(AssistantID)
    .then(()=>{
        res.status(200).send({status : "Assistant has successfully deleted"});

    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status : "Error with deleting data" , error : err.message});
    });
});

router.route("/get/:id").get(async (req , res)=>{  //search data
    let AssistantID = req.params.id; 

    await Assistant.findById(AssistantID)
    .then((students)=>{
        res.status(200).send({students});

    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status : "Error with fetching data" , error : err.message});
    });
});

module.exports = router;
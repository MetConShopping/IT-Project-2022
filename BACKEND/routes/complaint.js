const router = require('express').Router();
const multer = require('multer');
const { v4: uuidv4 } = require('uuid');
let path = require('path');
let Complaint = require('../models/complaint');

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
    const complaintID = req.body.complaintID;
    const cusName = req.body.cusName;
    const date = req.body.date;
    const email = req.body.email;
    const description = req.body.description;
    const photo = req.file.filename;

    const newComplaintData = {
        complaintID,
        cusName,
        date,
        email,
        description,
        photo
    }

    const newComplaint = new Complaint(newComplaintData);

    newComplaint.save()
           .then(() => res.json('Complaint Added'))
           .catch(err => res.status(400).json('Error: ' + err));
});

router.route("/").get((req , res)=>{ //route for display all
    
    Complaint.find().then((complaint)=>{
        res.json(complaint);
    }).catch((err)=>{
        console.log(err);
    });

});

router.route("/update/:id").put(upload.single('photo') , async (req , res)=>{  //update data
    let CompID = req.params.id;
    const complaintID = req.body.complaintID;
    const cusName = req.body.cusName;
    const date = req.body.date;
    const email = req.body.email;
    const description = req.body.description;
    const photo = req.file.filename;

    const updateComplaint = {complaintID, cusName , date , email , description, photo};

    await Complaint.findByIdAndUpdate(CompID, updateComplaint)
    .then(()=>{
        res.status(200).send({status : "Complaint Updated"});
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status : "Error with updating data" , error : err.message});
    });
});

router.route("/delete/:ComID").delete(async (req , res)=>{  //delete data
    let ComID = req.params.ComID;
    await Complaint.findOneAndDelete({ComID:ComID})
    .then(()=>{
        res.status(200).send({status : "Customer has successfully deleted"});

    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status : "Error with deleting data" , error : err.message});
    });
});

router.route("/get/:id").get(async (req , res)=>{  //search data
    let ComID = req.params.ComID;

    await Complaint.findById(ComID)
    .then((complaints)=>{
        res.json(complaints);

    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status : "Error with fetching data" , error : err.message});
    });
});

module.exports = router;
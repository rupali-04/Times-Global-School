const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Student = require('../models/student');


    router.route('/').get((req, res) => {
 Student.find()
 
    .then(std => res.json(std))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Student.findById(req.params.id)
    .then(std => res.json(std))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/').post((req,res)=>{
  const stds = new Student(
        {
        
           StudentName:
            {
                FirstName: req.body.StudentName.FirstName,
                LastName:  req.body.StudentName.LastName
            },
            Gender:  req.body.Gender,
            DateOfBirth: req.body.DateOfBirth,
            DateofAdmission: req.body.DateofAdmission,
            DateOfLeaving: req.body.DateOfLeaving,
            status: req.body.status,
        Address:{
            Address_Line_1:req.body.Address.Address_Line_1,
            City:req.body.Address.City,
            State: req.body.Address.State,
            PostalCode:req.body.Address.PostalCode,
            Country:req.body.Address.Country
        },
        FathersName:req.body.FatherName,
        MothersName:req.body.MotherName,
        Email:req.body.Email,
        PhoneNumber:req.body.PhoneNumber,
        Sem:req.body.Sem,
        stdClass: req.body.stdClass,
        StudentFee: {
        Deposited: req.body. StudentFee.Deposited,
        Balance: req.body. StudentFee.Balance
    },
        StudentResult:
            {
        English:req.body. StudentResult.eng,
        Maths:req.body. StudentResult.maths,
        Science:req.body. StudentResult.sci,
        Hindi:req.body. StudentResult.hindi,
        Computer:req.body. StudentResult.computer
    }
    }
    )
    stds.save()
  
    .then(() => res.json('user added!!')
    )
});
module.exports = router;

const mongoose = require('mongoose');


/*const studentIdSchema = new mongoose.Schema({
    RegistrationNo: {
        type: String
    }
});
*/

//const StudentId = mongoose.model('StudentId', studentIdSchema);

const studentSchema = new mongoose.Schema({
    StudentName: {
        FirstName: {
            type: String,
            //
        },
        LastName: {
            type: String,
            //
        }
    },
    Gender: {
        type: String,
        //
        enum: ['Male', 'Female']
    },
    DateOfBirth: {
        type: Date,
        //
    },
    DateofAdmission: {
        type: Date,
        //
    },
    DateOfLeaving: {
        type: Date,
        //
    },
    
    status: {
        type: String,
        //
        enum: ['Active','Close']
    },
    FathersName: {
        type: String,
        //
    },
    MothersName: {
        type: String,
        //
    },
    Email: {
        type: String,
        //
    },
    PhoneNumber: {
        type: String,
        //
    },
    Address: {
        Address_Line_1: {
            type: String,
            //
        },
        City: {
            type: String,
            //
        },
        State: {
            type: String,
            //
        },
        PostalCode: {
            type: String,
            //
        },
        Country: {
            type: String,
            //
        }
    },
    Sem: {
        type: String,
        //
        enum: ['1st Semester', '2nd Semester']
    },
    stdClass: {
        type: String,
        //
         enum: ['Nur', 'Prep','one', 'two','three','four','five','six','seven','eight']
    },
    StudentFee: {
        Deposited: {
            type: Number,
          
        },
        Balance: {
            type: Number,
          
        }
    },
    
    StudentResult: {
        English: {
            type: Number,
            
        },
        Maths: {
            type: Number,
            //
        },
        Science: {
            type: Number,
            //
        },
        Hindi: {
            type: Number,
            //
        },
        Computer: {
            type: Number,
            //
        }
    }
    
});
   

//studentSchema.plugin(mongoosePaginate);

const Student = mongoose.model('Student', studentSchema);



//exports.StudentId = StudentId;
module.exports = Student;

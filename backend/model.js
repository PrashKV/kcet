var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var studentSchema = new Schema({
    name: {type:String,unique:true},
    roll_no: {},
    engineering: {},
    med: {},
    bnys: {},
    nata: {},
    agri: {},
    vet: {},
    agri_prac: {},
    vet_prac: {},
    b_pharma: {},
    pharma_d: {},
    lateral: {},
    phy: {},
    phy_cet: {},
    chem: {},
    chem_cet: {},
    math: {},
    math_cet: {},
    bio: {},
    bio_cet: {}
});

const Student = mongoose.model("Student", studentSchema);
module.exports = Student;

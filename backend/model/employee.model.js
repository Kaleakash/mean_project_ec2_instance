let mongoose = require("mongoose");
mongoose.pluralize(null);   // avoid to create collection in lower case as as well adding post fix s 
//Schema is ready 
let employeeSchema = mongoose.Schema({
    _id:Number,
    name:String,
    salary:Number
});

// Model is ready 1st parameter collection name and 2nd parameter schema
let employeeModel = mongoose.model("Employee",employeeSchema);


module.exports=employeeModel;






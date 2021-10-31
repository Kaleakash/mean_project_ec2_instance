// load the model file 
const { json } = require("express");
let employeeModel = require("../model/employee.model");

let generateId = async (req,res)=> {
            let count = await employeeModel.countDocuments();   // number of count documents. 
            return count;
}
let storeEmloyeeDetails = async (req,res)=> {
    let empId = await generateId()+1;
    let employee = req.body;            // receive data from request body
    employee._id=empId; 
    employeeModel.insertMany(employee,(err)=> {
        if(!err){
            res.json({"msg":"Record stored successfully"})
        }else {
            res.json({"msg":err.writeErrors[0].errmsg});
        }
    })
}
let getAllEmployeeDetails = (req,res)=> {
    employeeModel.find({},(err,doc)=> {
        if(!err){
            res.json(doc);
        }else {
            res.json(err);
        }
    })
}

let getEmployeeById = (req,res)=> {
    let id = eval(req.params.id);
    employeeModel.findById({_id:id},(err,result)=> {
        if(!err){
                if(result!=null){
                    res.json(result);
                }else {
                    res.json({"msg":"Record not present with id is "+id});
                }
        }else {
                res.json(err);
        }
    })
}

let updateEmployeeSalary  = (req,res)=> {
        let employee = req.body;
        employeeModel.updateOne({_id:employee._id},{$set:{salary:employee.salary}},(err,result)=> {
            if(!err){
                if(result.nModified>0 || result.n>0){
                    res.json({"msg":"Record updated successfully"})
                }else {
                    res.json({"msg":"Record not present with id is "+employee._id});   
                }
            }else {
                res.json(err);
            }
        })
}

let deleteEmployeeInfoById = (req,res)=> {
    let id = eval(req.params.id);
    employeeModel.deleteOne({_id:id},(err,result)=> {
        if(!err){
            if(result.deletedCount>0){
                    res.json({"msg":"Record deleted successfully"})
            }else {
                    res.json({"msg":"Record not present with id is "+id})
            }
        }else {
            res.send(err);
        }
    })
}

module.exports={deleteEmployeeInfoById,storeEmloyeeDetails,getAllEmployeeDetails,getEmployeeById,updateEmployeeSalary}




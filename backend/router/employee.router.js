// load the controller file 
let employeeController = require("../controller/employee.controller");
let express = require("express");
let router = express.Router();  // This reference help to check path and http method 
                                // base upon th path navigate to controller methods.
                                
router.post("/employeeStore",employeeController.storeEmloyeeDetails);
router.get("/getAllEmployeeDetails",employeeController.getAllEmployeeDetails);
router.get("/getEmployeeById/:id",employeeController.getEmployeeById);
router.put("/updateEmployeeSalary",employeeController.updateEmployeeSalary);
router.delete("/deleteEmployeeById/:id",employeeController.deleteEmployeeInfoById);
module.exports=router;
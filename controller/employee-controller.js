const Employee = require("../models/Employee.js");

exports.createEmployee = async (req, res) => {
  try {
    const model = new Employee({
      name: req.body.name,
      surname: req.body.surname,
    });
    const log = await model.save();

    res.status(201).json({
      message: "Employee created successfully",
      employee: model,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to create employee",
      error: error.message,
    });
  }
};

exports.updateEmployee = async(req, res) => {
  Employee.updateOne({_id:req?.body?.id}, { $set: req.body.data }).then((result)=>{
    res.status(200).json({
      message:'success'
    })
  }).catch((error)=>{
    res.status(500).json({
      message:error
    })
  })
};

exports.getEmployee = async(req, res) => {
  try {
    const result = await Employee.aggregate([
      {
        $match: {},
      },
    ]);

    res.status(200).json({
      data: result,
      message: 'Success',
    });
  } catch (error) {
    res.status(500).json({
      message:'error cause by ' + error
    })
  }

};

exports.deleteEmployee = (req, res) => {};

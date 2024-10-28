const Employee =require('../models/Employee.js')

exports.createEmployee = async (req, res) => {
  try {
    const model = new Employee({
      name: req.body.name,
      surname: req.body.surname,
    });
    console.log("model before ", model);

    const log = await model.save();
    console.log("log ", log);

    res.status(201).json({
      message: "Employee created successfully",
      employee: model,
    });
  } catch (error) {
    console.error("Error saving employee:", error);
    res.status(500).json({
      message: "Failed to create employee",
      error: error.message,
    });
  }
};

exports.updateEmployee = (req, res) => {
};

exports.getEmployee = (req, res) => {
  console.log("Employee.find({}) ",Employee.find({}));
  res.json()
};

exports.deleteEmployee = (req, res) => {};

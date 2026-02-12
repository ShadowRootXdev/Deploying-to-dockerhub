import Employee from "../Model/Employees.js";

export const Employees = async (req, res) => {
  const { fullNames, position, salary } = req.body;

  if (!fullNames || !position || !salary) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const existingEmployee = await Employee.findOne({ fullNames });
  if (existingEmployee) {
    return res
      .status(400)
      .json({ message: "Employee with this name already exists" });
  }

  try {
    const employee = await Employee.create({
      fullNames: fullNames,
      position: position,
      salary: salary,
    });

    await employee.save();

    res
      .status(201)
      .json({ message: "Employee created successfully", employee });
  } catch (error) {
    console.error("Error creating employee:", error);
    res.status(500).json({ message: "Server error" });
  }
};

export const getEmplyees = async (req, res) => {
  const { id } = req.params;
  const employee = await Employee.findById(id, { _id: 0, __v: 0 });

  if (!employee) {
    return res.status(404).json({ message: "Employee not found" });
  }

  res
    .status(200)
    .json({ message: "Employee retrieved successfully   ", employee });
};

export const getAllEmployees = async (req, res) => {
  try {
    const employees = await Employee.find({}, { _id: 0, __v: 0 });
    res
      .status(200)
      .json({ message: "Employees retrieved successfully", employees });
  } catch (error) {
    console.error("Error fetching employees:", error);
    res.status(500).json({ message: "Server error" });
  }
};

export const updateEmployee = async (req, res) => {
  const { id } = req.params;
  const { fullNames, position, salary } = req.body;

  try {
    const employee = await Employee.findByIdAndUpdate(
      id,
      { fullNames, position, salary },
      { new: true, runValidators: true },
    );
    if (!employee) {
      return res.status(404).json({ message: "Employee not found" });
    }
    res
      .status(200)
      .json({ message: "Employee updated successfully", employee });
  } catch (error) {
    console.error("Error updating employee:", error);
    res.status(500).json({ message: "Server error" });
  }
};

export const deleteEmployee = async (req, res) => {
  const { id } = req.params;

  const employee = await Employee.findByIdAndDelete(id);

  if (!employee) {
    return res.status(404).json({ message: "Employee not found" });
  }
  res.status(200).json({ message: "Employee deleted successfully" });
};

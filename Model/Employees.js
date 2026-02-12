import mongoose from "mongoose";

const EmployeeSchema = new mongoose.Schema({
  fullNames: {
    type: String,
    required: [true, "Full name is required"],
  },
  position: {
    type: String,
    required: [true, "Position is required"],
  },
  salary: {
    type: Number,
    required: [true, "Salary is required"],
  },
});

const Employee = mongoose.model("Employee", EmployeeSchema, "task");

export default Employee;

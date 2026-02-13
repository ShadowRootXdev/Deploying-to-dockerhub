import mongoose from "mongoose";

const EmployeeSchema = new mongoose.Schema({
  fullNames: {
    type: String,
    required: [true, "Full name "],
  },
  position: {
    type: String,
    required: [true, "Position "],
  },
  salary: {
    type: Number,
    required: [true, "Salary "],
  },
});

const Employee = mongoose.model("Employee", EmployeeSchema, "task");

export default Employee;

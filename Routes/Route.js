import express from "express";
import { Employees , getEmplyees, getAllEmployees, updateEmployee, deleteEmployee} from "../Controller/Controller.js";


const router = express.Router();

router.post('/employees', Employees);
router.get('/employees', getAllEmployees);
router.get('/employees/:id', getEmplyees);
router.put('/employees/:id', updateEmployee);
router.delete('/employees/:id', deleteEmployee);

export default router;
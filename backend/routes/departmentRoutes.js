import { Router } from "express";
import { createDepartment, getAllDepartment, getDepartment } from "../controllers/departmentController.js";

const departmentRoutes = Router()


departmentRoutes.post('/', createDepartment)
departmentRoutes.get('/', getAllDepartment)
departmentRoutes.get('/:id', getDepartment)

export default departmentRoutes
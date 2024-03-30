import { Router } from "express";
import doctorRoutes from "./doctorRoutes.js";
import departmentRoutes from "./departmentRoutes.js";


const router = Router()

router.use('/api/v1/doctor', doctorRoutes)
router.use('/api/v1/departmet', departmentRoutes)

export default router
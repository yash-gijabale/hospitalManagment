import prisma from "../config/DB.js";


export const createDoctor = async (req, res) =>{
    const doctorData = req.body

    const newDoctor = await prisma.doctor.create({
        data: doctorData
    })

    res.status(200).json({
        success: true,
        data: newDoctor
    })
}
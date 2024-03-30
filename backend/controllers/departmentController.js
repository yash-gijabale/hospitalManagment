import prisma from "../config/DB.js";
import catchAsyncError from "../middleware/catchAsyncError.js";
import ErrorHandler from "../utils.js/ErrorHandler.js";
import Query from "../common/Query.js";


const query = new Query()

export const createDepartment = catchAsyncError(async (req, res, next) => {
    const dataD = req.body

    // return next(new ErrorHandler('tehs', 400))
    const department = await prisma.department.create({
        data: dataD
    })

    res.status(200).json({
        success: true,
        data: department
    })
})

export const getAllDepartment = catchAsyncError(async (req, res) => {
    
    const qPrams = {
        select: {
            id:true,
            name: true
        }
    }
    const departments = await query.find('Department', qPrams)

    res.status(200).json({
        success: true,
        data: departments
    })
})

export const getDepartment = catchAsyncError(async (req, res, next) => {
    const id = Number(req.params.id)
    const department = await query.findById('Department', {id:id})

    res.status(200).json({
        success: true,
        data: department
    })
})
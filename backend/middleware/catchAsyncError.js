const catchAsyncError = (theFunc) => (req, res, next) => {
    Promise.resolve(theFunc(req, res, next))
    .catch(err =>{
        res.status(404).json({
            success: false,
            error: err.message
        })
    })
}

export default catchAsyncError
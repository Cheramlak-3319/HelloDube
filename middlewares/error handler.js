const multer = require("multer");

//not found
const notFound = async(req, res, next) => {
    const error = new Error(`not found:${req.orginalUrl}`);
    res.status(404);
    next(error)
}


const errorHandler = (err, req, res, next) => {
    const statuscode = res.statusCode = 200 ? 500 : res.statusCode;
    res.status(statuscode)
    res.json({
        message: err.message,
        stack: err.stack,
    })

}

const uploadingError = async(err, req, res, next) => {
    if (err instanceof multer.MulterError) {
        res.status(500).json({
            message: err.message
        })
    }
}

module.exports = { notFound, errorHandler, uploadingError }
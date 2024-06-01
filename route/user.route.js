const express = require('express')
const router = express.Router()
const multer = require('multer')
const userController = require('../controller/controller')


const storage = multer.diskStorage({
    destination: '../public/images',
    filename: (req, file, cb) => {
        console.log(file);
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})


const upload = multer({
    storage: storage
})

router.post('/create-user', userController.createProduct);
router.post('/upload', upload.single('profile'), userController.uploadUserFile);

module.exports = router
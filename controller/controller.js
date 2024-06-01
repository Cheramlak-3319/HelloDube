const multer = require('multer');
const { GridFsStorage } = require('multer-gridfs-storage');
const path = require('path');
const { log } = require('console');
const fileUpload = require('express-fileupload');


const User = require('../model/user.model')


const createProduct = async(req, res) => {
    const { memberId } = req.body;
    try {
        console.log(req.body);
        const newCustomer = await User.create(req.body)
        await newCustomer.save();
        res.json({ newCustomer: newCustomer })
    } catch (error) {}
}



const uploadUserFile = async(req, res) => {
    const { memberId } = req.body;
    try {
        console.log('Request body:', req.body);
        console.log('File:', req.file)
        const user = await User.findById(memberId);
        console.log(user);
        if (user) {
            res.json({
                message: 'success',
                filename: `${req.file.filename}`
            })
        } else {
            res.status(404).json({
                message: 'user not found'
            })
        }

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = { createProduct, uploadUserFile }
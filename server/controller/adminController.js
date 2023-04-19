const Admin = require('../models/adminModel')
const mongoose = require('mongoose')

//Get all Admin approves
const getAdminJobs = async (req, res) => {
    const admin = await Admin.find({}).sort({createdAt: -1})

    res.status(200).json(admin)
}

//Get a single Admin approve
const getAdminJob = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No Such Admin Job'})
    }

    const admin = await Admin.findById(id)

    if(!admin) {
        return res.status(404).json({error: "No such approve"})
    }

    res.status(200).json(admin)
} 

//Create a new Admin approve
const createAdminJob = async (req, res) => {
    const {organizationName,regNo,address,telephoneNo,email,password,confirmPw} = req.body

    let emptyFields = []

    if(!organizationName) {
        emptyFields.push('organizationName')
    }
    if(!regNo) {
        emptyFields.push('regNo')
    }
    if(!address) {
        emptyFields.push('address')
    }
    if(!telephoneNo) {
        emptyFields.push('telephoneNo')
    }
    if(!email) {
        emptyFields.push('email')
    }
    if(!password) {
        emptyFields.push('password')
    }
    if(!confirmPw) {
        emptyFields.push('confirmPw')
    }
    if(emptyFields.length > 0) {
        return res.status(400).json({ error: 'Please fill in all the fields', emptyFields})
    }

    //add doc to db
    try {
        const admin = await Admin.create({organizationName,regNo,address,telephoneNo,email,password,confirmPw})
        res.status(200).json(admin)
    } catch(error){
        res.status(400).json({error: error.message})
    }
}

//Delete a  Admin approve
const deleteAdminJob = async (req,res) =>{
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No Such Admin Job'})
    }

    const admin = await Admin.findOneAndDelete({_id: id})

    if (!admin){
        return res.status(400).json({error:'No Such Admin Job'})
    }

    res.status(200).json(admin)

}

//Update a Admin approve
const updateAdminJob = async (req,res) => {

    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No Such Admin Job'})
    }
    const admin = await Admin.findByIdAndUpdate({_id: id},{
        ...req.body
    })

    if (!admin){
        return res.status(400).json({error:'No Such Admin Job'})
    }

    res.status(200).json(admin)

}


module.exports = {
    getAdminJob,
    getAdminJobs,
    createAdminJob,
    deleteAdminJob,
    updateAdminJob
}
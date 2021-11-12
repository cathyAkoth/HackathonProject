// Iniialisation and Imporatation.
const express = require('express');
const multer = require('multer');
const router = express.Router();
const Employee = require('../models/Employee')

//Get and show the createEmployee.pug file
router.get('/employeeReg', (req, res) => {
    if (req.session) { 
    res.render('employeeReg')
    }
})

// Image upload.
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images');
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
    });
    var upload = multer({ storage: storage })

    var upload = multer({ storage: storage })

    
    // Save data from the employeeReg pug file.
router.post('/employeeReg', upload.single('image'), async (req, res) => {
    if (req.session) {
    try {
        const employee = new Employee(req.body);
        employee.image = req.file.path;
        await employee.save()
        res.redirect('/employee')
    } catch (err) {
        console.log(err);
        res.send('Sorry! Something went wrong.');
    }
}
})

    
    // Show Employee data from database on the employeelist pug file.
router.get('/', async (req, res) => {
    try {
        // Find all the data in the Employee collection.
        let employeeRegDetails = await Employee.find();
        if (req.query.role) {
           employeeRegDetails = await Employee.find({ role: req.query.role })
          }
        res.render('employeelist', { users: employeeRegDetails, title: 'Employee List' })
    } catch (err) {
        res.send('Failed to retrive employee details');
    }
})

// Obtaining data to be updated.
router.get('/update/:id', async (req, res) => {
    try {
        const updateEmp = await Employee.findOne({ _id: req.params.id })
        res.render('updateEmployee', { user: updateEmp })
    } catch (err) {
        res.status(400).send("Unable to find item in the database");
    }
})

// Route to save the updated data.
router.post('/update', async (req, res) => {
    try {
        await Employee.findOneAndUpdate({_id:req.query.id}, req.body)
        res.redirect('/employee');
    } catch (err) {
        res.status(404).send("Unable to update item in the database");
    }
})

//Delete an employee record from the database.

router.post('/delete', async (req, res) => {
    try {
        await Employee.deleteOne({ _id: req.body.id })
        res.redirect('back')
    } catch (err) {
        res.status(400).send("Unable to delete item in the database");
    }
})


module.exports = router;
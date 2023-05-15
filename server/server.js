require('dotenv').config() 

const express = require('express')

const mongoose = require('mongoose')

const cors = require('cors')

// //routes
// const workoutRoutes = require('./routes/workouts')
// const volunteerRoutes = require('./routes/volunteerRoutes')
const adminRoutes = require('./routes/adminRoutes')
const adminOrgRoutes = require('./routes/adminOrgRoutes')

//express app
const app = express();

// //middleware
app.use(express.json())

app.use(cors())

app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next()
})


// //routes
// app.use('/api/workouts',workoutRoutes)
// app.use('/volunteer/delivery-jobs',volunteerRoutes)
app.use('/admin/approves',adminRoutes)
app.use('/adminOrg/accepts',adminOrgRoutes)

//Connect to db
mongoose.connect(process.env.MONGO_URI1)
    .then(()=>{
        //listen for requests 
        app.listen(process.env.PORT1, () => {
            console.log('connected to DB & listening on port', process.env.PORT1 )
        })
    })
    .catch((error) => {
        console.log(error)
    })

// process.env
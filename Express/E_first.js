const exp=require("express")
const app=exp()
const PORT=3001
//static routes 
app.get('/ABC',(req,res)=>{
    res.send("<h1>details of abc </h1>")
})

app.get('/XYZ',(req,res)=>{
    res.send("<h1>details of xyz </h1>")
})


app.get('/MCA',(req,res)=>{
    res.send("<h1>details of mca </h1>")
})

// app.get('/BCA',(req,res)=>{
//     res.send("<h1>details of bca </h1>")
// })


const mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/MCA").then(()=>{
    console.log("Mongodb connected successfully");
}).catch((err)=>{
    console.log("Mongodb connection fail");
})

const cors=require("cors");
console.log("app listen at port 5000");
app.use(exp.json());
app.use(cors())
app.get("/",(req,res)=>{
    return res.send("app is working");
})

app.listen(PORT,(error)=>{
    if(!error){
        console.log("Server is listening "+ PORT)
    }
    else{
        console.log("Server is not listening"+ error)
    }
    app.get("/",(req,res)=>{
        res.send("Server is running")
    });
})

//create collecn in db
const userSchema = new mongoose.Schema({
    name: String,
    mobileno: String,
    email: String,
    address: String,
    university_name: String,
    stream: String,
    score_in_last_program: Number,
    course: String,
    section: String,
    year: Number,
});





//to create collecn
const User=mongoose.model('MCA',userSchema);
User.createCollection().then(function(collection)
{
    console.log("connection is created ");
    console.log(User);
})



//fetch document from collection & creating model from fetched data
const Student=mongoose.model('MCA',userSchema);
//extract data of bca students
Student.find({name:"Riya"})
// student.find()
.then(data=>{
    console.log("details of:");
    console.log(data);
    var M_data=Object.entries(data)
    app.get('/MCA',(req,res)=>{
          res.send("MCA STUDENTS "+M_data);
    })
}).catch(error=>{console.log(error)})




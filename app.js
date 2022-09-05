const express = require('express');
const bodyParser = require('body-parser');
const date = require(__dirname + "/date.js");

const app = express();
app.use(express.static("public"))
var items = [];
var workitems = [];
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}))
app.get("/", function (req, res) {
    let dayy = date();
    res.render("index", { titleName: dayy ,newitem:items})
})

app.post("/",function(req,res){
    // console.log(req.body)
    let item = req.body.newItem;
    console.log(req.body.list);
    if(req.body.list==="Work"){
        workitems.push(item);
        res.redirect("/work")
    }else{
        items.push(item);
        res.redirect("/");
    }
    // res.send(item);
    // res.render("list",{newitem:item})
})

app.get("/work",function(req,res){
    res.render("index",{titleName:"Work Items", newitem:workitems })
})

app.get("/about",function(req,res){
    res.render("about")
})
app.listen(process.env.PORT  || 3000, function () {
    console.log("Server is running on port 3000");
})



// console.log(date);
    // const day = date.getDay();
    // var currentday = '';
    // if(day == 6 || day == 0){
    //     currentday = "weekend";
    // }else{
    //     currentday = "weekday";
    // }
    // switch (day) {
    //     case 0:
    //         currentday = "Sunday"
    //         break;
    //     case 1:
    //         currentday = "Monday"
    //         break;
    //     case 2:
    //         currentday = "tuesday"
    //         break;
    //     case 3:
    //         currentday = "wednesday"
    //         break;
    //     case 4:
    //         currentday = "thursday"
    //         break;
    //     case 5:
    //         currentday = "friday"
    //         break;
    //     case 6:
    //         currentday = "Saturday"
    //         break;

    //     default:
    //         break;
    // }
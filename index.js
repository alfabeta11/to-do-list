import express from "express";
import bodyParser from "body-parser";


const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));



// Tasks
let myTasks = [];
let personalList = [];
let workList = [];

// Adding & classifying the tasks;
function addTask(req, res, next) {
    let newTask = {
        name: req.body.taskName,
        desc: req.body.desc,
        list: req.body.taskList
    }
    myTasks.push(newTask);
    if (newTask.list == "task") {
        personalList.push(newTask);
    } else {
        workList.push(newTask);
    }
    next();
}

// Data
let data = {
    day: giveDate(),
    personalTasks: personalList,
    workTasks: workList,
    tasks: myTasks
}

app.get("/", (req, res) => {
    res.render("index.ejs", data);
})

app.get("/addtask", (req, res) => {
    res.render("addtask.ejs");
})

app.post("/newtask", addTask, (req, res) => {
    
    res.render("index.ejs", data);
})

app.listen(port, () => {
    console.log("Server " + port + " up and running!");
})

function giveDate() {
    // now
    let date = new Date();

    // Results below assume UTC timezone - your results may vary
    let options = {
        year: "numeric",
        month: "long",
        day: "numeric",
    };
    // Specify default date formatting for language (locale)
    return new Intl.DateTimeFormat("en-US", options).format(date);
}


const router = require("express").Router();
let Todo = require("../models/Consultations.model");

// Read all
router.route("/").get((req, res) => {
    Todo.find()
        .then((todos) => res.json(todos))
        .catch((err) => res.status(400).json("Error: " + err));
});

// Create
router.route("/add").post((req, res) => {
    const ConsultantImg = req.body.ConsultantImg;
    const ConsultantName = req.body.ConsultantName;
    const ConsultantDescription = req.body.ConsultantDescription;
    const ConsultantContactLine = req.body.ConsultantContactLine;
    const ConsultantSchedule = [];

    req.body.ConsultantSchedule.forEach(function(el, index) {
        ConsultantSchedule.push(el);
    });

    const newTodo = new Todo({
        ConsultantImg,
        ConsultantName,
        ConsultantDescription,
        ConsultantContactLine,
        ConsultantSchedule,
    });

    newTodo
        .save()
        .then(() => res.json("Todo added!"))
        .catch((err) => res.status(400).json("Error: " + err));
});

// Read one
router.route("/:id").get((req, res) => {
    Todo.findById(req.params.id)
        .then((todo) => res.json(todo))
        .catch((err) => res.status(400).json("Error: " + err));
});

// Read by ConsultantName
router.route("/Consultations/:ConsultantName").get((req, res) => {
    Todo.find({ ConsultantName: req.params.ConsultantName })
        .then((todos) => res.json(todos))
        .catch((err) => res.status(400).json("Error: " + err));
});

// Delete
router.route("/:id").delete((req, res) => {
    Todo.findByIdAndDelete(req.params.id)
        .then(() => res.json("Todo deleted."))
        .catch((err) => res.status(400).json("Error: " + err));
});

// Update
router.route("/update/:id").post((req, res) => {
    Todo.findById(req.params.id)
        .then((todo) => {
            todo.ConsultantImg = req.body.ConsultantImg;
            todo.ConsultantName = req.body.ConsultantName;
            todo.ConsultantDescription = req.body.ConsultantDescription;
            todo.ConsultantContactLine = req.body.ConsultantContactLine;
            todo.ConsultantSchedule = req.body.ConsultantSchedule;

            todo
                .save()
                .then(() => res.json("Todo updated!"))
                .catch((err) => res.status(400).json("Error: " + err));
        })
        .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
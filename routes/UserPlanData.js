const router = require("express").Router();
let Todo = require("../models/UserPlanData.model");

// Read all
router.route("/").get((req, res) => {
    Todo.find()
        .then((todos) => res.json(todos))
        .catch((err) => res.status(400).json("Error: " + err));
});

// Create
router.route("/add").post((req, res) => {
    const UserID = req.body.UserID;
    const WornDate = req.body.WornDate;
    const OutFitsSerialize = req.body.OutFitsSerialize;

    const newTodo = new Todo({
        UserID,
        WornDate,
        OutFitsSerialize,
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
            todo.activity = req.body.activity;

            todo
                .save()
                .then(() => res.json("Todo updated!"))
                .catch((err) => res.status(400).json("Error: " + err));
        })
        .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
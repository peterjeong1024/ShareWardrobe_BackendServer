const router = require("express").Router();
let Todo = require("../models/UserAccount.model");

// Read all
router.route("/").get((req, res) => {
    Todo.find()
        .then((todos) => res.json(todos))
        .catch((err) => res.status(400).json("Error: " + err));
});

// Create
router.route("/add").post((req, res) => {
    const UserID = req.body.UserID;
    const UserPW = req.body.UserPW;
    const UserName = req.body.UserName;
    const UserEmail = req.body.UserEmail;
    const IsGoogleAccount = req.body.IsGoogleAccount;

    const newTodo = new Todo({
        UserID,
        UserPW,
        UserName,
        UserEmail,
        IsGoogleAccount,
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

// Read one by UserID
router.route("/checkID/:UserID").get((req, res) => {
    Todo.findOne({
            UserID: req.params.UserID
        })
        .then((todo) => res.json(todo))
        .catch((err) => res.status(400).json("Error: " + err));
});

// Check id / pw
router.route("/:UserID/:UserPW").get((req, res) => {
    Todo.findOne({
            UserID: req.params.UserID,
            UserPW: req.params.UserPW,
        })
        .then((todo) => res.json(todo))
        .catch((err) => res.status(400).json("Error: " + err));
});

// Delete
router.route("/:UserID").delete((req, res) => {
    Todo.findOneAndDelete({ UserID: req.params.UserID })
        .then(() => res.json("Todo deleted."))
        .catch((err) => res.status(400).json("Error: " + err));

    // Todo.findByIdAndDelete(req.params.id)
    //     .then(() => res.json("Todo deleted."))
    //     .catch((err) => res.status(400).json("Error: " + err));
});

// Update
router.route("/update/:UserID").post((req, res) => {
    Todo.findOne({ UserID: req.params.UserID })
        .then((todo) => {
            todo.UserName = req.body.UserName;
            todo.UserID = req.body.UserID;
            todo.UserPW = req.body.UserPW;
            todo.UserEmail = req.body.UserEmail;
            todo.IsGoogleAccount = req.body.IsGoogleAccount;

            todo
                .save()
                .then(() => res.json("Todo updated!"))
                .catch((err) => res.status(400).json("Error: " + err));
        })
        .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
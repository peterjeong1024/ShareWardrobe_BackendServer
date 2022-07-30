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
    const FItemsSerialize = req.body.FItemsSerialize;
    const ItemDescription = req.body.ItemDescription;

    const newTodo = new Todo({
        UserID,
        WornDate,
        OutFitsSerialize,
        FItemsSerialize,
        ItemDescription,
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
            todo.UserID = req.body.UserID;
            todo.WornDate = req.body.WornDate;
            todo.OutFitsSerialize = req.body.OutFitsSerialize;
            todo.FItemsSerialize = req.body.FItemsSerialize;
            todo.ItemDescription = req.body.ItemDescription;

            todo
                .save()
                .then(() => res.json("Todo updated!"))
                .catch((err) => res.status(400).json("Error: " + err));
        })
        .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
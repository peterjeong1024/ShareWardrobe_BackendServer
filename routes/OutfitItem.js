const router = require("express").Router();
let Todo = require("../models/OutfitItem.model");

// Read all
router.route("/").get((req, res) => {
    Todo.find()
        .then((todos) => res.json(todos))
        .catch((err) => res.status(400).json("Error: " + err));
});

// Create
router.route("/add").post((req, res) => {
    const OutfitImg = req.body.OutfitImg;
    const OutfitCateName = req.body.OutfitCateName;
    const OutfitOwnerID = req.body.OutfitOwnerID;
    const FItemsSerialize = req.body.FItemsSerialize;

    const newTodo = new Todo({
        OutfitImg,
        OutfitCateName,
        OutfitOwnerID,
        FItemsSerialize,
    });

    newTodo
        .save()
        .then(() => res.json("Todo added!"))
        .catch((err) => res.status(400).json("Error: " + err));
});

// Read by ItemOwner
router.route("/UserItems/:OutfitOwnerID").get((req, res) => {
    Todo.find({ OutfitOwnerID: req.params.OutfitOwnerID })
        .then((todos) => res.json(todos))
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
const router = require("express").Router();
let Todo = require("../models/FashionItem.model");

// Read all
router.route("/").get((req, res) => {
    Todo.find()
        .then((todos) => {
            console.log(todos[0].ItemImg.buffer);
            res.json(todos);
        })
        .catch((err) => res.status(400).json("Error: " + err));
});

// Create
router.route("/add").post((req, res) => {
    const ItemName = req.body.ItemName;
    const ItemOwner = req.body.ItemOwner;
    const ItemCategory = req.body.ItemCategory;
    const ItemDesc = req.body.ItemDesc;
    const ItemColor = req.body.ItemColor;
    const ItemFabric = req.body.ItemFabric;
    const ItemPrice = req.body.ItemPrice;
    const ItemSize = req.body.ItemSize;
    const ItemSeason = req.body.ItemSeason;
    const ItemBrand = req.body.ItemBrand;
    const ItemImg = req.body.ItemImg;
    const ItemLocation = req.body.ItemLocation;
    const ItemBuyDate = req.body.ItemBuyDate;
    const ItemWornCount = req.body.ItemWornCount;

    const newTodo = new Todo({
        ItemName,
        ItemOwner,
        ItemCategory,
        ItemDesc,
        ItemColor,
        ItemFabric,
        ItemPrice,
        ItemSize,
        ItemSeason,
        ItemBrand,
        ItemImg,
        ItemLocation,
        ItemBuyDate,
        ItemWornCount,
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
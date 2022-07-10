const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const FashionItemSchema = new Schema({
    ItemName: { type: String, required: true, default: "" },
    ItemDesc: { type: String, required: true, default: "None" },
    ItemColor: { type: String, required: true, default: "Blue" },
    ItemFabric: { type: String, required: true, default: "Cotton" },
    ItemPrice: { type: Number, required: true, default: 0.00 },
    ItemSize: { type: String, required: true, default: "M" },
    ItemSeason: { type: String, required: true, default: "Seasonal" },
    ItemBrand: { type: String, required: true, default: "Nike" },
    ItemImg: { type: Buffer, required: false, contentsType: String, default: "" },
    ItemLocation: { type: String, required: true, default: "Address" },
});

const FashionItem = mongoose.model("FashionItem", FashionItemSchema);
module.exports = FashionItem;
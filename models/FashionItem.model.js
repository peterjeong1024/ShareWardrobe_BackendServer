const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const FashionItemSchema = new Schema({
    ItemName: { type: String, required: true, default: "" },
    ItemOwner: { type: String, required: true, default: "" },
    ItemCategory: { type: String, default: "Other" },
    ItemDesc: { type: String, default: "None" },
    ItemColor: { type: String, default: "White" },
    ItemFabric: { type: String, default: "None" },
    ItemPrice: { type: Number, required: true, default: 0.00 },
    ItemSize: { type: String, default: "M" },
    ItemSeason: { type: String, default: "None" },
    ItemBrand: { type: String, default: "None" },
    ItemImg: { type: Buffer, contentsType: String, default: "" },
    ItemLocation: { type: String, required: true, default: "None" },
    ItemBuyDate: { type: Date, default: '2022-01-01' },
    ItemWornCount: { type: Number, default: 0 },
});

const FashionItem = mongoose.model("FashionItem", FashionItemSchema);
module.exports = FashionItem;
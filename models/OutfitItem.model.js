const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const OutfitItemSchema = new Schema({
    OutfitImg: { type: Buffer, required: false, contentsType: String, default: "" },
    OutfitCateName: { type: String, required: true, default: "Spring" },
    OutfitOwnerID: { type: String, required: true, default: "" },
    FItemsSerialize: { type: String, required: true, default: "" },
});

const OutfitItem = mongoose.model("OutfitItem", OutfitItemSchema);
module.exports = OutfitItem;
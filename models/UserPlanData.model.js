const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserPlanDataSchema = new Schema({
    UserID: { type: String, required: true, default: "" },
    FItemsSerialize: { type: String, required: true, default: "" },
    OutFitsSerialize: { type: String, required: true, default: "" },
});

const UserPlanData = mongoose.model("UserPlanData", UserPlanDataSchema);
module.exports = UserPlanData;
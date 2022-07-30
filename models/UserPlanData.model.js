const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserPlanDataSchema = new Schema({
    UserID: { type: String, required: true, default: "" },
    WornDate: { type: String, required: true, default: '1640995200000' },
    ItemDescription: { type: String, default: "" },
    OutFitsSerialize: { type: String, default: "" },
    FItemsSerialize: { type: String, default: "" },
});

const UserPlanData = mongoose.model("UserPlanData", UserPlanDataSchema);
module.exports = UserPlanData;
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserPlanDataSchema = new Schema({
    UserID: { type: String, required: true, default: "" },
    WornDate: { type: Date, required: true, default: '2022-01-01' },
    OutFitsSerialize: { type: String, required: true, default: "" },
});

const UserPlanData = mongoose.model("UserPlanData", UserPlanDataSchema);
module.exports = UserPlanData;
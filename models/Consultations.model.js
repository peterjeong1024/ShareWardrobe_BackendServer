const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ConsultationsSchema = new Schema({
    ConsultantImg: { type: String, default: "" },
    ConsultantName: { type: String, default: "" },
    ConsultantDescription: { type: String, default: "" },
    ConsultantContactLine: { type: String, default: "" },
    ConsultantSchedule: [{
        Time: { type: String, default: "" },
        IsFree: { type: Boolean, default: false },
    }],
});

const Consultations = mongoose.model("Consultations", ConsultationsSchema);
module.exports = Consultations;
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserAccountSchema = new Schema({
    UserID: { type: String, required: true },
    UserPW: { type: String, required: true },
    UserName: { type: String, required: true, default: "John" },
});

const UserAccount = mongoose.model("UserAccount", UserAccountSchema);
module.exports = UserAccount;
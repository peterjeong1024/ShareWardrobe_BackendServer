const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// build mongodb connection
// const uri = "mongodb+srv://<yourid>:<yourpw>@nodeexpress-jwt-test.p1g9w.mongodb.net/todoApp?retryWrites=true&w=majority";
const username = "ShareWardrobeAccount";
const password = "7EhBpvPpnzg3Tw1o";
const uri = "mongodb+srv://" + username + ":" + password + "@cluster0.hdtn4.mongodb.net/ShareWardrobeDB?retryWrites=true&w=majority";

mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', () => {
        console.log("MongoDB database connection established successfully");
    })
    // build mongodb connection


// define table connection API and model
const FashionItemRouter = require('./routes/FashionItem');
app.use('/FashionItem', FashionItemRouter);

const OutfitItemRouter = require('./routes/OutfitItem');
app.use('/OutfitItem', OutfitItemRouter);

const UserAccountRouter = require('./routes/UserAccount');
app.use('/UserAccount', UserAccountRouter);

const UserPlanDataRouter = require('./routes/UserPlanData');
app.use('/UserPlanData', UserPlanDataRouter);


// start server
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
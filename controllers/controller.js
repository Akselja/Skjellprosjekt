// import
const User = require("../models/User");

// controllers
module.exports.goof_get = (req, res) => {
    res.render("goof");
}

module.exports.signup_get = (req, res) => {
    res.render("signup");
}

module.exports.login_get = (req, res) => {
    res.render("login");
}

module.exports.delete_get = (req, res) => {
    res.render("delete");
}

module.exports.change_email_get = (req, res) => {
    res.render("changeEmail");
}

module.exports.hilsen_fra_js_get = (req, res) => {
    res.render("hilsen-fra-js");
}

// create
module.exports.signup_post = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.create({ email, password });
        res.status(201).json({ user : user._id });
    }
    catch (err) {
        res.status(400).json("Error: " + err);
    }
}

// read
module.exports.login_post = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.login(email, password);
        res.status(201).json("Success! " + user.email);
    }
    catch (err) {
        res.status(400).json("Error: " + err);
    }
}

// delete
module.exports.delete_post = async (req, res) => {
    const { email } = req.body;
    console.log(req.body);
    
    try {
        const user = await User.findOneAndDelete(email);
        res.status(201).json("Deleted: " + user.email);
    }
    catch (err) {
        res.status(400).json("Error: " + err);
    }
}

module.exports.change_email_post = async (req, res) => {
    const { email, newEmail } = req.body;
    try {
        const user = await User.findOneAndUpdate(email, { email : newEmail });
        res.status(201).json("Edited email to: " + newEmail);
    }
    catch (err) {
        res.status(400).json("Error: " + err);
    }
}

module.exports.error404 = (req, res) => {
    res.render("404");
}
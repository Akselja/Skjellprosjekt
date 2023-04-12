// import
const User = require("../models/User");

// controllers
module.exports.goof_get = (req, res) => {
    res.render("goof");
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
        const user = await User.login(email, password)
         .then(result => console.log(result));
        res.status(201).json("Success! " + user._id);
    }
    catch (err) {
        res.status(400).json("Error: " + err);
    }
}

module.exports.error404 = (req, res) => {
    res.render("404");
}
// imports
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
    email : {
        required : true,
        type : String,
        unique : true,
        lowercase : true
    },
    password : {
        type : String,
        required : true,
        minlength : 6
    }
})

// save to db (with hashing)
userSchema.pre("save", async function (next) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    next();
})

// static login function
userSchema.statics.login = async function(email, password) {
    const user = await this.findOne({ email });
    console.log("auth started")
    if(user) {
        console.log("Login Method");    
        const auth = bcrypt.compare(password, user.password);
        if(auth) {
            console.log(user);
            return user;
        }
    }
}

const User = mongoose.model("user", userSchema);

module.exports = User;
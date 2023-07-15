const mongoose=require("mongoose");

const userSchema=mongoose.Schema({
    username:String,
    email:String,
    password:String,
    interests:Array,
    loginHistory:mongoose.Schema.Types.Mixed,
    points:Number
},{
    versionKey:false
})

const UserModel=mongoose.model("user",userSchema);

module.exports={
    UserModel
}
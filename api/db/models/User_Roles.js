const mongoose = require("mongoose");

const schema = mongoose.Schema({
    role_id:{type:mongoose.Types.ObjectId,required:true},
    user_id:{type:mongoose.Types.ObjectId,required:true},
    
},{
    versionKey:false,
    timestamps:{
        createdAt:"created_at",
        updateAt:"update_at"
    }
});
class User_Roles extends mongoose.Model(){

}
schema.LoadClass(User_Roles);
module.exports=mongoose.model("User_Roles",schema);
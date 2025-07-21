const mongoose = require("mongoose");

const schema =mongoose.Schema({
    role_id:{type:mongoose.Types.ObjectId,required:true},
    permission:{type:String,required:true},
    createdby:{type:mongoose.Types.ObjectId,required:true}
},{
    versionKey:false,
    timestamps:{
        createdAt:"created_at",
        updateAt:"update_at"
    }
});
class Role_Privileges extends mongoose.Model(){

}
schema.LoadClass(Role_Privileges);
module.exports = mongoose.model("Role_Privileges",schema);
const mongoose = require("mongoose");

const schema = mongoose.Schema({
    is_active:{type:Boolean,default:true},
    created_by:{type:mongoose.Types.ObjectId,required:true}
},{
    versionKey:false,
    timestamps:{
        createdAt:"created_at",
        updateAt:"update_at"
    }
});
class Categories extends mongoose.Model(){

}
schema.LoadClass(Categories);
module.exports =mongoose.model("categories",schema);
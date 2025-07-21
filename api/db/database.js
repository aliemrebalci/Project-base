const mongoose = require("mongoose");
let instance = null;
class DataBase {
    constructor()
    {
        if(!instance)
        {
            this.mongoConnection = null;
            instance=this;
        }
        return instance;
    }
    async connect(options)
    {
        try
        {
         console.log("DB connecting....");
        let db = await mongoose.connect(options);
        this.mongoConnection = db;
        console.log("DB Connected");
        }
        catch(err)
        {
            console.error(err);
            process.exit(1);
        }
      
    }
}
module.exports =DataBase;
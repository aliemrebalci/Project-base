var express = require('express');
var router = express.Router();

const fs = require("fs");  //fs nodejs ile gelen otomatik kütüphane dosya işlemlerini yapar
let routes =fs.readdirSync(__dirname);// senkronize şekilde bulunduğumuz klasörü oku yani routesi oku dinamik bir routing yapısı kurmaya çalışıyoruz

for(let route of routes){
  if(route.includes(".js") && route !="index.js"){
    router.use("/"+route.replace(".js",""),require("./"+ route));

  }
}

module.exports = router;

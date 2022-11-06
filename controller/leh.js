const{createHash}=require("crypto")
var Leh ={}
Leh.apenasNumeros = function(string){
    var numsStr = string.replace(/[^0-9]/g,'');
    return numsStr;
}
Leh.passwordHash= function(senha){
 var hash = createHash("sha256").update("ac@kmosvs"+senha).digest("hex");
 return hash;
}
Leh.setToken= function(){
 var string = Date.now();
 string=string.toString();
 string=string+(Math.floor(Math.random()*(99999999-10000000))+10000000);
 return createHash("sha256").update(string).digest("hex");
}
export default Leh;

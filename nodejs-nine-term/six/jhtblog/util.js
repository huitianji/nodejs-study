/**/
global.blogUtil ={
    md5:function($str){
        require("crypto").createHash("md5").update(str)
            .digest("hex");//64位16进制的数
    }
}



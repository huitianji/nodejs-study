function render(str,data){
    var tpl = str.replace(/<%=([\s\S]+?)%>/g,function(math,group){
        return "'+obj."+group+"+'";
    });
    tpl = "var tpl ='" + tpl +"'\n return tpl;";

    var compile = new Function("obj",tpl);
    return compile(data);
}
var obj ={
    username:"jth",
    age:6
}

var result = render("hello <%=username%> <%=age%>",obj);
console.log(result);

//var tpl = "hello" + obj.username + "/" + obj.age;

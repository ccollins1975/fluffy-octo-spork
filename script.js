$(document).ready(function(){
    let string = "hello world";

    function myfunction (){
        let h1 = $("<h1>").text(string);
        $("main").append(h1);
    }
    myfunction();

});

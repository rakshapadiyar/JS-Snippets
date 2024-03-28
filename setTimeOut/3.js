//if req is to use var only, then form a new closure using a function

function x()
{
    for(var i=1;i<=5 ;i++)
    {
        function y(i){
        setTimeout(function()
        {
            console.log(i);
        },i*1000);
    }
    y(i);
    }
    console.log("Namaste JS")
}
x();


// $ node 3.js
// Namaste JS
//1
//2
//3
//4
//5
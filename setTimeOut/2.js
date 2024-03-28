function x()
{
    for(var i=1;i<=10 ;i++)
    {
        setTimeout(function()
        {
            console.log(i);
        },i*1000);
    }
    console.log("Namaste JS")
}
x();
// callback function remembers the "REFERENCE" to i in parent function iand by the time callback func executes, the value of i is 6
// Namaste JS
// 6
// 6
// 6
// 6
// 6

function y()
{
    for(let i=1;i<=5;i++)
    {
        setTimeout(function()
        {
            console.log(i);
        },i*1000);
    }
    console.log("Namaste JS in Y")
}
y();
//1
//2
//3
//4
//5

//let is block scoped, so each time callback function is called, a new copy of i is passed
//each time setTimeout happens, the function forms a closure with a new copy of i with incremented value;
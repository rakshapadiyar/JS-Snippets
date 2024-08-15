function tenth(){
    console.log("I passed 10th standard")
}

function ninth(callback)
{
    console.log("I passed 9th standard")
    callback()
}


function eigth(callback)
{
    console.log("I passed 8th standard")
    callback()
}

//pyramid of doom
eigth(()=>
    {ninth(()=>
        {
            tenth()
        })
    })

//I passed 8th standard
// I passed 9th standard
// I passed 10th standard

//the "pyramid of doom" or "callback hell" occurs when you have multiple nested callback functions, 
//which can make the code difficult to read and maintain

// there is 'inversion of control' also, i.e we pass the control to the outer function...we expect the outer function to 
// execute the caallback function, and give the control of callback function to outer function


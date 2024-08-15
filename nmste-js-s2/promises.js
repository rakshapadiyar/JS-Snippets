const cart = ["kurta", "shirt", "shoes"];

//createOrder is an API/MS
//passing a callback to a function
// createOrder(cart, function (orderId) {
//   proceedToPayment(orderId);
// });
// here we handover control of ptp to cO

//attaching a callback to a promise object
// const promise = createOrder(cart);
// promise.then(function (orderId) {
//   proceedToPayment(orderId);
// });
//as soon as there is data in promise, it will execute callback. This is a guarentee.

//now we see a promise object
const GITHUB_API = "https://api.github.com/users/rakshapadiyar";

const user = fetch(GITHUB_API); //fetch returns a promise objevt and puts inside user
console.log(user); //Promise { <pending> }

//      Promise
//    /       \
//    state    result
// pending  undefined

// result : stores whatever data fetch returned
// state :  what state promise is in. (only 3 states ; pending, fullfilled, rejected)

//Promise objects are immutable...we cant mutate it, we can only use it.

user.then(data=>{console.log(data)});

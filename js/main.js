var someArray = ["Jazz", "Blues", "Opera"];

someArray.push("Rock-n-roll");

var arrayMiddle = Math.floor(someArray.length) / 2;
if (someArray.length % 2) {
    someArray.splice(arrayMiddle, 1, "Classic");

} else {
    someArray.splice(arrayMiddle, 0, "Classic");

}

console.log(someArray.unshift(00));

console.log(someArray);
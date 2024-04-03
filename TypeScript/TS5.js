// //Optional parameters: function
function reverse(value) {
    if (typeof value === "string") {
        return value.split("").reverse().join("");
    }
    else {
        return value.slice().reverse();
    }
}
console.log(reverse("echo"));
console.log(reverse([1, 2, 3, 4, 5]));

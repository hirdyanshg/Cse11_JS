
try {
    var x=y+10;
} catch (error) {
    console.log(error.message);
}
var user = {name:"John", age:30, city:"New York"};
localStorage.setItem("user", JSON.stringify(user));
var data = JSON.parse(localStorage.getItem("user"));
console.log(data.name); // Output: John
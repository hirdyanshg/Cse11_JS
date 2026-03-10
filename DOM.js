const result = document.getElementById("para");
result.innerHTML = "my self";
result.title = "myname" ;
const x = document.getElementsByClassName("p1");
const y = document.getElementsByTagName("p");
y[2].innerHTML = "this is third para";
y[1].style.color = "red";
y[1].innerText = "my paragraph";
console.log(x);
x[1].innerHTML = "this is second para";
x[0].innerHTML = "this is first para";
const test = document.querySelector(".p1");
test.style.color = "blue";
test.style.backgroundColor = "yellow";
test.padding = "10px";
const test2 = document.querySelectorAll("ul li");
for(x in test2){
    test2[x].style.backgroundColor = "yellow";
    test2[x].padding = "10px";
    test2[x].color = "blue";
}

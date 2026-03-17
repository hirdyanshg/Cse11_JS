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
test.style.padding = "10px";
const test2 = document.querySelectorAll("ul li");
for(x in test2){
    test2[x].style.backgroundColor = "green";
    test2[x].style.margin= "10px";
    test2[x].style.color = "blue"
}

const element = document.getElementById("myH1");
let text= element.getAttribute("class");
document.getElementById("demo").innerHTML = text;

function myFunction(){
    document.getElementById("myH2").setAttribute("class", "democlass");
    alert("Attribute added successfully");
}

// create  an element
const  heading = document.createElement("h2");
//get the parent
const bodytag = document.getElementsByTagName("body");
//add element at the position using append method 
bodytag[0].append(heading);
heading.innerText = "hello";heading.style.backgroundColor = "pink";
{
    // create  an element
const  heading = document.createElement("h2");
//get the parent
const bodytag = document.getElementsByTagName("body");
//add element at the position using append method 
bodytag[0].append(heading);
heading.innerText = "hello";heading.style.backgroundColor = "pink";
}

{
    function onClick(){
        console.log("button clicked");
    }
    function onMouseOver(){
        console.log("mouse over");
    }
    function onMouseOut(){
        console.log("mouse out");
    }
    function onMouseDown(){
        console.log("mouse down");
    }
    function onMouseUp(){
        console.log("mouse up");
    }
    function onMouseMove(){
        console.log("mouse move");
    }
}

{
const x = document.querySelector('input');
x.addEventListener("focus",onhandlefocus);
x.addEventListener("blur",onhandleblur);
function onhandlefocus(){
    x.style.backgroundColor = "purple";
}
function myBody(){
    alert("WINDOW LOADED SUCCESSFULLY");
}
}

"members": [
    {
        "name": "Molecule Man",
        "age": 29,
        "seecretIdentity": "Dan Jukes",
        "powers": [
            "Radiation resistance","Turning tiny", "Radiation blast"]
    },
    {
        "name": "Madame Uppercut",
        "age": 39,
        "seecretIdentity": "Jane Wilson",
        "powers": ["Million tonne punch","Damage resistance", "Superhuman reflexes"]
    }
]
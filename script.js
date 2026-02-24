//console.log("hello world");
//document.write("hello world");
//<script type="text/javascript">
var num =10;
console.log(num);
console.log(typeof(num));
num=false;
console.log(num);
console.log(typeof(num));
num="sanjeev bhai";
console.log(num);
console.log(typeof(num));
num=undefined;
console.log(num);
console.log(typeof(num));
num=null;
console.log(num);
console.log(typeof(num));
//</script>
//function
var sayHello = function(){
    alert("hello world");
}
//array
var numberArray=[1,2,3];
var animals=new Array("dog","cat","tiger");//numeric indexing
//object
var person={
    name:'sanjeev',//key indexing in obj. differs it from array
    age:30,
    title:'president'
}
const sym1=Symbol(4);
console .log(sym1);
const sym2=Symbol(4);
console .log(sym2);
if(sym1==sym2){
    console.log("true");
}
else{    console.log("false");
}
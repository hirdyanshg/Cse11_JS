let cart = 0;

function addCart(productName){

    cart++;

    document.getElementById("count").innerText = cart;

    const toast = document.getElementById("toast");

    toast.innerText = productName + " added to cart ✓";

    toast.classList.add("show");

    setTimeout(function(){

        toast.classList.remove("show");

    },2000);
}
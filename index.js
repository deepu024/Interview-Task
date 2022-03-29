
document.querySelector(".firstDiv").addEventListener("click", function(){
    document.querySelector(".firstDiv").classList.add("border");
    document.querySelector(".secondDiv").classList.remove("border");

});

document.querySelector(".secondDiv").addEventListener("click", function(){
    document.querySelector(".secondDiv").classList.add("border");
    document.querySelector(".firstDiv").classList.remove("border");
});

document.querySelector(".btn").addEventListener("click", function(){
    alert("Hello Everyone");
});

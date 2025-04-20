let heading1 = document.getElementById("hd1")
heading1.addEventListener("mouseover", function(){
    heading1.style.color = "red"
})
heading1.addEventListener("mouseleave", function(){
    heading1.style.color = "black"
})

const dateInput = document.getElementById("birthday").value;
if(isNaN(Date.parse(dateInput))) {
    console.log("Invalid date");
}else {
    console.log("Valid date");
}

const Gender = document.getElementById("gender")
if (Gender = ""){
    console.log("Invalid entry")
}
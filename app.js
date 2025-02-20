// console.log("Toss App");


var moon = document.querySelector("#btn1");
var mosque = document.querySelector("#btn2");
var output = document.querySelector("#output");
var img = document.querySelector("img");
var num


// var maths = Math.random() * 2
// console.log(Math.ceil(maths));



function toss(para) {
    
    num =  Math.ceil(Math.random(num) * 2)
    
    if (para === 1 && num === 1 || para === 2 && num === 2) {

        output.innerHTML = "The Winner Is Head!"
        console.log("You Win The Toss!" + num);
        
    } 
    else {
    
        console.log("You Loss The Toss!" + num);
        output.innerHTML = "The Winner Is Tail!"
    
    }
    
    if (num === 1) {
       
        img.src = "./Assets/Head_img.PNG"
    
    } else if (num === 2) {
        
        img.src = "./Assets/Tail_img.PNG"
    
    }
    
}

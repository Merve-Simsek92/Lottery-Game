let result=document.querySelector(".result");

let button=document.querySelector(".button");

let input=document.querySelector("#input");
 


var count=0;
button.addEventListener("click",()=>{ 
 result.innerHTML = ""
while(count<input.value){
var numArray=[];
while(numArray.length<6){
    var number=Math.floor(Math.random() * 90) + 1;
    if(numArray.includes(number) != true){
        numArray.push(number)
    }



}
numArray.sort(function(a,b){return a-b})

while(numArray.length<7){
    var sub=Math.floor(Math.random() * 90) + 1;
    if(numArray.includes(sub) != true){
        numArray.push(sub)}
}
var joker=Math.floor(Math.random() * 90) + 1
numArray.push(joker)


count++;
result.innerHTML += `${numArray} <br><br>`
}

});


let one=   document.getElementById("one").  innerText=1;
let two=   document.getElementById("two").  innerText=2;
let three= document.getElementById("three").innerText=3;
let four=  document.getElementById("four"). innerText=4;
let five=  document.getElementById("five"). innerText=5;
let six=   document.getElementById("six").  innerText=6;
let seven= document.getElementById("seven").innerText=7;
let eight= document.getElementById("eight").innerText=8;
let nine=  document.getElementById("nine"). innerText=9;
let zero=  document.getElementById("zero"). innerText=0;


     var l=document.querySelector("#lower").innerText;

console.log(l)

  document.querySelector("#one").addEventListener("click",function (){
  document.querySelector("#lower").innerText=document.querySelector("#lower").innerText+one;    });
          
          document.querySelector("#two").addEventListener("click",function (){
               document.querySelector("#lower").innerText= document.querySelector("#lower").innerText+two; })

          document.querySelector("#three").addEventListener("click",function (){
          document.querySelector("#lower").innerText=document.querySelector("#lower").innerText+three; })     
     
          document.querySelector("#four").addEventListener("click",function (){
          document.querySelector("#lower").innerText=document.querySelector("#lower").innerText+four; })          

          document.querySelector("#five").addEventListener("click",function (){
          document.querySelector("#lower").innerText=document.querySelector("#lower").innerText+five; })

          document.querySelector("#six").addEventListener("click",function (){
          document.querySelector("#lower").innerText=document.querySelector("#lower").innerText+six; })
                                   
          document.querySelector("#seven").addEventListener("click",function (){
          document.querySelector("#lower").innerText=document.querySelector("#lower").innerText+seven; })
                                        
          document.querySelector("#eight").addEventListener("click",function (){
          document.querySelector("#lower").innerText=document.querySelector("#lower").innerText+eight; })
                                             
          document.querySelector("#nine").addEventListener("click",function (){
          document.querySelector("#lower").innerText=document.querySelector("#lower").innerText+nine; })
                                                  
          document.querySelector("#zero").addEventListener("click",function (){
          document.querySelector("#lower").innerText=document.querySelector("#lower").innerText+zero; })                                             

          a1=document.getElementById("a1");

      

                              //FUNCTIONS


document.querySelector("#plus").addEventListener("click",function (){
document.querySelector("#lower").innerText=document.querySelector("#lower").innerText + document.querySelector("#plus").innerText; })          
     
document.querySelector("#mul").addEventListener("click",function (){
document.querySelector("#lower").innerText = document.querySelector("#lower").innerText + document.querySelector("#mul").innerText})

document.querySelector("#div").addEventListener("click",function (){
document.querySelector("#lower").innerText=document.querySelector("#lower").innerText + document.querySelector("#div").innerText; })               

document.querySelector("#minus").addEventListener("click",function (){
document.querySelector("#lower").innerText=document.querySelector("#lower").innerText + document.querySelector("#minus").innerText;})

document.querySelector("#clear").addEventListener("click",function(){
document.querySelector("#lower").innerText=document.querySelector("#lower").innerText=" "
document.querySelector("#upper").innerText="";          })

document.querySelector("#equal").addEventListener("click", function(){
var w= eval(document.querySelector("#lower").innerText )
document.querySelector("#upper").innerText= w
document.querySelector("#lower").innerText="";});















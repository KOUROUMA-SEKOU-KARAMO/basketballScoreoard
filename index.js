
 const homeScore=document.querySelector('.home_score')
 const guestScore=document.querySelector('.guest_score')
 const add1PointScore=document.querySelector("#add1Point")
 const add2PointScore=document.querySelector("#add2Points")
 const add3PointScore=document.querySelector("#add3Points")

 let count1=0
 let count2=0
 let count3=0



 function add1Point(){ 
    count1+=1
    homeScore.innerText=count1
    guestScore.innerText=count1
 }
 function add2Points(){
    count2+=2
    homeScore.innerText=count2
    guestScore.innerText=count2



 }
 function add3Points(){
     count3+=3
    homeScore.innerText=count3
    guestScore.innerText=count3


 }
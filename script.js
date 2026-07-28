const bow=document.getElementById("bow");

const arrow=document.getElementById("arrow");

const heart=document.getElementById("heart");

let fired=false;

bow.onclick=function(){

if(fired)return;

fired=true;

/* Pull effect */

bow.style.transform="scale(.92)";

/* Shoot */

setTimeout(()=>{

arrow.style.left="70%";

arrow.style.top="45%";

},100);

/* Hit */

setTimeout(()=>{

heart.style.transform="scale(1.2)";

heart.style.filter="drop-shadow(0 0 35px deeppink)";

},900);

};

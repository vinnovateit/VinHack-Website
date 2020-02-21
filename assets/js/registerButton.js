const button=document.querySelector('button.reg');
const submit=document.querySelector('.submitt');
const lastlayer=document.querySelector('#q7');
const firstlayer=document.querySelector('#q1');


console.log(button);
const t1=new TimelineLite({paused:true});

t1.fromTo('#q1',1,{
    opacity: 0,
    scale:2,
    ease: "Power2.out"
},{
    scale:1
})
.to('#q1',1,{
 
    clipPath:"circle(100% at 50% 50%)",
    opacity:1,
    ease: "Power2.out"
},'-=.85')

button.addEventListener('click',()=>{t1.restart();firstlayer.style.display="flex"});
submit.addEventListener('click',()=>{lastlayer.style.display="none"})

const t2=new TimelineLite({paused:true});


var i=1;
var f;
var before;
var after;
function nextpage(){
    if(i<10){
        f="q"+i;
        before=document.getElementById(f);
        // before.style.display="none";
          t2.fromTo(before,1,{
               display:"flex",
               y:0,
              opacity:1,
               ease: "Power2.out"
          },{
               scale:1
           })
           .to(before,1,{
               display:"none",
              y:-500,
               opacity:0,
               ease: "Power2.out"
           },'-=.85');
           t2.play();
    }
    console.log(i);
    if(i<11){
        i++;
        console.log(i);
        f="q"+i;
        after=document.getElementById(f);
        after.style.display="flex";
        console.log(after.style.display);
    }
}





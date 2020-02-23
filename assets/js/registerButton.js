const button=document.querySelector('button.reg');
const submit=document.querySelector('.submitt');
const lastlayer=document.querySelector('#q7');
const firstlayer=document.querySelector('#q1');


console.log(button);
const t1=new TimelineLite({paused:true});

t1.to('#banner',.5,{filter:"blur(5px)"},'-=.85').fromTo('#q1',1,{
    opacity: 0,
    scale:2,
    clipPath:"circle(0% at 50% 50%)",
    ease: "Power2.out"
},{
    scale:1
})
.to('#q1',1,{
 
    clipPath:"circle(100% at 50% 50%)",
    opacity:1,
    ease: "Power2.out"
},'-=.85')
var i=1;
var f;
var before;
var after;
button.addEventListener('click',()=>{t1.restart();firstlayer.style.display="flex";i=1});
submit.addEventListener('click',()=>{lastlayer.style.display="none"})

const t2=new TimelineLite({paused:true});



function nextpage(){
    console.log(i);
    if(i<8){
        f="q"+i;
        before=document.getElementById(f);
        before.style.display="none";
            // t2
            // .fromTo(before,1,{
                 
            //      clipPath:"circle(100% at 50% 50%)",
            //     opacity:1,
            //      ease: "Power2.out"
            // },{
            //      scale:1
            //  })
            //  .to(before,1,{
            //      display:"none",
            //      clipPath:"circle(0% at 50% 50%)",
            //      opacity:0,
            //      ease: "Power2.out"
            //  },'-=.85');
             
    }
    console.log(i);
    if(i<9){
        i++;
        console.log(i);
        f="q"+i;
        after=document.getElementById(f);
        after.style.display="flex";
        console.log(after.style.display);
    }
    console.log(i);
    if(i==8){
        i=1;
        document.querySelector('#banner').style.filter="blur(0)";
    }
}

$(document).mouseup(function(e) 
{
    var container = $(".layer");

    // if the target of the click isn't the container nor a descendant of the container
    if (!container.is(e.target) && container.has(e.target).length === 0) 
    {
        document.querySelector('#banner').style.filter="blur(0)";
        container.hide();
    }
});





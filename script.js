var crsr = document.querySelector("#cursor")
var bBack = document.querySelector("#bigBack")

document.addEventListener("mousemove", function(dets){
    
    crsr.style.left = dets.x - 11 + "px"
    crsr.style.top = dets.y - 11 + "px"
    bBack.style.left = dets.x - 220 + "px"
    bBack.style.top = dets.y - 220 + "px"
})



gsap.to("#nav",{
    
    backgroundColor : "#000",
    duration :0.5,
    height :"110px",
    scrollTrigger :{
        trigger :"nav",
        scroller :"body",
        start :"top -10%",
        end :"top -11%",
        scrub :1
        
    }


})

gsap.to("#main",{

        backgroundColor : "#000",
        scrollTrigger :{
        trigger :"#main",
        scroller :"body",
        start :"top -25%",
        end : "top -70%",
        scrub :2

    }

})

gsap.from(".progress-bar",{
    width:0,
        scrollTrigger:{
            trigger:".progress-bar",
            scroller:"body",
            // markers:true,
            start:"top 80%",
            end:"top 70%",
            scrub:7,
        }
})

let paragraph = document.querySelector("#text-content");
let showBtn = document.querySelector(".show-btn");
let flag = 0;
showBtn.addEventListener("click", () => {
    if(flag==0){
        showBtn.innerText = "View Less";
        paragraph.childNodes[5].style.display = "block";
        flag =1;
    }
    else{
        showBtn.innerText = "View More";
        paragraph.childNodes[5].style.display = "none";
        flag = 0;
    }
})

function loadingAnimation(){
    var loadingScreen = document.querySelector("#loading-screen");

setTimeout(function(){
    loadingScreen.style.top = "-100%";
}, 3300);
}

loadingAnimation();






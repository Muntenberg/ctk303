var textDiv = document.getElementById("mainText");


window.addEventListener('scroll', function() {
    var circleTransistion = this.document.getElementById("circle-main");
    var scrollPosition = this.window.scrollY;

    var newCircleSize = 0 + scrollPosition;
    circleTransistion.style.width = newCircleSize + "px";
    circleTransistion.style.height = newCircleSize + "px";

})

window.addEventListener("resize", function(){
    textDiv.style.top = window.innerHeight * 3.5 + "px";
})
textDiv.style.top = window.innerHeight * 3.5 + "px";

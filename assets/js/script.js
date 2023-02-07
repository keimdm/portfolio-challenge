//code to determine when to add/remove the header bar at the top

//gets window dimensions
var scrollLength = window.innerHeight;
var widthCutoff = window.innerWidth;

//Listens for a user scroll action
window.addEventListener("scroll", function() { 
    //if format is wide and it scrolls below the limit, it pulls down the header bar
    if (widthCutoff >= 768) {
        if (window.scrollY > scrollLength) {
            this.document.getElementById("header").style.top = "0em";
        }
        else {
            this.document.getElementById("header").style.top = "-3em";
        }
    }
 },false);

//listener for window resize
window.addEventListener("resize", (event) => {
    //get new window size info
    scrollLength = window.innerHeight;
    widthCutoff = window.innerWidth;
    //if mobile format, automatically display the bar
    if (widthCutoff < 768) {
        this.document.getElementById("header").style.top = "0em";
    }
    //otherwise, check scroll location and display bar if it's above the threshold
    else {
        if (window.scrollY < scrollLength) {
            this.document.getElementById("header").style.top = "-3em";
        }
        else {
            this.document.getElementById("header").style.top = "0em";
        }
    }
 });
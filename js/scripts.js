// $(document).ready(function () {
//     $(document).onclick(function (event) {
//         console.log("you clicked something");
//         var clickover = $(event.target);
//         var _opened = $(".navbar-collapse").hasClass("collapse show");
//         if (_opened === true && !clickover.hasClass("navbar-toggler")) {
//             $("button.navbar-toggler").click();
//         }
//     });
// });

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

var state = false;// helper state to handle every other click
function getDiscordTag() {
    var myDiscordTag = "Danyo#8139"


    if (state === false) {
        // on first clicks, do following
        /* puts string in clipboard */
        navigator.clipboard.writeText(myDiscordTag);

        /* Alert the copied text */
        alert("Discord Tag " + myDiscordTag + " copied!");
        state = true;
        
        sleep(3000);
        // window.location.href="#collapseBtn"; // this didn't work
        // window.scrollTo(0, document.body.scrollHeight)
        window.scrollTo(0,document.body.scrollHeight);
        return;
    }
    else if (state === true) {
        // on second clicks, do nothing

        state = false;
        return;
    }
}
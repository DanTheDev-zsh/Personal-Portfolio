$('button').tooltip({
    trigger: 'click',
    placement: 'bottom'
});

function setTooltip(message) {
    $('button').tooltip('hide')
        .attr('data-original-title', message)
        .tooltip('show');
} /* sets message for tooltip and shows it */

function hideTooltip() {
    setTimeout(function() {
        $('button').tooltip('hide');
    }, 1000);
} /* tooltip hides itself after 1000 ms */

var clipboard = new Clipboard('button');

clipboard.on('success', function(e) {
    setTooltip('Copied Discord tag!');
    hideTooltip();
}); 
// https://stackoverflow.com/questions/37798967/tooltip-on-click-of-a-button


/** 
 *!retired because alert is annoying
*/

// var state = false;// helper state to handle every other click
// function getDiscordTag() {
//     var myDiscordTag = "Danyo#8139"


//     if (state === false) {
//         /* on first clicks, do following */
//         /* puts string in clipboard */
//         navigator.clipboard.writeText(myDiscordTag);

//         /* Alert the copied text */
//         alert("Discord Tag " + myDiscordTag + " copied!");
//         state = true;
        
//         window.location.href="#collapseBtn"; // this didn't work
//         window.scrollTo(0, document.body.scrollHeight)
//         window.scrollTo(0,document.body.scrollHeight);
//         return;
//     }
//     else if (state === true) {
//         /* on second clicks, do nothing */

//         state = false;
//         return;
//     }
// }
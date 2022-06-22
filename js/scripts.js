/**
 * TODO: create a state so that the copying and showing tooltip only occurs one time 
 */

$(function() {
    console.log("running");
    $('#cbutton-href').popover({
        placement: "right",
        trigger: "manual"
    });
})

function hideTooltip(btn) {
    setTimeout(function() {
        $('#cbutton-href').popover('hide');
    }, 2000);
  }

var clipboard = new Clipboard('#cbutton-href');

clipboard.on('success', function(event) {
    console.log({event_name: "success called", event});
    $('#cbutton-href').popover("show");
    hideTooltip();
});

// $('#ssese').click(() => {
//     const textToCopy = 'Danyo#8139';
//     navigator.clipboard.writeText(textToCopy).then((arg) => {
//         // successful
//         $('#selector').popover("show");
//     }).catch((error) => {
//         // failed
//         console.error(error);

//     });
// })
// console.log({
//     event: 'file run'
// });
// $('#cbutton-href').tooltip({
//     trigger: 'click',
//     placement: 'bottom'
//   });

// $(function(){
//     console.log({
//         event: "jquery run"
//     });
//     $(document).on('click', '#cbutton-href', function () {
//         console.log('clicked');
//         $(this).addClass("on");
//         $(this).tooltip({
//             items: '#cbutton-href.on',
//             position: {
//                 my: "left+30 center",
//                 at: "right center",
//                 collision: "flip"
//             }
//         }).tooltip("show");
//         $(this).trigger('mouseenter');
//     });
//     $(document).on('click', '#cbutton-href.on', function () {
//         $(this).tooltip('hide');
//         $(this).removeClass("on");
//     });
//     $("#cbutton-href").on('mouseout', function (e) {
//         e.stopImmediatePropagation();
//     });
// })


// let count = 0;
// function setTooltip(btn, message) {
//     console.log({
//         event: "setToolTip",
//         message,
//         btn
//     });

//     // if (count === 0){
//     console.log("should only called once");
//     btn.tooltip({
//         items: '#cbutton-href',
//         position: {
//             my: "left+30 center",
//             at: "right center",
//             // collision: "flip"
//         }
//     }).tooltip("show");
//     // }

//     // btn.tooltip("show");
//     // count += 1;
//     // $('#cbutton-href')
//     //     // .tooltip('hide')
//     //     .attr('data-original-title', message)
//     //     .tooltip('show');
// } /* sets message for tooltip and shows it */

//     // let btn = $(arg.trigger) 
//     // let btn = $('#cbutton-href');
//     // console.log({
//     //     btn,
//     // });
//     // $('#cbutton-href').tooltip("show");
//         // setTooltip(btn, 'Copied Discord tag!');
//     // hideTooltip(btn);
// }); 
// $('#cbutton-href').on({
//     "click": function() {
//         console.log({
//             event: "onclick",
//             this: $(this),
//         });
//         $(this).tooltip({ items: "#cbutton-href", content: "We ask your age only for statistical purposes."});
//         $(this).tooltip("show");
//       },
//       "mouseout": function() {      
//          $(this).tooltip("disable");   
//       }
// })
// $('#cbutton-href').tooltip({ items: "#tt", content: "Displaying on click"});


// function setTooltip(btn, message) {
//     console.log({
//         event: "setToolTip",
//         message,
//         btn
//     });

//     btn
//     // .tooltip('hide')
//     .attr('data-original-title', message)
//     .tooltip('show');
    // $('#cbutton-href')
    //     // .tooltip('hide')
    //     .attr('data-original-title', message)
    //     .tooltip('show');
// } /* sets message for tooltip and shows it */

// function hideTooltip(btn) {
//     setTimeout(function() {
//       btn.tooltip('hide');
//     }, 1000);
//   }
  
// function hideTooltip() {
//     console.log({
//         event: "hide tool tip"
//     });
//     // from source: declare function setTimeout(handler: TimerHandler, timeout?: number, ...arguments: any[]): number;
//     setTimeout(function() {
//         $('#cbutton-href').tooltip('hide');
//     }, 1000);
// } /* tooltip hides itself after 1000 ms */

// var clipboard = new Clipboard('#cbutton-href');

// clipboard.on('success', function(arg) {
//     console.log({event: "success called", arg});
//     let btn = $(arg.trigger)
//     setTooltip(btn, 'Copied Discord tag!');
//     hideTooltip(btn);
// }); 
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
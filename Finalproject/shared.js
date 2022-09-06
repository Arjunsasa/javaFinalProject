//tooltips//
$(function() {
    $("#tooltip-1").tooltip();
    $("#tooltip-2").tooltip();
    $("#tooltip-3").tooltip();
    $("#tooltip-4").tooltip();
    $("#tooltip-5").tooltip();
});

//scroll to top btn//
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

//NavBar Name animation//
$(document).ready(function(){
    $("#main").mouseenter(function(){
      $(".navName").css("display", "block");
    });
    $("#main").mouseleave(function(){
      $(".navName").css("display", "none");
    });
});

//sound for insta//
$('.soundbuttoni').on('mouseover', function () {     
  playInsta();                                 
})
.on('mouseout', function () {                    
  stopInsta();                                  
});

//function for sound//
function playInsta () {                           
$('#mySoundI')[0].volume = 0.7;
$('#mySoundI')[0].load();
$('#mySoundI')[0].play();
}
function stopInsta () {                           
$('#mySoundI')[0].pause();
$('#mySoundI')[0].currentTime = 0;           
}

//sound for facebook//
$('.soundbuttonf').on('mouseover', function () {     
  playFace();                                  
})
.on('mouseout', function () {                    
  stopFace();                                  
});

//function for sound//
function playFace () {                          
$('#mySoundF')[0].volume = 0.7;
$('#mySoundF')[0].load();
$('#mySoundF')[0].play();
}
function stopFace () {                           
$('#mySoundF')[0].currentTime = 0;           
}

//sound for Twitter//
$('.soundbuttont').on('mouseover', function () {     
  playTwit();                                  
})
.on('mouseout', function () {                    
  stopTwit();                                 
});

//function for sound//
function playTwit () {                           
$('#mySoundT')[0].volume = 0.7;
$('#mySoundT')[0].load();
$('#mySoundT')[0].play();
}
function stopTwit () {                          
$('#mySoundT')[0].pause();
$('#mySoundT')[0].currentTime = 0;           
}
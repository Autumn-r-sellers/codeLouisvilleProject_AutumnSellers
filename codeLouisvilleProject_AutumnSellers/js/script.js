$("#aboutSection").hide();
$("#portfolioSection").hide();
$("#contactSection").hide();

// Sets the background of the opening div based upon the time of day


window.onresize = function(){
  location.reload();
}

setTimeout(setImage(), 3000);

function setImage(){
  var nowDate = new Date();
  var wakeTime = new Date();
  wakeTime.setHours(6);
  wakeTime.setMinutes(30);

  var bedTime = new Date();
  bedTime.setHours(18);
  bedTime.setMinutes(30);

if(nowDate > wakeTime && nowDate < bedTime){
      document.getElementById("dayTime-link").style.display = "block";
      document.getElementById('nightTime-link').style.display = "none";
      document.body.style.background = "url('./img/louisvilleDaytime.jpeg') center";
      document.body.style.backgroundSize = "cover";
      };
}

// Control navigation, jump to carousel menu
// This function is not needed for desktop view so the media query
// makes it not active in screens larger than large tablets.
  if(window.matchMedia("(max-width: 900px)").matches){
    $('body').on('touchend click', ".louisvilleImage", function(){
    $(location).attr('href', '#contact_me')
    });
  };

//Allows the navigation menu to smoothly display at 800px and above
if(window.matchMedia("(min-width: 800px)").matches){
  $('body').ready(function(){
    $('#navigation-container').fadeIn('slow')
    });
}


// Controls the displaying of the menu information
// Controls the displaying of the menu information
$("#about").on("click", function(){
  $("#aboutSection").toggle();
  $("#portfolioSection").hide();
  $("#contactSection").hide();
});

$("#portfolio").on("click", function(){
  $("#portfolioSection").toggle();
  $("#aboutSection").hide();
    $("#contactSection").hide();
});

$("#contact").on("click", function(){
  $("#contactSection").toggleClass("hide_media_querie information-wrapper");
  $("#aboutSection").addClass("hide_media_querie");
  $("#portfolioSection").addClass("hide_media_querie");
});

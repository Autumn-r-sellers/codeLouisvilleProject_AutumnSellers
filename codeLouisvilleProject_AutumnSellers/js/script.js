// Sets the background of the opening div based upon the time of day
window.setInterval(setImage(), 5000)

function setImage(){
  var nowDate = new Date();
  var wakeTime = new Date();
  wakeTime.setHours(6);
  wakeTime.setMinutes(30);

  var bedTime = new Date();
  bedTime.setHours(18);
  bedTime.setMinutes(30);

if(nowDate > wakeTime && nowDate < bedTime){
      document.getElementById('nightTime').style.display = "none";
      document.getElementById('nightTime-carousel').style.display = "none";
      document.getElementById('dayTime').style.display = "block";
      document.getElementById("dayTime-link").style.display = "block";
      document.getElementById('nightTime-link').style.display = "none";
  }
};

  // Control navigation, jump to carousel menu
  // This function is not needed for desktop view so the media query
  // makes it not active in screens larger than large tablets.

  if(window.matchMedia("(max-width: 900px)").matches){
    $('body').on('touchend click', ".louisvilleImage", function(){
    $(location).attr('href', '#contact_me')
  });
  };

//Allows the navigation menu to smoothly display at 800px and above
window.onresize = function(){
if(window.matchMedia("(min-width: 800px)").matches){
  $('body').ready(function(){
    $('#navigation-container').fadeIn('slow')
  });
}
};

// Controls the displaying of the menu information
// Controls the displaying of the menu information
$("#about").on("click", function(){
  $("#aboutSection").toggleClass("hide information-wrapper");
  $("#aboutSection").addClass("information-wrapper")
  $("#portfolioSection").addClass("hide");
  $("#contactSection").addClass("hide");
});
$("#portfolio").on("click", function(){
  $("#portfolioSection").toggleClass("no_show information-wrapper");
  $("#portfolioSection").addClass("information-wrapper")
  $("#aboutSection").addClass("no_show");
  $("#contactSection").addClass("no_show");
});
$("#contact").on("click", function(){
  $("#contactSection").toggleClass("no_show information-wrapper");
  $("#contactSection").addClass("information-wrapper")
  $("#aboutSection").addClass("no_show");
  $("#portfolioSection").addClass("no_show");
});

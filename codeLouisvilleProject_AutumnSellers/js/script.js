// Sets the background of the opening div based upon the time of day
$('navigation-container').hide();


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
      document.getElementById('nightTime').style.display = "none"
      document.getElementById('dayTime').style.display = "block"
      document.getElementById("dayTime-link").style.display = "block";
      document.getElementById('nightTime-link').style.display = "none"
    }
  }

// Control navigation, jump to carousel menu
// Currently, if you click anywhere twice in the page, then it will
// go down to carousel menu.
// Goal is to have the page jump to the menu on swipe
// for mobile devices and on one or two finger scroll
// for tablets.
// This function is not needed for desktop view so the media query
// makes it not active in screens larger than large tablets.
if(window.matchMedia("(max-width: 1080px)").matches){
  $("#navigation-container").hide();

  $('body').on('touchend click', ".louisvilleImage", function(){
    $(location).attr('href', '#image_carousel')
  })
}

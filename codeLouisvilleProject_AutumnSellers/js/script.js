$("#navigation-container").hide();

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
      document.getElementById('nightTime').style.display = "none"
      document.getElementById('dayTime').style.display = "block"
      document.getElementById("dayTime-link").style.display = "block";
      document.getElementById('nightTime-link').style.display = "none";
      document.getElementById('dayTime').style.backgroundColor = 'skyblue';
    }
  }

// Control navigation, jump to carousel menu
// This function is not needed for desktop view so the media query
// makes it not active in screens larger than large tablets.
if(window.matchMedia("(max-width: 900px)").matches){
  $('body').on('touchend click', ".louisvilleImage", function(){
  $(location).attr('href', '#image_carousel')
  })
}
if(window.matchMedia("(min-width: 800px)").matches){
  $('body').ready(function(){
    $('#navigation-container').fadeIn('slow');
  })
}

// Sets the background of the opening div based upon the time of day
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
      document.getElementById("myContainer").style.background = "url('./img/louisvilleDaytime.jpeg') center";
      document.getElementById("myContainer").style.backgroundSize = "cover";
      document.getElementById("myContainer").style.backgroundAttachment = "fixed";


      };
}

// Control navigation, jump to carousel menu
    $('body').on('touchend click', ".louisvilleImage", function(){
    $(location).attr('href', '#contact_me')
    });

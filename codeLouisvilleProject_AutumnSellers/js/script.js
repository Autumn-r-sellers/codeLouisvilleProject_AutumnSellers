$('.image_carousel').hide()

window.setInterval(setImage(), 5000)

function setImage(){
  var nowDate = new Date();
  var wakeTime = new Date();
  wakeTime.setHours(6);
  wakeTime.setMinutes(30);

  var bedTime = new Date();
  bedTime.setHours(18);
  bedTime.setMinutes(30);

  if(nowDate > wakeTime && nowDate < bedTime) {
    $('body').css('background', 'url("img/louisvilleDaytime.jpeg") no-repeat');
    $('body').css('background-size', 'cover');
    document.getElementById('nightTime-link').style.display= "none";
    document.getElementById('dayTime-link').style.display = "block";
 }
if(nowDate < wakeTime && nowDate > bedTime){
      $('body').css('background', 'url("img/louisvilleDaytime.jpeg") no-repeat');
      $('body').css('background-size', 'cover');
      document.getElementById("nightTime-link").style.display = "block";
    }
  }


// Carousel menu SHOULD slide up (according to Stephan)
if(window.matchMedia("(max-width: 1080px)").matches){
  $('body').on('touchstart', function(){
    $('.image_carousel').show("slide", {direction:'up'}, 2000)
  })

  // {


  //   location.href = "#image_carousel";
  // })if (location.href === "#image_carousel") {
  //   location.href = "#";
  // }
};

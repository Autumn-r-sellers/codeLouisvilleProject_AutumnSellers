window.setInterval(setImage(), 5000)

function setImage(){
  var nowDate = new Date();
  var wakeTime = new Date();
  wakeTime.setHours(6);
  wakeTime.setMinutes(30);

  var bedTime = new Date();
  bedTime.setHours(18);
  bedTime.setMinutes(30);

  if(nowDate < wakeTime && nowDate > bedTime){
    document.getElementById("nightTime").style.display = "block";
    document.getEleme99999999999ntById("nightTime-link").style.display = "block";
  }else if (nowDate > wakeTime && nowDate < bedTime) {
    document.getElementById('nightTime').style.display = "none";
    document.getElementById('dayTime').style.display = 'block';
    document.getElementById('nightTime-link').style.display= "none";
    document.getElementById('dayTime-link').style.display = "block";
  }
}


function displayCarouselOnScroll(){
  $('#carousel').scrollIntoView({
    behavior: instant;
}
if (document.body.scroll -= 20) {
  displayCarouselOnScroll();
});

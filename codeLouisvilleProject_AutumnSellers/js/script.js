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

$(document.body).on('touchmove', onScroll); // for mobile
$(window).on('scroll', onScroll);

// callback
function onScroll(){
    if( $(window).scrollTop() + window.innerHeight >= document.body.scrollHeight ) {
        document.getElementById("carousel")
    }
}

function updateTime(){
  //javascript (logic: user events, or updating time)
  var theTime = new Date().toLocaleString(); //gets current date and turns into string
  var timeText = document.querySelector("#time"); // # means its an id in the tag somewhere above
  timeText.innerHTML = theTime;
}

setInterval(updateTime, 1000); //every 1000ms (1s)

function updateTime(){
  //javascript (logic: user events, or updating time)
  var theTime = new Date().toLocaleString(); //gets current date and turns into string
  var timeText = document.querySelector("#time"); // # means its an id in the tag somewhere above
  timeText.innerHTML = theTime;
}
setInterval(updateTime, 1000); //every 1000ms (1s)

function addWindowTapHandling(element) {
  element.addEventListener("mousedown", () =>
    handleWindowTap(element)
  )
}
//i think this function to initalize window does.. work?
function initializeWindow(elementId){
  var screen = document.querySelector("#" + elementId)
  addWindowTapHandling(screen)
  closeWindow(screen)
  dragElement(screen)
}

initializeWindow("arts")
//initializeWindow("photos")
// Make the DIV element draggable + "in-front-able"
dragElement(document.getElementById("welcome"));
dragElement(document.getElementById("arts"));
//dragElement(document.getElementById("photos"));

dragElement(document.querySelector("#arts"))
//dragElement(document.querySelector("#photos"))

addWindowTapHandling(document.getElementById("welcome"));
addWindowTapHandling(document.getElementById("arts"));
//addWindowTapHandling(document.getElementById("photos"));
// Step 1: Define a function called `dragElement` that makes an HTML element draggable.
function dragElement(element) {
  // Step 2: Set up variables to keep track of the element's position.
  var initialX = 0;
  var initialY = 0;
  var currentX = 0;
  var currentY = 0;

  // Step 3: Check if there is a special header element associated with the draggable element.
  if (document.getElementById(element.id + "header")) {
    // Step 4: If present, assign the `dragMouseDown` function to the header's `onmousedown` event.
    // This allows you to drag the window around by its header.
    document.getElementById(element.id + "header").onmousedown = startDragging;
  } else {
    // Step 5: If not present, assign the function directly to the draggable element's `onmousedown` event.
    // This allows you to drag the window by holding down anywhere on the window.
    element.onmousedown = startDragging;
  }

  // Step 6: Define the `startDragging` function to capture the initial mouse position and set up event listeners.
  function startDragging(e) {
    e = e || welcome.event;
    e.preventDefault();
    // Step 7: Get the mouse cursor position at startup.
    initialX = e.clientX;
    initialY = e.clientY;
    // Step 8: Set up event listeners for mouse movement (`elementDrag`) and mouse button release (`closeDragElement`).
    document.onmouseup = stopDragging;
    document.onmousemove = dragElement;
  }

  // Step 9: Define the `elementDrag` function to calculate the new position of the element based on mouse movement.
  function dragElement(e) {
    e = e || welcome.event;
    e.preventDefault();
    // Step 10: Calculate the new cursor position.
    currentX = initialX - e.clientX;
    currentY = initialY - e.clientY;
    initialX = e.clientX;
    initialY = e.clientY;
    // Step 11: Update the element's new position by modifying its `top` and `left` CSS properties.
    element.style.top = (element.offsetTop - currentY) + "px";
    element.style.left = (element.offsetLeft - currentX) + "px";
  }

  // Step 12: Define the `stopDragging` function to stop tracking mouse movement by removing the event listeners.
  function stopDragging() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}



/*
function openWindow(element) {
  element.style.display = "flex";
  biggestIndex++;
  element.style.zIndex = biggestIndex;
}

// Existing Functionality
function deselectIcon(element) {
  if (element) {
    element.classList.remove("photoApp");
  }
  selectedIcon = undefined;
}

*/

var welcomeScreen = document.querySelector("#welcome");
var topBar = document.querySelector("#topBar");

function closeWindow(element) {
  element.style.display = "none";
}
function openWindow(element) {
  element.style.display = "flex";
  biggestIndex++;
  element.style.zIndex = biggestIndex;
  topBar.style.zIndex = biggestIndex+1;
}

function handleWindowTap(element) {
  biggestIndex++;  // Increment biggestIndex by 1
  element.style.zIndex = biggestIndex;
  topBar.style.zIndex = biggestIndex+1;
}
//z index placing windows in front 
var biggestIndex = 1; // Initialize the biggest z-index value




//  close welcome window
var welcomeScreenClose = document.querySelector("#welcomeclose");
var welcomeScreenOpen = document.querySelector("#welcomeopen");
welcomeScreenClose.addEventListener("click", function() {
  closeWindow(welcomeScreen);
});
welcomeScreenOpen.addEventListener("click", function() {
  openWindow(welcomeScreen);
});


var selectedIcon = undefined;

function selectIcon(element){
  element.classList.add("artApp");
  selectedIcon = element;
}

function deselectIcon(element){
  element.classList.remove("artApp");
  selectedIcon=undefined;
}
/*
function selectIcon(element){
  element.classList.add("photoApp");
  selectedIcon = element;
}

function deselectIcon(element){
  element.classList.remove("photoApp");
  selectedIcon=undefined;
}
*/
function handleIconTap(element){
  if (element.classList.contains("selected")){
    deselectIcon(element);
  }
  else{
    selectIcon(element);
  }
  
}


// close photo app 

var artScreen = document.querySelector("#arts");
var artScreenClose = document.querySelector("#artClose");
var artScreenOpen = document.querySelector("#artOpen");
artScreenClose.addEventListener("click", function() {
    closeWindow(artScreen);
});
artScreenOpen.addEventListener("click", function() {
    openWindow(artScreen);
});

/*
var photoScreen = document.querySelector("#photos");
var photoScreenClose = document.querySelector("#photosClose");
var photoScreenOpen = document.querySelector("#photosOpen");
photoScreenClose.addEventListener("click", function() {
    closeWindow(photoScreen);
});
photoScreenOpen.addEventListener("click", function() {
    openWindow(photoScreen);
});
*/
//By the way, I took this background photo from my hotel window in Kuala Lumpur in Malaysia!

document.addEventListener("DOMContentLoaded", function () {
  var content = [
    {
      title: "Welcome",
      //date: "06/28/2023",
      content: `
       <h1 style=" font-size: 20px; ">Welcome to my Art Gallery!</h1>
      <p>Hello! Welcome to my art gallery! I have a couple categories on the left here that you can navigate to. Or you can read my enlightment and origin below!</p>
       <p>
         Art has always been a fun creative outlet for me! I love experimenting with design, mediums, and digital pieces. Every piece that I complete always has a satisfactory feeling to it. I've been interested in art since I was 9 years old. Since then, I look to always expand my humanistic side of me.
         Art makes me feel like the low tide on a beach against this rise of crashing waves in technology.
      </p>
      <p> 
      Currently, in my senior year of high school, I will do something I have never done before. Take art classes in high school. I discovered that life is full of arts. Even though I do not wish a career in art, I will dedicate my last years in high school towards my creative outlet with Ceramics and AP Art Portfolio :)
      </p>
       <p> But before you look into my current work.. I would like to show it's foundation. </p>
        <h5> Thats right, I began as a small inspired <a href ="https://lunime.itch.io/gacha-life">Gacha</a> Artist </h5>
       <image src="https://cloud-g4j8a1q4m-hack-club-bot.vercel.app/0image.png" style="width:400px; border-radius: 16px;"> 
       `
    },
    { //content works... add a pointer cursor and maybe a gap? 
      title: "Digital Art",
      
      content: `
      <h1 style=" font-size: 20px; ">The labriynth of Digital Pieces...</h1>
      <p> Hi! Take a scroll through some of my digital works!</p>
      <h3> Digital Paintings </h3>
      <div class="artPhotos">
        <img src="https://cloud-1h7xhplcy-hack-club-bot.vercel.app/0image.png">
        <img src="https://cloud-uac0nrq1m-hack-club-bot.vercel.app/0image.png">
        <img src="https://cloud-1h7xhplcy-hack-club-bot.vercel.app/2image.png">
        <img src="https://cloud-1h7xhplcy-hack-club-bot.vercel.app/3image.png">
        <img src="https://cloud-pq1gkoz9o-hack-club-bot.vercel.app/0image.png">
        <img src="https://cloud-uac0nrq1m-hack-club-bot.vercel.app/5image.png">
        
      </div>
      
      
      `
      
    },
    { 
      title: "Traditional Art",

      content: ` 
      <h1 style=" font-size: 20px; ">The Random Traditional Pieces</h1>
      <div class="artPhotos">
      <p>  </p>
      <img src="https://cloud-1h7xhplcy-hack-club-bot.vercel.app/4image.png">
        <img src="https://cloud-1h7xhplcy-hack-club-bot.vercel.app/5image.png">
        <img src="https://cloud-1h7xhplcy-hack-club-bot.vercel.app/6image.png">
        <img src="https://cloud-1h7xhplcy-hack-club-bot.vercel.app/7image.png">
        <img src= "https://cloud-1h7xhplcy-hack-club-bot.vercel.app/8image.png">
        <img src="https://cloud-uac0nrq1m-hack-club-bot.vercel.app/1image.png">
        <img src="https://cloud-uac0nrq1m-hack-club-bot.vercel.app/2image.png">
        <img src="https://cloud-uac0nrq1m-hack-club-bot.vercel.app/3image.png">
        <img src="https://cloud-uac0nrq1m-hack-club-bot.vercel.app/4image.png"> 
        
       
      </div>
      `
      
    },
    {
      title: "Graphic Designs",
      
      content: ` 
      <h1 style=" font-size: 20px; ">From Logos to Shirt Design!</h1>
      <p>  </p>
      <div class="artPhotos">
        <img src="https://cloud-uac0nrq1m-hack-club-bot.vercel.app/6image.png">
        <img src="https://cloud-uac0nrq1m-hack-club-bot.vercel.app/7image.png">
        <img src="https://cloud-uac0nrq1m-hack-club-bot.vercel.app/8image.png">
        <img src="https://cloud-uac0nrq1m-hack-club-bot.vercel.app/9image.png">
        <img src="https://cloud-57yy04ypm-hack-club-bot.vercel.app/0image.png">
        <img src=" https://cloud-uac0nrq1m-hack-club-bot.vercel.app/0image.png">
        <img src="https://cloud-57yy04ypm-hack-club-bot.vercel.app/1image.png">
        <img src="https://cloud-57yy04ypm-hack-club-bot.vercel.app/2image.png">
        <img src="https://cloud-57yy04ypm-hack-club-bot.vercel.app/3image.png">
        <img src="https://cloud-57yy04ypm-hack-club-bot.vercel.app/4image.png">
        <img src="https://cloud-57yy04ypm-hack-club-bot.vercel.app/5image.png">
        <img src="https://cloud-57yy04ypm-hack-club-bot.vercel.app/6image.png">
        <img src="https://cloud-57yy04ypm-hack-club-bot.vercel.app/7image.png">
        <img src="https://cloud-57yy04ypm-hack-club-bot.vercel.app/8image.png">
        <img src="https://cloud-57yy04ypm-hack-club-bot.vercel.app/9image.png">
        <img src="https://cloud-67kw82iv3-hack-club-bot.vercel.app/6a4_-_1.png">
         <img src="https://cloud-67kw82iv3-hack-club-bot.vercel.app/5a4_-_2.png">
          <img src="https://cloud-67kw82iv3-hack-club-bot.vercel.app/4image.png">
           <img src="https://cloud-67kw82iv3-hack-club-bot.vercel.app/0image.png">
            <img src="https://cloud-67kw82iv3-hack-club-bot.vercel.app/1image.png">
             <img src="https://cloud-67kw82iv3-hack-club-bot.vercel.app/2image.png">
              <img src="https://cloud-67kw82iv3-hack-club-bot.vercel.app/3image.png">
      
      </div>
      `
    },
    
    
  ]


  function setArtGalleryContent(index){
    var homeContent = document.querySelector("#homeContent");
    homeContent.innerHTML = content[index].content;
    homeContent.style.display='block';
  }
  setArtGalleryContent(0)

  function addToNav(index) { //display on the side bar
    
    var nav = document.querySelector("#nav"); //sidebar is the navigation
    var note = content[index];
    var newDiv = document.createElement("div");

    //diff bg colors
    var backgroundColors = ["#f2f2f2", "#e6f7ff", "#ffe6e6", "#e6ffe6"];
    var bgColor = backgroundColors[index % backgroundColors.length];
    newDiv.innerHTML = `
        <div style="background-color: ${bgColor}; padding: 10px; margin-bottom: 10px; cursor: pointer; border-radius: 5px;">
          <p style="margin: 0; text-decoration: underline;">${note.title}</p>
        </div>
      `;

    newDiv.addEventListener("click",function() {
      setArtGalleryContent(index);
    });

    nav.appendChild(newDiv);
  }
  for (let i = 0; i<content.length; i++){
    addToNav(i)
  }
});
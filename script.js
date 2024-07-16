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

initializeWindow("photos")

// Make the DIV element draggable + "in-front-able"
dragElement(document.getElementById("welcome"));
dragElement(document.getElementById("photos"));
dragElement(document.querySelector("#photos"))
addWindowTapHandling(document.getElementById("welcome"));
addWindowTapHandling(document.getElementById("photos"));
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


var selectedIcon = undefined

function selectIcon(element){
  element.classList.add("photoApp");
  selectedIcon = element;
}

function deselectIcon(element){
  element.classList.remove("photoApp");
  selectedIcon=undefined;
}

function handleIconTap(element){
  if (element.classList.contains("selected")){
    deselectIcon(element);
  }
  else{
    selectIcon(element);
  }
  
}
// close photo app 

var photoScreen = document.querySelector("#photos");
var photoScreenClose = document.querySelector("#photoClose");
var photoScreenOpen = document.querySelector("#photoOpen");
photoScreenClose.addEventListener("click", function() {
    closeWindow(photoScreen);
});
photoScreenOpen.addEventListener("click", function() {
    openWindow(photoScreen);
});



var content = [

  {
    title: "Welcome",
    date: "06/28/2023",
    content: `
     <h1 style=" font-size: 20px; ">Welcome to my Art Gallery!</h1>
    <p>Hello! Welcome to my art gallery! I have a couple categories on the left here that you can navigate to. </p>
     <p>Art has always been a fun creative outlet for me! I love experimenting with design and photography and digital pieces. Every piece that I complete always has a satisfactory feeling to it. By the way, I took this background photo from my hotel window in Kuala Lumpur in Malaysia! testtttttttttttttttttttttttttttt tttttttttttttttttttttttt tttttttttttttttttttttttttttttttttttttttttttt ttttttttttttt tttttttttttttttttttttttttttttttttttttttttttt tttttttttttttttttttttttttttttttttttttttttttt v </p>`
  }
]

function setArtGalleryContent(index){
  var homeContent = document.querySelector("#homeContent")
  homeContent.innerHTML = content[index].content
}
setArtGalleryContent(0)

function addToNav(index) { 
  var nav = document.querySelector("#nav"); //sidebar is the navigation
  var note = content[index];
  var newDiv = document.createElement("div");
  newDiv.innerHTML = `
  <p style= "margin: 0px;" >
    ${note.title}
  </p>
  <p style= "font-size: 16px; margin:0px;">
    ${note.date}
  </p>
  `;
  
  newDiv.addEventListener("click",function() {
    setArtGalleryContent(index);
  });
  
  nav.appendChild(newDiv);
}
for (let i = 0; i<content.length; i++){
  addToNav(i)
}
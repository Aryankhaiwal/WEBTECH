var slides = document.querySelectorAll('.slide');
var btns = document.querySelectorAll('.btn');
let currentSlide = 1;

// Javascript for image slider manual navigation
var manualNav = function(manual){
  slides.forEach((slide) => {
    slide.classList.remove('active');

    btns.forEach((btn) => {
      btn.classList.remove('active');
    });
  });

  slides[manual].classList.add('active');
  btns[manual].classList.add('active');
}

btns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    manualNav(i);
    currentSlide = i;
  });
});

// Javascript for image slider autoplay navigation
var repeat = function(activeClass){
  let active = document.getElementsByClassName('active');
  let i = 1;

  var repeater = () => {
    setTimeout(function(){
      [...active].forEach((activeSlide) => {
        activeSlide.classList.remove('active');
      });

    slides[i].classList.add('active');
    btns[i].classList.add('active');
    i++;

    if(slides.length == i){
      i = 0;
    }
    if(i >= slides.length){
      return;
    }
    repeater();
  }, 10000);
  }
  repeater();
}
repeat();

//for top toggle menu

var MenuItems=document.getElementById("MenuItems");
MenuItems.style.maxHeight="0px";
function menutoggle(){
  if(MenuItems.style.maxHeight=="0px")
  {
    MenuItems.style.maxHeight="200px";
  }
  else
  {
    MenuItems.style.maxHeight="0px";
  }
}

/* 
This code defines a few functions that work together to create an image slider and a toggle menu for a website.

The first part of the code selects all the elements with the class "slide" and "btn" using the document.querySelectorAll() method. It also sets the initial value of the currentSlide variable to 1.

The manualNav function takes a parameter manual, which is the index of the slide to display. It removes the "active" class from all slides and buttons, then adds the "active" class to the slide and button at the specified index.

The code then attaches an event listener to each button using the forEach() method. When a button is clicked, it calls the manualNav function with the index of the clicked button as the argument, and updates the value of currentSlide to the same index.

The repeat function is used for automatic navigation of the slider. It takes an argument activeClass, which is the class name used to mark the currently active slide. It selects the current active slide and sets an index variable i to 1. It defines a recursive function repeater that is called after a delay of 10 seconds. The repeater function removes the "active" class from the current active slide and adds it to the next slide in the sequence. It also updates the i variable to point to the next slide. If i is equal to the number of slides, it resets i to 0.

The final part of the code is for the toggle menu. It selects the menu items using the getElementById() method and sets their maximum height to 0. The menutoggle function toggles the height of the menu items between 0 and 200 pixels when called. When the menu is closed (height is 0px), clicking the menu toggle button opens the menu by setting the max-height to 200px. When the menu is open (height is 200px), clicking the menu toggle button closes the menu by setting the max-height back to 0px.
*/
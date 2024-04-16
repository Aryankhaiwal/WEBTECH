

var glides = document.querySelectorAll('.glide');
var images = document.querySelectorAll('.image');
let currentglide = 1;

// Javascript for image glider manual navigation
var manualNav = function(manual){
  glides.forEach((glide) => {
    glide.classList.remove('active');

    images.forEach((image) => {
      image.classList.remove('active');
    });
  });

  glides[manual].classList.add('active');
  images[manual].classList.add('active');
}

images.forEach((image, i) => {
  image.addEventListener("click", () => {
    manualNav(i);
    currentglide = i;
  });
});

/*
This code adds functionality to a gallery of images that are displayed using a "glide" effect. The gallery consists of multiple images, and there is a separate glide effect for each image.

The code allows for manual navigation of the images in the gallery. When an image is clicked, it activates a function called "manualNav". This function takes an argument called "manual", which is the index of the image that was clicked.

The "manualNav" function removes the "active" class from all glides and images in the gallery, and then adds the "active" class to the glide and image that corresponds to the index passed as an argument.

Additionally, the code keeps track of the current glide using a variable called "currentglide", which is updated every time an image is clicked.
*/



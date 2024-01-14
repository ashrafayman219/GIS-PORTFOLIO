//   // JavaScript for the image slider
//   const sliderContent = document.querySelector('.slider-content');
//   const sliderImages = document.querySelectorAll('.slider-image');
//   let currentIndex = 0;

//   function showImage(index) {
//     const translateValue = -index * 100 + '%';
//     sliderContent.style.transform = 'translateX(' + translateValue + ')';
//   }

//   function nextSlide() {
//     currentIndex = (currentIndex + 1) % sliderImages.length;
//     showImage(currentIndex);
//   }

//   function prevSlide() {
//     currentIndex = (currentIndex - 1 + sliderImages.length) % sliderImages.length;
//     showImage(currentIndex);
//   }

//   // Optional: Add event listeners for arrow keys or touch gestures
//   document.addEventListener('keydown', function (event) {
//     if (event.key === 'ArrowRight') {
//       nextSlide();
//     } else if (event.key === 'ArrowLeft') {
//         prevSlide();
//       }
//   });


// // blog modal script
// document.addEventListener('DOMContentLoaded', function () {
//   var blogTab = document.getElementById('blog-tab');
//   var modal = document.getElementById('blog-modal');
//   var closeBtn = document.getElementsByClassName('close')[0];

//   blogTab.addEventListener('click', function () {
//     modal.style.display = 'block';
//   });

//   closeBtn.addEventListener('click', function () {
//     modal.style.display = 'none';
//   });

//   window.addEventListener('click', function (event) {
//     if (event.target == modal) {
//       modal.style.display = 'none';
//     }
//   });
// });

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));

$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip();   
});

//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}














// card filp

// <!-- NO JS VERSION: https://codepen.io/nicolaskadis/full/brQEOd/ -->

// $(document).ready(function() {
//   var front = document.getElementsByClassName("front");
//   var back = document.getElementsByClassName("back");

//   var highest = 0;
//   var absoluteSide = "";

//   for (var i = 0; i < front.length; i++) {
//     if (front[i].offsetHeight > back[i].offsetHeight) {
//       if (front[i].offsetHeight > highest) {
//         highest = front[i].offsetHeight;
//         absoluteSide = ".front";
//       }
//     } else if (back[i].offsetHeight > highest) {
//       highest = back[i].offsetHeight;
//       absoluteSide = ".back";
//     }
//   }
//   $(".front").css("height", highest);
//   $(".back").css("height", highest);
//   $(absoluteSide).css("position", "absolute");
// });





// new WOW().init();

// var a = 0;
// $(window).scroll(function () {
//   var oTop = $("#counter").offset().top - window.innerHeight;
//   if (a == 0 && $(window).scrollTop() > oTop) {
//     $(".counter-value").each(function () {
//       var $this = $(this),
//         countTo = $this.attr("data-count");
//       $({
//         countNum: $this.text(),
//       }).animate(
//         {
//           countNum: countTo,
//         },

//         {
//           duration: 2000,
//           easing: "swing",
//           step: function () {
//             $this.text(Math.floor(this.countNum));
//           },
//           complete: function () {
//             $this.text(this.countNum);
//             //alert('finished');
//           },
//         }
//       );
//     });
//     a = 1;
//   }
// });

// const swiper = new Swiper(".swiper", {
//   // Optional parameters
//   direction: "horizontal",
//   loop: true,
//   autoplay: true,

//   // Responsive breakpoints
//   breakpoints: {
//     // when window width is >= 320px
//     320: {
//       slidesPerView: 2,
//       spaceBetween: 20,
//     },
//     // when window width is >= 480px
//     480: {
//       slidesPerView: 2,
//       spaceBetween: 30,
//     },
//     // when window width is >= 640px
//     640: {
//       slidesPerView: 3,
//       spaceBetween: 40,
//     },
//   },
//   // If we need pagination
//   pagination: {
//     el: ".swiper-pagination",
//   },

//   // Navigation arrows
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },

//   // And if we need scrollbar
//   scrollbar: {
//     el: ".swiper-scrollbar",
//   },
// });

// Declare a variable to track if the popup has been shown
// let isPopupShown = false;

// Get the popup and the close button
// let popup = document.getElementById("exitPopup");
// let closeBtn = document.getElementById("closePopup");

// let popupImg = document.getElementById("popupImg");

// // Check if the popup has been shown
// if (!isPopupShown) {
//   // Show the popup when the user tries to leave
//   document.addEventListener("mouseout", function (event) {
//     if (!event.toElement && !event.relatedTarget) {
//       // Only trigger when mouse is leaving the window
//       if (!isPopupShown) {
//         popup.style.display = "flex";
//         isPopupShown = true; // Update the variable to mark that the popup has been shown
//       }
//     }
//   });
// }

// // Close the popup when the close button is clicked
// closeBtn.onclick = function () {
//   popup.style.display = "none";
// };
// popupImg.onclick = function () {
//   popup.style.display = "none";
// };

// // You can also close the popup when clicking outside of the content
// window.onclick = function (event) {
//   if (event.target === popup) {
//     popup.style.display = "none";
//   }
// };

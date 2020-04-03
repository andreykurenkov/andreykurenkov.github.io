/*! Responsive Menu */
// For categorical and chronological writing
$(function() {
    var currentDisplay = $(".page-content > div:visible");
    document.querySelector("#writingToggleForm").addEventListener("change", function(event) {
        console.log("Toggling writing display!");
        currentDisplay.fadeToggle(function() {
            currentDisplay = $(event.target.getAttribute("data-st-contentid"));
            currentDisplay.fadeToggle();
        });
    });
})
/*! Plugin options and other jQuery stuff */

// FitVids options
$(function() {
	$("article").fitVids();
});

// Table of Contents toggle
$(function() {
  $(".toc h3").click(function () {
    $("#drawer").toggleClass("js-hidden");
  });
});

//$('#500px_gallery').easyPaginate({
//	paginateElement: 'a',
//	elementsPerPage: 16,
//	effect: 'fade'
//});

// Add lightbox class to all image links
$("a[href$='.jpg'],a[href$='.jpeg'],a[href$='.JPG'],a[href$='.png'],a[href$='.gif']").addClass("image-popup");

var bigfoot = $.bigfoot(
	{
	actionOriginalFN: "ignore",
	positionContent: "false",
	useFootnoteOnlyOnce: "false"
	}
);

// Magnific-Popup options
$(document).ready(function() {
  $('.popup-gallery').magnificPopup({
    delegate: 'a',
    cursor: 'mfp-zoom-out-cur',
    type: 'image',
    tLoading: 'Loading image...',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      tError: 'Image could not be loaded.',
    },
    removalDelay: 300, // Delay in milliseconds before popup is removed
    // Class that is added to body when popup is open. 
    // make it unique to apply your CSS animations just to this exact popup
    mainClass: 'mfp-fade'
  });
});

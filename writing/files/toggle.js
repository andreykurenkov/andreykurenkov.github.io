$(function() {
    var currentDisplay = $("#index > div:visible");
    document.querySelector("#writingToggleForm").addEventListener("change", function(event) {
        console.log("Toggling writing display!");
        currentDisplay.fadeToggle(function() {
            currentDisplay = $(event.srcElement.getAttribute("data-st-contentid"));
            currentDisplay.fadeToggle();
        });
    });
})

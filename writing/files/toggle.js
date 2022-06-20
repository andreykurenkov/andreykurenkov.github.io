function change(event){
   var currentDisplay = $("#index > div:visible");
      console.log("Toggling writing display!");
      currentDisplay.fadeToggle(function() {
          currentDisplay = $(event.srcElement.getAttribute("data-st-contentid"));
          currentDisplay.fadeToggle();
      });
};
$(function() {
    var currentDisplay = $("#index > div:visible");
    console.log(document.querySelector(".form"));
    document.querySelector(".form").addEventListener("change",change);
})

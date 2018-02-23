var displayingCategorical = true;
$(function() {
    var form = document.querySelector("#writingToggleForm");
    form.addEventListener("change", function(event) {
        console.log("Toggling writing display!");
        if(displayingCategorical){
          $('#categorical').fadeToggle(function() {
              $('#chronological').fadeToggle(function() {
              });
          });
        }else{
          $('#chronological').fadeToggle(function() {
              $('#categorical').fadeToggle(function() {
              });
          });
        }
        displayingCategorical = !displayingCategorical;
    });
    $("#chronological").fadeToggle(function() {
         $("#chronological").css("visibility", "visible");
         $("#chronological").css("position", "static");
    });
    /*Reset selection*/
    form.reset();
});


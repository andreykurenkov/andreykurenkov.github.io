var displayingCategorical = true;
$(function() {
    var form = document.querySelector("#writingToggleForm");
    form.addEventListener("change", function(event) {
        console.log("Toggling writing display!");
        if(displayingNews){
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
    $("#chronological").fadeOut();

    /*Reset selection*/
    form.reset();
});


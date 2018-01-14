var displayingCategorical = true;
$(function() {
    var form = document.querySelector("#writingToggleForm");
    form.addEventListener("change", function(event) {
        console.log("Toggling writing display!");
        if(displayingCategorical){
            $("#categorical").fadeOut();
            $("#chronological").css("visibility", "visible");
            $("#chronological").css("position", "static");
            $("#categorical").css("position", "absolute");
            $("#chronological").fadeIn();
        }else{
            $("#chronological").fadeOut();
            $("#chronological").css("position", "absolute");
            $("#categorical").css("position", "static");
            $("#categorical").fadeIn();
        }
        displayingCategorical = !displayingCategorical;
    });
    $("#chronological").fadeOut();

    /*Reset selection*/
    form.reset();
});


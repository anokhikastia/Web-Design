( function( $ ) {
    $(document).ready(function (){
        $("#strip-button").on('click', function() {
            $(".outfit").fadeOut();
            $("#body").fadeIn();
        });
        $(".outfit-selection").click(function() {
            $("#body").hide();
            $(".outfit").hide();
            var num = $(this).attr("id").split("")[1];
            $("#o" + num).show();
        }); 
    });
} )( jQuery );
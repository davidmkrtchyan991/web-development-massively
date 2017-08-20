$(document).ready(function() {
    $(".generic-nav").click(function() {
        $(".massively").hide();
        $(".elements").hide();
        $(".generic").show();                    
    });
     $(".elements-nav").click(function() {
        $(".massively").hide();
        $(".generic").hide();
        $(".elements").show();        
    });


     /*Navigation icon functionality*/
     $(".nav-group").click(function() {
        $(".navigation").css("display","block");
        $(".navigation").css("right","0");
     });
     $(".close-cross").click(function() {
        $(".navigation").css("right","-100%");
     });

});
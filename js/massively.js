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
});
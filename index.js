$(document).ready(function(){
    // alert("start here");
    $(".dropdown").on("click","#ddmenu1", function(evt){
        alert("here i am");
        //evt.stopPropagation();
        //evt.preventDefault();
        $(this).Toggle();
    });
    
    
    
    
});
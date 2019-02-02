$( document ).ready(function() {

    //projit vsechny checkboxy a zaskrtnout je nebo naopak podle atributu "selected"
    $("input[type=checkbox], input[type=radio]").each(function(){
        var isSelected = $(this).attr("checked");
        (typeof isSelected == typeof undefined || isSelected == false) 
        	? $(this).prop( "checked", false ) 
        	: $(this).prop( "checked", true )
    });
    
});

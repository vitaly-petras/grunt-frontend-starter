$( document ).ready(function() {

    //projit vsechny checkboxy a zaskrtnout je nebo naopak podle atributu "selected"
    $("input[type=checkbox], input[type=radio]").each(function(){
        var $this = $(this),
            isSelected = $this.attr("checked");

        if (typeof isSelected == typeof undefined || isSelected == false) $this.prop( "checked", false );
        else $this.prop( "checked", true );
    });

    fixedTopBar();

    
});
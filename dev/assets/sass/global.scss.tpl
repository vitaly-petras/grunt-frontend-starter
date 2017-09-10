/*! 
==============================================================

Project  	: <%= project.project.name %>
Author  	: <%= project.project.author %>
Author URI	: www.html-factory.cz
Created 	: <%= grunt.template.today("dd.mm.yyyy") %>

----------------------------------------
---------------- POZOR! ----------------
----------------------------------------

Stylopis byl vygenerovan pomoci CSS preprocesoru.
Nikdy needitujte primo .css soubor!
Viz readme.txt

============================================================== 
*/

// ************************************************ //
// 1. Core  
// ************************************************ //
@import 						"1_core/1_variables";
@import 						"1_core/2_mixins"; 
@import 						"1_core/3_used-fonts";
@import 						"1_core/4_reset";
@import 						"1_core/5_typography";
@import 						'1_core/keyframes';
@import 						"1_core/other-important";

// core forms
// ------------------------------------------------ 
@import 						"1_core/forms/buttons";
@import 						"1_core/forms/inputs";
@import 						"1_core/forms/labels";
@import 						"1_core/forms/main";
//@import 						"1_core/forms/select";
//@import 						"1_core/forms/validation";




// ************************************************ //
// 2. Libs  
// ************************************************ //
//@import 						"2_libs/animate";
//@import 						"2_libs/slick";



// ************************************************ //
// 3. Components  
// ************************************************ //
// box
// ------------------------------------------------ 
@import 						"3_components/empty"; //smazat nebo nahradit



// ************************************************ //
// 4 .Helpers  
// ************************************************ //
// pomocne tridy ve vsech velikostech
// ------------------------------------------------ 
@import 						"4_helpers/1_helpers";


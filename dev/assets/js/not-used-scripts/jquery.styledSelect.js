/*
 * jQuery Styled Select Boxes
 * version: 1.1 (2009/03/24)
 * @requires jQuery v1.2.6 or later
 *
 * Examples and documentation at: http://code.google.com/p/lnet/wiki/jQueryStyledSelectOverview
 *
 * Copyright (c) 2008 Lasar Liepins, liepins.org, liepins@gmail.com
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 *
 */

jQuery.fn.styledSelect = function(settings) {
	settings = jQuery.extend({
		selectClass: 'styledSelect',
		openSelectClass: 'open',
		optionClass: 'option',
		selectedOptionClass: 'selected',
		closedOptionClass: 'closed',
		firstOptionClass: 'first',
		lastOptionClass: 'last',
		zIndexApply: true,
		zIndexStart: 250,
		deactiveOnBackgroundClick: true
	}, settings);	

	var currentZIndex = settings.zIndexStart;

	this.each(function() {
		var s = jQuery(this);
		var cs = jQuery('<div></div>').attr('class', settings.selectClass);
		if(settings.zIndexApply) { cs.css('z-index', currentZIndex-2); };
		var csl = jQuery('<ul></li>');
		if(settings.zIndexApply) { csl.css('z-index', currentZIndex-1); };
		//var variableWidth = s.outerWidth();
		cs.append(csl);
		s.hide(0).after(cs);
		cs = s.next();
		

		jQuery('option', s).each(function() {
			if(jQuery(this).attr('value')==undefined) {
				jQuery(this).attr('value', jQuery(this).text());
			}
		});

		var closedSelect = function() {

			jQuery('ul', cs).html('');
			addOption(s.val(), jQuery(':selected', s).text(), clickSelect);
			cs.removeClass(settings.openSelectClass);
			jQuery('ul li', cs).removeClass(settings.selectedOptionClass).removeClass(settings.optionClass).addClass(settings.closedOptionClass);

			//pokud je aktualne vybrany option s atributem disabled pridej tridu disabled na li 
			var checkDisabled = jQuery(':selected', s).attr("disabled");
			if (typeof checkDisabled !== typeof undefined && checkDisabled !== false) 
				jQuery('ul li', cs).addClass("disabled");

			//pokud existuje data-url atribut vloz obrazek do li
			var optUrl = jQuery(':selected', s).attr("data-url");
			if (typeof optUrl != typeof undefined || optUrl == true)
				jQuery('ul li', cs).addClass("with-image").prepend("<div class='image'><img src='"+optUrl+"' ></div>");

			$(cs).css("width", "");
			

			if(settings.deactiveOnBackgroundClick) {
				$(document).unbind('mousedown', closedSelect);
				cs.unbind('mousedown');
			}
		};

		var clickSelect = function() {
			//$(cs).css("width", variableWidth);

			//pokud select ma disabled atribut neotevirej select
			if (!typeof s.attr("disabled") == typeof undefined || !s.attr("disabled") == false) return;

			jQuery('ul', cs).empty();
			jQuery('option', s).each(function(i) { 
				var disabled = jQuery(this).attr("disabled");
				//pokud tento option ma disabled pak ho nevypisuj v seznamu
				if (typeof disabled !== typeof undefined && disabled !== false) return;
				addOption(jQuery(this).val(), jQuery(this).text(), clickOption, jQuery(this).attr("data-url")); 
			});
			cs.addClass(settings.openSelectClass);
			jQuery('ul li:first-child', cs).addClass(settings.firstOptionClass);
			jQuery('ul li:last-child', cs).addClass(settings.lastOptionClass);
			if(settings.deactiveOnBackgroundClick) {
				$(document).bind('mousedown', closedSelect);
				cs.bind('mousedown', function(){return false;});
			}
		};

		var clickOption = function() {
			var val=jQuery(this).attr('rel');
		  s.val(val); 
		  s.change(); // CHANGED LINE
		};

		var addOption = function(optVal, optName, callBack, optUrl) {
			
      		var cso = jQuery('<li></li>').attr('rel', optVal).text(optName).click(callBack).addClass(settings.optionClass);
			if(settings.zIndexApply) { cso.css('z-index', currentZIndex); };

			//pokud existuje data-url atribut vloz obrazek do li
			if (typeof optUrl != typeof undefined || optUrl == true)
				cso.addClass("with-image").prepend("<div class='image'><img src='"+optUrl+"' ></div>");

			// predani onchange, prepis this.value na realnou hodnotu
			/*      if(s.val() != optVal && onchange_str != null) { 
          //alert(onchange_str);
          //cso.bind('onchange',onchange_str.replace('this.value',optVal));
          cso.attr('onclick', onchange_str.replace('this.value',optVal));
       		}*/
      		if(s.val()==optVal) {
				cso.addClass(settings.selectedOptionClass);
			};
			jQuery('ul', cs).append(cso);
		};

		closedSelect();
		s.change(closedSelect);
		currentZIndex -= 3;
	});

	return this;
};

$( document ).ready(function() {

	//styled select
    $('select').each(function(event){
		var $this = $(this),
			className = $this.attr("class"),
			attributes = $this.prop("attributes");

		if( $this.find("[disabled]").length>0 )
			$this[0].selectedIndex=$this.find("[disabled]").first().index();

      	if (typeof className == typeof undefined || className == false) className = "select";

		$this.styledSelect({
	     	selectClass: className
	    });

		//kliknuti na select ale ne li select zavre nebo otevre (fixnuti kliknuti na sipku
	    var $ul = $this.next();
		// loop through <select> attributes and apply them on <div>
		$.each(attributes, function() {
		    $ul.attr(this.name, this.value);
		});

		$ul.show();
	});
});


/*--------------------------------------------------------------------------*
 *  generalTab.js
 *  MIT-style license.
 *  2013 Komei Otake
 *--------------------------------------------------------------------------*/
;(function($){
	$.fn.generalTab = function(config){
		var defaults = {
			navigationClass:".generalTabNavigation",
			panelClass:".generalTabBody"
		};
		var options = $.extend(defaults,config);
		var generalTabNav   = $($(options.navigationClass).find("a"));
		var generalTabPanel = $(options.panelClass);

		generalTabPanel.not(".active").hide();

		this.each(function() {
			$(this).find(generalTabNav).on('click', function(ev) {
				$(generalTabPanel).hide();
				$($(this).attr('href')).show();
				return false;
			});
		});
	return this;
	};
})(jQuery);
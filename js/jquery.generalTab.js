/*--------------------------------------------------------------------------*
 *  generalTab.js
 *  MIT-style license.
 *  2013 Komei Otake
 *--------------------------------------------------------------------------*/
;(function($){
	$.fn.generalTab = function(){
		var generalTabNav   = $(".js-generalTabNavigation a");
		var generalTabPanel = $(".js-generalTabBody section");

		generalTabPanel.not(".active").hide();
		generalTabNav.on('click', function(){
			generalTabPanel.hide();
			$($(this).attr('href')).show();
			$(this).addClass('active');
			return false;
		});
	return this;
	};
})(jQuery);
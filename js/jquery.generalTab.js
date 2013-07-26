/*--------------------------------------------------------------------------*
 *  generalTab.js
 *  MIT-style license.
 *  2013 Komei Otake
 *--------------------------------------------------------------------------*/
;(function($){
	$.fn.generalTab = function(){
		this.each(function() {
			$(this).find(".js-generalTabNavigation a").on('click', function(ev) {
				$($(this).attr('href')).parent().children().hide();
				$($(this).attr('href')).show();
				return false;
			});
		});
	return this;
	};
})(jQuery);
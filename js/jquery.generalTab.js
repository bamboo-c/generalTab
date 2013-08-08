/*--------------------------------------------------------------------------*
 *  generalTab.js
 *  MIT-style license.
 *  2013 Komei Otake
 *--------------------------------------------------------------------------*/
;(function($){
	$.fn.generalTab = function(config){
		var options = $.extend({
			navigationClass:".generalTabNavigation",
			panelClass:".generalTabBody"
		}, config);

		this.each(function() {
			var $self = $(this);
			$self.find(options.navigationClass).on('click', 'a', function(ev) {
				$self.find(options.panelClass).hide();
				$($(this).attr('href')).show();
				return false;
			}).find('.default').click();
		});
	return this;
	};
})(jQuery);
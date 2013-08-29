/*--------------------------------------------------------------------------*
*  generalTab.js
*  MIT-style license.
*  2013 Komei Otake
*-------------------------------------------------------------------------
*/
;(function($){
	$.fn.generalTab = function(config){
		//デフォルトオプションの指定
		var options = $.extend({
			//タブのナビゲーションのclass
			navigationClass:'.generalTabNavigation',
			//タブのパネルのclass
			panelClass:'.generalTabBody'
		}, config);

		this.each(function() {
			var $self = $(this);
			//個別のタブパネルのナビゲーションのa要素がclickされたら
			$self.find(options.navigationClass).on('click', 'a', function(ev) {
				//個別のタブパネルのパネルを非表示
				$self.find(options.panelClass).hide();
				//clickされた要素のhrefと同じidを表示
				$($(this).attr('href')).show();
				return false;
				//.defaultが付いた要素にはclickイベントを発火させる
			}).find('.default').click();

			//defaultの指定がなかったら
			if(!$self.find(options.navigationClass).hasClass('.default')) {
				//パネルを全部消す
				$self.find(options.panelClass).hide();
				//最初のパネルを表示
				$self.find(options.panelClass).eq(0).show();
			}
		});
	return this;
	};
})(jQuery);
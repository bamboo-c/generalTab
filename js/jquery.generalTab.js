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
			var $navigationClass = $self.find(options.navigationClass);

			//個別のタブパネルのナビゲーションのa要素がclickされたら
			$navigationClass.on('click', 'a', function(ev) {
				//個別のタブパネルのパネルを非表示
				$self.find(options.panelClass).hide();
				//clickされた要素のhrefと同じidの要素を表示
				$($(this).attr('href')).show();
				return false;
			});

			//.defaultを$defaultTabに代入
			var $defaultTab = $navigationClass.find(".default");
			if($defaultTab.length === 0) {
				//最初のa要素を$defaultTabに代入
				$defaultTab = $navigationClass.find("a").eq(0);
			}
			//$defaultTabのclickイベントを発火
			$defaultTab.click();
		});
	return this;
	};
})(jQuery);
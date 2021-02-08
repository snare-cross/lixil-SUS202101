
$jq183(function(){
	$jq183("head").append("<link>");
	css = $jq183("head").children(":last");
	css.attr({
		rel: "stylesheet",
		type: "text/css",
		href: "/common/css/modal.css"
	});

	// モーダル用のHTMLの追加
	modalHtml = '<div id="modalMovie"><div class="modalBackground"></div><div class="modalContainer"></div></div>';
	$jq183('body').append(modalHtml);



	$jq183('.box-movie a').bind('click',function()
	{
		var noNextViewFlg = 0, //0:次回も表示 1;次回非表示
				userAgent    = window.navigator.userAgent.toLowerCase(),
				appVersion   = window.navigator.appVersion.toLowerCase(),
				modalOnFlg   = 0,
				scrollHeight = $jq183(document).height(),
				windowHeight = $jq183(window).height(),
				$window      = $jq183(window),
				self         = $jq183(this),
				imgElem      = self.find('img'),
				imgWidth     = imgElem.attr('width'),
				imgHeight    = imgElem.attr('height'),
				sectionElem  = self.parents('.section');

		$jq183("#modalMovie .modalContainer").css({'width':imgWidth+'px','height':imgHeight+'px'});

		//--------------------------------------------------------------------
		// モーダルコンテンツの位置初期設定
		//--------------------------------------------------------------------
		adjustCenter("#modalMovie .modalContainer");

		//--------------------------------------------------------------------
		// モーダルのフェードイン
		//--------------------------------------------------------------------
		$jq183("#modalMovie").fadeIn(250,function()
		{
			onComplete();
		});

		//--------------------------------------------------------------------
		// ウィンドウリサイズ時の位置調整
		//--------------------------------------------------------------------
		$jq183(window).resize(function()
		{
			adjustCenter("#modalMovie .modalContainer");
			windowHeight = $jq183(window).height();
		});

		//--------------------------------------------------------------------
		// モーダルを閉じる処理
		//--------------------------------------------------------------------
		$jq183("#modalMovie .modalBackground").click(function()
		{
			closeMovie();
		});

		return false;

		//--------------------------------------------------------------------
		// モーダル表示完了時処理
		//--------------------------------------------------------------------
		function onComplete()
		{
			displayModal(true);


			// 分岐か何かが必要。

			// 動画用タグ

			var movieHtml = '<div class="movieClass"><iframe width="'+imgWidth+'" height="'+imgHeight+'" src="//www.youtube.com/embed/yYH_KeMoQYs" frameborder="0" allowfullscreen></iframe></div>';
			closeBtn = '<a href="javascript:void(0)" stype="color:#FFF" class="movieClose">閉じる</a>';


			// タグをセット
			$jq183("#modalMovie .modalContainer").append(movieHtml);
			$jq183("#modalMovie .modalContainer").append(closeBtn);


			$jq183("#modalMovie .modalContainer").bind('click',function()
			{
				closeMovie();
			});
		}

		function closeMovie()
		{
			displayModal(false);
			$jq183("#modalMovie .modalContainer .movieClass").remove();
			$jq183("#modalMovie .modalContainer .movieClose").remove();
		}



		//--------------------------------------------------------------------
		// モーダル開閉クラス
		//--------------------------------------------------------------------
		function displayModal(sign)
		{

			if (sign)
			{
				$jq183("#modalMovie .modalContainer").fadeIn(250,function()
				{
					adjustCenter("#modalMovie .modalBackground");
					adjustCenter("#modalMovie .modalContainer");
					modalOnFlg = 1;
				});
			}
			else
			{
				modalOnFlg = 0;
				$jq183("#modalMovie").fadeOut(250);
				$jq183("#modalMovie .modalContainer").fadeOut(250);
			}
		}


		//--------------------------------------------------------------------
		// モーダルコンテンツ位置の調整用関数
		//--------------------------------------------------------------------
		function adjustCenter(target)
		{
			var margin_top = ($jq183(window).height() - $jq183(target).height()) / 2;
			var margin_left = ($jq183(window).width() - $jq183(target).width()) / 2;
			$jq183(target).css( {
				top : margin_top + "px",
				left : margin_left + "px"
			});
		}
	});


});

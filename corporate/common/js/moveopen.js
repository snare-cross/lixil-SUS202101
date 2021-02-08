
$jq183(function(){
	$jq183("head").append("<link>");
	css = $jq183("head").children(":last");
	css.attr({
		rel: "stylesheet",
		type: "text/css",
		href: "/common/css/modal.css"
	});

	// ���[�_���p��HTML�̒ǉ�
	modalHtml = '<div id="modalMovie"><div class="modalBackground"></div><div class="modalContainer"></div></div>';
	$jq183('body').append(modalHtml);



	$jq183('.box-movie a').bind('click',function()
	{
		var noNextViewFlg = 0, //0:������\�� 1;�����\��
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
		// ���[�_���R���e���c�̈ʒu�����ݒ�
		//--------------------------------------------------------------------
		adjustCenter("#modalMovie .modalContainer");

		//--------------------------------------------------------------------
		// ���[�_���̃t�F�[�h�C��
		//--------------------------------------------------------------------
		$jq183("#modalMovie").fadeIn(250,function()
		{
			onComplete();
		});

		//--------------------------------------------------------------------
		// �E�B���h�E���T�C�Y���̈ʒu����
		//--------------------------------------------------------------------
		$jq183(window).resize(function()
		{
			adjustCenter("#modalMovie .modalContainer");
			windowHeight = $jq183(window).height();
		});

		//--------------------------------------------------------------------
		// ���[�_������鏈��
		//--------------------------------------------------------------------
		$jq183("#modalMovie .modalBackground").click(function()
		{
			closeMovie();
		});

		return false;

		//--------------------------------------------------------------------
		// ���[�_���\������������
		//--------------------------------------------------------------------
		function onComplete()
		{
			displayModal(true);


			// ���򂩉������K�v�B

			// ����p�^�O

			var movieHtml = '<div class="movieClass"><iframe width="'+imgWidth+'" height="'+imgHeight+'" src="//www.youtube.com/embed/yYH_KeMoQYs" frameborder="0" allowfullscreen></iframe></div>';
			closeBtn = '<a href="javascript:void(0)" stype="color:#FFF" class="movieClose">����</a>';


			// �^�O���Z�b�g
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
		// ���[�_���J�N���X
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
		// ���[�_���R���e���c�ʒu�̒����p�֐�
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

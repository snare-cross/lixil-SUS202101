//
// ver 2014-10-17 17:32
//

////////////////////////////////////////////////////////
//
// �J���[�V�~�����[�^
//
////////////////////////////////////////////////////////
$jq183(function(){

	var hrefClass;


	$jq183('.colorSimContentsBox').append('<a class="colorSimContentClose" href="javascript:void(0);"><img alt="����" src="/common/pic/icon_close.gif"></a>');


	$jq183('.select-series a').hover(function()
	{
		$jq183('.colorSimContentsBox').show();
		$jq183('.slideColorList').animate({'top':'0px'},1000,'easeOutExpo',function()
		{
			//----------------------------------------------------------
			// hover�Ń��j���[�����̐؂�ւ�
			// class=stay���܂܂�Ă���ꍇ�͉������Ȃ�
			//----------------------------------------------------------
			$jq183('.color-sim-box .slideColorList li').hover(function()
			{

				if($jq183(this).attr('class') != undefined)
				{
					if($jq183(this).attr('class').indexOf('stay') < 0)
					{
						$jq183(this).addClass('on');
					}
				}
				else
				{
					$jq183(this).addClass('on');
				}

				$jq183(this).parent().find('li').each(function()
				{
					$jq183(this).removeClass('stay');
				});

				$jq183(this).removeClass('on').addClass('stay');

				$jq183('.colorSimContentsBox').find('.openContent'+hrefClass).hide();


				hrefClass = $jq183(this).find('a').attr('class');
				hrefClass = hrefClass.replace('colorSimContent','');
				hrefClass = hrefClass.replace('slvzr-first-child','');

				$jq183('.colorSimContentsBox').find('.openContent'+hrefClass).show();


			},
			function()
			{
				if($jq183(this).attr('class') != undefined)
				{
					if($jq183(this).attr('class').indexOf('stay') < 0)
					{
						$jq183(this).removeClass('on');
					}
				}
				else
				{
					$jq183(this).removeClass('on');
				}
			});



		});
	}
	,
	function()
	{


	});

	//----------------------------------------------------------
	// ���w�i�����̃T���l�C���N���b�N����
	//----------------------------------------------------------
	$jq183('.colorSimContent .seelctColor').bind('click',function()
	{

		// �N���b�N���ꂽ�ӏ���class�ԍ����擾
		var clickLink = $jq183(this).attr('class').replace('seelctColor','').replace(' ','').replace('colorGroup','');
		hrefClass = hrefClass.replace('slvzr-hover','').replace('slvzr-focus','').replace('slvzr-first-child','').replace(' ','');
		clickLink = clickLink.replace('slvzr-hover','').replace('slvzr-focus','').replace('slvzr-first-child','').replace(' ','');

		// ��g�̑S��\��
		$jq183('.box-thumb').hide();
		// ��g�̕\��
		$jq183('.control-areaBox'+hrefClass).show();

		$jq183('.control-areaBox'+hrefClass).find('li').each(function()
		{
			$jq183(this).removeClass('active');
		});

		$jq183('.control-areaBox'+hrefClass).find('.thumb-list').children('li').each(function()
		{
			$jq183(this).removeClass('active');
			$jq183(this).find('a').removeClass('active');
		});

		$jq183('.control-areaBox'+hrefClass).find('a.colorGroup'+clickLink).addClass('active');

		mainImgCng(hrefClass,clickLink);
		selectBoxClose();

	});

	//----------------------------------------------------------
	// �T���l�C�������̃N���b�N����
	//----------------------------------------------------------
	$jq183('.colorSim .thumb-list li a').bind('click',function()
	{
		var cate1 = $jq183(this).parents('.box-thumb').attr('class').replace('control-areaBox','').replace('colorSim','').replace('box-thumb ','').replace(' ','');
				cate2 = $jq183(this).parent().attr('class').replace('colorGroup','').replace('active','').replace(' ','');

		//cate1 = cate1.replace(' ','');


		/*
		$jq183('.control-areaBox'+hrefClass).find('li').each(function()
		{
			$jq183(this).removeClass('active');
		});
		*/

		$jq183(this).parents('.thumb-list').children('li').each(function()
		{
			$jq183(this).removeClass('active');
			$jq183(this).find('a').removeClass('active');
		});

		$jq183(this).addClass('active');

		mainImgCng(cate1,cate2);

	});

	//----------------------------------------------------------
	// ����{�^���N���b�N������
	//----------------------------------------------------------
	$jq183('.colorSimContentsBox .colorSimContentClose').bind('click',function()
	{
		selectBoxClose();
	});

	/*******************************
	 *
	 * ����{�^��
	 *
	 *******************************/
	function selectBoxClose()
	{
		$jq183('.colorSimContentsBox').find('.openContent'+hrefClass).hide();
		$jq183('.colorSimContentsBox').hide();

		$jq183('.color-sim-box .slideColorList').find('li').each(function()
		{
			$jq183(this).removeClass('stay');
		});

		$jq183('.slideColorList').animate({'top':'574px'},1000,'easeOutExpo');

		$jq183('.color-sim-box .slideColorList li').unbind('hover');


	}

	/*******************************
	 *
	 * ���C���C���[�W�̐ؑ�
	 *
	 *******************************/
	function mainImgCng(hrefClass,clickLink)
	{
		//hrefClass = hrefClass.slice(-1);
		hrefClass = hrefClass.replace('slvzr-hover','').replace('slvzr-focus','').replace('slvzr-first-child','').replace(' ','');
		clickLink = clickLink.replace('slvzr-hover','').replace('slvzr-focus','').replace('slvzr-first-child','').replace(' ','');

		$jq183('.mainimgbox').hide();
		$jq183('.mainimg-areaBox'+hrefClass).show();
		$jq183('.mainimg-areaBox'+hrefClass).find('.captionfull').hide();
		$jq183('.mainimg-areaBox'+hrefClass).find('.mainimg-color'+clickLink).show();

	}
	/*******************************
	 *
	 * �}�E�X�I�[�o�[�ŃL���v�V�����̕\��
	 *
	 *******************************/
	$jq183('.color-sim-box .captionfull').hover(function(){

		// stay�N���X������ꍇ�́A�L���v�V������\�������Ȃ�
		if($jq183(this).attr('class').indexOf('stay') > 0)
		{
			return false;
		}
		else
		{
			$jq183(".cover", this).stop(true,true).css('top','418px').animate({top:'284px'},{queue:false,duration:500,easing:'easeOutExpo'});
		}

	}, function() {
		if($jq183(this).attr('class').indexOf('stay') > 0)
		{
			return false;
		}
		else
		{
			$jq183(".cover", this).stop(true,true).animate({top:'418px'},{queue:false,duration:160,easing:'easeOutExpo'});
		}

	});




});

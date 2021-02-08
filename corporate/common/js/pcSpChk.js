
	/****************************************************************
	 *
	 * chkPcSP
	 *
	 * アクセスしている端末がPCかどうかを判定する。
	 * @parm type　１：PCでアクセスしているかどうかを判定
	 * 　　　　　　２：スマホでアクセスしているかどうかを判定
	 *
	 * return bool
	 *
	 *****************************************************************/
	function chkPcSP(type)
	{
		if ((navigator.userAgent.indexOf('iPhone') > 0 && navigator.userAgent.indexOf('iPad') == -1) || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0){
			// スマホ検知
			if(type == 1)
			{
				// PC判定なのでfalse
				return false;
			}
			else if(type == 2)
			{
				// SP判定なのでtrue
				return true;
			}
		}else{
			// PC検知
			if(type == 1)
			{
				// PC判定なのでtrue
				return true;
			}
			else if(type == 2)
			{
				// SP判定なのでfalse;
				return false;
			}
		}
	}

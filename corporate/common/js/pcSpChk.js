
	/****************************************************************
	 *
	 * chkPcSP
	 *
	 * �A�N�Z�X���Ă���[����PC���ǂ����𔻒肷��B
	 * @parm type�@�P�FPC�ŃA�N�Z�X���Ă��邩�ǂ����𔻒�
	 * �@�@�@�@�@�@�Q�F�X�}�z�ŃA�N�Z�X���Ă��邩�ǂ����𔻒�
	 *
	 * return bool
	 *
	 *****************************************************************/
	function chkPcSP(type)
	{
		if ((navigator.userAgent.indexOf('iPhone') > 0 && navigator.userAgent.indexOf('iPad') == -1) || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0){
			// �X�}�z���m
			if(type == 1)
			{
				// PC����Ȃ̂�false
				return false;
			}
			else if(type == 2)
			{
				// SP����Ȃ̂�true
				return true;
			}
		}else{
			// PC���m
			if(type == 1)
			{
				// PC����Ȃ̂�true
				return true;
			}
			else if(type == 2)
			{
				// SP����Ȃ̂�false;
				return false;
			}
		}
	}

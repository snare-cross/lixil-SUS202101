//@charset Shift_jis
//
// ver 2016-02-20 22:00
//


var head;
var path = "";

head = '<div class="lxl-header-inner">\
<p id="logo"><a href="' + path + '/"><img src="' + path + '/common/pic/h_logo.png" alt="LIXIL"></a></p>\
\
<div id="lxl-utility-area">\
\
<div id="lxl-search-area">\
<link href="//c.marsflag.com/mf/mfx/1.0/css/mfx-sbox.css" type="text/css" rel="stylesheet" />\
<div class="mf_finder_container">\
<mf-search-box submit-text="����" placeholder="�T�C�g������" ajax-url="//mf2ap081.marsflag.com/lixil__all__customelement/x_search.x" serp-url="//www.lixil.co.jp/search.htm#/" doctype-hidden options-hidden></mf-search-box>\
</div>\
<!-- //#lxl-search-area--></div>\
\
<ul id="lxl-utility-nav">\
<li id="lxl-global"><a href="https://www.lixil.com" title="Global" target="_blank">Global</a></li>\
<li id="lxl-catalog"><a href="' + path + '/catalog/" title="�J�^���O">�J�^���O</a></li>\
<li id="lxl-faq"><a href="https://faq.lixil.co.jp/?site_domain=default" title="Q&amp;A�E���₢���킹">Q&amp;A�E���₢���킹</a></li>\
<!-- //#lxl-utility-nav--></ul>\
\
<ul id="lxl-global-nav">\
<li id="lxl-lineup">\
<p><a href="' + path + '/lineup/" title="���i���C���A�b�v">���i���C���A�b�v</a></p>\
<div id="lxl-lineup-child" class="lxl-mdd" style="display:none;">\
<div class="lxl-mdd-arw"></div>\
<div class="lxl-mdd-close"><a href="javascript:void(0);" class="gMenuCloseBtn"><img src="' + path + '/common/pic/icon_close.gif" width="23" height="23" alt="����"></a></div>\
<div class="lxl-mdd-inner clearfix">\
<div class="lxl-mdd-col">\
<div class="col-space">\
<h2><a href="' + path + '/lineup/">��Ԃ���T��</a></h2>\
<ul class="clearfix">\
<li><a href="' + path + '/lineup/kitchen/" class="icon-drop-kitchen">�L�b�`��</a></li>\
<li><a href="' + path + '/lineup/bathroom/" class="icon-drop-bathroom">����</a></li>\
<li><a href="' + path + '/lineup/toiletroom/" class="icon-drop-toiletroom">�g�C��</a></li>\
<li class="last-child"><a href="' + path + '/lineup/powderroom/" class="icon-drop-powderroom">���ʉ��ώ�</a></li>\
<li><a href="' + path + '/lineup/livingroom_bedroom/" class="icon-drop-livingroom_bedroom">���r���O�E�Q���E����<br></a></li>\
<li><a href="' + path + '/lineup/window/" class="icon-drop-window">���܂��</a></li>\
<li><a href="' + path + '/lineup/entrance/" class="icon-drop-entrance">���ւ܂��</a></li>\
<li class="last-child"><a href="' + path + '/lineup/gate_fence/" class="icon-drop-gate_fence">��܂��E���E�t�F���X</a></li>\
<li><a href="' + path + '/lineup/carspace/" class="icon-drop-carspace">�J�[�X�y�[�X</a></li>\
<li><a href="' + path + '/lineup/gardenspace/" class="icon-drop-gardenspace">�K�[�f���X�y�[�X</a></li>\
<li><a href="' + path + '/lineup/veranda_balcony/" class="icon-drop-veranda_balcony">�x�����_�E�o���R�j�[</a></li>\
<li class="last-child"><a href="' + path + '/lineup/solar_roof_outerwall/" class="icon-drop-exterior_roof">���z�����d�E�O�ǁE����</a></li>\
</ul>\
</div>\
<div class="col-category">\
<h2><a href="' + path + '/lineup/category/">�J�e�S���[����T��</a></h2>\
<ul class="clearfix">\
<li><a href="' + path + '/lineup/window_shutter/">���E�V���b�^�[</a></li>\
<li><a href="' + path + '/lineup/door/">���փh�A�E����</a></li>\
<li><a href="' + path + '/lineup/interior/">�C���e���A����</a></li>\
<li class="last-child"><a href="' + path + '/lineup/fabric/">�C���e���A�t�@�u���b�N</a></li>\
<li><a href="' + path + '/lineup/exterior/">�G�N�X�e���A</a></li>\
<li><a href="' + path + '/lineup/tile/">�^�C������</a></li>\
<li><a href="' + path + '/lineup/kitchens/">�L�b�`��</a></li>\
<li class="last-child"><a href="' + path + '/lineup/bath/">����</a></li>\
<li><a href="' + path + '/lineup/lavatory/">���ʉ��ώ�</a></li>\
<li><a href="' + path + '/lineup/toilet/">�g�C��</a></li>\
<li><a href="' + path + '/lineup/water_heater/">���^�d�C������</a></li>\
<li class="last-child"><a href="' + path + '/lineup/faucet/">��������</a></li>\
<li><a href="' + path + '/lineup/accessory/">���܂��A�N�Z�T���[</a></li>\
<li><a href="' + path + '/lineup/utility/">���܂�胆�[�e�B���e�B�[</a></li>\
<li><a href="' + path + '/lineup/solar_roof_outerwalls/">���z�����d�E�����E�O��</a></li>\
<li class="last-child"><a href="' + path + '/lineup/construction_method/">�����\�Z��H�@</a></li>\
<li><a href="' + path + '/lineup/building_apartment_store/">�r���E�}���V�����E�X��</a></li>\
<li><a href="' + path + '/lineup/equipment/">�e��{�ݗp�ݔ��@��</a></li>\
<li><a href="' + path + '/lineup/public/">�p�u���b�N����</a></li>\
<li class="last-child"><a href="' + path + '/lineup/fire_guard/">���y��ʑ�b�F��h�Ό�FG�V���[�Y</a></li>\
</ul>\
</div>\
<div class="col-product">\
<h2 class="mb0"><a href="' + path + '/lineup/list/">���i������T��</a></h2>\
</div>\
</div>\
</div>\
</div>\
<!--//#lxl-lineup --></li>\
<li id="lxl-reform">\
<p><a href="' + path + '/reform/" title="���t�H�[��">���t�H�[��</a></p>\
<div id="lxl-reform-child" class="lxl-mdd" style="display:none;">\
<div class="lxl-mdd-arw"></div>\
<div class="lxl-mdd-close"><a href="javascript:void(0);" class="gMenuCloseBtn"><img src="' + path + '/common/pic/icon_close.gif" width="23" height="23" alt="����"></a></div>\
<div class="lxl-mdd-inner clearfix">\
<div class="lxl-mdd-col col-space">\
<div class="lxl-mdd-col">\
<h2 class="lg-first"><a href="' + path + '/reform/" title="���t�H�[������������">���t�H�[������������</a></h2>\
<ul>\
<li><a href="' + path + '/reform/case-rf/top/">���t�H�[������W</a></li>\
<li><a href="' + path + '/reform/patto/" target="_blank"><span class="icon-blank">�Z���ԃ��t�H�[���Ńp�b�Ɖ���!</span></a></li>\
<li><a href="' + path + '/lineup/kitchen/go_sr/">�V���[���[����̌����悤</a></li>\
<li><a href="' + path + '/reform/solution/">�����育�Ƃ����t�H�[���ŉ���</a></li>\
<li><a href="' + path + '/reform/ud/">���S�E���K�ȏZ�܂��Â���̃|�C���g</a></li>\
<li><a href="' + path + '/reform/entrance/door/">���փh�A��1day���t�H�[��</a></li>\
<li><a href="' + path + '/lineup/gardenspace/s/garden_room/">���K�[�f�����[�����X�y�V�����T�C�g</a></li>\
<li><a href="' + path + '/reform/basic/step/">���t�H�[���̗���</a></li>\
<li><a href="' + path + '/reform/qa/">���t�H�[����Q&amp;A</a></li>\
<li><a href="' + path + '/reform/yougo/">���t�H�[���p��W</a></li>\
</ul>\
</div>\
<div class="lxl-mdd-col">\
<h2 class="lg-first"><a href="' + path + '/reform/#RFend" title="���t�H�[���{�H�X��T��">���t�H�[���{�H�X��T��</a></h2>\
<ul>\
<li><a href="https://lixil-reformshop.jp/" target="_blank"><span class="icon-blank">LIXIL���t�H�[���V���b�v</span></a></li>\
<li><a href="https://www.lixil-reform.net/" target="_blank"><span class="icon-blank">LIXIL���t�H�[���l�b�g</span></a></li>\
</ul>\
<h2><a href="' + path + '/reform/#RFend" title="���i�̐����𕷂�">WEB�ő��k����</a></h2>\
<ul>\
<li><a href="https://reform-contact.com/" target="_blank"><span class="icon-blank">���t�H�[���R���^�N�g</span></a></li>\
</ul>\
<h2><a href="' + path + '/reform/#RFend" title="���i�̐����𕷂�">���i�̐����𕷂�</a></h2>\
<ul>\
<li><a href="' + path + '/showroom/">���߂��̃V���[���[����T��</a></li>\
</ul>\
<ul class="lxl-mdd-bnr">\
<li><a href="' + path + '/tpoint/"><img src="' + path + '/common/pic/mdd/bnr_tpoint_reform.gif" width="220" height="60" alt="LIXIL�Ȃ�T-POINT�����܂�܂�"></a></li>\
</ul>\
</div>\
</div>\
<div class="lxl-mdd-col col-bn">\
<h2 class="lg-first"><a href="' + path + '/reform/#RFspace" title="���t�H�[����Ԃ��炳����">���t�H�[����Ԃ��炳����</a></h2>\
<ul class="lxl-notes-Noidt">\
<li><a href="' + path + '/reform/kitchen/" class="icon-drop-kitchen">�L�b�`���̃��t�H�[��</a></li>\
<li><a href="' + path + '/reform/bathroom/" class="icon-drop-bathroom">�����̃��t�H�[��</a></li>\
<li><a href="' + path + '/reform/toiletroom/" class="icon-drop-toilet">�g�C���̃��t�H�[��</a></li>\
<li><a href="' + path + '/reform/powderroom/" class="icon-drop-powderroom">���ʉ��ώ��̃��t�H�[��</a></li>\
<li><a href="' + path + '/reform/livingroom_bedroom/" class="icon-drop-living">���r���O�E�Q���E�����̃��t�H�[��<br></a></li>\
<li><a href="' + path + '/reform/window/" class="icon-drop-window">���܂��̃��t�H�[��</a></li>\
<li><a href="' + path + '/reform/entrance/" class="icon-drop-entrance">���ւ܂��̃��t�H�[��</a></li>\
<li><a href="' + path + '/reform/gate_fence/" class="icon-drop-gate">��܂��E���E�t�F���X�̃��t�H�[��</a></li>\
<li><a href="' + path + '/reform/carspace/" class="icon-drop-car">�J�[�X�y�[�X�̃��t�H�[��</a></li>\
<li><a href="' + path + '/reform/gardenspace/" class="icon-drop-gardenspace">�K�[�f���X�y�[�X�̃��t�H�[��</a></li>\
<li><a href="' + path + '/reform/veranda_balcony/" class="icon-drop-veranda">�x�����_�E�o���R�j�[�̃��t�H�[��</a></li>\
<li><a href="' + path + '/reform/solar_exterior_roof/" class="icon-drop-solar">���z�����d�E�����E�O�ǂ̃��t�H�[��</a></li>\
<li><a href="https://tostem.lixil.co.jp/lineup/bldg/reform/" target="_blank" class="icon-drop-bill"><span class="icon-blank">�r���E�}���V�����i���E���ցE�肷��j�̃��t�H�[��</span></a></li>\
</ul>\
</div>\
</div>\
</div>\
<!--//#lxl-reform --></li>\
<li id="lxl-showroom">\
<p><a href="' + path + '/showroom/" title="�V���[���[��">�V���[���[��</a></p>\
<div id="lxl-showroom-child" class="lxl-mdd" style="display:none;">\
<div class="lxl-mdd-arw"></div>\
<div class="lxl-mdd-close"><a href="javascript:void(0);" class="gMenuCloseBtn"><img src="' + path + '/common/pic/icon_close.gif" width="23" height="23" alt="����"></a></div>\
<div class="lxl-mdd-inner clearfix">\
<div class="lxl-mdd-col col01">\
<div class="map">\
<h2><a href="' + path + '/showroom/" title="�V���[���[��">LIXIL�V���[���[������</a></h2>\
<p>���Z�܂��̋߂��̃G���A��<br>�N���b�N���Ă��������B</p>\
<img src="' + path + '/common/pic/mdd/drop_showroom_map.gif" width="403" height="300" alt="LIXIL�V���[���[������" usemap="#showroom_map">\
<map name="showroom_map" id="showroom_map">\
<area shape="rect" coords="198,24,256,44" href="' + path + '/showroom/?area=hokkaido_map" title="�k�C��" alt="�k�C��" />\
<area shape="rect" coords="294,220,353,240" href="' + path + '/showroom/?area=kanagawa_map" title="�_�ސ�" alt="�_�ސ�">\
<area shape="rect" coords="345,193,395,216" href="' + path + '/showroom/?area=saitama_map" title="���" alt="���">\
<area shape="rect" coords="355,221,403,240" href="' + path + '/showroom/?area=chiba_map" title="��t" alt="��t">\
<area shape="rect" coords="302,118,353,140" href="' + path + '/showroom/?area=tohoku_map" title="���k" alt="���k" />\
<area shape="rect" coords="293,169,356,190" href="' + path + '/showroom/?area=kanto_map" title="�k�֓�" alt="�k�֓�" />\
<area shape="rect" coords="294,193,342,215" href="' + path + '/showroom/?area=tokyo_map" title="����" alt="����" />\
<area shape="rect" coords="170,134,228,154" href="' + path + '/showroom/?area=koushinetsu_map" title="�b�M�z" alt="�b�M�z" />\
<area shape="rect" coords="205,239,286,259" href="' + path + '/showroom/?area=tokai_map" title="���C�E�k��" alt="���C�E�k��" />\
<area shape="rect" coords="137,173,185,193" href="' + path + '/showroom/?area=kinki_map" title="�ߋE" alt="�ߋE" />\
<area shape="rect" coords="144,265,192,285" href="' + path + '/showroom/?area=shikoku_map" title="�l��" alt="�l��" />\
<area shape="rect" coords="73,191,121,211" href="' + path + '/showroom/?area=chugoku_map" title="����" alt="����" />\
<area shape="rect" coords="0,223,81,243" href="' + path + '/showroom/?area=kyushu_map" title="��B�E����" alt="��B�E����" />\
</map>\
</div>\
<div class="lxl-mdd-SRSP">\
<ul>\
<li><a href="'+ path +'/showroom/hokkaido/" target="_blank">�k�C��</a></li>\
<li><a href="'+ path +'/showroom/tohoku/" target="_blank">���k</a></li>\
<li><a href="'+ path +'/showroom/koushinetsu/" target="_blank">�b�M�z</a></li>\
<li><a href="'+ path +'/showroom/kanto/" target="_blank">�֓�</a></li>\
<li><a href="'+ path +'/showroom/tokai/" target="_blank">���C�E�k��</a></li>\
<li><a href="'+ path +'/showroom/kinki/" target="_blank">�ߋE</a></li>\
<li><a href="'+ path +'/showroom/chugoku/" target="_blank">����</a></li>\
<li><a href="'+ path +'/showroom/shikoku/" target="_blank">�l��</a></li>\
<li><a href="'+ path +'/showroom/kyushu/" target="_blank">��B�E����</a></li>\
</ul>\
</div>\
</div>\
<div class="lxl-mdd-col col02">\
<ul class="icon-list">\
<li><a href="' + path + '/showroom/guide/" class="icon-drop-utilizing">�V���[���[�����p�̃R�c</a></li>\
<li><a href="' + path + '/showroom/before/" class="icon-drop-preparation">�V���[���[���ɍs���O��</a></li>\
<li><a href="/showroom/qa/" class="icon-drop-faq">�悭���邲����</a></li>\
<li><a href="' + path + '/catalog/" class="icon-drop-catalog">�J�^���O�̉{���Ƃ�����</a></li>\
</ul>\
</div>\
<div class="lxl-mdd-col col-bn">\
<ul>\
<li><a href="' + path + '/showroom/kanto/lixil_tokyo/"><img src="' + path + '/common/pic/mdd/drop_showroom_bn01.jpg" width="220" height="92" alt="LIXIL�V���[���[������"><br>LIXIL�V���[���[������</a></li>\
<li><a href="' + path + '/showroom/kinki/lixil_osaka/"><img src="' + path + '/common/pic/mdd/drop_showroom_bn02.jpg" width="220" height="92" alt="LIXIL�V���[���[�����"><br>LIXIL�V���[���[�����</a></li>\
</ul>\
</div>\
</div>\
</div>\
<!--//#lxl-showroom --></li>\
<li id="lxl-support">\
<p><a href="' + path + '/support/" title="���q���܃T�|�[�g">���q���܃T�|�[�g</a></p>\
<div id="lxl-support-child" class="lxl-mdd" style="display:none;">\
<div class="lxl-mdd-arw"></div>\
<div class="lxl-mdd-close"><a href="javascript:void(0);" class="gMenuCloseBtn"><img src="' + path + '/common/pic/icon_close.gif" width="23" height="23" alt="����"></a></div>\
<div class="lxl-mdd-inner clearfix">\
<ul class="icon-list clearfix">\
<li><a href="https://faq.lixil.co.jp/?site_domain=default" class="icon-drop-faq">Q&amp;A</a></li>\
<li><a href="' + path + '/inquiry/consumer/contact_tel.htm" class="icon-drop-tel">���d�b�ł̂��₢���킹</a></li>\
<li><a href="' + path + '/inquiry/consumer/contact.htm" class="icon-drop-form">���₢���킹�t�H�[��</a></li>\
<li><a href="' + path + '/warnings/" class="icon-drop-warnings">�d�v�Ȃ��m�点</a></li>\
</ul>\
<div class="box-purpose lxl-mdd-col">\
<h2 class="mb10"><a href="' + path + '/support/purpose/">�ړI����T��</a></h2>\
<ul>\
<li><a href="https://owners.lixil.co.jp" target="_blank">���N�V���I�[�i�[�Y�N���u</a></li>\
<li><a href="' + path + '/support/purpose/safety.htm">���g�p��̂�����</a></li>\
<li><a href="' + path + '/support/purpose/clean.htm">�������E���|�����@</a></li>\
<li><a href="' + path + '/support/purpose/manual.htm">�戵�������{��</a></li>\
<li><a href="https://faq.lixil.co.jp/?site_domain=default">Q&amp;A�E���₢���킹</a></li>\
<li><a href="' + path + '/support/purpose/fault_diagnosis.htm">�g���u���f�f</a></li>\
<li><a href="' + path + '/support/ecstore/">LIXIL�����ʔ̃T�C�g</a></li>\
<li><a href="' + path + '/support/purpose/repair.htm">�C���˗�</a></li>\
<li><a href="' + path + '/support/purpose/cartridge.htm">�����J�[�g���b�W�̂��w��</a></li>\
</ul>\
</div>\
<div class="box-products lxl-mdd-col">\
<h2 class="mb10"><a href="' + path + '/support/product/">���i�J�e�S���[����T��</a></h2>\
<ul>\
<li class="box-left"><a href="' + path + '/support/product/window_shutter.htm">���E�V���b�^�[</a></li>\
<li class="box-center"><a href="' + path + '/support/product/tile.htm">�^�C������</a></li>\
<li class="box-right"><a href="' + path + '/support/product/toiletroom.htm">�g�C��</a></li>\
<li class="box-left"><a href="' + path + '/support/product/door.htm">���փh�A�E����</a></li>\
<li class="box-center"><a href="' + path + '/support/product/kitchen.htm">�L�b�`��</a></li>\
<li class="box-right"><a href="' + path + '/support/product/water_heater.htm">���^�d�C������</a></li>\
<li class="box-left"><a href="' + path + '/support/product/interior.htm">�C���e���A����</a></li>\
<li class="box-center"><a href="' + path + '/support/product/bathroom.htm">����</a></li>\
<li class="box-right"><a href="' + path + '/support/product/faucet.htm">��������</a></li>\
</ul>\
<ul>\
<li class="box-left"><a href="' + path + '/support/product/exterior.htm">�G�N�X�e���A</a></li>\
<li class="box-center"><a href="' + path + '/support/product/powderroom.htm">���ʉ��ώ�</a></li>\
<li class="box-right"><a href="' + path + '/support/product/equipment.htm">�e��{�ݗp�ݔ��@��</a></li>\
</ul>\
</div>\
<div class="box-bnr lxl-mdd-col">\
<ul>\
<li><a href="' + path + '/support/disaster/" class="imgover"><img src="' + path + '/common/pic/mdd/icon_disaster.png" width="220" height="60" alt="�ЊQ�΍�K�C�h"></a></li>\
<li><a href="https://owners.lixil.co.jp" class="imgover" target="_blank"><img src="' + path + '/common/pic/mdd/bnr_loc.gif" width="220" height="60" alt="���L�ғo�^����V�����Ȃ����u���N�V���I�[�i�[�Y�N���u�v"></a></li>\
<li><a href="' + path + '/support/longterm_warranty/" class="imgover"><img src="' + path + '/common/pic/mdd/bnr_longterm.gif" width="220" height="60" alt="LIXIL�����ۏ؃T�[�r�X"></a></li>\
</ul>\
</div>\
</div>\
</div>\
<!--//#lxl-support --></li>\
<li id="lxl-corporate">\
<p><a href="' + path + '/corporate/" title="LIXIL�ɂ���">LIXIL�ɂ���</a></p>\
<div id="lxl-corporate-child" class="lxl-mdd" style="display:none;">\
<div class="lxl-mdd-arw"></div>\
<div class="lxl-mdd-close"><a href="javascript:void(0);" class="gMenuCloseBtn"><img src="' + path + '/common/pic/icon_close.gif" width="23" height="23" alt="����"></a></div>\
<div class="lxl-mdd-inner clearfix">\
<div class="brColAll">\
<div class="lxl-mdd-col brk01">\
<ul>\
<li><a href="https://www.lixil.com/jp/about/" target="_blank"><span class="icon-blank">LIXIL�ɂ���</span></a></li>\
</ul>\
</div>\
<div class="lxl-mdd-col brk01">\
<ul>\
<li><a href="https://www.lixil.com/jp/business/" target="_blank"><span class="icon-blank">LIXIL�̎���</span></a></li>\
</ul>\
</div>\
<div class="lxl-mdd-col brk01">\
<ul>\
<li><a href="https://www.lixil.com/jp/investor/" target="_blank"><span class="icon-blank">����E�����ƌ������</span></a></li>\
</ul>\
</div>\
</div>\
<div class="brColAll l-spOnly">\
<h2><a href="' + path + '/corporate/">LIXIL�ɂ���</a></h2>\
</div>\
<div class="lxl-mdd-col brk01">\
<h2 class="mb10"><a href="' + path + '/corporate/brand/">LIXIL�u�����h</a></h2>\
<h2 class="mb10"><a href="' + path + '/corporate/sustainability/">�����\�ȎЉ��ڎw����</a></h2>\
<ul>\
<li><a href="' + path + '/corporate/sustainability/community/">�n��Љ�̒���</a></li>\
<li class="mb0"><a href="' + path + '/corporate/sustainability/employee/">�]�ƈ��ƂƂ���</a></li>\
</ul>\
</div>\
<div class="lxl-mdd-col brk02">\
<h2 class="mb10"><a href="https://www.livingculture.lixil/" target="_blank">��������</a></h2>\
<ul>\
<li><a href="https://www.livingculture.lixil/about/" target="_blank">���������̂����</a></li>\
<li><a href="https://www.livingculture.lixil/gallery/" target="_blank">�M�������[�E�o�Ŋ���</a></li>\
<li><a href="https://www.livingculture.lixil/ilm/" target="_blank">�~���[�W�A������</a></li>\
</ul>\
</div>\
<div class="lxl-mdd-col brk03">\
<h2 class="mb10"><a href="' + path + '/corporate/recruit/">�̗p���</a></h2>\
<ul>\
<li><a href="' + path + '/corporate/recruit/about/">LIXIL��m��</a></li>\
<li><a href="' + path + '/corporate/recruit/newgrads/">�V���̗p�i��w�E��w�@���j</a></li>\
<li><a href="' + path + '/corporate/recruit/tech-college/">�V���̗p�i����E��呲�j</a></li>\
</ul>\
</div>\
<div class="lxl-mdd-col brk04">\
<ul class="bdr-none">\
<li><a href="https://www.lixil.com/jp/news/" target="_blank">�j���[�X�����[�X</a></li>\
<li><a href="' + path + '/corporate/fr/">���Z����</a></li>\
</ul>\
<ul class="bdr-none">\
<li><a href="' + path + '/s/sports/">LIXIL�~SPORTS</a></li>\
<li><a href="' + path + '/feel_the_moment/">LIXIL 2020�X�y�V�����T�C�g</a></li>\
</ul>\
</div>\
</div>\
</div>\
<!--//#lxl-corporate --></li>\
<li id="lxl-biz">\
<p><a href="https://www.biz-lixil.com/" title="�r�W�l�X����" target="_blank">�r�W�l�X����</a></p>\
<!--//#lxl-biz --></li>\
<!--//#lxl-global-nav --></ul>\
<!--//#lxl-utility-area --></div>\
<!--//.lxl-header-inner --></div>\
';

$jq183("#lxl-header").append(head);
var suggestClickFlg = false;
$jq183("#lxl-search-area").on("focus", ".mf_finder_searchBox_query_input",function(){
	if( $jq183("#lxl-utility-area").hasClass("l-spMenuOn") ){
		$jq183('#lxl-search-area').stop(true,true).animate({'width':'72%'},300,'');
	}else{
		$jq183('#lxl-search-area').addClass('on');
		$jq183('#lxl-search-area').stop(true,true).animate({'width':'280px'},300,'');
	}
});
$jq183("#lxl-search-area").on("blur", ".mf_finder_searchBox_query_input",function(){
	//�T�W�F�X�g���N���b�N���鎞�A�L�т�Ȃ��悤��
	if( suggestClickFlg ){ return ; }
	$jq183('#lxl-search-area').removeClass('on');
	if( $jq183("#lxl-utility-area").hasClass("l-spMenuOn") ){
		$jq183('#lxl-search-area').stop(true,true).animate({'width':'120px'},300,'');
	}else{
		$jq183('#lxl-search-area').stop(true,true).animate({'width':'120px'},300,'');
	}
});
$jq183("#lxl-search-area").on("mousedown", ".mf_finder_searchBox_suggest_link",function(e){
	suggestClickFlg = true;
});

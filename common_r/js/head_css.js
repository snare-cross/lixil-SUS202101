if (/Android/.test(window.navigator.userAgent) && /Linux; U;/.test(window.navigator.userAgent) && !/Chrome/.test(window.navigator.userAgent)) {
  document.write('<meta name="viewport" content="width=640">');
  document.write('\
  <link href="/common_r/css/base.css" rel="stylesheet" type="text/css">\
  <link href="/common_r/css/wrapper.css" rel="stylesheet" type="text/css">\
  <link href="/common_r/css/wrapper_android.css" rel="stylesheet" type="text/css">\
  <link href="/common_r/css/module.css" rel="stylesheet" type="text/css">\
  <link href="/common_r/css/module_android.css" rel="stylesheet" type="text/css">\
  <link href="/common_r/css/each.css" rel="stylesheet" type="text/css">\
  <link href="/common_r/css/each_android.css" rel="stylesheet" type="text/css">\
  <link href="/common_r/css/template.css" rel="stylesheet" type="text/css">\
  <link href="/common_r/css/template_android.css" rel="stylesheet" type="text/css">\
  <link href="/common_r/css/print.css" rel="stylesheet" type="text/css" media="print">\
  ');
}else{
  document.write('<meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" />');
  document.write('\
  <link href="/common_r/css/base.css" rel="stylesheet" type="text/css">\
  <link href="/common_r/css/wrapper.css" rel="stylesheet" type="text/css">\
  <link href="/common_r/css/module.css" rel="stylesheet" type="text/css">\
  <link href="/common_r/css/each.css" rel="stylesheet" type="text/css">\
  <link href="/common_r/css/template.css" rel="stylesheet" type="text/css">\
  <link href="/common_r/css/print.css" rel="stylesheet" type="text/css" media="print">\
  ');
}
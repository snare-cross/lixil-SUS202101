img = new Array();
img[0] = "/showroom/pic/default_main001.jpg";
img[1] = "/showroom/pic/default_main002.jpg";
n = Math.floor(Math.random()*img.length);
document.write("<p><img src='"+img[n]+"' border='0' alt='' width='950' height='255'></p>");

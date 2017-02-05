// tento kod detekuje podporu REM jednotek
// css styly najdete na teto URL adrese: /assets/css/global.css

//Author      : <%= project.project.author %>
//Author URI  : www.html-factory.cz
//Created     : <%= grunt.template.today("dd.mm.yyyy") %>

var cssPath = "/assets/css/global";
if( typeof version === 'undefined' || version === null ) version = "1.0";

function checkRem(attribute, test){
  var supports = false;
  try {
    var div = document.createElement("div");
    div.style[attribute] = test;
      if(div.style[attribute] === test){
        supports = true;
    }
  } catch(e){}
  return supports;
}


//pokud prohlizec nepodporuje REM jednotky 
if(!checkRem("fontSize", "1rem")){
  cssPath += "-rem-fallback";//nacti PX fallback
}
document.write('<link rel="stylesheet" media="screen" href="'+cssPath+'.css?v='+version+'">');
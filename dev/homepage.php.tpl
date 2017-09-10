<?php $version = "1.0" //verze stylu, scriptu = proti cachovani ?>
<!DOCTYPE html>
<html lang="cs" class="no-js">
	<head>
		<!-- ostatni -->
			<meta charset="UTF-8">
			<meta http-equiv="X-UA-Compatible" content="IE=edge">
			<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=yes, minimal-ui">
			<link rel="stylesheet" media="screen" href="assets/css/global.css?v=<?php echo $version ?>" id="global-styles">

			<!-- <base href="/"> toto odkomentovat pro nastaveni vsech cest do korenoveho adresare -->
		<!-- //ostatni -->

		<!-- critical js (nezbytne skripty ktere detekuji podporu css a jinych dulezitych vlastnosti) -->
			<script>
				function checkRem(a,b){var c=!1;try{var d=document.createElement("div");d.style[a]=b,d.style[a]===b&&(c=!0)}catch(e){}return c}var version="<?php echo $version ?>";if(document.documentElement.className=document.documentElement.className.replace(/\bno-js\b/,"js"),!checkRem("fontSize","1rem")){var gs=document.getElementById("global-styles");gs.href=gs.href.replace(".css","-rem-fallback.css")}var ie=function(){for(var a,b=3,c=document.createElement("div"),d=c.getElementsByTagName("i");c.innerHTML="\x3c!--[if gt IE "+ ++b+"]><i></i><![endif]--\x3e",d[0];);return b>4?b:a}(),supports=function(){var a=document.createElement("div"),b="ms O Moz Webkit".split(" "),c=b.length;return function(d){if(d in a.style)return!0;for(d=d.replace(/^[a-z]/,function(a){return a.toUpperCase()});c--;)if(b[c]+d in a.style)return!0;return!1}}(),pns="",ptt=["transform","objectFit"];if(9==ie)pns+=" ie9 no-animation no-objectFit";else if(ie<9)pns+=" oldie no-transform no-columnCount no-boxShadow no-animation no-objectFit";else for(i=0;i<ptt.length;i++)supports(ptt[i])?pns+=" "+ptt[i]:pns+=" no-"+ptt[i];"undefined"==typeof SVGRect&&(pns+=" no-svg");var iOS=!!navigator.platform&&/iPad|iPhone|iPod/.test(navigator.platform);1==iOS&&document.addEventListener("touchstart",function(){},!1),document.documentElement.className+=pns;
			</script>
		<!-- //critical js -->

		<!-- !!! vyplnit dulezite SEO metatagy !!! -->
			<title><%= project.project.title %></title>
			<meta content="noindex,nofollow" name="robots"><!-- nezapomenout zde umazat "NO"index, "NO"follow -->
			<meta name="description" content="popis vaseho webu">
			<meta name="keywords" content="klíčová slova webu">
		<!-- //vyplnit dulezite SEO metatagy -->
	</head>
	<body>
		
		<div class="c-layout">
			<header class="c-header">
				<div class="c-layout__center">
					
				</div>
			</header>

			<main role="main" class="c-layout__content"><!-- toto pouzivat na obsah. Obsah typu okno, paticka, hlavicka apod sem nepatri. Patri sem opravdu jen ta "stava" ze stranky. Predstav si to jako obsah clanku, kterou ches precist. -->
				<div class="c-layout__center">
					
				</div>
			</main>

			 <footer class="c-footer">
				<div class="c-layout__center">
					footer
				</div>
			</footer>
		</div>
	

		<!-- nacitani vsech scripu a funkci -->
			<script src="assets/js/all.js?v=<?php echo $version ?>"></script>
		<!-- //nacitani vsech scripu a funkci -->
	</body>
</html>
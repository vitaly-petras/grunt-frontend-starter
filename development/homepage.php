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
				function checkRem(a,b){var c=!1;try{var d=document.createElement("div");d.style[a]=b,d.style[a]===b&&(c=!0)}catch(e){}return c}if(document.documentElement.className=document.documentElement.className.replace(/\bno-js\b/,"js"),!checkRem("fontSize","1rem")){var gs=document.getElementById("global-styles");gs.href=gs.href.replace(".css","-rem-fallback.css")}var pns="",ptt=["transform","columnCount","textShadow","boxShadow"];"undefined"==typeof SVGRect&&(pns+=" no-svg"),1==("ontouchstart"in window||navigator.msMaxTouchPoints>0)&&document.body.clientWidth<1024&&(pns+=" touch-device"),document.documentElement.className+=pns;
			</script>
		<!-- //critical js -->

		<!-- Fallback pro 'IE8' a 'bez javascriptu' -->
			<!--[if lt IE 9]><script src="assets/js/ie-fallbacks/html5.js"></script><![endif]-->
			<noscript>
				<link rel="stylesheet" media="screen" href="assets/css/global-rem-fallback.css?v=<?php echo $version ?>">
				<link rel="stylesheet" type="text/css" media="screen" href="assets/images/icons/icons.fallback.css?v=<?php echo $version ?>">
			</noscript>
		<!-- Fallback pro 'IE8' a 'bez javascriptu' -->
		
		<!-- !!! vyplnit dulezite SEO metatagy !!! -->
			<title>test</title>
			<meta content="noindex,nofollow" name="robots"><!-- nezapomenout zde umazat "NO"index, "NO"follow -->
			<meta name="dsescription" content="popis vaseho webu">
			<meta name="keywords" content="klíčová slova webu">
		<!-- //vyplnit dulezite SEO metatagy -->
	</head>
	<body>

		<i class="icon icon__logo"></i>

	

		<!-- local fotns --><!-- pokud se fonty nenacitaji lokalne smazat !!! -->
			<link rel="stylesheet" type="text/css" media="screen" href="assets/css/local-fonts-loader.css?v=<?php echo $version ?>">
		<!-- //local fotns -->

		<!-- nacitani vsech scripu a funkci -->
			<script src="assets/js/all.min.js?v=<?php echo $version ?>"></script>
		<!-- //nacitani vsech scripu a funkci -->

		<!-- nacitani fallbacku pro starsi prohlizece -->
			<!--[if lt IE 9]><script src="assets/js/ie-fallbacks/respond.min.js"></script><![endif]-->
			<!--[if lte IE 9]><script src="assets/js/ie-fallbacks/placeholders.js"></script><![endif]-->
		<!-- //nacitani fallbacku pro starsi prohlizece -->
	</body>
</html>
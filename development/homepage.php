<?php $version = "1.0" //verze stylu, scriptu = proti cachovani ?>

<!DOCTYPE html>
<html lang="cs" class="no-js">
	<head>
		<!-- ostatni -->
			<meta charset="UTF-8">
			<meta http-equiv="X-UA-Compatible" content="IE=edge">
			<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, minimal-ui">
		<!-- //ostatni -->


		<!-- scripty a styly -->
			<!--[if lt IE 9]><script src="assets/js/ie-fallbacks/html5.js"></script><![endif]-->
			<script>
				var version = "<?php echo $version ?>";
				document.documentElement.className = document.documentElement.className.replace(/\bno-js\b/,'js');//nastav tridu js pokud je javascript povoleny
			</script>
			<script src="assets/js/load-css.js?v=<?php echo $version ?>"></script>
			<noscript>
				<link rel="stylesheet" media="screen" href="assets/css/global-rem-fallback.css?v=<?php echo $version ?>">
				<link rel="stylesheet" type="text/css" media="screen" href="assets/images/icons/icons.fallback.css?v=<?php echo $version ?>">
			</noscript>
		<!-- scripty a styly -->

		
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

		<!-- skript pro vlozeni svg ikonek (pokud se nepouziva odstranit!!!) -->
		<!-- pro vlozeni inline-svg je potreba atribut "data-grunticon-embed" -->
			<script src="assets/icons/grunticon.loader.js"></script>
			<script>
				grunticon(["assets/icons/icons.data.svg.css", "assets/icons/icons.data.png.css", "assets/icons/icons.fallback.css"], grunticon.svgLoadedCallback );
			</script>
		<!-- //script ikonek -->

		<!-- nacitani jQuery knihovny -->
			<script src="https://code.jquery.com/jquery-1.11.3.min.js"></script>
			<script>window.jQuery || document.write('<script src="assets/js/libs/jquery-1.11.3.min.js"><\/script>')</script>
		<!-- //nacitani jQuery knihovny -->

		<!-- nacitani vsech scripu a funkci -->
			<script src="assets/js/all.min.js?v=<?php echo $version ?>"></script>
		<!-- //nacitani vsech scripu a funkci -->

		<!-- nacitani fallbacku pro starsi prohlizece -->
			<!--[if lt IE 9]><script src="assets/js/ie-fallbacks/respond.min.js"></script><![endif]-->
			<!--[if lte IE 9]><script src="assets/js/ie-fallbacks/placeholders.js"></script><![endif]-->
		<!-- //nacitani fallbacku pro starsi prohlizece -->
	</body>
</html>
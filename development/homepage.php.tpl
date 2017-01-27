<?php $version = "1.0" //verze stylu, scriptu = proti cachovani ?>

<!DOCTYPE html>
<!--[if lt IE 8 ]><html lang="cs" class="no-js oldie ie7 no-svg no-transform no-columns no-boxshadow no-css-animations"><![endif]-->
<!--[if IE 8 ]><html lang="cs" class="no-js oldie no-svg no-transform no-columns no-boxshadow no-css-animations"><![endif]-->
<!--[if IE 9 ]><html lang="cs" class="no-js ie9"><![endif]-->
<!--[if (gt IE 9)|!(IE)]><!--><html lang="cs" class="no-js"><!--<![endif]-->
	<head>

		<meta charset="UTF-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">

		<meta name="Author" content="www.html-factory.cz" />
		
		<?php //tento skript je urcen pro praci s projektem (muze se uplne smazat a vlozit URL do base napevno)
			if (strpos($_SERVER['SERVER_NAME'], 'html-factory.cz') !== false) {
		    	$path = "/<%= project.project.name %>/";//url link na serveru
			}else{
				$path = "/<%= project.project.name %>/development/";//url link na lokalhostu
			}
		?>
		<base href="<?php echo $path; ?>"><!--toto zmenit dle aktualniho serveru !!!! -->

		<meta content="noindex,nofollow" name="robots">
		<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0"> 

		<!--[if lt IE 9]><script src="assets/js/ie-fallbacks/html5.js"></script><![endif]-->
		<script>
			var version = <?php echo $version ?>;
			document.documentElement.className = document.documentElement.className.replace(/\bno-js\b/,'js');//nastav tridu js pokud je javascript povoleny
		</script>
		<script src="assets/js/load-css.js?v=<?php echo $version ?>"></script>
		<noscript>
			<link rel="stylesheet" media="screen" href="assets/css/global-rem-fallback.css?v=<?php echo $version ?>">
		</noscript>

		<title><%= project.project.title %></title>
	</head>
	<body>




		<!-- skript pro vlozeni svg ikonek (pokud se nepouziva odstranit!!!) -->
		<!-- pro vlozeni inline-svg je potreba atribut "data-grunticon-embed" -->
			<script src="assets/images/sprites/grunticon/grunticon.loader.js"></script>
			<script>
				grunticon(["assets/images/sprites/grunticon/icons.data.svg.css", "assets/images/sprites/grunticon/icons.data.png.css", "assets/images/sprites/grunticon/icons.fallback.css"], grunticon.svgLoadedCallback );
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


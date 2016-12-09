<?php $version = "1.0" //verze stylu, scriptu = proti cachovani ?>

<!DOCTYPE html>
<!--[if lt IE 8 ]><html lang="cs" class="no-js oldie ie7 no-svg no-transform no-columns no-boxshadow no-css-animations"><![endif]-->
<!--[if IE 8 ]><html lang="cs" class="no-js oldie no-svg no-transform no-columns no-boxshadow no-css-animations"><![endif]-->
<!--[if IE 9 ]><html lang="cs" class="no-js ie9"><![endif]-->
<!--[if (gt IE 9)|!(IE)]><!--><html lang="cs" class="no-js"><!--<![endif]-->
	<head>

		<meta charset="UTF-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">

		<?php //tento skript je urcen pro praci s projektem (muze se uplne smazat a vlozit URL do base napevno)
			if (strpos($_SERVER['SERVER_NAME'], 'html-factory.cz') !== false) {
		    	$path = "/dd-reality/";//url link na serveru
			}else{
				$path = "/dd-reality/development/";//url link na lokalhostu
			}
		?>
		<base href="<?php echo $path; ?>"><!--toto zmenit dle aktualniho serveru !!!! -->

		<meta content="noindex,nofollow" name="robots">
		<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0"> 

		<!--[if lt IE 9]><script type="text/javascript" src="assets/js/ie-fallbacks/html5.js"></script><![endif]-->
		<script type="text/javascript">
			var version = <?php echo $version ?>;
			document.documentElement.className = document.documentElement.className.replace(/\bno-js\b/,'js');//nastav tridu js pokud je javascript povoleny
		</script>
		<script type="text/javascript" src="assets/js/load-css.js?v=<?php echo $version ?>"></script>
		<noscript>
			<link rel="stylesheet" type="text/css" media="screen" href="assets/css/global-rem-fallback.css?v=<?php echo $version ?>">
		</noscript>

		<title>dd-reality</title>
	</head>
	<body>
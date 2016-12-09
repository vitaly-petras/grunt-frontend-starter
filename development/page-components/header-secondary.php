<!-- Hlavicka - logo - menu -->
<header class="header header--secondary" id="js-header">
	<a href="#" class="header__logo">
		<img src="assets/images/web/logo.png" alt="">
	</a>

	<div class="toggle-nav" onclick="toggle(event, this)" data-target="#js-navigation" data-toggle-class="active" data-close-onblur="true" data-overflow="true" id="js-toggle-nav">
		<span class="toggle-nav__span toggle-nav__span--top"></span>
		<span class="toggle-nav__span toggle-nav__span--middle"></span>
		<span class="toggle-nav__span toggle-nav__span--bottom"></span>
	</div>

	<nav class="header__navigation">
		<ul class="menu menu--secondary">
			<li class="menu__item menu__item--has-submenu">
				<a href="#" class="menu__item__in">
					Domů
				</a>

				<ul class="menu__submenu">
					<li class="menu__submenu__item">
						<a class="menu__submenu__item__in" href="#">Lorem ipsum</a>
					</li>
					<li class="menu__submenu__item">
						<a class="menu__submenu__item__in" href="#">Dolor sit amet sic</a>
					</li>
					<li class="menu__submenu__item">
						<a class="menu__submenu__item__in" href="#">Položka v drop</a>
					</li>
				</ul>
			</li>

			<li class="menu__item">
				<a href="#" class="menu__item__in">
					O nás
				</a>
			</li>

			<li class="menu__item">
				<a href="#" class="menu__item__in">
					Koupit nemovitost
				</a>
			</li>

			<li class="menu__item">
				<a href="#" class="menu__item__in">
					Hypotéky
				</a>
			</li>

			<li class="menu__item">
				<a href="#" class="menu__item__in">
					Naši makléři
				</a>
			</li>

			<li class="menu__item">
				<a href="#contact" class="menu__item__in" onclick="openWindow(event, this)">
					Kontaktujte nás
				</a>
			</li>
		</ul>
	</nav>
</header>
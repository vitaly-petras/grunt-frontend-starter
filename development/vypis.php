<?php @include "page-components/page-start.php" ?>

	<?php @include "page-components/header-secondary.php" ?>

	<!-- uvod - pozadi -->
	<figure class="box-image" style="background-image: url(assets/images/web/bg-statement.jpg);">
		<figcaption class="box-image__in">
			<div class="container">
				<h1 class="box-intro__title">
					Výpis produktů 
				</h1>
			</div>
		</figcaption>

		<?php @include "page-components/filter.php" ?>
	</figure>


	<!-- Vypis nemovitosti -->
	<section class="wrap-section">
		<div class="container">

			<header class="box-header">

				<!-- drobeckova navigace -->
				<ul class="list-breadcrumb">
					<li class="list-breadcrumb__item">
						<a href="./" class="list-breadcrumb__item__in">
							Eurobydleni
						</a>
					</li>

					<li class="list-breadcrumb__item">
						<a href="./listing.php" class="list-breadcrumb__item__in">
							Nemovitosti
						</a>
					</li>

					<li class="list-breadcrumb__item">
						<span class="list-breadcrumb__item__in list-breadcrumb__item__in--current">
							Byty na prodej
						</span>
					</li>
				</ul>

				<h1 class="box-header__title">
					Byty na prodej
				</h1>

				<div class="box-desc">
					<p>
						Nulla vitae turpis nec elit maximus consequat venenatis quis diam. Aliquam ligula purus, congue eget orci eget, ultricies tincidunt felis. Sed fringilla ligula rutrum egestas bibendum. Nullam rhoncus ante orci, et suscipit metus ullamcorper ac. Proin eu tellus ligula. Curabitur at enim ligula. Vivamus commodo semper nunc, in feugiat neque lacinia quis. Integer pharetra lacinia risus, nec pharetra nisi vulputate sit amet. Aliquam erat volutpat.
					</p>
				</div>

				<dl class="in-sort">
					<dt>Seřadit</dt>
					<dd>
						<select>
							<option>Dle data přidání</option>
							<option>Dle Ceny</option>
						</select>
					</dd>
				</dl>

				<a href="#request" class="button box-header__button" onclick="openWindow(event, this)"
					>Upravit hledání
				</a>
			</header>
		
			<ul class="list-items">
				<li class="list-items__item">
					<article class="list-items__item__in" onmouseenter="hoverItem(this)" onclick="openWindow(event, this)" data-target="detail">
						<figure class="list-items__item__image">
							<img src="assets/images/web/items/1.jpg" alt="">
						</figure>

						<div class="list-items__item__cell">
							<ul>
								<li>Beroun</li>
								<li>Pronájem</li>
							</ul>

							<h4 class="list-items__item__title">
								<a href="#" class="js-simulate-link-target">
									Pronájem bytu po rekonstrukci 2+kk 50m2,ul.Jaselská
								</a>
							</h4>

							<p class="list-items__item__price">
								Cena: <strong>7 500 Kč/měs</strong>
							</p>

							<div class="list-items__item__info js-toggle-me">
								<p>
									Světlý nezařízený byt po vnitřní rekonstrukci v zatepleném cihlovém domě s novou fasádou a izolačními okny. Kuchyňská linka s myčkou, v koupelně WC s prostorným sprchovým
								</p>
								s
								<a href="#" class="button button--dark">
									Zobrazit detail
								</a>
							</div>
						</div>
					</article>
				</li>

				<li class="list-items__item">
					<article class="list-items__item__in" onmouseenter="hoverItem(this)" onclick="openWindow(event, this)" data-target="detail">
						<figure class="list-items__item__image">
							<img src="assets/images/web/items/2.jpg" alt="">
						</figure>

						<div class="list-items__item__cell">
							<ul>
								<li>Beroun</li>
								<li>Pronájem</li>
							</ul>

							<h4 class="list-items__item__title">
								<a href="#" class="js-simulate-link-target">
									Pronájem bytu po rekonstrukci 2+kk 50m2,ul.Jaselská
								</a>
							</h4>

							<p class="list-items__item__price">
								Cena: <strong>7 500 Kč/měs</strong>
							</p>

							<div class="list-items__item__info js-toggle-me">
								<p>
									Světlý nezařízený byt po vnitřní rekonstrukci v zatepleném cihlovém domě s novou fasádou a izolačními okny. Kuchyňská linka s myčkou, v koupelně WC s prostorným sprchovým
								</p>

								<a href="#" class="button button--dark">
									Zobrazit detail
								</a>
							</div>
						</div>
					</article>
				</li>

				<li class="list-items__item">
					<article class="list-items__item__in" onmouseenter="hoverItem(this)" onclick="openWindow(event, this)" data-target="detail">
						<figure class="list-items__item__image">
							<img src="assets/images/web/items/3.jpg" alt="">
						</figure>

						<div class="list-items__item__cell">
							<ul>
								<li>Beroun</li>
								<li>Pronájem</li>
							</ul>

							<h4 class="list-items__item__title">
								<a href="#" class="js-simulate-link-target">
									Pronájem bytu po rekonstrukci 2+kk 50m2,ul.Jaselská
								</a>
							</h4>

							<p class="list-items__item__price">
								Cena: <strong>7 500 Kč/měs</strong>
							</p>

							<div class="list-items__item__info js-toggle-me">
								<p>
									Světlý nezařízený byt po vnitřní rekonstrukci v zatepleném cihlovém domě s novou fasádou a izolačními okny. Kuchyňská linka s myčkou, v koupelně WC s prostorným sprchovým
								</p>

								<a href="#" class="button button--dark">
									Zobrazit detail
								</a>
							</div>
						</div>
					</article>
				</li>
			</ul>

			<!-- strankovani -->
			<div class="container">
				<ul class="list-pagination">
					<li class="list-pagination__item list-pagination__item--text">
						<a href="#" class="list-pagination__item__in">
							Předchozí
						</a>
					</li>

					<li class="list-pagination__item">
						<a href="#" class="list-pagination__item__in">
							1
						</a>
					</li>

					<li class="list-pagination__item">
						<span class="list-pagination__item__in">
							2
						</span>
					</li>

					<li class="list-pagination__item">
						<a href="#" class="list-pagination__item__in">
							3
						</a>
					</li>

					<li class="list-pagination__item">
						<a href="#" class="list-pagination__item__in current">
							4
						</a>
					</li>

					<li class="list-pagination__item">
						<a href="#" class="list-pagination__item__in">
							5
						</a>
					</li>

					<li class="list-pagination__item">
						<span class="list-pagination__item__in list-pagination__item__in--empty">
							...
						</span>
					</li>

					<li class="list-pagination__item">
						<a href="#" class="list-pagination__item__in">
							22
						</a>
					</li>

					<li class="list-pagination__item">
						<a href="#" class="list-pagination__item__in">
							23
						</a>
					</li>

					<li class="list-pagination__item">
						<a href="#" class="list-pagination__item__in">
							24
						</a>
					</li>

					<li class="list-pagination__item list-pagination__item--text">
						<a href="#" class="list-pagination__item__in">
							Následující
						</a>
					</li>
				</ul>
			</div>
		</div>
	</section>


	<!-- mapa -->
	<figure class="box-map">
		<script type="text/javascript" src="http://maps.google.com/maps/api/js?key=AIzaSyByQFG71X3j1REDz-xC2nTQiC6e32CgvHQ"></script>
		<script type="text/javascript" src="assets/js/libs/google-maps.js"></script>
		<div class="box-map__in" id="js-map"></div>
	</figure>


	<!-- konraktovat maklere -->
	<section class="box-contact">
		<div class="container">
			<h2 class="box-contact__title">
				Najděte svůj nový domov 
			</h2>

			<p class="box-contact__desc">
				Suspendisse vulputate a lorem scelerisque aliquet. Mauris ullamcorper tortor eu turpis laoreet porttitor.
				Donec mattis cursus tellus, id porta justo fermentum sed.
			</p>

			<a href="#" class="button button--dark">
				Kontaktovat makléře
			</a>
		</div>
	</section>

	<div class="window-popup" id="js-popup">
		<div class="window-popup__in">
			<span class="window-popup__in__close" onclick="closeWindow(event)">
				<i class="icon icon__close"></i>
			</span>

			<!-- rozsireny filtr -->
			<div class="js-popup-content" id="js-window-request">
				<ul class="list-type">
					<li class="list-type__item">
						<label class="list-type__item__in">
							<input name="type" checked="" type="radio">
							<span class="list-type__item__name">Byty</span>
							<i class="icon icon__flats"></i>
						</label>
					</li>
					<li class="list-type__item">
						<label class="list-type__item__in">
							<input name="type" type="radio">
							<span class="list-type__item__name">Domy</span>
							<i class="icon icon__houses"></i>
						</label>
					</li>
					<li class="list-type__item">
						<label class="list-type__item__in">
							<input name="type" type="radio">
							<span class="list-type__item__name">Rekreační objekty</span>
							<i class="icon icon__recreational-objects"></i>
						</label>
					</li>
					<li class="list-type__item">
						<label class="list-type__item__in">
							<input name="type" type="radio">
							<span class="list-type__item__name">Komerční nemovitosti</span>
							<i class="icon icon__commercial-property"></i>
						</label>
					</li>
					<li class="list-type__item">
						<label class="list-type__item__in">
							<input name="type" type="radio">
							<span class="list-type__item__name">Pozemky</span>
							<i class="icon icon__lands"></i>
						</label>
					</li>
					<li class="list-type__item">
						<label class="list-type__item__in">
							<input name="type" type="radio">
							<span class="list-type__item__name">Ostatní</span>
							<i class="icon icon__others"></i>
						</label>
					</li>
				</ul>

				<section class="box-filter box-filter--window">
					<div class="box-filter__in">
						<h3 class="box-filter__subtitle">
							Druh bytu
						</h3>

						<div class="box-filter__checkboxes h-mb50 h-pb30">
							<div class="columns">
								<div class="columns__item columns__item--25 columns__item--mob-50">
									<label class="form-checkbox">
										<input type="checkbox" class="form-checkbox__input">
										<span class="form-checkbox__text">
											Garsonira
										</span>
									</label>

									<label class="form-checkbox">
										<input type="checkbox" class="form-checkbox__input">
										<span class="form-checkbox__text">
											1+1
										</span>
									</label>

									<label class="form-checkbox">
										<input type="checkbox" class="form-checkbox__input">
										<span class="form-checkbox__text">
											1+kk
										</span>
									</label>
								</div>

								<div class="columns__item columns__item--25 columns__item--mob-50">
									<label class="form-checkbox">
										<input type="checkbox" class="form-checkbox__input" checked>
										<span class="form-checkbox__text">
											2+1
										</span>
									</label>

									<label class="form-checkbox">
										<input type="checkbox" class="form-checkbox__input">
										<span class="form-checkbox__text">
											2+kk
										</span>
									</label>

									<label class="form-checkbox">
										<input type="checkbox" class="form-checkbox__input">
										<span class="form-checkbox__text">
											3+1
										</span>
									</label>
								</div>

								<div class="columns__item columns__item--25 columns__item--mob-50">
									<label class="form-checkbox">
										<input type="checkbox" class="form-checkbox__input">
										<span class="form-checkbox__text">
											3+kk
										</span>
									</label>

									<label class="form-checkbox">
										<input type="checkbox" class="form-checkbox__input">
										<span class="form-checkbox__text">
											4+1
										</span>
									</label>

									<label class="form-checkbox">
										<input type="checkbox" class="form-checkbox__input">
										<span class="form-checkbox__text">
											4+kk
										</span>
									</label>
								</div>

								<div class="columns__item columns__item--25 columns__item--mob-50">
									<label class="form-checkbox">
										<input type="checkbox" class="form-checkbox__input">
										<span class="form-checkbox__text">
											5+1
										</span>
									</label>

									<label class="form-checkbox">
										<input type="checkbox" class="form-checkbox__input">
										<span class="form-checkbox__text">
											5+kk
										</span>
									</label>
								</div>
							</div>
						</div>

						<ul class="list-types">
							<li class="list-types__item">
								<i class="icon icon__sale"></i>
								<label class="list-types__item__in">
									<input type="radio" name="sale-type" checked>
									<span>Prodej</span>
								</label>
							</li>
							<li class="list-types__item">
								<i class="icon icon__rental"></i>
								<label class="list-types__item__in">
									<input type="radio" name="sale-type">
									<span>Pronájem</span>
								</label>
							</li>
							<li class="list-types__item">
								<i class="icon icon__auction"></i>
								<label class="list-types__item__in">
									<input type="radio" name="sale-type">
									<span>Dražba</span>
								</label>
							</li>
						</ul>


						<h3 class="box-filter__subtitle">
							Cena a plocha
						</h3>

						<div class="form-range">
							<div class="form-range__in">
								<figure class="form-range__icon">
									<i class="icon icon__range-price"></i>
								</figure>
							</div>
							<div class="form-range__in">
								<label class="form-range__text">Cena od</label>
								<input type="text" class="input input--secondary" placeholder="1 200 000" onkeypress="return isNumberKey(event)" onkeyup="return separateNumber(event)">
								<strong class="form-range__unit">Kč</strong>
							</div>
							<div class="form-range__in">
								<label class="form-range__text">Cena do</label>
								<input type="text" class="input  input--secondary" placeholder="1 200 000" onkeypress="return isNumberKey(event)" onkeyup="return separateNumber(event)">
								<strong class="form-range__unit">Kč</strong>
							</div>
						</div>

						<div class="form-range">
							<div class="form-range__in">
								<figure class="form-range__icon">
									<i class="icon icon__range-area"></i>
								</figure>
							</div>
							<div class="form-range__in">
								<label class="form-range__text">Plocha  od</label>
								<input type="text" class="input input--secondary" placeholder="1 200 000" onkeypress="return isNumberKey(event)" onkeyup="return separateNumber(event)">
								<strong class="form-range__unit">m<sup>2</sup></strong>
							</div>
							<div class="form-range__in">
								<label class="form-range__text">Plocha  do</label>
								<input type="text" class="input input--secondary" placeholder="1 200 000" onkeypress="return isNumberKey(event)" onkeyup="return separateNumber(event)">
								<strong class="form-range__unit">m<sup>2</sup></strong>
							</div>
						</div>

						<h3 class="box-filter__subtitle">
							Kraj a lokalita
						</h3>
						

						<div class="box-filter__checkboxes">
							<div class="columns">
								<div class="columns__item columns__item--33-5 columns__item--mob-50">
									<label class="form-checkbox">
										<input type="checkbox" class="form-checkbox__input">
										<span class="form-checkbox__text">
											Praha
										</span>
									</label>

									<label class="form-checkbox">
										<input type="checkbox" class="form-checkbox__input">
										<span class="form-checkbox__text">
											Středočeský
										</span>
									</label>

									<label class="form-checkbox">
										<input type="checkbox" class="form-checkbox__input">
										<span class="form-checkbox__text">
											Jihočeský
										</span>
									</label>

									<label class="form-checkbox">
										<input type="checkbox" class="form-checkbox__input">
										<span class="form-checkbox__text">
											Plzeňský
										</span>
									</label>

									<label class="form-checkbox">
										<input type="checkbox" class="form-checkbox__input" checked>
										<span class="form-checkbox__text">
											Karlovarský
										</span>
									</label>

									<label class="form-checkbox">
										<input type="checkbox" class="form-checkbox__input" checked>
										<span class="form-checkbox__text">
											Ústecký
										</span>
									</label>
								</div>

								<div class="columns__item columns__item--33-5 columns__item--mob-50">
									<label class="form-checkbox">
										<input type="checkbox" class="form-checkbox__input">
										<span class="form-checkbox__text">
											Ústecký
										</span>
									</label>

									<label class="form-checkbox">
										<input type="checkbox" class="form-checkbox__input">
										<span class="form-checkbox__text">
											Liberecký
										</span>
									</label>

									<label class="form-checkbox">
										<input type="checkbox" class="form-checkbox__input">
										<span class="form-checkbox__text">
											Královehradecký
										</span>
									</label>

									<label class="form-checkbox">
										<input type="checkbox" class="form-checkbox__input">
										<span class="form-checkbox__text">
											Pardubický
										</span>
									</label>

									<label class="form-checkbox">
										<input type="checkbox" class="form-checkbox__input">
										<span class="form-checkbox__text">
											Olomoucký
										</span>
									</label>

									<label class="form-checkbox">
										<input type="checkbox" class="form-checkbox__input">
										<span class="form-checkbox__text">
											Vysočina
										</span>
									</label>
								</div>

								<div class="columns__item columns__item--33-5 columns__item--mob-50">
									<label class="form-checkbox">
										<input type="checkbox" class="form-checkbox__input">
										<span class="form-checkbox__text">
											Jihomoravský
										</span>
									</label>
									<label class="form-checkbox">
										<input type="checkbox" class="form-checkbox__input">
										<span class="form-checkbox__text">
											Moravskoslezký
										</span>
									</label>
									<label class="form-checkbox">
										<input type="checkbox" class="form-checkbox__input">
										<span class="form-checkbox__text">
											Zlínský
										</span>
									</label>
								</div>
							</div>
						</div>

						<h3 class="box-filter__subtitle">
							Karlovarský
						</h3>

						<div class="box-filter__checkboxes">
							<div class="columns">
								<div class="columns__item columns__item--33-5 columns__item--mob-50">
									<label class="form-checkbox">
										<input type="checkbox" class="form-checkbox__input">
										<span class="form-checkbox__text">
											Cheb
										</span>
									</label>
								</div>

								<div class="columns__item columns__item--33-5 columns__item--mob-50">
									<label class="form-checkbox">
										<input type="checkbox" class="form-checkbox__input" checked>
										<span class="form-checkbox__text">
											Karlovy Vary
										</span>
									</label>
								</div>

								<div class="columns__item columns__item--33-5 columns__item--mob-50">
									<label class="form-checkbox">
										<input type="checkbox" class="form-checkbox__input">
										<span class="form-checkbox__text">
											Sokolov
										</span>
									</label>
								</div>
							</div>
						</div>

						<h3 class="box-filter__subtitle">
							Ústecký
						</h3>

						<div class="box-filter__checkboxes">
							<div class="columns">
								<div class="columns__item columns__item--33-5 columns__item--mob-50">
									<label class="form-checkbox">
										<input type="checkbox" class="form-checkbox__input">
										<span class="form-checkbox__text">
											Děčín
										</span>
									</label>
									<label class="form-checkbox">
										<input type="checkbox" class="form-checkbox__input" checked>
										<span class="form-checkbox__text">
											Chomutov
										</span>
									</label>
									<label class="form-checkbox">
										<input type="checkbox" class="form-checkbox__input">
										<span class="form-checkbox__text">
											Litoměřice
										</span>
									</label>
								</div>

								<div class="columns__item columns__item--33-5 columns__item--mob-50">
									<label class="form-checkbox">
										<input type="checkbox" class="form-checkbox__input">
										<span class="form-checkbox__text">
											Louny
										</span>
									</label>
									<label class="form-checkbox">
										<input type="checkbox" class="form-checkbox__input">
										<span class="form-checkbox__text">
											Most
										</span>
									</label>
									<label class="form-checkbox">
										<input type="checkbox" class="form-checkbox__input">
										<span class="form-checkbox__text">
											Teplice
										</span>
									</label>
								</div>

								<div class="columns__item columns__item--33-5 columns__item--mob-50">
									<label class="form-checkbox">
										<input type="checkbox" class="form-checkbox__input">
										<span class="form-checkbox__text">
											Ústí nad Labem
										</span>
									</label>
								</div>
							</div>
						</div>

						<div id="js-advanced-settings" class="h-display-none">

							<h3 class="box-filter__subtitle">
								IS sítě
							</h3>

							<div class="box-filter__checkboxes">
								<div class="columns">
									<div class="columns__item columns__item--33-5 columns__item--mob-50">
										<label class="form-checkbox">
											<input type="checkbox" class="form-checkbox__input">
											<span class="form-checkbox__text">
												230V
											</span>
										</label>
										<label class="form-checkbox">
											<input type="checkbox" class="form-checkbox__input" checked>
											<span class="form-checkbox__text">
												Klimatizace
											</span>
										</label>
										<label class="form-checkbox">
											<input type="checkbox" class="form-checkbox__input">
											<span class="form-checkbox__text">
												TV satelit
											</span>
										</label>
										<label class="form-checkbox">
											<input type="checkbox" class="form-checkbox__input">
											<span class="form-checkbox__text">
												Kanalizace
											</span>
										</label>
									</div>

									<div class="columns__item columns__item--33-5 columns__item--mob-50">
										<label class="form-checkbox">
											<input type="checkbox" class="form-checkbox__input">
											<span class="form-checkbox__text">
												400V
											</span>
										</label>
										<label class="form-checkbox">
											<input type="checkbox" class="form-checkbox__input">
											<span class="form-checkbox__text">
												Telefon
											</span>
										</label>
										<label class="form-checkbox">
											<input type="checkbox" class="form-checkbox__input">
											<span class="form-checkbox__text">
												Plyn
											</span>
										</label>
										<label class="form-checkbox">
											<input type="checkbox" class="form-checkbox__input">
											<span class="form-checkbox__text">
												Internet
											</span>
										</label>
									</div>

									<div class="columns__item columns__item--33-5 columns__item--mob-50">
										<label class="form-checkbox">
											<input type="checkbox" class="form-checkbox__input">
											<span class="form-checkbox__text">
												TV kabel
											</span>
										</label>
										<label class="form-checkbox">
											<input type="checkbox" class="form-checkbox__input">
											<span class="form-checkbox__text">
												Voda pitná
											</span>
										</label>
									</div>
								</div>
							</div>

							<h3 class="box-filter__subtitle">
								Umístění v obci
							</h3>

							<div class="box-filter__checkboxes">
								<div class="columns">
									<div class="columns__item columns__item--33-5 columns__item--mob-50">
										<label class="form-checkbox">
											<input type="checkbox" class="form-checkbox__input">
											<span class="form-checkbox__text">
												Centrum obce
											</span>
										</label>
										<label class="form-checkbox">
											<input type="checkbox" class="form-checkbox__input" checked>
											<span class="form-checkbox__text">
												Okraj obce
											</span>
										</label>
										<label class="form-checkbox">
											<input type="checkbox" class="form-checkbox__input">
											<span class="form-checkbox__text">
												Samota
											</span>
										</label>
									</div>

									<div class="columns__item columns__item--33-5 columns__item--mob-50">
										<label class="form-checkbox">
											<input type="checkbox" class="form-checkbox__input">
											<span class="form-checkbox__text">
												Rušná část obce
											</span>
										</label>
										<label class="form-checkbox">
											<input type="checkbox" class="form-checkbox__input">
											<span class="form-checkbox__text">
												Sídliště
											</span>
										</label>
										<label class="form-checkbox">
											<input type="checkbox" class="form-checkbox__input">
											<span class="form-checkbox__text">
												Klidní část obce
											</span>
										</label>
									</div>

									<div class="columns__item columns__item--33-5 columns__item--mob-50">
										<label class="form-checkbox">
											<input type="checkbox" class="form-checkbox__input">
											<span class="form-checkbox__text">
												Polosamost
											</span>
										</label>
									</div>
								</div>
							</div>

							<h3 class="box-filter__subtitle">
								Typ budovy
							</h3>

							<div class="box-filter__checkboxes">
								<div class="columns">
									<div class="columns__item columns__item--33-5 columns__item--mob-50">
										<label class="form-checkbox">
											<input type="checkbox" class="form-checkbox__input">
											<span class="form-checkbox__text">
												Řadový
											</span>
										</label>
										<label class="form-checkbox">
											<input type="checkbox" class="form-checkbox__input" checked>
											<span class="form-checkbox__text">
												Atriový
											</span>
										</label>
										<label class="form-checkbox">
											<input type="checkbox" class="form-checkbox__input">
											<span class="form-checkbox__text">
												Dvougenerační
											</span>
										</label>
										<label class="form-checkbox">
											<input type="checkbox" class="form-checkbox__input">
											<span class="form-checkbox__text">
												V bloku
											</span>
										</label>
									</div>

									<div class="columns__item columns__item--33-5 columns__item--mob-50">
										<label class="form-checkbox">
											<input type="checkbox" class="form-checkbox__input">
											<span class="form-checkbox__text">
												Samostatně stojící
											</span>
										</label>
										<label class="form-checkbox">
											<input type="checkbox" class="form-checkbox__input">
											<span class="form-checkbox__text">
												Terasový
											</span>
										</label>
										<label class="form-checkbox">
											<input type="checkbox" class="form-checkbox__input">
											<span class="form-checkbox__text">
												Vícegenerační
											</span>
										</label>
										<label class="form-checkbox">
											<input type="checkbox" class="form-checkbox__input">
											<span class="form-checkbox__text">
												Dvojdům
											</span>
										</label>
									</div>

									<div class="columns__item columns__item--33-5 columns__item--mob-50">
										<label class="form-checkbox">
											<input type="checkbox" class="form-checkbox__input">
											<span class="form-checkbox__text">
												Rohový
											</span>
										</label>

										<label class="form-checkbox">
											<input type="checkbox" class="form-checkbox__input">
											<span class="form-checkbox__text">
												Nízkoenergetický
											</span>
										</label>
									</div>
								</div>
							</div>
						</div>

						<footer class="box-filter__footer">
							<a href="#" class="box-filter__footer__more js-toggle" data-target="js-advanced-settings" data-toggle-text="Schovat rozšířené možnosti">
								Zobrazit rozšířené možnosti
							</a>

							<div class="h-display-none h-pt50" id="js-save-request">
								<h3 class="window-popup__title">Základní údaje</h3>

								<div class="columns">
									<div class="columns__item columns__item--50 columns__item--mob-xs-100">
										<input type="text" class="input" placeholder="Jméno">
									</div>
									<div class="columns__item columns__item--50 columns__item--mob-xs-100">
										<input type="text" class="input" placeholder="Příjmení">
									</div>
									<div class="columns__item columns__item--50 columns__item--mob-xs-100">
										<input type="email" class="input" placeholder="Email">
									</div>
									<div class="columns__item columns__item--50 columns__item--mob-xs-100">
										<input type="tel" class="input" placeholder="Telefon">
									</div>
								</div>
							</div>

							<div class="h-text-center">
								<button class="button button--secondary">
									Vytvořit poptávku
								</button>
							</div>

							<label class="form-checkbox js-toggle" data-target="js-save-request">
								<input type="checkbox" class="form-checkbox__input">
								<span class="form-checkbox__text">
									Uložit jako poptávku
								</span>
							</label>
						</footer>
					</div>
				</section>
			</div>


			<!-- kontaktujte nas -->
			<div class="js-popup-content" id="js-window-contact">
				<h2 class="window-popup__title">
					Máte otázku?
				</h2>

				<form class="form-contact">
					<input class="input" name="name" type="text" placeholder="Vaše jméno a příjmení">
					<input class="input" name="email" type="email" placeholder="E-mail" >
					<input class="input" name="form[telefon]" class="input cookie-save-input-value" placeholder="Telefon" value="" type="text">
					<input class="input" name="form[advert_id][]" value="" type="hidden">
					<textarea placeholder="Zpráva"></textarea>
					<button type="submit" class="button">
						Odeslat zprávu
					</button>
				</form>
			</div>


			<!-- detail produktu -->
			<div class="js-popup-content" id="js-window-detail">
				<section class="window-detail">
					<header class="window-detail__header">

						<!-- drobeckova navigace -->
						<ul class="list-breadcrumb">
							<li class="list-breadcrumb__item">
								<a href="./" class="list-breadcrumb__item__in">
									Eurobydleni
								</a>
							</li>

							<li class="list-breadcrumb__item">
								<a href="./listing.php" class="list-breadcrumb__item__in">
									Nemovitosti
								</a>
							</li>

							<li class="list-breadcrumb__item">
								<a href="./listing.php" class="list-breadcrumb__item__in">
									Byty-Pronájem  
								</a>
							</li>

							<li class="list-breadcrumb__item">
								<span class="list-breadcrumb__item__in list-breadcrumb__item__in--current">
									Novostavba bytu 1+kk
								</span>
							</li>
						</ul>

						<h1 class="window-detail__header__title">
							Novostavba bytu 1+kk, 38 m2, OV, Rakovník, ulice Českobratrská
						</h1>

						<p class="window-detail__header__location">
							Lokalita:
							<a href="#">Českobratrská ulice, Rakovník</a>
						</p>

						<a href="#" class="window-detail__header__print">
							Vytisknout
							<i class="icon icon__print"></i>
						</a>
					</header>

					<div class="columns">
						<div class="columns__item columns__item--48 columns__item--48 columns__item--tab-100">
							<div class="columns">
								<div class="columns__item columns__item--50">
									<dl class="in-params">
										<dt>Adresa:</dt>
										<dd>Českobratrská, Rakovník</dd>
									</dl>

									<dl class="in-params">
										<dt>Velikost:</dt>
										<dd>1+kk</dd>
									</dl>

									<dl class="in-params">
										<dt>Podlaží:</dt>
										<dd>1. patro</dd>
									</dl>

									<dl class="in-params">
										<dt>Bytové jádro:</dt>
										<dd>zděné</dd>
									</dl>

									<dl class="in-params">
										<dt>Elektřina:</dt>
										<dd>220 V</dd>
									</dl>

									<dl class="in-params">
										<dt>Zařízeno:</dt>
										<dd>Kompletně zařízeno</dd>
									</dl>

									<dl class="in-params">
										<dt>Voda:</dt>
										<dd>Vodovod</dd>
									</dl>

									<dl class="in-params">
										<dt>Parkování:</dt>
										<dd>Garáž</dd>
									</dl>

									<dl class="in-params">
										<dt>Internetové připojení:</dt>
										<dd>Kabelové</dd>
									</dl>
								</div>	

								<div class="columns__item columns__item--50">
									<dl class="in-params">
										<dt>Stav nemovitosti:</dt>
										<dd>Novostavba</dd>
									</dl>

									<dl class="in-params">
										<dt>Konstrukce budovy:</dt>
										<dd>Cihla</dd>
									</dl>

									<dl class="in-params">
										<dt>Typ vlastnictví:</dt>
										<dd>osobní</dd>
									</dl>
								</div>	
							</div>

							<div class="box-details js-details">
								<div class="box-details__in js-details__in">
									<div class="box-desc h-pt50">
										<h2>Popis objektu</h2>
										<p>
											Byt 1+kk s balkonem v novostavbě, 38 m2, plně vybavený a zařízený. Byt se nachází v 1.patře a je orientován na JZ do vnitrobloku. Velkou výhodou je dopravní dostupnost na tram a na metro Anděl. Je možné domluvit parkování v domě v krytých garážích. Duis lacus orci, tristique eu nulla a, ornare pellentesque mi. Integer rutrum sit amet eros in fringilla. Aenean aliquet metus ut tristique semper. Vivamus massa urna.
										</p>
										<p>
											Byt 1+kk s balkonem v novostavbě, 38 m2, plně vybavený a zařízený. Byt se nachází v 1.patře a je orientován na JZ do vnitrobloku. Velkou výhodou je dopravní dostupnost na tram a na metro Anděl. Je možné domluvit parkování v domě v krytých garážích. Duis lacus orci, tristique eu nulla a, ornare pellentesque mi. Integer rutrum sit amet eros in fringilla. Aenean aliquet metus ut tristique semper. Vivamus massa urna.
										</p>

										<p>
											Byt 1+kk s balkonem v novostavbě, 38 m2, plně vybavený a zařízený. Byt se nachází v 1.patře a je orientován na JZ do vnitrobloku. Velkou výhodou je dopravní dostupnost na tram a na metro Anděl. Je možné domluvit parkování v domě v krytých garážích. Duis lacus orci, tristique eu nulla a, ornare pellentesque mi. Integer rutrum sit amet eros in fringilla. Aenean aliquet metus ut tristique semper. Vivamus massa urna.
										</p>
										<h2>Popis objektu</h2>
										<p>
											Byt 1+kk s balkonem v novostavbě, 38 m2, plně vybavený a zařízený. Byt se nachází v 1.patře a je orientován na JZ do vnitrobloku. Velkou výhodou je dopravní dostupnost na tram a na metro Anděl. Je možné domluvit parkování v domě v krytých garážích. Duis lacus orci, tristique eu nulla a, ornare pellentesque mi. Integer rutrum sit amet eros in fringilla. Aenean aliquet metus ut tristique semper. Vivamus massa urna.
										</p>
										<p>
											Byt 1+kk s balkonem v novostavbě, 38 m2, plně vybavený a zařízený. Byt se nachází v 1.patře a je orientován na JZ do vnitrobloku. Velkou výhodou je dopravní dostupnost na tram a na metro Anděl. Je možné domluvit parkování v domě v krytých garážích. Duis lacus orci, tristique eu nulla a, ornare pellentesque mi. Integer rutrum sit amet eros in fringilla. Aenean aliquet metus ut tristique semper. Vivamus massa urna.
										</p>

										<p>
											Byt 1+kk s balkonem v novostavbě, 38 m2, plně vybavený a zařízený. Byt se nachází v 1.patře a je orientován na JZ do vnitrobloku. Velkou výhodou je dopravní dostupnost na tram a na metro Anděl. Je možné domluvit parkování v domě v krytých garážích. Duis lacus orci, tristique eu nulla a, ornare pellentesque mi. Integer rutrum sit amet eros in fringilla. Aenean aliquet metus ut tristique semper. Vivamus massa urna.
										</p>
									</div>
								</div>

								<div class="box-details__more">
									<a href="#" id="js-show-details" data-text="Méně informací">
										Více informací
									</a>
								</div>
							</div>
						</div>

						<div class="columns__item columns__item--right columns__item--48 columns__item--tab-100">
							<ul class="list-gallery" id="js-gallery">
								<li class="list-gallery__item">
									<a href="assets/images/web/items/1.jpg" class="list-gallery__item__in js-fancybox" data-fancybox-group="images">
										<img src="assets/images/web/items/1.jpg" alt="">
									</a>
								</li>

								<li class="list-gallery__item">
									<a href="assets/images/web/items/2.jpg" class="list-gallery__item__in js-fancybox" data-fancybox-group="images">
										<img src="assets/images/web/items/2.jpg" alt="">
									</a>
								</li>

								<li class="list-gallery__item">
									<a href="assets/images/web/items/3.jpg" class="list-gallery__item__in js-fancybox" data-fancybox-group="images">
										<img src="assets/images/web/items/3.jpg" alt="">
									</a>
								</li>

								<li class="list-gallery__item">
									<a href="assets/images/web/items/1.jpg" class="list-gallery__item__in js-fancybox" data-fancybox-group="images">
										<img src="assets/images/web/items/1.jpg" alt="">
									</a>
								</li>

								<li class="list-gallery__item">
									<a href="assets/images/web/items/2.jpg" class="list-gallery__item__in js-fancybox" data-fancybox-group="images">
										<img src="assets/images/web/items/2.jpg" alt="">
									</a>
								</li>
								<li class="list-gallery__item">
									<a href="#" class="list-gallery__item__in list-gallery__item__in--more">
										<span>+12</span>
									</a>
								</li>
							</ul>

							<h2>
								Máte otázku?
							</h2>

							<input type="text" class="input" placeholder="Jméno">

							<input type="text" class="input" name="email" placeholder="Váš email">

							<textarea placeholder="Zde napište svůj dotaz"></textarea>

							<button type="submit" class="button button--secondary">
								Odeslat zprávu
							</button>
						</div>

						<div class="columns__item columns__item--48 columns__item--48 columns__item--tab-100 h-clear-l">
							<article class="box-broker">
								<h2 class="box-broker__title">
									Makléř
								</h2>

								<figure class="box-broker__image">
									<img src="assets/images/web/makler.jpg" alt="">
								</figure>

								<ul class="box-broker__info">
									<li>
										<h3>Jitka Fabiánová</h3>
									</li>

									<li>
										<dl>
											<dt>tel.:</dt>
											<dd><a href="tel:+420270002222" class="no-link">270002222</a></dd>
										</dl>
									</li>
									<li>
										<dl>
											<dt>mobil.:</dt>
											<dd><a href="tel:+420739222222" class="no-link">739222222</a></dd>
										</dl>
									</li>
									<li>
										<dl>
											<dt>email.:</dt>
											<dd><a href="mailto:fabianova@email.cz">fabianova@email.cz</a></dd>
										</dl>
									</li>
								</ul>
							</article>
						</div>
					</div>
				</section>
			</div>
		</div>
	</div>


	<!-- paticka - kontakt - socialni site -->
	<?php @include "page-components/footer.php" ?>
	
<?php @include "page-components/page-end.php" ?>
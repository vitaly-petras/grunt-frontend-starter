<!-- okno - detail -->
<div class="window-popup" id="js-popup">
	<div class="window-popup__in">
		<span class="window-popup__in__close js-close-window">
			<i class="icon icon__close"></i>
		</span>
		
		<div class="js-popup-content" id="js-window-detail">
			
		</div>

		<div class="js-popup-content" id="js-window-search">
			
		</div>

		<div class="js-popup-content" id="js-window-navigation">
			<ul class="list-navigation mobile-only">
				<li>
					<a href="#" class="list-navigation__in">
						O nás
					</a>
				</li>
				<li>
					<a href="#" class="list-navigation__in">
						Nemovitosti
					</a>
				</li>
				<li>
					<a href="#" class="list-navigation__in">
						Rady klientům
					</a>
				</li>
				<li>
					<a href="#register" class="list-navigation__in js-window-trigger">
						Kontakty
					</a>
				</li>
				<li>
					<a href="#login" class="list-navigation__in js-window-trigger">
						Realitní kancelář
					</a>
				</li>
			</ul>

			<ul class="list-navigation">
				<li>
					<a href="#" class="list-navigation__in">
						O Eurobydlení
					</a>
				</li>
				<li>
					<a href="#" class="list-navigation__in">
						Inzerce
					</a>
					<ul class="list-navigation__submenu">
						<li>
							<a href="#" class="list-navigation__submenu__in">Jak inzerovat</a>
						</li>
						<li>
							<a href="#" class="list-navigation__submenu__in">Ceník inzerce</a>
						</li>
						<li>
							<a href="#" class="list-navigation__submenu__in">Forma inzerce</a>
						</li>
					</ul>
				</li>
				<li>
					<a href="#" class="list-navigation__in">
						Naše API
					</a>
				</li>
				<li>
					<a href="#" class="list-navigation__in">
						Affiliate program
					</a>
				</li>
				<li>
					<a href="#" class="list-navigation__in">
						Kde nás najdete?
					</a>
				</li>
			</ul>
		</div>

		<!-- vytvořit poptávku -->
		<div class="js-popup-content" id="js-window-request">
			<!-- sem prijde obsah -->
			<h2 class="window-popup__title">Vytvořit poptávku</h2>

			<ul class="list-type">
				<li class="list-type__item">
					<figure class="list-type__item__icon">
						<i class="icon icon__flat-reverse"></i>
					</figure>
					<span class="list-type__item__name">Byty</span>
					<label class="list-type__item__in">
						<input type="radio" name="type" checked>
						<span></span>
					</label>
				</li>
				<li class="list-type__item">
					<figure class="list-type__item__icon">
						<i class="icon icon__house-reverse"></i>
					</figure>
					<span class="list-type__item__name">Domy</span>
					<label class="list-type__item__in">
						<input type="radio" name="type">
						<span></span>
					</label>
				</li>
				<li class="list-type__item">
					<figure class="list-type__item__icon">
						<i class="icon icon__recreation-reverse"></i>
					</figure>
					<span class="list-type__item__name">Rekreační</span>
					<label class="list-type__item__in">
						<input type="radio" name="type">
						<span></span>
					</label>
				</li>
				<li class="list-type__item">
					<figure class="list-type__item__icon">
						<i class="icon icon__land-reverse"></i>
					</figure>
					<span class="list-type__item__name">Pozemky</span>
					<label class="list-type__item__in">
						<input type="radio" name="type">
						<span></span>
					</label>
				</li>
				<li class="list-type__item">
					<figure class="list-type__item__icon">
						<i class="icon icon__commercial-reverse"></i>
					</figure>
					<span class="list-type__item__name">Komerční</span>
					<label class="list-type__item__in">
						<input type="radio" name="type">
						<span></span>
					</label>
				</li>
				<li class="list-type__item">
					<figure class="list-type__item__icon">
						<i class="icon icon__other-reverse"></i>
					</figure>
					<span class="list-type__item__name">Ostatní</span>
					<label class="list-type__item__in">
						<input type="radio" name="type">
						<span></span>
					</label>
				</li>
				<li class="list-type__item">
					<figure class="list-type__item__icon">
						<i class="icon icon__external-reverse"></i>
					</figure>
					<span class="list-type__item__name">Zahraniční</span>
					<label class="list-type__item__in">
						<input type="radio" name="type">
						<span></span>
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
	</div>
</div>
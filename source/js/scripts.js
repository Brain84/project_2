import jQuery from "jquery";
window.$ = window.jQuery = jQuery;

//scroll to a section
$('a[href*="#"]:not([href="#"])').click(function() {
	if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {

		var target = $(this.hash);

		target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		if (target.length) {
			$('html, body').animate({
				scrollTop: target.offset().top
			}, 1000);
			return false;
		}
	}
});

//open nav list
$('.js-hamburger').on('click', function() {
	$('.header-nav-list').toggleClass('is-open-menu');
});

//translation of language
var arrLang = {
	'en': {
		'nav1': 'Cars',
		'nav2': 'Overview',
		'nav3': 'Details',
		'nav4': 'Price',
		'nav5': 'Contact us',
		'hero1': 'Go drive',
		'art1': 'Overview',
		'art2': 'Only This month',
		'art3': 'Buy now',
		'art4': 'Details',
		'art5': 'Price',
		'art6': 'Request a call',
		'contact1': 'Enter your information',
		'contact2': 'Send',
		'footer1': 'Services',
		'footer2': 'My OUD',
		'footer3': 'Press',
		'footer4': 'Terms',
		'footer5': 'Contact',
		'footer6': 'Company',
		'footer7': 'Corporate Strategy',
		'footer8': 'Innovations',
		'footer9': 'Careers',
		'footer10': 'History',
		'footer11': 'Experience',
		'footer12': 'Investor Relations',
		'footer13': 'Sustainability',
		'footer14': 'Get in touch'
	},
	'pl': {
		'nav1': 'Modele',
		'nav2': 'Przegląd',
		'nav3': 'Detale',
		'nav4': 'Cena',
		'nav5': 'Kontakt',
		'hero1': 'Sprawdź',
		'art1': 'Przegląd',
		'art2': 'W tym miesiącu',
		'art3': 'Kup teraz',
		'art4': 'Detale',
		'art5': 'Cena',
		'art6': 'Sprawdź',
		'contact1': 'Wypełnij formularz',
		'contact2': 'Wyślij',
		'footer1': 'Usługi',
		'footer2': 'Mój OUD',
		'footer3': 'Prasa',
		'footer4': 'Regulamin',
		'footer5': 'Kontakt',
		'footer6': 'O nas',
		'footer7': 'Strategia Firmy',
		'footer8': 'Innowacje',
		'footer9': 'Kariera',
		'footer10': 'Historia',
		'footer11': 'Doświadczenie',
		'footer12': 'Nasi Klienci',
		'footer13': 'Rozwój',
		'footer14': 'Kontakt'
	}
};

$('.translate').click(function(){
	var lang = $(this).attr('id');

		$('.js-lang').each(function(index, element){
	$(this).text(arrLang[lang][$(this).attr('key')]);

		});
});


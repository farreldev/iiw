'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

$(function () {
	var _settings, _settings2, _settings3, _settings4;

	var isMobile = false;
	// device detection
	if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) {
		isMobile = true;
		if (window.innerWidth == 1024 && window.innerHeight == 1366) {
			isMobile = false;
		}
	}

	console.log('is mobile:', isMobile);

	$('#artikel').slick({
		infinite: false,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplaySpeed: 2500,
		speed: 2000,
		autoplay: true,
		prevArrow: '#prevArtikel',
		nextArrow: '#nextArtikel',
		responsive: [{
			breakpoint: 1024,
			settings: (_settings = {
				infinite: false,
				slidesToShow: 2,
				slidesToScroll: 1
			}, _defineProperty(_settings, 'infinite', true), _defineProperty(_settings, 'autoplay', false), _defineProperty(_settings, 'prevArrow', '#prevArtikel'), _defineProperty(_settings, 'nextArrow', '#nextArtikel'), _settings)
		}, {
			breakpoint: 600,
			settings: {
				infinite: false,
				slidesToShow: 2,
				slidesToScroll: 1,
				autoplay: false,
				prevArrow: '#prevArtikel',
				nextArrow: '#nextArtikel'
			}
		}, {
			breakpoint: 480,
			settings: {
				infinite: false,
				slidesToShow: 1,
				slidesToScroll: 1,
				autoplay: false,
				prevArrow: '#prevArtikel',
				nextArrow: '#nextArtikel'
			}
		}]
	});

	$('#infograph').slick({
		infinite: false,
		slidesToShow: 3,
		autoplaySpeed: 3000,
		speed: 1500,
		slidesToScroll: 1,
		autoplay: true,
		prevArrow: '#prevInfograph',
		nextArrow: '#nextInfograph',
		responsive: [{
			breakpoint: 1024,
			settings: (_settings2 = {
				infinite: false,
				slidesToShow: 3,
				slidesToScroll: 1
			}, _defineProperty(_settings2, 'infinite', true), _defineProperty(_settings2, 'autoplay', false), _defineProperty(_settings2, 'prevArrow', '#prevInfograph'), _defineProperty(_settings2, 'nextArrow', '#nextInfograph'), _settings2)
		}, {
			breakpoint: 600,
			settings: {
				infinite: false,
				slidesToShow: 2,
				slidesToScroll: 1,
				autoplay: false,
				prevArrow: '#prevInfograph',
				nextArrow: '#nextInfograph'
			}
		}, {
			breakpoint: 480,
			settings: {
				infinite: false,
				slidesToShow: 1,
				slidesToScroll: 1,
				autoplay: false,
				prevArrow: '#prevInfograph',
				nextArrow: '#nextInfograph'
			}
		}]
	});

	$('#heroImages').slick({
		infinite: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		speed: 1500,
		dots: true,
		autoplay: true,
		prevArrow: '#prevHero',
		nextArrow: '#nextHero',
		responsive: [{
			breakpoint: 1024,
			settings: (_settings3 = {
				infinite: false,
				slidesToShow: 1,
				slidesToScroll: 1
			}, _defineProperty(_settings3, 'infinite', true), _defineProperty(_settings3, 'autoplay', false), _defineProperty(_settings3, 'prevArrow', '#prevHero'), _defineProperty(_settings3, 'nextArrow', '#nextHero'), _settings3)
		}, {
			breakpoint: 600,
			settings: {
				infinite: false,
				slidesToShow: 1,
				slidesToScroll: 1,
				autoplay: false,
				prevArrow: '#prevHero',
				nextArrow: '#nextHero'
			}
		}, {
			breakpoint: 480,
			settings: {
				infinite: true,
				slidesToShow: 1,
				slidesToScroll: 1,
				fade: true,
				autoplay: true,
				prevArrow: '#prevHero',
				nextArrow: '#nextHero'
			}
		}]
	});

	$('#databoks').slick({
		infinite: false,
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplaySpeed: 2500,
		speed: 2000,
		autoplay: true,
		prevArrow: '#prevDataboks',
		nextArrow: '#nextDataboks',
		responsive: [{
			breakpoint: 1024,
			settings: (_settings4 = {
				infinite: false,
				slidesToShow: 3,
				slidesToScroll: 1
			}, _defineProperty(_settings4, 'infinite', true), _defineProperty(_settings4, 'autoplay', false), _defineProperty(_settings4, 'prevArrow', '#prevDataboks'), _defineProperty(_settings4, 'nextArrow', '#nextInfograph'), _settings4)
		}, {
			breakpoint: 600,
			settings: {
				infinite: false,
				slidesToShow: 2,
				slidesToScroll: 1,
				autoplay: false,
				prevArrow: '#prevDataboks',
				nextArrow: '#nextDataboks'
			}
		}, {
			breakpoint: 480,
			settings: {
				infinite: false,
				slidesToShow: 1,
				slidesToScroll: 1,
				autoplay: false,
				prevArrow: '#prevDataboks',
				nextArrow: '#nextDataboks'
			}
		}]
	});

	$('#artikel .item, #infoGraph .item, #databoks .item').matchHeight();

	$('.listVideo').on('click', '.vid', function (e) {
		e.preventDefault();
		activeBook($(this).index());
	});

	function activeBook(i) {
		$('.vid').removeClass('active');
		var active = $('.vid').eq(i).addClass('active');
		var pos = isMobile ? active.position().left : active.position().top;
		var currScroll = isMobile ? $('.list-motion').scrollLeft() : $('.list-motion').scrollTop();
		var contWidth = isMobile ? $('.list-motion').width() / 2 : $('.list-motion').height() / 2;
		var activeOuterWidth = isMobile ? active.outerWidth() / 2 : active.outerHeight() / 2;
		pos = isMobile ? pos + currScroll - contWidth + activeOuterWidth - 15 : pos + currScroll - contWidth + activeOuterWidth;

		isMobile ? $('.list-motion').animate({ scrollLeft: pos }, 'slow') : $('.list-motion').animate({ scrollTop: pos }, 'slow');
	}

	var navigasi = document.querySelector('header');
	window.addEventListener('scroll', headFloating);

	function headFloating() {
		var getY = this.pageYOffset;
		if (getY >= 150) {
			navigasi.classList.add('scrollDown');
		} else if (getY <= 200) {
			navigasi.classList.remove('scrollDown');
		}
	}

	$('.iiw-navbar-right ul li').on('click', 'a', function (e) {
		e.preventDefault();
		var title = $(this).data('title');
		if (title == 'home') {
			$('html, body').animate({
				scrollTop: 0
			}, 1500, 'swing');
		} else {
			$('html, body').animate({
				scrollTop: $('#' + title).position().top - (isMobile ? 115 : 145)
			}, 1500, 'swing');
		}
	});
});
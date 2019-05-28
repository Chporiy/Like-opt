$(document).ready(function() {

  var isMobile = {
      Android:        function() { return navigator.userAgent.match(/Android/i) ? true : false; },
      BlackBerry:     function() { return navigator.userAgent.match(/BlackBerry/i) ? true : false; },
      iOS:            function() { return navigator.userAgent.match(/iPhone|iPad|iPod/i) ? true : false; },
      Windows:        function() { return navigator.userAgent.match(/IEMobile/i) ? true : false; },
      any:            function() { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Windows());  }
  };

	var navCat = false; 
	var navSubcatName = false;
	var checkLikeSlider = false;
	$(".nav-cat").on('click', function() {
		if (!navCat) {
			$(".subcat").css('display', 'block');
			navCat = true;
		} else {
			$(".subcat").css('display', 'none');
			navCat = false;
		}
	});

	$(".subcat-name").on('click', function() {
		$(this).find(".subcat-subname").toggleClass('subcat-subname_active');
		$(this).find(".subcat-title__arrow").toggleClass('subcat-title__arrow_active');
	});

	var mobnav = false; 
	var mobnavCat = false; 
	$("#mobnav-text").on('click', function() {
		if (!mobnav) {
			$(".mobnav").toggleClass('mobnav_active');
			$(".mobnav-menu").css('display', 'block');
			mobnav = true;
		}
	});

	$(".mobnav-close").on('click', function(event) {
		event.preventDefault();
		$(".mobnav").toggleClass('mobnav_active');
		$(".mobnav-menu").css('display', 'none');
		$(".mobnav-cat").css('display', 'none');
		$(".mobnav-prev").css('display', 'none');
		$("#mobnav-text").text("Навигация сайта");
		mobnav = false;
	});

	$("#mobnav-linkcatalog").on('click', function(event) {
		event.preventDefault();
		$(".mobnav-menu").css('display', 'none');
		$(".mobnav-prev").css('display', 'inline-block');
		$("#mobnav-text").text("Каталог товаров");
		$(".mobnav-cat").css('display', 'block');
		mobnavCat = true;
	});

	$(".mobnav-prev").on('click', function(event) {
		event.preventDefault();
		$("#mobnav-text").text("Навигация сайта");
		$(".mobnav-prev").css('display', 'none');
		$(".mobnav-cat").css('display', 'none');
		$(".mobnav-menu").css('display', 'block');
	});

	//Slider
	$('.slider').on(`beforeChange`, function(event, slick, currentSlide, nextSlide) {
	  
	})
	$(".slider").slick({
		dots: true,
		autoplay: true,
		autoplaySpeed: 2000,
		responsive: [
		    {
		      breakpoint: 578,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1,
		        autoplay: false
		      }
		    }
		    // You can unslick at a given breakpoint now by adding:
		    // settings: "unslick"
		    // instead of a settings object
		  ]
	});

 //Установка курсора после 8 
 function setSelectionRange(input, selectionStart, selectionEnd) {
   if (input.setSelectionRange) {
     input.focus();
     input.setSelectionRange(selectionStart, selectionEnd);
   } else if (input.createTextRange) {
     var range = input.createTextRange();
     range.collapse(true);
     range.moveEnd('character', selectionEnd);
     range.moveStart('character', selectionStart);
     range.select();
   }
 }

 function setCaretToPos(input, pos) {
   setSelectionRange(input, pos, pos);
 }
 
	$("input[name='user_phone']").click(function() {
	  setCaretToPos($(this)[0], 3);
	});

	//Маска на телефон
	$(function(){
	  $("input[name='user_phone']").mask("8 (999) 999-99-99", {
	    placeholder: "8 (XXX) XXX-XX-XX",
	    completed: function(){ 
	      $('.result-center__btn').prop('disabled', false);
	         $('.result-center__btn').toggleClass('button-disabled');
	    }
	  });
	});

	// Слайдер с фото товара

	 $('.main-slider__top').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: false,
	  dots: false,
	  fade: true,
	  asNavFor: '.main-slider__bottom',
	  responsive: [
	      {
	        breakpoint: 578,
	        settings: {
	          slidesToShow: 1,
	          slidesToScroll: 1,
	          dots: true,
	          fade: false,
	          arrows: false
	        }
	      }
	      // You can unslick at a given breakpoint now by adding:
	      // settings: "unslick"
	      // instead of a settings object
	    ]
		});
		$('.main-slider__bottom').slick({
		  slidesToShow: 3,
		  slidesToScroll: 1,
		  asNavFor: '.main-slider__top',
		  focusOnSelect: true,
		  arrows: false,
		  dots: false
		});

	// Только на мобилке

	if ( isMobile.any() ) {

		//Слайдер на мобилке карточка товара "С этим товаром покупают"
		
		$('.main-with__blocks').on(`init reInit`, function(event, slick) {
		  $('.counter').text(1 + ' / ' + slick.slideCount);
		})
		$('.main-with__blocks').on(`afterChange`, function(event, slick, currentSlide, nextSlide) {
		  $('.counter').text(currentSlide + 1 + ' / ' + slick.slideCount);
		})
	  $(".main-with__blocks").slick({
     slidesToShow: 1,
     slidesToScroll: 1,
     arrows: true,
     dots: true
	  });

	  //Слайдер на мобилке карточка товара "Похожие товары"
 		function likeSlider () { 			
 					$('.main-like__products').on(`init reInit`, function(event, slick) {
 					  $('.counter1').text(1 + ' / ' + slick.slideCount);
 					})
 					$('.main-like__products').on(`afterChange`, function(event, slick, currentSlide, nextSlide) {
 					  $('.counter1').text(currentSlide + 1 + ' / ' + slick.slideCount);
 					})
 				  $(".main-like__products").slick({
 			     slidesToShow: 1,
 			     slidesToScroll: 1,
 			     arrows: true,
 			     dots: true
 				  });
 		}

	  // Плавный скрол до окна таба

	  $(".main-tabs__block").click(function () {
       $("html, body").animate({scrollTop: $("header").height()+ 950},"slow");
       return false; 
   });

   //Открытие окна с выбором категории
   
	} 

	// Выбор таба в карточке товара

	$("#tab1").on('click', function() {
		$(this).toggleClass('main-tabs__block_active');
		$("#tab2").removeClass('main-tabs__block_active');
		$("#tab3").removeClass('main-tabs__block_active');
		$("#tab4").removeClass('main-tabs__block_active');
		checkTab();
	});

	$("#tab2").on('click', function() {
		$(this).toggleClass('main-tabs__block_active');
		$("#tab1").removeClass('main-tabs__block_active');
		$("#tab3").removeClass('main-tabs__block_active');
		$("#tab4").removeClass('main-tabs__block_active');
		checkTab();
	});

	$("#tab3").on('click', function() {
		$(this).toggleClass('main-tabs__block_active');
		$("#tab1").removeClass('main-tabs__block_active');
		$("#tab2").removeClass('main-tabs__block_active');
		$("#tab4").removeClass('main-tabs__block_active');
		checkTab();
	});
	$("#tab4").on('click', function() {
		$(this).toggleClass('main-tabs__block_active');
		$("#tab1").removeClass('main-tabs__block_active');
		$("#tab2").removeClass('main-tabs__block_active');
		$("#tab3").removeClass('main-tabs__block_active');
		checkTab();
	});

	// Проверка на наличие активного класса у таба

	function checkTab () {
		if($("#tab1").hasClass('main-tabs__block_active')) {
			$(".main-with").css('display', 'block');
		} else {
			$(".main-with").css('display', 'none');
		}
		if($("#tab2").hasClass('main-tabs__block_active')) {
			$(".main-about").css('display', 'block');
		} else {
			$(".main-about").css('display', 'none');
		}
		if($("#tab3").hasClass('main-tabs__block_active')) {
			$(".main-feature").css('display', 'block');
		} else {
			$(".main-feature").css('display', 'none');
		}
		if($("#tab4").hasClass('main-tabs__block_active')) {
			$(".main-like").css('display', 'block');
			if (checkLikeSlider == false) {
				// likeSlider();
				checkLikeSlider == true;
			} 
		} else {
			$(".main-like").css('display', 'none');
		}
	}

	//Выбор цены у категории 
	var elem = document.querySelector('.main-choose__sum');
	var init = new Powerange(elem, { min: 0, max: 120000, start: 0, step: 500 });
	$('.main-choose__sum').on('change', function(event) {
		$('.main-choose__total').text($(this).val().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '));
	});

	//Выбор категории и показ товара


	$('.main-choose__btn').prop('disabled', true);

	$(".main-choose__block").change(function() {
		if ($(".main-choose__block").is(':checked')) {
		    $('.main-choose__btn').prop('disabled', false);
		} else {
			$('.main-choose__btn').prop('disabled', true);
		}
	});

	$("#choose-btnShow").on('click', function(event) {
		$(".main-category").css('display', 'block');
	});

	$("#choose-btnHide").on('click', function(event) {
		$(".main-choose__block").prop('checked', false);
		$(".main-choose__ansclad").prop('checked', false);
		$(".range-handle").css('left', '0px');
		$(".range-quantity").css('width', '0px');
		$(".main-choose__total").text(0);
		$(".main-category").css('display', 'none');
		$('.main-choose__btn').prop('disabled', true);
	});




	// Отправка формы. Заказ звонка
	$("#popup-submit").on('click', function() { //Change
	  var th = $('.popup-form').serialize();
	  $.ajax({
	    type: "POST",
	    url: "send.php", //Change
	    data: th
	  }).done(function() {
	    console.log(th);
	  });
	  return false;
	});

	// Осправка заявки
	$("#contact-submit").on('click', function() { //Change
	  var th = $('.main-left__form').serialize();
	  $.ajax({
	    type: "POST",
	    url: "send.php", //Change
	    data: th
	  }).done(function() {
	    console.log(th);
	  });
	  return false;
	});
	$("#footer-submit").on('click', function() { //Change
	  var th = $('.footer-center').serialize();
	  $.ajax({
	    type: "POST",
	    url: "send.php", //Change
	    data: th
	  }).done(function() {
	    console.log(th);
	  });
	  return false;
	});



});
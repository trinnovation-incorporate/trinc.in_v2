/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

  "use strict";


  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  
  __webpack_require__(0);
  
  $(document).ready(function () {
    var _owl2$owlCarousel;
  
    $('.cta .cta_image').height($('.cta .cta_image').width());
  
    $('.hamburger').removeClass('active');
    $('#main_nav').removeClass('show');
    $('#files').bind('change', function (e) {
      //this.files[0].size gets the size of your file.
      var r = this.files[0].size;
      var size = r / 1024 / 1024;
      $('.uploadfile').siblings('.error').hide();
      if (size <= 3) {
        $('.uploadfile').html('<span class="filename">' + $('#files').val().split('\\')[2] + '</span><button class="deletecv"></button>');
        $('.uploadfile').addClass('active');
        $('.deletecv').on("click", function () {
          e.preventDefault();
          $('#files').val('');
  
          $('.uploadfile').html('<svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.5404 3.7973H12.0414C11.9082 3.7973 11.8416 3.86392 11.8416 3.99716V21.5848C11.8416 21.718 11.9082 21.7846 12.0414 21.7846H13.5404C13.6736 21.7846 13.7402 21.718 13.7402 21.5848V3.99716C13.7402 3.86392 13.6736 3.7973 13.5404 3.7973Z" fill="#0C0042"/>    <path d="M21.1849 11.8417H4.39675C4.26351 11.8417 4.19689 11.9083 4.19689 12.0415V13.5405C4.19689 13.6737 4.26351 13.7403 4.39675 13.7403H21.1849C21.3181 13.7403 21.3848 13.6737 21.3848 13.5405V12.0415C21.3848 11.9083 21.3181 11.8417 21.1849 11.8417Z" fill="#0C0042"/></svg><span>Click to upload</span>');
          $('.uploadfile').removeClass('active');
        });
      } else {
        $('.uploadfile').siblings('.err2').show();
      }
    });
    if (localStorage.getItem("job") === null) {
      localStorage.setItem("job", "Fill in the form");
      localStorage.setItem("poziom", "");
      localStorage.setItem("status", "");
      localStorage.setItem("payment", "");
      localStorage.setItem("place", "");
	}
    $('.aplikuj').on("click", function () {
      localStorage.clear();
      localStorage.setItem("job", $(this).data("tiltle"));
      localStorage.setItem("poziom", $(this).data("poziom"));
      localStorage.setItem("status", $(this).data("status"));
      localStorage.setItem("payment", $(this).data("payment"));
      localStorage.setItem("place", $(this).data("place"));
    });
    $('a.nav-link, a.adres, .header a').on("click", function () {
      localStorage.clear();
      localStorage.setItem("job", "Fill in the form");
      localStorage.setItem("poziom", "");
      localStorage.setItem("status", "");
      localStorage.setItem("payment", "");
      localStorage.setItem("place", "");
    });
    var html = '<h1 class="like_h4">' + localStorage.getItem("job") + '<span class="poziom">' + localStorage.getItem("poziom") + '</span></h1>' + '<div class="blue">' + localStorage.getItem("status") + '</div>' + '<div class="d-flex flex-column align-items-start align-items-md-start justify-content-center">' + '<div class="p bold">' + localStorage.getItem("payment") + '</div>' + '<div class="p">' + localStorage.getItem("place") + '</div></div>';
    $('.offer_form .job_single').append(html);
  
    $('#hidden_input').attr("value", localStorage.getItem("job"));
    $('input').each(function () {
      if ($(this).val() == '') {
        $(this).siblings('.floated_label:not(.phone)').removeClass('up');
        $(this).parents('label').find('.floated_label.phone').removeClass('up_left');
      } else {
        $(this).siblings('.floated_label:not(.phone)').addClass('up');
        $(this).parents('label').find('.floated_label.phone').removeClass('up_left');
      }
    });
    $('#phone').on('click input', function () {
      $('input').each(function () {
        if ($(this).val() == '') {
          $(this).siblings('.floated_label').removeClass('up');
        }
      });
      $(this).parents('label').find('.floated_label').addClass('up_left');
      console.log($('textarea').val());
  
      if ($('textarea').val() == '') {
        $('.floated_label.textarea').removeClass('up_txt');
      }
    });
    $('input').on('click input', function () {
      $('input').each(function () {
        if ($(this).val() == '') {
          $(this).siblings('.floated_label').removeClass('up ');
          $(this).parents('label').find('.floated_label.phone').removeClass(' up_left');
        }
      });
      console.log($('textarea').val());
      if ($('textarea').val() == '') {
        $('.floated_label.textarea').removeClass('up_txt');
      }
  
      $(this).siblings('.floated_label:not(.phone),.floated_label:not(.textarea)').addClass('up');
      $(this).parents('label').find('.floated_label.phone').addClass('up_left');
    });
    $('textarea').on('click input', function () {
      $('input').each(function () {
        if ($(this).val() == '') {
          $(this).siblings('.floated_label').removeClass('up ');
          $(this).parents('label').find('.floated_label.phone').removeClass(' up_left');
        }
      });
      $('.floated_label.textarea').addClass('up_txt');
    });
  
    $(".testimonials_slider .slider").owlCarousel({
      slideBy: 1,
      loop: true,
      navText: ['', ''],
      autoplay: false,
      slideTransition: 'ease',
      responsive: {
        0: {
          margin: 20,
          items: 1.3,
          nav: false,
          dots: true,
          dotsEach: 1
        },
        991: {
          margin: 40,
          items: 2,
          nav: true,
          navText: ['', ''],
          dots: false
        }
  
      }
  
    });
    $('.tekst_slider').owlCarousel({
      slideBy: 1,
      loop: true,
      autoplay: false,
      dotsEach: 1,
      margin: 20,
      items: 1.3,
      nav: false,
      dots: true
  
    });
    $('.tekst_slider2').owlCarousel({
      slideBy: 1,
      loop: true,
      autoplay: false,
      items: 1.3,
  
      dotsEach: 1,
      margin: 20,
      nav: false,
      dots: true
  
    });
    $('.tekst_slider3').owlCarousel({
      slideBy: 1,
      loop: true,
      autoplay: false,
      dotsEach: 1,
      margin: 20,
      items: 1.3,
      nav: false,
      dots: true
  
    });
    $('.text_image_slider').owlCarousel({
      slideBy: 1,
      loop: true,
      autoplay: false,
      margin: 30,
      items: 1.3,
      nav: false,
      dots: true
  
    });
  
    $('.image_slider').owlCarousel({
      slideBy: 1,
      loop: true,
      autoplay: false,
      margin: 0,
      responsive: {
        0: {
          margin: 10,
          items: 1,
          stagePadding: 50,
          nav: false,
          dots: true,
          center: true,
          loop: true
        },
        768: {
          margin: 10,
          items: 4,
          nav: true,
          navText: ['', ''],
          dots: false
        }
  
      }
    });
    $('.image_slider2').owlCarousel({
      slideBy: 1,
      loop: true,
      autoplay: false,
      margin: 0,
      responsive: {
        0: {
          margin: 10,
          items: 1,
          stagePadding: 50,
          nav: false,
          dots: true,
          center: true,
          loop: true
        },
        991: {
          margin: 10,
          items: 4,
          nav: true,
          navText: ['', ''],
          dots: false
        }
  
      }
    });
    $(".logotypy_slider").owlCarousel({
      slideBy: 1,
      loop: false,
      nav: false,
      dots: false,
      autoplay: false,
      responsive: {
        0: {
          items: 5,
          margin: 15,
          stagePadding: 0
        },
        768: {
          items: 6,
          margin: 40
        }
  
      }
  
    });
    $('.office_slider').owlCarousel({
      slideBy: 1,
      loop: true,
      nav: true,
      dots: false,
      navText: ['', ''],
      autoplay: false,
      items: 1,
      responsive: {
        0: {
          nav: false,
          dots: true
        },
        768: {
          nav: true,
          dots: false,
          navText: ['', '']
        }
  
      }
    });
    $('.show_faq .img').on('click', function () {
      $(this).toggleClass("active");
      $('.faq_item').toggleClass("activeb");
    });
    $('.faq_item').on('click', function () {
      $(this).find('.faq_answer').slideToggle();
      $(this).toggleClass("active");
    });
    $('.navbar-toggler').on('click', function () {
      $(this).find('.hamburger').toggleClass('active');
      $('.nav-main').toggleClass('active');
      $('html').toggleClass('openmenu');
    });
  
    $('.dropdown-menu.megamenu .back').on('click', function () {
      $('.dropdown-menu.megamenu').removeClass('show');
      $('.dropdown-toggle').removeClass('show');
    });
    if ($(window).width() > 991) {
      // Add slideDown animation to Bootstrap dropdown when expanding.
  
        // $('.dropdown').on('show.bs.dropdown', function() {
        //   $(this).find('.dropdown-menu').first().stop(true, true).slideDown('fast');
        // });
  
        // // Add slideUp animation to Bootstrap dropdown when collapsing.
        // $('.dropdown').on('hide.bs.dropdown', function() {
        //   $(this).find('.dropdown-menu').first().stop(true, true).slideUp('fast');
        // });
        $(".dropdown").hover(            
          function() {
              $('.dropdown-menu', this).not('.in .dropdown-menu').stop(true,false).slideDown("400");
              $(this).addClass('open'); 
              $(this).find('.nav-link.dropdown-toggle').toggleClass('show');       
          },
          function() {
              $('.dropdown-menu', this).not('.in .dropdown-menu').stop(true,false).slideUp("400");
              $(this).removeClass('open');       
              $(this).find('.nav-link.dropdown-toggle').toggleClass('show');       
  
          }
      );
    }
  
    $('.step').eq(0).addClass('active');
    $('.step_description').eq(0).addClass('active');
  
    $('.step').on('click', function () {
      var datanum = $(this).data("number");
      $(this).addClass('active');
  
      for (var k = 0; k < parseInt(datanum); k++) {
        $('.step').eq(k).addClass('active');
      }
      for (var k = parseInt(datanum); k <= $('.step').length; k++) {
        $('.step').eq(k).removeClass('active');
      }
    });
    var owl = $('.steps_slider');
    owl.owlCarousel({
  
      loop: false,
      center: false,
      URLhashListener: true,
      startPosition: '#01',
      smartSpeed: 750,
      autoplay: false,
      dots: false,
  
      items: 1,
      margin: 20
  
    });
  
    owl.on('changed.owl.carousel', function (event) {
      var currentindex = event.item.index;
      var datanum = $('.step_description').eq(currentindex).data('numbers');
      for (var k = 0; k < parseInt(datanum); k++) {
        $('.step').eq(k).addClass('active');
      }
      for (var k = parseInt(datanum); k <= $('.step').length; k++) {
        $('.step').eq(k).removeClass('active');
      }
    });
  
    $('.point').eq(0).addClass('active');
  
    $('.point').on('click', function () {
      $('.point').each(function () {
        $(this).removeClass('active');
      });
      $(this).addClass('active');
    });
    var owl1 = $('.workshop_slider');
    owl1.owlCarousel({
      loop: true,
      URLhashListener: true,
      startPosition: '#1',
      smartSpeed: 750,
      autoplay: false,
      responsive: {
        0: {
          items: 1.3,
          margin: 10,
          center: false,
          dots: true
        },
        768: {
          items: 1,
          dots: false,
          margin: 10,
          nav: true,
          navText: ['', '']
        }
  
      }
  
    });
    owl1.on('changed.owl.carousel', function (event) {
      var hash = window.location.hash;
      hash.split('#');
      var idk = hash[1];
      $('.point').each(function () {
        $(this).removeClass('active');
      });
      $('.point[data-type="' + idk + '"').addClass('active');
    });
  
    // Case study sliders
    var owl2 = $('.case_study_slider');
    owl2.owlCarousel((_owl2$owlCarousel = {
      loop: true,
      URLhashListener: true,
      startPosition: 'URLHash',
      smartSpeed: 750,
      autoplay: false,
      slideTransition: 'ease'
    }, _defineProperty(_owl2$owlCarousel, 'smartSpeed', 150), _defineProperty(_owl2$owlCarousel, 'responsive', {
      0: {
        stagePadding: 50,
        margin: 16.66,
        center: false,
        dots: true,
        items: 1
      },
      768: {
        stagePadding: 0,
        dots: false,
        margin: 10,
        nav: true,
        navText: ['', ''],
        items: 4
      }
    }), _owl2$owlCarousel));
    owl2.children().each(function (index) {
      $(this).attr('data-position', index); // NB: .attr() instead of .data()
    });
  
    owl2.on('changed.owl.carousel', function (event) {
      var currentindex = event.item.index;
      var idik = $(this).attr('id');
      var datanum = $('.study_slider_' + idik + ' .item').eq(currentindex).data('id');
  
      $('.study_slider_' + idik + ' .item').each(function () {
        $(this).removeClass('active');
      });
      $('.study_slider_' + idik + ' [data-id=' + datanum + ']').addClass('active');
  
      $('.study_slider_container_' + idik + ' .case_item_container').each(function () {
        $(this).removeClass('active');
      });
      $('.study_slider_container_' + idik + ' .case_item_container[data-hash=' + datanum + ']').addClass('active');
    });
    $('.case_study_slider .owl-item').each(function (e) {
      var indexof = $(this).index();
      $(this).attr('data-index', indexof);
    });
  
    $('.case_study_slider').on('click', '.owl-item', function (e) {
      var indexofcurrent = $(this).data('index');
      var idik = $(this).parents('.case_study_slider').attr('id');
      var id_of_active_element = $(this).find('a').data('id');
      if (idik == 0) $('#' + idik).trigger('to.owl.carousel', indexofcurrent + 3);else {
        $('#' + idik).trigger('to.owl.carousel', indexofcurrent + 2);
      }
      $('.study_slider_container_' + idik + ' .case_item_container').each(function () {
        $(this).removeClass('active');
      });
      $('.study_slider_container_' + idik + ' [data-hash=' + id_of_active_element + ']').addClass('active');
    });
  
    //show first case study in slider
    $('.case_study_slider').each(function () {
      var idik = $(this).attr('id');
      var datanum = $('.study_slider_' + idik + ' .owl-item.active').eq(0).find('.item').data('id');
  
      $('.study_slider_' + idik + ' [data-id=' + datanum + ']').addClass('active');
      $('.study_slider_container_' + idik + ' .case_item_container[data-hash=' + datanum + ']').addClass('active');
    });
  
    $('.case_categorys .cat').on('click', function () {
      clickcasecat($(this));
    });
    if (location.hash != '') {
      $('.allcat').removeClass('active');
      $('.case_cont').hide();
      var hash = window.location.hash;
      $('.case_categorys .cat' + hash).trigger('click');
    }
  
    //shaw all case study
    $('.allcat').on('click', function () {
      $('.case_categorys .cat').each(function () {
        $(this).removeClass('active');
      });
      $('.children_posts .casecontainer').hide();
      $('.case_cont').show();
  
      if (!$(this).hasClass('active')) {
        $(this).addClass('active');
  
        $('.cases').each(function () {
          if (!$(this).hasClass('active')) {
            $(this).addClass('active').show();
          }
        });
      }
    });
    //blog slider 
    $('.blog_slider').owlCarousel({
      loop: true,
      autoplay: false,
      margin: 10,
      nav: true,
      navText: ['', ''],
      responsive: {
        0: {
          stagePadding: 0,
          margin: 17,
          center: false,
          dots: true,
          nav: false,
          items: 1
        },
        991: {
          stagePadding: 0,
          nav: true,
          items: 1,
          margin: 15
        }
      }
    });
  
    //blog filtrowanie po  kategoriach
    $('.blog_categorys .cat').on('click', function () {
      clickblogcat($(this));
    });
    if (location.hash != '') {
      $('.allcat').removeClass('active');
      $('.pagination_list').hide();
      $('.live-search-box-blog').val('');
      var hash = window.location.hash;
      $('.blog_categorys .cat' + hash).trigger('click');
    }
  
    $('.adres').on("click", function () {
      var hash = $(this).attr('href').split('#');
      $('.blog_categorys .cat#' + hash[1]).trigger('click');
      $('.case_categorys .cat#' + hash[1]).trigger('click');
    });
  
    //shaw all case study
    $('.blog_categorys .allcat').on('click', function () {
      $('.pagination_list').show();
      $('.filtredlist').hide();
      $('.live-search-box-blog').val('');
      $('.blog_categorys .cat').each(function () {
        $(this).removeClass('active');
      });
      if (!$(this).hasClass('active')) {
        $(this).addClass('active');
      }
      $('.bl').each(function () {
        $(this).addClass('active').show();
      });
    });
    $('.bl').each(function () {
      $(this).attr('data-search-term', $(this).find('h4').text().toLowerCase());
    });
  
    $('.live-search-box-blog').on('keyup', function () {
      $('.pagination_list').hide();
      $('.filtredlist').show();
      $('.blog_categorys .allcat').removeClass('active');
      $('.blog_categorys cat').each(function () {
        $(this).removeClass('active');
      });
      var searchTerm = $(this).val().toLowerCase();
  
      $('.filtredlist .bl').each(function () {
  
        if (searchTerm.length == 0) {
          $(this).show();
        } else if ($(this).filter('[data-search-term *= ' + searchTerm + ']').length > 0 || searchTerm.length < 1) {
          $(this).show();
        } else {
          $(this).hide();
        }
      });
    });
    $('#name, #lastname, #email').on('click touchend', function () {
      // $(this).removeClass('error');
      $(this).siblings('.error').hide();
    });
    $('#phone').on('click touchend', function () {
      // $(this).removeClass('error');
      $(this).siblings('.error').hide();
    });
    $(' #terms, #terms2').on('change', function () {
      $(this).siblings('span').css('color', '#0C0042');
    });
    $('#name1, #email1, #message').on('click touchend', function () {
      // $(this).removeClass('error');
      $(this).siblings('.error').hide();
    });
    $('#phone1').on('click touchend', function () {
      // $(this).removeClass('error');
      $(this).siblings('.error').hide();
    });
    $(' #terms3').on('change', function () {
      $(this).siblings('span').css('color', '#0C0042');
    });
    $('#sendjob').on('click', function () {
      var fail = false;
      var required = 7;
      //name
      if ($('#name').val() == '') {
        // $('#name').addClass('error');
        $('#name').siblings('.error').show();
      } else {
        // $('#name').removeClass('error');
        $('#name').siblings('.error').hide();
        required--;
      }
      //lastname
      if ($('#lastname').val() == '') {
        // $('#lastname').addClass('error');
        $('#lastname').siblings('.error').show();
      } else {
        $('#lastname').removeClass('error');
        $('#lastname').siblings('.error').hide();
        required--;
      }
  
      //email
      var re = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      if ($('#email').val() == '') {
        // $('#email').addClass('error');
        $('#email').siblings('.err1').show();
      } else {
        if (!re.test($('#email').val())) {
          // $('#email').addClass('error');
          $('#email').siblings('.err2').show();
          required++;
        }
        required--;
        $('#email').css('borer', '1px solid #C1C7D7');
      }
      var re2 = /((([+]|[00]{0,1})*(\d{1,3})*([ ]|[-])*)*(\d{2,4}([ ]|[-])*\d{2,4}([ ]|[-])*\d{2,4}))/g;
      if ($('#phone').val() == '') {
        // $('#phone').addClass('error');
        $('#phone').siblings('.err1').show();
      } else {
        if (!re2.test($('#phone').val())) {
          // $('#phone').addClass('error');
          $('#phone').siblings('.err2').show();
          required++;
        }
        required--;
        $('#phone').css('borer', '1px solid #C1C7D7');
      }
  
      if ($('#files').val() == '') {
        $('.uploadfile').siblings('.err1').show();
      } else {
        required--;
      }
      if (!$("#terms").is(":checked")) {
        $("#terms").siblings('span').css('color', '#dc3545');
      } else {
        $("#terms").siblings('span').css('color', '#0C0042');
        required--;
      }
      if (!$("#terms2").is(":checked")) {
        $("#terms2").siblings('span').css('color', '#dc3545');
      } else {
        $("#terms2").siblings('span').css('color', '#0C0042');
        required--;
      }
  
      if (required > 0) {
        fail = true;
      }
      if (fail) {
        return false;
      } else {
        $(this).submit();
        return true;
      }
    });
  
    $('#sendcontact').on('click', function () {
      var fail = false;
      var required = 4;
      //name
      if ($('#name1').val() == '') {
        // $('#name1').addClass('error');
        $('#name1').siblings('.error').show();
      } else {
        // $('#name1').removeClass('error');
        $('#name1').siblings('.error').hide();
        required--;
      }
  
      //email
      var re = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      if ($('#email1').val() == '') {
        // $('#email1').addClass('error');
        $('#email1').siblings('.err1').show();
      } else {
        if (!re.test($('#email1').val())) {
          // $('#email1').addClass('error');
          $('#email1').siblings('.err2').show();
          required++;
        }
        required--;
        // $('#email1').css('borer','1px solid #C1C7D7');
      }
      var re2 = /((([+]|[00]{0,1})*(\d{1,3})*([ ]|[-])*)*(\d{2,4}([ ]|[-])*\d{2,4}([ ]|[-])*\d{2,4}))/g;
      if ($('#phone1').val() == '') {
        // $('#phone1').addClass('error');
        $('#phone1').siblings('.err1').show();
      } else {
        if (!re2.test($('#phone1').val())) {
          // $('#phone1').addClass('error');
          $('#phone1').siblings('.err2').show();
          required++;
        }
        required--;
        $('#phone1').css('borer', '1px solid #C1C7D7');
      }
  
      if ($('#message').val() == '') {
        // $('#message').addClass('error');
        $('#message').siblings('.error').show();
      } else {
        // $('#message').removeClass('error');
        $('#message').siblings('.error').hide();
        required--;
      }
      if (!$("#terms3").is(":checked")) {
        $("#terms3").siblings('.error').show();
      } else {
        $("#terms3").siblings('.error').hide();
        required--;
      }
  
      if (required > 0) {
        fail = true;
      }
      console.log(required, fail);
      if (fail) {
        return false;
      } else {
        $(this).submit();
  
        window.location = "http://crustlab.milleniumhost.pl/";
        return true;
      }
    });
    $('.nav-item a').on('click', function (e) {
  
      if (!$(this).hasClass('dropdown')) {
        $('.navbar-toggler').find('.hamburger').removeClass('active');
        $('#main_nav').removeClass('show');
        $('html').removeClass('openmenu');
        $(this).submit();
        return true;
      }
    });
  
    $('button').each(function () {
      $(this).attr('aria-label', 'Center Align');
    });
    var m1 = 0;
    $('.testimonials_slider .owl-item').each(function () {
      if ($(this).height() >= m1) {
        m1 = $(this).height();
      }
    });
    $('.testimonials_slider .owl-item').each(function () {
      $(this).height(m1);
    });
    if( $(window.location.hash).length){
      setTimeout(function() { 
        $('html, body').animate({
          scrollTop: $(window.location.hash).offset().top -100
        }, 1000);
      }, 100);
    }
  });
  	
  
  var loader = document.querySelector('.spinner__container');
  var html = document.querySelector('html');
  window.addEventListener('load', function () {
    loader.parentElement.removeChild(loader);
  
    html.style.overflowY = 'auto';
  });
  
  var didScroll;
  var lastScrollTop = 0;
  var delta = 0;
  var navbarHeight = $('header').outerHeight();
  
  $(window).scroll(function (event) {
    didScroll = true;
  });
  
  setInterval(function () {
    if (didScroll) {
      // hasScrolled();
      var st = $(this).scrollTop();
  
      // Make sure they scroll more than delta
      if (Math.abs(lastScrollTop - st) <= delta) return;
  
      if (st > lastScrollTop && st > navbarHeight - 40) {
        // Scroll Down
        $('header').removeClass('nav-down').addClass('nav-up');
  
        $('.dropdown-toggle,.megamenu').removeClass('show');
        // Add slideDown animation to Bootstrap dropdown when expanding.
  
  
        $('.dropdown').find('.dropdown-menu').first().stop(true, true).slideUp('fast');
      } else {
        // Scroll Up
        $('header').removeClass('nav-up').addClass('nav-down');
      }
  
      lastScrollTop = st;
      didScroll = false;
    }
  }, 250);
  
  $(window).on('resize', function () {
    $('.cta .cta_image').height($('.cta .cta_image').width());
  });
  function clickcasecat(elem) {
  $('.allcat').removeClass('active');
  $('.case_cont').show();
  if(elem.hasClass('active')) {
    elem.removeClass('active');
  } else {
    $('.case_categorys .cat').each(function(){
        $(this).removeClass('active');
    });
    var valuetag = elem.val();
    $('.case_categorys .cat').each(function(){
      if($(this).val() == valuetag ) {
        $(this).addClass('active')
      }
  });
    $('.cases').each(function(){
        $(this).removeClass('active').hide();
    });
    $('.cases').each(function() {
      var arr = $(this).data("cat").split(",");
      arr.splice(-1,1);
      var th = $(this);
      if ($.inArray( valuetag,arr) != -1 ) {
          th.addClass('active').show();
      }
    });
  }
  
}
  function clickblogcat(elem) {
    console.log('wchodze tu');
    $('.allcat').removeClass('active');
    $('.pagination_list').hide();
    $('.filtredlist').show();
    // $('.children_posts .categorieslists').hide();
    $('.live-search-box-blog').val('');
  
    if (elem.hasClass('active')) {
      elem.removeClass('active');
    } else {
      $('.blog_categorys .cat').each(function () {
        $(this).removeClass('active');
      });
      elem.addClass('active');
      var valuetag = elem.val();
      $('.bl').each(function () {
        $(this).removeClass('active').hide();
      });
      $('.bl').each(function () {
        var arr = $(this).data("cat").split(",");
        arr.splice(-1, 1);
        var th = $(this);
        if ($.inArray(valuetag, arr) != -1) {
          th.addClass('active').show();
        }
      });
    }
  }
  
  /***/ })
  /******/ ]);
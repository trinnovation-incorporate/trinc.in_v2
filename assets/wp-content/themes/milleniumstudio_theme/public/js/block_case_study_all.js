$(document).ready(function() {
  	if($('.dropdown-menu a.main_link').hasClass('current-menu-item')){
      $('.dropdown-menu a.main_link').closest('.nav-item').addClass('current-menu-item');
    }
    var seen = {};
    $('.category_w_dup button').each(function() {
        var txt = $(this).text();
        if (seen[txt])
            $(this).remove();
        else
            seen[txt] = true;
    });
    $('.category_w_dup button').sort(Ascending_sort).appendTo('.category_w_dup');
var maxh = 0;
  if($(window).width()>768){
    $('.cart .name').each(function(){
      if($(this).height()>maxh)maxh = $(this).height();
    });
    $('.cart .name').each(function(){
      $(this).height(maxh);
    });
  }else {
  	$('.cart .name').each(function(){
      $(this).height('auto');
    });
  }
    // Case study sliders
    var owl3 = $('.case_study_sliders');
    owl3.owlCarousel({
      loop: true,
      URLhashListener: true,
      startPosition: 'URLHash',
      smartSpeed: 750,
      autoplay:false,
      slideTransition: 'ease',
      smartSpeed: 150,
      rewindNav : false,
      rewindSpeed: 0,
      animateOut:true,
      responsive: {
        0: {
          stagePadding: 50,
          margin: 16.66,
          center: false,
          dots: true,
          items: 1,
        },
        768 : {
          stagePadding:0,
          dots: false,
          margin: 10,
          nav: true,
          navText: ['',''],
          items: 4,
        }
      }    
    });
    owl3.children().each( function( index ) {
      $(this).attr( 'data-position', index ); // NB: .attr() instead of .data()
    });
    
    owl3.on('changed.owl.carousel', function(event) {
      var currentindex = event.item.index;
      var idik = $(this).attr('id');
      var datanum = $('.study_slider_'+idik+' .item').eq(currentindex).data('id');
      
      $('.study_slider_'+idik+' .item').each(function(){
        $(this).removeClass('active');
      });
      $('.study_slider_'+idik+' [data-id='+datanum+']').addClass('active');

      $('.study_slider_container_'+ idik + ' .case_item_container').each(function(){
        $(this).removeClass('active');
      });
      $('.study_slider_container_'+ idik + ' .case_item_container[data-hash='+datanum+']').addClass('active');
    });
    $('.case_study_sliders .owl-item').each(function(e) {
      var indexof = $(this).index();
      $(this).attr('data-index',indexof);
    });
    
    $('.case_study_sliders').on('click', '.owl-item', function(e) {
      var indexofcurrent = $(this).find('a').data('index');
      console.log($(this).index());
      var idik = $(this).parents('.case_study_sliders').attr('id');
      console.log(idik);
      //tu nie id \/

      var id_of_active_element = $(this).find('a').data('id');
      $('#'+idik).trigger('to.owl.carousel', indexofcurrent );
        $('.study_slider_container_' + idik +' .case_item_container').each(function() {
              $(this).removeClass('active');
        });
        $('.study_slider_container_' + idik+' [data-hash=' + id_of_active_element+ ']').addClass('active');
        

    });

    

//show first case study in slider
    $('.case_study_sliders').each(function(){
        var idik = $(this).attr('id');
        var datanum = $('.study_slider_'+idik+' .owl-item.active').eq(0).find('.item').data('id');

        $('.study_slider_'+idik+' [data-id='+datanum+']').addClass('active');
        $('.study_slider_container_'+ idik + ' .case_item_container[data-hash='+datanum+']').addClass('active');

    }); 
    
    
});

function Ascending_sort(a, b) {
    return ($(b).text().toUpperCase()) <  ($(a).text().toUpperCase()) ? 1 : -1; 
}
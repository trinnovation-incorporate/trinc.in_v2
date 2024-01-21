$(document).ready(function() {
   	const wpm = 1500;
    const words = $('.blog_item').find('.date').data("words");
    const time = Math.ceil(words / wpm);
    $("#time").text(time);
  
  	$('.blog_slider .blog_item').each(function(){
    	var word = $(this).find('.content_preview').data("length");
      	var times = Math.ceil(word / wpm);
      $(this).find('#time').text(times);
    });
  $('.blog_list_item').each(function(){
    	var word = $(this).find('.content_preview').data("length");
      	var times = Math.ceil(word / wpm);
      $(this).find('#time').text(times);
    });
});


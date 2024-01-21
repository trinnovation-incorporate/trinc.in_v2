$(document).ready(function() {
  var lefts=0;
    var w = 0;
  $('.multiple_authors').each(function(){
    w=30;
    lefts = 0;
    $(this).find('.img_absolute .images').each(function(){
      $(this).css('left',lefts);
      lefts = lefts+ 20;
      w = w + 20;
    });
  });
  

  $('.multiple_authors .img_absolute').width(w);
    let kk = 1;
    var actual_h2 = "";
	let rich_txt_content = document.querySelector('.rich_txt_content');
	if (rich_txt_content) {
		$('.article-body .post_content h3, .article-body .post_content h4').each(function () {
			$(this).attr('id', 'archive-' + kk);
			if ($(this).is('h3')) {
				actual_h2 = $(this).attr('id');
				$('.table_content ul#toclists').append(
					'<li><div class="clickable_item" data-content="' + $(this).attr('id') + '">'
					+ $(this).text() +
					'</div><ul class="' + $(this).attr('id') + '"></ul></li>'
				);
			} else {
				$('.table_content ul#toclists li ul.'+actual_h2).append(
					'<li><div class="clickable_item" data-content="' + $(this).attr('id') + '">'
					+ $(this).text() +
					'</div></li>'
				)
			}
			kk++;
		});
  	}
	else {
		$('.article-body .post_content h2,.article-body .post_content h3').each(function(){
			$(this).attr('id','archive-'+kk);
			if($(this).is("h2")){
				actual_h2 = $(this).attr('id');
				$('.table_content ul#toclists').append(
						'<li><div class="clickable_item" data-content="'+$(this).attr('id')+'">'
						+$(this).text()+
						'</div><ul class="'+$(this).attr('id')+'"></ul></li>'
					);
			} else {
				$('.table_content ul#toclists li ul.'+actual_h2).append(
					'<li><div class="clickable_item" data-content="'+$(this).attr('id')+'">'
						+$(this).text()+
						'</div></li>'
				)
			}
			kk++;
		});
		$('.post_content  p').first().attr('id','intro');
	}
    /*let k = 1;
    var actual_h2 = "";
    $('.article-body .post_content h2,.article-body .post_content h3').each(function(){
        $(this).attr('id','archive-'+k);
        if($(this).is("h2")){
            actual_h2 = $(this).attr('id');
            $('.table_content ul#toclists').append(
                    '<li><div class="clickable_item" data-content="'+$(this).attr('id')+'">'
                    +$(this).text()+
                    '</div><ul class="'+$(this).attr('id')+'"></ul></li>'
                );
        } else {
            $('.table_content ul#toclists li ul.'+actual_h2).append(
                '<li><div class="clickable_item" data-content="'+$(this).attr('id')+'">'
                    +$(this).text()+
                    '</div></li>'
            )
        }
        k++;
    });*/
	if (rich_txt_content) {
		let items = rich_txt_content.querySelectorAll('.table_content ul li .clickable_item'),
			post_content = rich_txt_content.querySelector('#content22');
		items.forEach(item => {
			item.addEventListener('click', () => {
				let heading = post_content.querySelector(`#${item.getAttribute('data-content')}`);
				scrollToContent(heading.offsetTop - 200)
			});
		});

		let scrollToContent = y => {
			post_content.scrollTo({
				top: y,
				left: 0,
				behavior: 'smooth'
			});
		}
	}
	else {
		$(".table_content ul li .clickable_item").click(function() {
			$([document.documentElement, document.body]).animate({
				scrollTop: $('#'+$(this).data('content')).offset().top - 200
			}, 250);
		});
	}

    var table_top = $('#sidebar22').height();
    var table_width = $('#sidebar22').width();
    var table_left = $('#sidebar22').offset().left;
	var table_container = $('.article-body.container').width();
	$(window).on('resize', function () {
		let scroll = $(window).scrollTop() + 80;
		var article_body_top = $('#content22').offset().top;
		var article_body_heigth = $('#content22').height();
		var suma = article_body_top + article_body_heigth - table_top;
		table_left = $('.article-body .col-lg-4').offset().left;
		table_width = $('.article-body .col-lg-4').width();
		if (scroll <= article_body_top) {
			$('#sidebar22').css({
				'top': 0,
				'bottom': 'unset',
				'position': 'absolute',
				'left': 0,
				'width': table_width
			});
		}
		else if (scroll >= suma) {
			$('#sidebar22').css({
				'top': 'unset',
				'bottom': 0,
				'position': 'absolute',
				'left': 0,
				'width': table_width
			});
		}
		else {
			$('#sidebar22').css({
				'position': 'fixed',
				'left': table_left,
				'width': table_width
			});
		}
	});
    $(window).on('scroll',function (event) {
        var scroll = $(window).scrollTop()+80;
        var article_body_top = $('#content22').offset().top;
        var article_body_heigth = $('#content22').height();
        var suma = article_body_top+article_body_heigth-table_top;

        
        if(scroll>= article_body_top && scroll<= suma){
            $('#sidebar22').css({
                'top': 80 ,
                'position':'fixed',
                'left' : table_left,
                'width' : table_width
            });

        }else {
            if(scroll> suma){
                $('#sidebar22').css({
                    'top': 'unset',
                    'bottom' : 0,
                    'position':'absolute',
                    'left' : 0
                });
            } else {
                $('#sidebar22').css({
                    'top': 0,
                    'bottom' : 'unset',
                    'position':'absolute',
                    'left' : 0
                });
            }
        }
    });

});
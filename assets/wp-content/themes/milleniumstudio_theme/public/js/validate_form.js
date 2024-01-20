$(document).ready(() => {
    $('.wpcf7 input[name="user-name"]').on('keyup',function(){
        $(this).attr('aria-invalid', false).removeClass('wpcf7-not-valid').siblings('.wpcf7-not-valid-tip').remove();

        if( $(this).val().length<2  ) {
            $(this).attr('aria-invalid', true ).addClass('wpcf7-not-valid').after('<span class="wpcf7-not-valid-tip" aria-hidden="true">The name is too short.</span>');
        } else if ($(this).val().length>140) {
            $(this).attr('aria-invalid', true ).addClass('wpcf7-not-valid').after('<span class="wpcf7-not-valid-tip" aria-hidden="true">The name is too long.</span>');
        }else {
            $(this).attr('aria-invalid', false).removeClass('wpcf7-not-valid').siblings('.wpcf7-not-valid-tip').remove();
        }
    });


    $('.wpcf7 input[type="email"]').on('keyup',function(){
        
        $(this).attr('aria-invalid', false).removeClass('wpcf7-not-valid').siblings('.wpcf7-not-valid-tip').remove();

        var mailregex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

        if( !mailregex.test( $(this).val() ) ) {
            $(this).attr('aria-invalid', true ).addClass('wpcf7-not-valid').after('<span class="wpcf7-not-valid-tip" aria-hidden="true">The e-mail address entered is invalid.</span>');
        } else {
            $(this).attr('aria-invalid', false).removeClass('wpcf7-not-valid').siblings('.wpcf7-not-valid-tip').remove();
        }
    });
    $('.wpcf7 input[type="tel"]').on('keyup',function(){
        
        $(this).attr('aria-invalid', false).removeClass('wpcf7-not-valid').siblings('.wpcf7-not-valid-tip').remove();

        var phoneregex = /^(([0-9]|\+)[0-9 \-\(\)]{7,32})$/;
        // console.log($(this).val()!= '');
        if( !phoneregex.test( $(this).val()) && $(this).val()!= '' ) {
            $(this).attr('aria-invalid', true ).addClass('wpcf7-not-valid').after('<span class="wpcf7-not-valid-tip" aria-hidden="true">The phone entered is invalid.</span>');
        } else {
            $(this).attr('aria-invalid', false).removeClass('wpcf7-not-valid').siblings('.wpcf7-not-valid-tip').remove();
        }
    });
    $('.wpcf7 textarea').on('keyup',function(){
        $(this).attr('aria-invalid', false).removeClass('wpcf7-not-valid').siblings('.wpcf7-not-valid-tip').remove();

        if( $(this).val().length<4  ) {
            $(this).attr('aria-invalid', true ).addClass('wpcf7-not-valid').after('<span class="wpcf7-not-valid-tip" aria-hidden="true">The message is too short.</span>');
        } else if ($(this).val().length>2048) {
            $(this).attr('aria-invalid', true ).addClass('wpcf7-not-valid').after('<span class="wpcf7-not-valid-tip" aria-hidden="true">The message is too long.</span>');
        }else {
            $(this).attr('aria-invalid', false).removeClass('wpcf7-not-valid').siblings('.wpcf7-not-valid-tip').remove();
        }
    });
    $('input[type="checkbox"]').on('click', function(){
        if($(this).prop('checked')){
            $(this).attr('aria-invalid', false);
            $(this).parents('.pcf7-form-control').removeClass('wpcf7-not-valid')
            $(this).parents('.wpcf7-form-control-wrap').find('.wpcf7-not-valid-tip').remove();
        }
      });
      $('#files').bind('change', function(e) {
        //this.files[0].size gets the size of your file.
        
        var r = this.files[0].size;
        var size = r/1024/1024;
        $('.wpcf7-validates-as-required').attr('aria-invalid', false ).removeClass('wpcf7-not-valid');
        $('.label').find('.wpcf7-not-valid-tip').remove();
        if( size <=10 ) {
            
          $('.uploadfile').html('<span class="filename">' + $('#files').val().split('\\')[2]+ '</span><button class="deletecv"></button>');
          $('.uploadfile').addClass('active');
          $('.cv').addClass('inactive');
          $('.deletecv').on("click", function() {
            e.preventDefault();
            $('#files').val('');
            
            $('.uploadfile').html('<span class="btninside"><span>Upload file</span></span>');
            $('.uploadfile').removeClass('active');
            $('.cv').removeClass('inactive');
          });
        } else {
          $('.wpcf7-validates-as-required').attr('aria-invalid', true ).addClass('wpcf7-not-valid');
          $('.input-file').after('<span class="wpcf7-not-valid-tip" aria-hidden="true">The file is too big.</span>');
        }
      });
     
    document.addEventListener( 'wpcf7invalid', function( event ) {
        setTimeout( function() {
          $('html').stop().animate({
            scrollTop: $('#' + event.detail.unitTag + ' .wpcf7-not-valid').eq(0).offset().top - 140,
          }, 500, 'swing');
        }, 100);
      }, false );


      var html = '<h1 class="like_h4 w-90pr">'+localStorage.getItem("job")+'<span class="poziom">'+localStorage.getItem("poziom")+'</span></h1>';
    $('.job_offer_form .wpcf7').prepend(html);
      
    var jobs = localStorage.getItem("job")+ " " + localStorage.getItem("poziom");
      $('input[name="your-job"]').val(jobs);
    
});
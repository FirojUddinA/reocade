
$(document).ready(function () {
    
    $('.next-step').click(function (e) {
        e.preventDefault();
        if ($('.form .step:last-child').index() != $('.form .step.active').index()){
            $('.form .steps_progress .tr_step').eq($('.form .step.active').index()).addClass('co_tr_step').next().addClass('cu_tr_step');
            $('.form .step.active, .form .heading.active').removeClass('active').next().addClass('active');
            
            if($('.form .step.active').index() == 2){
                console.log()
                $('.next-step').html('Prochaine étape');
                
            }else{
                $('.next-step').html('VALIDER');
            }

            if($('.form .step.active').index() == 3){
                // $('.next-step').addClass('VALIDER');
                
            }
        }else{
            $('.form .modal_form_content').css('display', 'block');
         }
        $(this).parents('.buttons').addClass('active');
    })
    $('.prev-step').click(function (e) {
        e.preventDefault();
        if ($('.form .step:first-child').index() != $('.form .step.active').index()){
            $('.form .steps_progress .tr_step').eq($('.form .step.active').index()).removeClass('cu_tr_step').prev().removeClass('co_tr_step');
            $('.form .step.active, .form .heading.active').removeClass('active').prev().addClass('active');
            
            
        }
        if ($('.form .step:first-child.active').index()+1 == 1){
            $('.prev-step').parents('.buttons').removeClass('active');
        }
    })
    $('.select_item_clear').click(function (e) {
        e.preventDefault();
        $(this).parents('.modal_form_content').css('display', 'none');
    });
    $('.swiper-pagination').prepend('Seite');   

});

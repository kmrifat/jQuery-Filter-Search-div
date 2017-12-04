$(document).ready(function(){
    var $btns = $('.btn').click(function() {
        if (this.id == 'all') {
          $('#parent > div').fadeIn(450);
        } else {
          var $el = $('.' + this.id).fadeIn(450);
          $('#parent > div').not($el).hide();
        }
        $btns.removeClass('active');
        $(this).addClass('active');
      })
    
    var $search = $("#search").on('input',function(){
        $btns.removeClass('active');
        var matcher = new RegExp($(this).val(), 'gi');
        $('.box').show().not(function(){
            return matcher.test($(this).find('.name, .sku').text())
        }).hide();
    })
})
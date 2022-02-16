
$(document).ready(function(){
    $('.menu-item').click(function(e) {
      var aTag = $("a[name='" + $(this).attr('id').split("-")[0] + "']");
      $('html,body').animate({scrollTop: aTag.offset().top},'fast');
    });
});

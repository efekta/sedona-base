jQuery(document).ready(function($) { 
  $('.qtyplus').click(function(e) {
    var $target = $(e.currentTarget),
    $parent = $target.closest('.count-item-num'),
    $num = $parent.find('.qty')
    currentNum = parseInt($num.val(), 10) || 0;
    $num.val(++currentNum);
  });

  $('.qtyminus').click(function(e) {
    var $target = $(e.currentTarget),
    $parent = $target.closest('.count-item-num'),
    $num = $parent.find('.qty')
    currentNum = parseInt($num.val(), 10) || 1;
    $num.val(--currentNum);
  });





$( "#datepicker" ).datepicker({
    showOn: "both",
    buttonImage: "img/icons/DE103C61.png",
    buttonImageOnly: true,
    buttonText: "Select date",
    nextText: ">>",
    prevText: "<<"
  });
  $( "#datepickerCome" ).datepicker({
    showOn: "both",
    buttonImage: "img/icons/DE103C61.png",
    buttonImageOnly: true,
    buttonText: "Select date",
    nextText: ">>",
    prevText: "<<"
  });

});
jQuery(document).ready(function($) { 
var $modalBtn = $('.booking__button');
$modalBtn.click(function() {
$('.modal').slideToggle('slow');
});
});
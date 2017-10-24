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
// var modalBtn = $('.booking__button');
// var modal = $('.modal');
// modal.hide();
// modalBtn.click(function() {
// $('.modal').slideToggle('slow');
// });


$( function() {
    $( "#slider-range" ).slider({
      range: true,
      min: 0,
      max: 3000,
      values: [ 50, 300 ],
      slide: function( event, ui ) {
        $( "#amount" ).val( "от " + ui.values[ 0 ] );
        $( "#amount-max" ).val( "от " + ui.values[ 1 ] );
      }
    });
    $( "#amount" ).val( "от " + $( "#slider-range" ).slider( "values", 0 ));
    $( "#amount-max" ).val( "от " + $( "#slider-range" ).slider( "values", 1 ));
  });
// Изменение местоположения ползунка при вводиде данных в первый элемент input
      $("input#amount").change(function(){
        var value1=$("input#amount").val();
        var value2=$("input#amount-max").val();
          if(parseInt(value1) > parseInt(value2)){
          value1 = value2;
          $("input#amount").val(value1);
        }
        $("#slider-range").slider("values",0,value1); 
      });
          
      // Изменение местоположения ползунка при вводиде данных в второй элемент input  
      $("input#amount-max").change(function(){
        var value1=$("input#amount").val();
        var value2=$("input#amount-max").val();

        if(parseInt(value1) > parseInt(value2)){
          value2 = value1;
          $("input#amount-max").val(value2);
        }
        $("#slider-range").slider("values",1,value2);
      });

      // фильтрация ввода в поля
      jQuery('#amount, #amount-max').keypress(function(event){
        var key, keyChar;
        if(!event) var event = window.event;
        
        if (event.keyCode) key = event.keyCode;
        else if(event.which) key = event.which;
      
        if(key==null || key==0 || key==8 || key==13 || key==9 || key==46 || key==37 || key==39 ) return true;
        keyChar=String.fromCharCode(key);
        
        if(!/\d/.test(keyChar)) return false;
      
      });

        $('.main-navigation__link').each(function (i) {
        if(this.href==document.location.href){
            // Присваиваем класс активному пункту меню li, а не ссылке.
            // ul.nav li.nav_item.nav_active a.nav_link
            $(this).parent('.main-navigation__item').addClass('main-navigation__item-active');
        }
    });
var modalBtn = document.querySelector('.booking__button');
var popup = document.querySelector('.modal');
modalBtn.addEventListener('click', function(event) {
event.preventDefault();
popup.classList.toggle('modal-show');
});
modalBtn.addEventListener('dbclick', function(event) {
event.preventDefault();
popup.classList.toggle('modal');
});
window.addEventListener('keydown', function(event) {
if (event.keyCode === 27) {
if (popup.classList.contains('modal-show')) {
popup.classList.remove('modal-show');
}
}
});
});

// var modalBtn = $('.booking__button');
// var modal = $('.modal');
// modal.hide();
// modalBtn.click(function() {
// $('.modal').slideToggle('slow');
// });

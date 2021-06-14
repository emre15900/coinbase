$(document).ready(function(){

  // Message Box Toggle
	$(".message-box-2").hide();
  $(".read-more").on('click',function(){
    $(".message-box-2").slideToggle(700);
   // $(this).text( $(this).text() === "Devamını Oku" ? "Daralt" : "Devamını Oku" );
    $(".message-shadow").slideToggle(800);
    $(this).toggleClass('off');
  })

  // Times Active
  $(".time-value").on('click',function(){
    $(this).addClass('active').siblings().removeClass('active')
  })

  // Times Filter
  $('.graphic-item').hide();
  $('.twenty-four-hour').show();
  $('.time-value').click(function(){
    const value = $(this).attr('data-filter');
    if (value == 'all'){
      $('.graphic-item').hide('100');
    }
    else{
      $('.graphic-item').not('.'+value).hide('100');
      $('.graphic-item').filter('.'+value).show('100');
    }
  })

  // Search 
  $(".search-button").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    $(".coin-item").filter(function () {
      $(this).toggle($(this).text().toLocaleLowerCase().indexOf(value) > -1);
    });
  });

})
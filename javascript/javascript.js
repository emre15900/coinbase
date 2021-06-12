$(document).ready(function(){

	$(".message-box-2").hide();
  $(".read-more").on('click',function(){
    $(".message-box-2").slideToggle(700);
   // $(this).text( $(this).text() === "Devamını Oku" ? "Daralt" : "Devamını Oku" );
    $(".message-shadow").slideToggle(800);
    $(this).toggleClass('off');
  })

})
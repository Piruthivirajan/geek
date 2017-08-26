$(document).ready(function(){
$('#zorro').click(function () {
    $('body').append('<div id="raja2" class="product-image-overlay"><span class="product-image-overlay-close" id="clo" >x</span><img id="raja3" src="" /></div>');


    <!--jQuery("#raja3").attr('src',  $(this).attr('src') ); -->
	jQuery("#raja3").attr('src', 'http://www.uidownload.com/files/758/145/310/blue-background-graphics.jpg' );
	
    $('#raja2').fadeIn(100);
    $('body').css('overflow', 'hidden');

    $('#clo').click(function () {
        $('#raja2').fadeOut(100);
        $('body').css('overflow', 'auto');
        $('#raja2').remove();
    });
});
});
$( "#go" ).click(function(){
$( ".block:first" ).animate({
left: 100
}, {
duration: 500,
step: function( now, fx ){
$( ".block:gt(0)" ).css( "left", now );
}
});
});

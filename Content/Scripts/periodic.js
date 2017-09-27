var $clone;
$('tbody').on('mouseover', 'td', function() {
	$('#newHr').show(); 
	if(!($(this).hasClass('noMouse'))){
		$clone = $(this).clone().appendTo($('#appearElement'));
		$clone.attr('id', 'showTd');
	}
});
$('tbody').on('mouseout', 'td', function() {
    $clone.remove();
    $('#newHr').hide();
});


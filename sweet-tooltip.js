/*
 * Sweet Tooltip
 * 
 * by Hidayat Sagita
 * http://www.webstuffshare.com
 * Licensed Under GPL version 2 license.
 *
 */
$(document).ready(function() {
	
	$('.sweet-tooltip').bind('mouseover', function() {
		
		tooltip				= $(this);
		tooltipText 		= tooltip.attr('data-text-tooltip');
		tooltipClassName	= tooltip.attr('data-style-tooltip');
		tooltipClass		= '.' + tooltipClassName;
		
		if(tooltip.hasClass('showed-tooltip')) return false;
		
		tooltip.addClass('showed-tooltip')
				 .after('<div class="'+tooltipClassName+'">'+tooltipText+'</div>');

		
		tooltipPosTop 	= tooltip.offset().top - $(tooltipClass).outerHeight() - 10;
		tooltipPosLeft = tooltip.offset().left;
		tooltipPosLeft = tooltipPosLeft - (($(tooltipClass).outerWidth()/2) - tooltip.outerWidth()/2);
		
		$(tooltipClass).css({ 'left': tooltipPosLeft, 'top': tooltipPosTop })
							.animate({'opacity':'1', 'marginTop':'0'}, 500);
		
	}).bind('mouseout', function() {
		
		$(tooltipClass).animate({'opacity':'0', 'marginTop':'-10px'}, 500, function() {
				
			$(this).remove();
			tooltip.removeClass('showed-tooltip');
				
		});
	});
});
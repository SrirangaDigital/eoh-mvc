$(document).ready(function() {

    // Home page snippets - UI related

    $('#openNavbarSearch').on('click', function(event){

        $('#navbarSearch').show('slide', {direction: 'right'}, 1);
    });

    // About page, nav tabs on show event
    $('.about-tabs a[data-toggle="tab"]').on('shown.bs.tab', function (event) {

		var jumpLoc = $('.about-tabs').offset().top - $('#mainNavBar').height() - 50;
    	$("body").animate({scrollTop: jumpLoc}, 500);
	})
});


function getUrlParameter(sParam) {

    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    
    for (var i = 0; i < sURLVariables.length; i++) 
    {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam) 
        {
            return sParameterName[1];
        }
    }
}

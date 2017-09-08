jQuery(document).ready(function($) {

   'use strict';

	//SMOOTH SCROLL
    smoothScroll.init({
		speed: 500, // How fast to complete the scroll in milliseconds
		easing: 'easeInOutCubic', // Easing pattern to use
		updateURL: false, // Boolean. Whether or not to update the URL with the anchor hash on scroll
		callbackBefore: function ( toggle, anchor ) {}, // Function to run before scrolling
		callbackAfter: function ( toggle, anchor ) {} // Function to run after scrolling
	 });

	//FIX HOVER EFFECT ON IOS DEVICES
	document.addEventListener("touchstart", function(){}, true);


});

$(window).load(function(){

    //HEADER ANIMATION
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        var offset = $(".header-frame").height() / 3;

        if (scroll > offset) {
            $( ".header-frame" ).addClass( "header-frame-fixed" );
        } else {
            $( ".header-frame" ).removeClass( "header-frame-fixed" );
        }

    });

});

//GOOGLE MAP
function init_map() {
    var myOptions = {
        zoom: 14,
        center: new google.maps.LatLng(-20.378563,-41.0242088), //change the coordinates
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        scrollwheel: false,
        styles: [{featureType:'all',stylers:[{saturation:-100},{gamma:0.90}]}]
    };
    map = new google.maps.Map(document.getElementById("map-canvas"), myOptions);
    marker = new google.maps.Marker({
        map: map,
        position: new google.maps.LatLng(-20.378563,-41.0242088) //change the coordinates
    });

}
google.maps.event.addDomListener(window, 'load', init_map);


$(document).ready(function() {
    //Full Calendar
    $('#calendar').fullCalendar({
        header: {
            right: 'basicWeek,list'
        },
        defaultDate: '2017-09-25',
        locale: "pt-BR",
        eventLimit: true, // allow "more" link when too many events
        events: [
            {
                title: "Saída do Aeroporto Eurico Sales (Vitória) para Pedra Azul/Domingos Martins",
                start: "2017-09-25T14:30",
                end: "2017-09-25T17:30",
            },
            {
                title: "Mini-curso: Fluidos Olefínicos",
                start: "2017-09-25T18:00",
                end: "2017-09-25T18:50",
            },
            {
                title: "Mini-curso: Estabilidade de Poços",
                start: "2017-09-25T18:50",
                end: "2017-09-25T19:40",
            },
            {
                title: "Abertura Oficial do Evento",
                start: "2017-09-25T19:45",
                end: "2017-09-25T20:30",
            },
            {
                title: "Cocktail de Boas Vindas",
                start: "2017-09-25T20:30",
                end: "2017-09-25T21:15",
            }
        ]
    });
});
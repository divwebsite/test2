$(document).ready(function(){

    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('load scroll',function(){
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');
    });

});














jQuery(document).ready(function($) {
    var message = "";

    function makeTimer() {
        var platformTimeZone = "Africa/Johannesburg";
        var endTime = new Date("September 2, 2023 00:00:00 am");
        endTime = (Date.parse(endTime)) / 1000;
        var now = new Date().toLocaleString('en-ZA', { timeZone: platformTimeZone });
        var now = (Date.parse(now) / 1000);

        var timeLeft = endTime - now;

        var days = Math.floor(timeLeft / 86400);
        var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
        var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
        var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

        if (hours < "10") { hours = "0" + hours; }
        if (minutes < "10") { minutes = "0" + minutes; }
        if (seconds < "10") { seconds = "0" + seconds; }

        $(".cscd-time-days").html(days);
        $(".cscd-time-hours").html(hours);
        $(".cscd-time-minutes").html(minutes);
        $(".cscd-time-seconds").html(seconds);

        if (timeLeft <= 0 && message === "") {
            message = "You Missed Out Big Time You Can Buy Tickets For The North West Canna Fest 2024 In A Couple Of Days";
            var result = confirm(message);
            if (result) {
                message = "";
            }
        }
    }

    setInterval(function() { makeTimer(); }, 1000);
});
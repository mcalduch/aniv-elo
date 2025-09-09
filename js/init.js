//Hook up the tweet display

$(document).ready(function() {
                           
    $(".countdown").countdown({
                date: "14 September 2025 10:00:00",
                format: "on"
            },
            
            function() {
                // callback function
            });

}); 
$(document).ready( function() {

    $("._episode").on("click", function() {
        $(".choice__info").fadeOut();
        $(".azimuth_part").hide();
        $(".length_part").show();
    });

    $("._azimuth").on("click", function() {
        $(".choice__info").fadeOut();
        $(".length_part").hide();
        $(".azimuth_part").show();
    });
});
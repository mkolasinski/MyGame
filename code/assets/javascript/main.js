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

    if( $("button.button-to-calculate").on("click", function() {
        
        var xP, yP, xK, yK, d1, d2, kD1, kD2, sumKd, length, totalLength;

            xP = parseFloat($("input[name=number1]").val());
            yP = parseFloat($("input[name=number2]").val());
            xK = parseFloat($("input[name=number3]").val());
            yK = parseFloat($("input[name=number4]").val());
            d1 = xK - xP;
            d2 = yK - yP;
            kD1 = Math.pow(d1, 2);
            kD2 = Math.pow(d2,2);
            sumKd = kD1 + kD2;
            length = Math.sqrt(sumKd);
            totalLength = length.toFixed(3);

            $(".total_length_p").text("Długość odcinka");
            $(".length_calculate").text(totalLength);
            $(".unity").text("km");
    }));

});
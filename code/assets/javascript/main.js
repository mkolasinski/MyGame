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

    if( $("button.button-to-calculate-length").on("click", function() {
        
        var xP, yP, xK, yK, d1, d2, kD1, kD2, sumKd, length, totalLength;

        xP = parseFloat($("input[name=number1]").val());
        yP = parseFloat($("input[name=number2]").val());
        xK = parseFloat($("input[name=number3]").val());
        yK = parseFloat($("input[name=number4]").val());
        dX = xK - xP;
        dY = yK - yP;
        kDX = Math.pow(dX, 2);
        kDY = Math.pow(dY,2);
        sumKd = kDX + kDY;
        length = Math.sqrt(sumKd);
        totalLength = length.toFixed(3);

        $(".total_length_p").text("Długość odcinka");
        $(".length_calculate").text(totalLength);
        $(".unity").text("km");
    }));
    
    if( $("button.button-to-calculate-azimuth").on("click", function() {
        var xP, yP, xK, yK, dX, dY, az, az2_3;

        xP = parseFloat($("input[name=number5]").val());
        yP = parseFloat($("input[name=number6]").val());
        xK = parseFloat($("input[name=number7]").val());
        yK = parseFloat($("input[name=number8]").val());
        dX = xK - xP;
        dY = yK - yP;
        az = Math.atan((dY/dX)).toFixed(4);

        $(".total_azimuth_p").text("Azymut wynosi: ");
        $(".azimuth_calculate").text(az);
        $(".total_azimuth span.unity").text("grad");

        if( dX > 0 && dY > 0 ) {
            var part1 = "Azumyt znajduje się w pierwszej ćwiartce";
            $(".azimuth_info").text(part1);
        }

        else if ( dX < 0 && dY > 0 ) {
            var part2 = "Azymut znajduje się w drugiej ćwiartce";
            var az2_3 = az + 200;
            $(".azimuth_calculate").text(az2_3);
            $(".azimuth_info").text(part2);
        }

        else if ( dX < 0 && dY < 0 ) {
            var part3 = "Azymut znajduje się w trzeciej ćwiartce";
            var az2_3 = az + 200;
            $(".azimuth_calculate").text(az2_3);
            $(".azimuth_info").text(part3);
        }

        else if ( dX > 0 && dY < 0 ) {
            var part4 = "Azymut znajduje się w czwartej ćwiartce";
            var az2_4 = az + 400;
            $(".azimuth_calculate").text(az2_4);
            $(".azimuth_info").text(part4);
        }
    }));

});
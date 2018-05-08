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

        xP = parseInt($("input[name=number1]").val());
        yP = parseInt($("input[name=number2]").val());
        xK = parseInt($("input[name=number3]").val());
        yK = parseInt($("input[name=number4]").val());
        dX = xK - xP;
        dY = yK - yP;
        kDX = Math.pow(dX, 2);
        kDY = Math.pow(dY,2);
        sumKd = kDX + kDY;
        length = Math.sqrt(sumKd);
        totalLength = parseInt(length.toFixed(3));

        $(".total_length_p").text("Długość odcinka");
        $(".length_calculate").text(totalLength);
        $(".unity").text("km");
    }));
    
    if( $("button.button-to-calculate-azimuth").on("click", function() {
        var xP, yP, xK, yK, dX, dY, az, az2_3, az4, part1, part2, part3, part4;

        xP = parseInt($("input[name=number5]").val());
        yP = parseInt($("input[name=number6]").val());
        xK = parseInt($("input[name=number7]").val());
        yK = parseInt($("input[name=number8]").val());
        dX = xK - xP;
        dY = yK - yP;
        az = Math.atan(dY/dX).toFixed(4);
        az2_3 = (Math.atan(dY/dX) + 200).toFixed(4);
        az4 = (Math.atan(dY/dX) + 400).toFixed(4);
        part1 = "Azymut znajduje się w pierwszej ćwiartce"
        part2 = "Azymut znajduje się w drugiej ćwiartce"
        part3 = "Azymut znajduje się w trzeciej ćwiartce"
        part4 = "Azymut znajduje się w czwartej ćwiartce"

        if( dX > 0 && dY > 0 ) {
            $(".total_azimuth_p").text("Azymut wynosi: ");
            $(".azimuth_calculate").text(az);
            $(".total_azimuth span.unity").text("grad");
            $(".azimuth_info").text(part1);
        }

        else if( dX < 0 && dY > 0 ) {
            $(".total_azimuth_p").text("Azymut wynosi: ");
            $(".azimuth_calculate").text(az2_3);
            $(".total_azimuth span.unity").text("grad");
            $(".azimuth_info").text(part2);
        }

        else if ( dX < 0 && dY < 0 ) {
            $(".total_azimuth_p").text("Azymut wynosi: ");
            $(".azimuth_calculate").text(az2_3);
            $(".total_azimuth span.unity").text("grad");
            $(".azimuth_info").text(part3);
        }

        else if ( dX > 0 && dY < 0 ) {
            $(".total_azimuth_p").text("Azymut wynosi: ");
            $(".azimuth_calculate").text(az4);
            $(".total_azimuth span.unity").text("grad");
            $(".azimuth_info").text(part4);
        }
    }));

});
$( function () {
    var num = 0, adiv = 0, min = 0, max = 0;
    
    
    var start = '<div>' +
        'Rango' +
        '<br>' +
        '<input type="text" id="n1">' +
        '<span> a </span>' + 
        '<input type="text" id="n2">' +
        '<br>' +
        '<button id="start">INICIAR JUEGO</button>' +
    '</div>';

    $('#noti').html(start);

    $('#noti').on('click', "#start", function () {
        min = parseInt($('#n1').val());
        max = parseInt($('#n2').val());
        if (min < max) {
            $('#spaceCont').removeClass('spaceContBlur');
            $('#noti').removeClass('notiactive');
            num = parseInt((Math.random() * (max - min)) + min);
            $('#mayor div').text(max + 1);
            $('#menor div').text(min - 1);
        } else if (min == max) {
            $('#noti').html('<div>Los números deben de ser diferentes<br>' + 
                '<button id="reinicia">REINICIAR</button></div>'
            );
        } else {
            $('#noti').html('<div>El número de la derecha debe ser mayor<br>' + 
                '<button id="reinicia">REINICIAR</button></div>'
            );
        }
    });
  
    $('#adivina').on('click', function () {
        adiv = parseInt($('#num').val());
        if (adiv < num) {
            $('#menor div').text(adiv);
            valor('MENOR');
        } else if (adiv > num) {
            $('#mayor div').text(adiv);
            valor('MAYOR');
        } else {
            $('#noti').html('<div>¡ADIVINASTE!<br>' + adiv + '<br>' + 
            '<button id="reinicia">REINICIAR</button></div>');
            $('#spaceCont').addClass('spaceContBlur');
            $('#noti').addClass('notiactive');
        }
    });

    function valor(tipo) {
        $('#noti').html('<div>' + adiv + '<br>ES ' + tipo + '</div>');
        $('#spaceCont').addClass('spaceContBlur');
        $('#noti').addClass('notiactive');
        setTimeout(function(){ 
            $('#spaceCont').removeClass('spaceContBlur');
            $('#noti').removeClass('notiactive');
        }, 1000);
    }

    $('#noti').on('click', '#reinicia', function () {
        $('#noti').html(start);
    });
});
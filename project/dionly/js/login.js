$(function() {
    var reg = /^1[3|4|5|8][0-9]\d{4,8}$/;
    var reg1 = /\s/;
    var reg2 = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/;
    $('.loginbtn').click(function() {
        if ($('#user').val() == '' || !reg.test($('#user').val()) || reg1.test($('#user').val())) {
            $('.sucessTop').css('display', 'block');
        } else {
            $('.sucessTop').css('display', 'none');
            if ($('#passward').val() == '' || !reg2.test($('#passward').val()) || reg1.test($('#passward').val())) {
                $('.sucessBot').css('display', 'block');
            } else {
                $('.sucessBot').css('display', 'none');
            }
        }
    })
})
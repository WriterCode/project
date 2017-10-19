// 体验中心
$(function() {
    $.get('json/index2.json', function(r) {
        $.each(r, function(index, val) {
            $('.homeline8 .right').append('<div class="enter"><a href="">' + val.name + '</a></div>');
            $('.homeline8 .bottom').append('<div class="enter1"><div class="botTop"><a href="">' + val.city + '</a><p>' + val.add + '</p><p>' + val.time + '</p><p>' + val.tel + '</p></div><div class="botBot"><img src="' + val.imgs + '"></div></div>');
        })
    })
    $('.homeline8').on('mouseenter', '.enter', function() {
        $(this).find('a').css('color', '#8a0003').end().siblings().find('a').css('color', '#222');
        $('.bottom').children('.enter1').eq($(this).index()).show().siblings('.enter1').hide();
    })
})

$(function() {
    var storage = window.localStorage;
    $.each(storage, function(index, val) {
        var $val = $.parseJSON(val);
        console.log($val)
        $('.shopcartcen').append('<div class="details">\
                <div>' + $val.img + '</div>\
                <div><a href=""><p>' + $val.name + '</p>\
                <p><span>材质：' + $val.glasstexture + '</span>\
                ,<span>镶口：' + $val.weight + '</span></p>\
                </a></div>\
                <div><p>' + $val.small + '</p></div>\
                <div><p>' + $val.lettering + '</p></div>\
                <div><p>' + $val.marketprice + '.00</p></div>\
                <div><p>' + ($val.marketprice - $val.price) + '.00</p></div>\
                <div><p>' + $val.price + '.00</p></div>\
                <div><a href="javascript:;">删除</a><a href="javascript:;">修改</a></div>\
        </div>');


    })
    $('.shopcartbot').append('<p></p>');
})
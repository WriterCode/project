$(function() {
    $.get('json/list.json', function(r) {
        $.each(r, function(index, val) {
            $('.listwrap1').append('<div class="listsamll"><span>-</span><a href="">' + val.name + '</a></div><div class="listsamllclass"></div>');
            var index1 = 2 * index + 2;
            $.each(val.class, function(index, val) {
                $('.listwrap1').children().eq(index1).append('<a href="">' + val.name + '</a>');
            })
        })
    })

    $.get('json/list1.json', function(r) {
        $.each(r, function(index, val) {
            $('#listhot').after('<div class="listhot1"><a href=""><img src="' + val.image + '"></a><a href="">' + val.name + '</a><span>' + val.plice + '</span><span>' + val.plices + '</span></div>')
        })
    })

    $.get('json/listright.json', function(r) {
        var pageNumber = 21;
        var page = parseInt(r.length / 21);
        $('.listright .btn').append('<p>共<span>' + r.length + '</span>款<span>|</span>21款/页<span>|</span>第<span class="pages">1</span>页/共<span>' + (page + 1) + '</span>页</p>');
        for (var i = 0; i < page + 1; i++) {
            $('.listright .btn').append('<li>' + (i + 1) + '</li>');
        }
        for (var i = 0; i < pageNumber; i++) {
            $('.listright .uls').append('<li>\
                                            <div>\
                                                <a href=""><img src="' + r[i].image + '"></a>\
                                                <a href="">' + r[i].name + '</a>\
                                            </div>\
                                            <p>\
                                                <span>' + r[i].scplice + '</span>\
                                                <span>' + r[i].scplices + '</span>\
                                                <span>' + r[i].plice + '</span>\
                                                <span>' + r[i].plices + '</span>\
                                            </p>\
                                        </li>');
        }
        $('.listright .btn').on('click', 'li', function() {
            $(this).css('background', '#d8d8d8').siblings('li').css('background', '#eee');
            $('.listright .btn .pages').html($(this).html());
            $('.listright .uls').children().remove();
            var index = ($(this).html() - 1);
            for (var i = index * pageNumber; i < pageNumber * (index + 1); i++) {
                if (r[i]) {
                    $('.listright .uls').append('<li>\
                                <div>\
                                    <a href=""><img src="' + r[i].image + '"></a>\
                                    <a href="">' + r[i].name + '</a>\
                                </div>\
                                <p>\
                                    <span>' + r[i].scplice + '</span>\
                                    <span>' + r[i].scplices + '</span>\
                                    <span>' + r[i].plice + '</span>\
                                    <span>' + r[i].plices + '</span>\
                                </p>\
                            </li>');
                }
            }
        })
    })
})


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
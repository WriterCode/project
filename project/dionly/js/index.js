// 轮播图
$(function() {
    $('.main').prepend('<div class="swiper-container"></div>');
    $('.swiper-container').append('<div class="swiper-wrapper"></div><div class="swiper-pagination"></div>');
    $('.swiper-wrapper').append('<div class="swiper-slide"><img src="img/3.jpg"></div><div class="swiper-slide"><img src="img/2.jpg"></div>');
    var mySwiper = new Swiper('.swiper-container', {
        autoplay: 3000,
        speed: 2000,
        effect: 'fade',
        fade: {
            crossFade: true,
        },
        pagination: '.swiper-pagination',
    })
})

// 样式 重量选择
$(function() {
    $.get('json/color.json', function(r) {
        $.each(r, function(index, val) {
            $.each(val.name, function(index, val) {
                $('.homelineRight>div:nth-child(2)').append('<button><img src="' + val.color + '"></button>').children().eq(index).click(function() {
                    $.each(r[0].name, function(index, val) {
                        $('.homelineRight>div:nth-child(2)').children().children().eq(index).replaceWith('<img src="' + val.color + '">');
                    })
                    $(this).children().replaceWith('<img src="' + r[0].name1[index].color + '">');
                })
            })
            $.each(val.name2, function(index, val) {
                $('.homelineRight>div:nth-child(3)').append('<button><img src="' + val.paoG + '"></button>').children().eq(index).click(function() {
                    $.each(r[0].name2, function(index, val) {
                        $('.homelineRight>div:nth-child(3)').children().children().eq(index).replaceWith('<img src="' + val.paoG + '">');
                    })
                    $(this).children().replaceWith('<img src="' + r[0].name3[index].paoG + '">');
                })
            })
            $.each(val.name4, function(index, val) {
                $('.homelineRight>div:nth-child(4)').append('<button><img src="' + val.jinD + '"></button>');
            })
        })
    })
})

// 类别 款式
$(function() {
    $.get('json/index.json', function(r) {
        $.each(r, function(index, val) {
            $.each(val.name, function(index, val) {
                $('.homeline1').append('<div><a href=""><img src="' + val.name + '"></a></div>');
                var index1 = index;
                if (val.name == '') {
                    $('.homeline1').children().eq(index1).children().remove();
                    $.each(val.name1, function(index, val) {
                        $('.homeline1').children().eq(index1).append('<div><a href=""><img src="' + val.name + '"></a></div>')
                    })
                }
            })
            $('.homeline1>div:nth-child(1)').append('<div></div>')
            $.each(val.name[0].class, function(index, val) {
                $('.homeline1>div:nth-child(1)').children('div').append('<p><a href="">' + val.name + '</a></p>')
            })

            $.each(val.name1, function(index, val) {
                $('.homeline2').append('<div><a href=""><img src="' + val.name + '"></a></div>')
            })

            $.each(val.name2, function(index, val) {
                $('.homeline3').append('<div><a href=""><img src="' + val.name + '"></a></div>');
                var index1 = index;
                if (val.name == '') {
                    $('.homeline3').children().eq(index1).children().remove();
                    $.each(val.name1, function(index, val) {
                        $('.homeline3').children().eq(index1).append('<div><a href=""><img src="' + val.name + '"></a></div>')
                    })
                }
            })
            $('.homeline3>div:nth-child(1)').append('<div></div>')
            $.each(val.name2[0].class, function(index, val) {
                $('.homeline3>div:nth-child(1)').children('div').append('<p><a href="">' + val.name + '</a></p>')
            })

            $.each(val.name3, function(index, val) {
                $('.homeline4').append('<div><a href=""><img src="' + val.name + '"></a></div>');
                var index1 = index;
                if (val.name == '') {
                    $('.homeline4').children().eq(index1).children().remove();
                    $.each(val.name1, function(index, val) {
                        $('.homeline4').children().eq(index1).append('<div><a href=""><img src="' + val.name + '"></a></div>')
                    })
                }
            })
            $('.homeline4>div:nth-child(1)').append('<div></div>')
            $.each(val.name3[0].class, function(index, val) {
                $('.homeline4>div:nth-child(1)').children('div').append('<p><a href="">' + val.name + '</a></p>')
            })

            $.each(val.name4, function(index, val) {
                $('.homeline5').append('<div><a href=""><img src="' + val.name + '"></a></div>');
                var index1 = index;
                if (val.name == '') {
                    $('.homeline5').children().eq(index1).children().remove();
                    $.each(val.name1, function(index, val) {
                        $('.homeline5').children().eq(index1).append('<div><a href=""><img src="' + val.name + '"></a></div>')
                    })
                }
            })
            $('.homeline5>div:nth-child(1)').append('<div></div>')
            $.each(val.name4[0].class, function(index, val) {
                $('.homeline5>div:nth-child(1)').children('div').append('<p><a href="">' + val.name + '</a></p>')
            })

            $.each(val.name5, function(index, val) {
                $('.homeline6').append('<div><a href=""><img src="' + val.name + '"></a></div>');
                var index1 = index;
                if (val.name == '') {
                    $('.homeline6').children().eq(index1).children().remove();
                    $.each(val.name1, function(index, val) {
                        $('.homeline6').children().eq(index1).append('<div><a href=""><img src="' + val.name + '"></a></div>')
                    })
                }
            })
            $('.homeline6>div:nth-child(1)').append('<div></div>')
            $.each(val.name5[0].class, function(index, val) {
                $('.homeline6>div:nth-child(1)').children('div').append('<p><a href="">' + val.name + '</a></p>')
            })

            $.each(val.name6, function(index, val) {
                $('.xianxia').append('<div><a href=""><img src="' + val.name + '"></a></div>')
            })
        })
    })
    $('.mainNav,.homeline,.homeline1,.homeline2,.homeline3,.homeline4,.homeline5,.homeline6,.xianxia,.homeline7').after('<div class="home"></div>')
})

// 资讯
$(function() {
    $.get('json/index1.json', function(r) {
        $.each(r, function(index, val) {
            $('.homeline7').append('<div><a href="">' + val.name + '</a><div><a href=""><img src="' + val.imgs + '"></a></div><div class="homeline7_3"></div></div>');
            var index1 = index;
            $.each(val.class, function(index, val) {
                $('.homeline7_3').eq(index1).append('<a href="">' + val.name + '</a>')
            })
        })
        $('.homeline7').append('<div><a href=""><img src="img/homeline7_4.jpg"></a></div>')
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
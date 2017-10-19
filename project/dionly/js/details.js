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
    $.get('json/details1.json', function(r) {
        $.each(r, function(index, val) {
            $('.maindetails .main .left').append('<div><p>' + val.name + '</p></div>');
            var index1 = index;
            $.each(val.class, function(index, val) {
                // 判断数据中有没有这个值 有就创建没有就不创建
                var name = val.name ? '<a href="">' + val.name + '</a>' : '';
                $('.maindetails .main .left').children().eq(index1).append('<div><a href=""><img src="' + val.img + '"></a>' + name + '</div>');
            })
        })
    })
})

// 商品详情
$(function() {
    $.get('json/size.json', function(r) {
        $.each(r[0].class1, function(index, val) {
            $('#ringweight').append('<option value="' + val + '">' + val + '</option>');
        })
        $.each(r[0].class2, function(index, val) {
            $('#ringsize').append('<option value="' + val + '">' + val + '</option>');
        })
        $('#ringweight').children().eq(8).attr('selected', 'selected');
        $('#ringsize').children().eq(16).attr('selected', 'selected');
    })

    $.get('json/details.json', function(r) {
        var glasstexture = r[0].class2.texture[0];
        $('.glassname').html('产品名称：<span>' + r[0].class2.name + '</span>');
        $('.glassmarketprice').html('市场价格：¥<span>' + r[0].class2.marketprice + '</span>');
        $('.glassprice').html('商城价格：¥<span>' + r[0].class2.price + '</span>');
        $('.glasstexture').html('选用材质：<span>' + r[0].class2.texture[0] + '</span><span>' + r[0].class2.texture[1] + '</span><span>' + r[0].class2.texture[2] + '</span>');
        $('.glasstexture').on('click', 'span', function() {
            $(this).css({
                'color': '#fff',
                'background': '#db3962'
            }).siblings().css({
                'color': '#222',
                'background': '#ccc'
            });
            glasstexture = $(this).html();
        })

        // 选择不同材质价格不同
        $('.glasstexture').children().eq(0).click(function() {
            $('.glassmarketprice').html('市场价格：¥<span>' + r[0].class2.marketprice + '</span>');
            $('.glassprice').html('商城价格：¥<span>' + r[0].class2.price + '</span>');
        })
        $('.glasstexture').children().eq(1).click(function() {
            $('.glassmarketprice').html('市场价格：¥<span>' + r[0].class2.marketprice1 + '</span>');
            $('.glassprice').html('商城价格：¥<span>' + r[0].class2.price1 + '</span>');
        })
        $('.glasstexture').children().eq(2).click(function() {
            $('.glassmarketprice').html('市场价格：¥<span>' + r[0].class2.marketprice2 + '</span>');
            $('.glassprice').html('商城价格：¥<span>' + r[0].class2.price2 + '</span>');
        })

        // 放大镜
        $('.glasstop').html('<div><img src="' + r[0].class1[0].image + '"></div><div class="glassmb"></div>');
        $('.glasslens').html('<img src="' + r[0].class1[0].image + '">');
        $.each(r[0].class1, function(index, val) {
            $('.glassbottom').append('<div><img src="' + val.image + '"></div>');
        })

        $('.glasstop').hover(function() {
            $('.glassmb').css('display', 'block');
            $('.glasslens').css('display', 'block');
            fn();
        }, function() {
            $('.glassmb').css('display', 'none');
            $('.glasslens').css('display', 'none');
        })
        $('.glassbottom').on('click', 'div', function() {
            $(this).css('border', '1px solid red').siblings().css('border', '1px solid #d2d2d2');
            $('.glasstop').children().eq(0).html($(this).html());
            $('.glasslens').html($(this).html());
            $('.glassmb').css({
                'left': 0,
                'top': 0
            })
        })

        // 加入购物车
        var index = 0;
        $('.glassbtn1').click(function() {
            var info = {
                img: $('.glassbottom').children().eq(0).html(),
                name: $('.glassname').children().html(),
                marketprice: $('.glassmarketprice').children().html(),
                price: $('.glassprice').children().html(),
                weight: $('.glassweight').children().val(),
                small: $('.glasssmall').children().val(),
                lettering: $('.lettering').children().val(),
                glasstexture: glasstexture
            }
            index++;
            var glass = index + info.name;
            var storage = window.localStorage;
            storage.setItem(glass, JSON.stringify(info));
        })
    })

    function fn() {
        var glassmb = document.querySelector('.glassmb');
        var glasstop = document.querySelector('.glasstop');
        var glass = document.querySelector('.glass');
        var imgs = document.querySelector('.glasslens img');
        var glasslens = document.querySelector('.glasslens');
        glassmb.onmouseenter = function(ev) {
            var ev = window.event || ev;
            var scrollX = document.documentElement.scrollLeft || document.body.scrollLeft;
            var scrollY = document.documentElement.scrollTop || document.body.scrollTop;
            document.onmousemove = function(ev) {
                var ev = window.event || ev;
                var x = ev.clientX - glass.offsetLeft - glasstop.offsetLeft + scrollX - glassmb.offsetWidth / 2;
                var y = ev.clientY - glass.offsetTop - glasstop.offsetTop + scrollY - glassmb.offsetHeight / 2;
                if (x <= 0) {
                    x = 0;
                } else if (x > glasstop.offsetWidth - glassmb.offsetWidth) {
                    x = glasstop.offsetWidth - glassmb.offsetWidth;
                }
                if (y <= 0) {
                    y = 0;
                } else if (y > glasstop.offsetHeight - glassmb.offsetHeight) {
                    y = glasstop.offsetHeight - glassmb.offsetHeight;
                }
                var sacelX = glasslens.offsetWidth / glassmb.offsetWidth;
                var sacelY = glasslens.offsetHeight / glassmb.offsetHeight;
                glassmb.style.left = x + 'px';
                glassmb.style.top = y + 'px';
                imgs.style.left = -x * sacelX + 'px';
                imgs.style.top = -y * sacelY + 'px';
            }
        }
        document.onmouseup = function() {
            document.onmousemove = null;
        }
    }


})
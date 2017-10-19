$(function() {
    $('.commonheader').load('html/common.html .header', function() {
        $('.scrollBall').click(function() {
            $(document).scrollTop(0);
        })
    });
    $('.commonnav').load('html/common.html .nav', function() {
        $('.logo').click(function() {
            location.href = 'index.html';
        })
        $('.class').hover(function() {
            $('#uls>li>ul').css('display', 'block');
        }, function() {
            $('#uls>li>ul').css('display', 'none');
        })
        $('#uls>li>ul').hover(function() {
            $(this).css('display', 'block');
        }, function() {
            $(this).css('display', 'none');
        })

        $.get('json/common.json', function(r) {
            $.each(r, function(index, val) {
                $('#uls>li>ul').append('<li><div><a href="">' + val.Name + '</a></div>' + '<div class="first"></div></li>');
                var len = val.Class.length;
                for (var i = 0; i < len; i++) {
                    var as = document.createElement('a');
                    var uls = document.querySelector('#uls>li>ul');
                    as.href = '#';
                    as.innerHTML = val.Class[i].Name;
                    uls.children[index].children[1].appendChild(as);
                }
            })
        })
    });
    $('.commonbottom').load('html/common.html .bottom');
})
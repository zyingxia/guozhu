// 主页第一栏
$(function() {
    $('.xian').mouseenter(function() {
        $('.xian img').hide().parent().siblings('.yin').show();
    });


    $('.xian').mouseleave(function() {
        $('.xian img').show().parent().siblings('.yin').hide();
    });

    // 游戏全目录
    var $lis = $('li');

    $lis.eq(2).mouseenter(function() {
        $(this).parent().parent().siblings('.yin2').show();
    });
    $lis.eq(2).mouseleave(function() {
        $(this).parent().parent().siblings('.yin2').hide();
    });

    var timer = null;
    timer = setInterval(function() {
        $("#disnone .disnone").fadeIn(500).siblings().fadeOut(500);
        $("#disnone>a").toggleClass("disnone");
    }, 2000);


    // 主图犬夜叉

    // 新版本情报


    //点击显示轮播图

    var $lis = $('.bigbox li');
    $('.xinbanben li').each(function(i, ele) {
        $(ele).click(function() {
            $(".swiper").show();
            var index = $(this).index();
            console.log(i);
            $lis.eq(i).show().siblings().hide();
            console.log($('.arrow-right'));

            if (i == $lis.length - 1) {
                $('.arrow-right').hide();
            }


            if (i == 0) {
                $('.arrow-left').hide();
            }


            // 设置右侧箭头点击事件
            $('.arrow-right').click(function() {
                i++;
                $lis.eq(i).stop().fadeIn(500).siblings().stop().fadeOut(500);
                if (i == $lis.length - 1) {
                    $('.arrow-right').hide();
                } else {
                    $('.arrow-right').show();
                }
                if (i == 0) {
                    $('.arrow-left').hide();
                } else {
                    $('.arrow-left').show();
                }
            })

            // 设置左侧箭头点击事件
            $('.arrow-left').click(function() {
                i--;
                $lis.eq(i).stop().fadeIn(500).siblings().stop().fadeOut(500);
                if (i == 0) {
                    $('.arrow-left').hide();
                } else {
                    $('.arrow-left').show();
                }
                if (i == $lis.length - 1) {
                    $('.arrow-right').hide();
                } else {
                    $('.arrow-right').show();
                }
            })
        })
    })


    // })


    // 点击关闭
    $(".close").click(function() {
        $(".swiper").hide();
    })







    // 游戏特色更改
    // var lis = document.getElementsByTagName('li');
    // var arrLeft = document.getElementById('arrLeft');
    // var arrRight = document.getElementById('arrRight');
    // var srcArr = ['images/1_fb96f7a.jpg', 'images/2_c567634.jpg', 'images/3_2f8f15e.jpg', 'images/4_155bc26.jpg', 'images/5_00be950.jpg'];
    // for (var i = 0; i < lis.length; i++) {
    //     lis[i].src = srcArr[i];
    // }

    // // count用于计算旋转位置
    // var count = 1;
    // // 调用change() 用于初始化li的位置
    // change();

    // // 左右按钮点击后，通过count的修改与change的调用，更改每个li的位置
    // arrLeft.onclick = function() {
    //     count++;
    //     change();
    // };
    // arrRight.onclick = function() {
    //     count--;
    //     change();
    // };

    // function change() {
    //     for (var i = 0; i < lis.length; i++) {
    //         lis[i].style.transform = 'rotateY(' + 72 * (i + count) + 'deg) translateZ(350px)';
    //     }
    // }






    // 网页定位广告
    //  隐藏广告按钮
    $('.ding-close').click(function() {
        $('.box').animate({
            width: 26,
            right: -155 + 17,
        }, 1000, function() {
            $('.ding-close').hide();
            $('.ding-open').show();
        });
    });

    // 显示广告按钮
    $('.ding-open').click(function() {
        console.log(11);
        $('.box').animate({
            width: 155,
            right: 17
        }, 1000, function() {
            $(this).children(('.box1')).show();
            $('.ding-open').hide();
            $('.ding-close').show();
        })
    })

})
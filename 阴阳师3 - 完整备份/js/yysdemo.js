$(function() {
    var lis = document.querySelectorAll(".imgbox ul li");
    var arrLeft = document.getElementById('btn1');
    var arrRight = document.getElementById('btn2');
    // var colorArr = ['red', 'blue', 'green', 'pink', 'orange'];
    // for (var i = 0; i < lis.length; i++) {
    //     lis[i].style.backgroundColor = colorArr[i];
    // }

    // count用于计算旋转位置
    var count = 1;
    // 调用change() 用于初始化li的位置
    change();

    // 左右按钮点击后，通过count的修改与change的调用，更改每个li的位置
    arrLeft.onclick = function() {
        count++;
        change();
    };
    arrRight.onclick = function() {
        // alert(1);
        count--;
        change();
    };

    function change() {
        for (var i = 0; i < lis.length; i++) {
            lis[i].style.transform = 'rotateY(' + 72 * (i + count) + 'deg) translateZ(350px)';
        }
    }
});
$(function() {
    $(".video").click(function() {
        $(".shipin").show();
        //
        document.querySelector("#video").play();
    });
    $(".closevideo").click(function() {
        $(".shipin").hide();
        document.querySelector("#video").pause();
    })

});
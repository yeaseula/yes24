        //section4 도서 섹션

        $(function () {

            var i = 0;

            function yesPick_prev() {
                i--;

                if (i < 0) { i = 2 };

                $(".yes_pick li:last").prependTo(".yes_pick > ul");
                $(".yes_pick > ul").css("margin-left", -1200);
                $(".yes_pick > ul").stop().animate({ "marginLeft": 0 }, 1000);

                $(".yespick_count").text((i + 1) + "/3")
            }

            $(".pick_prev").click(function () {
                yesPick_prev();
            });


            function yesPick_next() {
                i++;

                if (i > 2) { i = 0 };

                $(".yes_pick > ul").stop().animate({ marginLeft: -1200 }, function () {
                    $(".yes_pick li:first").appendTo(".yes_pick > ul");
                    $(".yes_pick > ul").css("margin-left", 0);
                });

                $(".yespick_count").text((i + 1) + "/3")
            }
            $(".pick_next").click(function () {
                yesPick_next();
            });
        });

//화면에 마우스 hover 하면 슬라이드 버튼 나타남

$(function () {
    $(".yes_pick").hover(function () {
        $(".yes_pick span").css("display", "block");
    }, function () {
        $(".yes_pick span").css("display", "none");
    });
});
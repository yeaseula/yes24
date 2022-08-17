        //section4 eBook 섹션

        $(function () {

            var i = 0;

            function ebook_prev() {
                i--;

                if (i < 0) { i = 2 };

                $(".yes_pick_2 li:last").prependTo(".yes_pick_2 > ul");
                $(".yes_pick_2 > ul").css("margin-left", -1200);
                $(".yes_pick_2 > ul").stop().animate({ "marginLeft": 0 }, 1000);

                $(".yespick_count2").text((i + 1) + "/3")
            }

            $(".pick_prev_2").click(function () {
                ebook_prev();
            });

            function ebook_next() {
                i++;

                if (i > 2) { i = 0 };

                $(".yes_pick_2 > ul").stop().animate({ marginLeft: -1200 }, function () {
                    $(".yes_pick_2 li:first").appendTo(".yes_pick_2 > ul");
                    $(".yes_pick_2 > ul").css("margin-left", 0);
                });

                $(".yespick_count2").text((i + 1) + "/3")
            }
            $(".pick_next_2").click(function () {
                ebook_next();
            });
        });


        //eBook 마우스 올리면 슬라이드 버튼 나타남

        $(function () {
            $(".yes_pick_2").hover(function () {
                $(".yes_pick_2 span").css("display", "block");
            }, function () {
                $(".yes_pick_2 span").css("display", "none");
            });
        });

//오디오북 어른의말 만화신작 호버 시 이미지 변화


$(function () {
    $("#for li:first-of-type").mouseenter(function () {
        $(".pick_bottom_img").css("visibility", "visible");
        $(".pick_bottom_img_2").css("visibility", "hidden");
        $(".pick_bottom_img_3").css("visibility", "hidden");
    });
});

$(function () {
    $("#for li:nth-of-type(2)").mouseenter(function () {
        $(".pick_bottom_img").css("visibility", "hidden");
        $(".pick_bottom_img_2").css("visibility", "visible");
        $(".pick_bottom_img_3").css("visibility", "hidden");
    });
});

$(function () {
    $("#for li:last-of-type").mouseenter(function () {
        $(".pick_bottom_img").css("visibility", "hidden");
        $(".pick_bottom_img_2").css("visibility", "hidden");
        $(".pick_bottom_img_3").css("visibility", "visible");
    }).mouseleave(function () {
        $(".pick_bottom_img").css("visibility", "visible");
        $(".pick_bottom_img_2").css("visibility", "hidden");
        $(".pick_bottom_img_3").css("visibility", "hidden");
    });
});
        //화제의 웹소설/코믹 슬라이드

        $(function () {

            var i = 0;

            function web_prev() {
                i--;

                if (i < 0) { i = 1 };

                $(".yes_pick_box_3 li:last").prependTo(".yes_pick_box_3 > ul");
                $(".yes_pick_box_3 > ul").css("margin-left", -418);
                $(".yes_pick_box_3 > ul").stop().animate({ "marginLeft": 0 }, 1000);

                $(".web_count").text((i + 1) + "/2")
            }

            $(".pick_prev").click(function () {
                web_prev();
            });

            function web_next() {
                i++;

                if (i > 1) { i = 0 };

                $(".yes_pick_box_3 > ul").stop().animate({ marginLeft: -418 }, function () {
                    $(".yes_pick_box_3 li:first").appendTo(".yes_pick_box_3 > ul");
                    $(".yes_pick_box_3 > ul").css("margin-left", 0);
                });

                $(".web_count").text((i + 1) + "/2")
            }
            $(".pick_next").click(function () {
                web_next();
            });
        });


        //화면에 마우스 올리면 버튼이 생김
        //첫번째 span은 화면에 항상 보여야 함

        $(function () {
            $(".yes_pick_box_3").hover(function () {
                $(".yes_pick_box_3 > span:nth-of-type(2)").css("display", "block");
                $(".yes_pick_box_3 > span:last-of-type").css("display", "block");
            }, function () {
                $(".yes_pick_box_3 > span:nth-of-type(2)").css("display", "none");
                $(".yes_pick_box_3 > span:last-of-type").css("display", "none");
            });
        });

        $(function () {
            $(".yes_pick_box_31").hover(function () {
                $(".yes_pick_box_31 > span:nth-of-type(2)").css("display", "block");
                $(".yes_pick_box_31 > span:last-of-type").css("display", "block");
            }, function () {
                $(".yes_pick_box_31 > span:nth-of-type(2)").css("display", "none");
                $(".yes_pick_box_31 > span:last-of-type").css("display", "none");
            });
        });


        //pick me up 슬라이드


        $(function () {

            var i = 0;

            function pickMe_prev() {
                i--;

                if (i < 0) { i = 1 };

                $(".yes_pick_box_31 li:last").prependTo(".yes_pick_box_31 > ul");
                $(".yes_pick_box_31 > ul").css("margin-left", -418);
                $(".yes_pick_box_31 > ul").stop().animate({ "marginLeft": 0 }, 1000);

                $(".pickme_count").text((i + 1) + "/2")
            }

            $(".pick2_prev").click(function () {
                pickMe_prev();
            });

            function pickMe_next() {
                i++;

                if (i > 1) { i = 0 };

                $(".yes_pick_box_31 > ul").stop().animate({ marginLeft: -418 }, function () {
                    $(".yes_pick_box_31 li:first").appendTo(".yes_pick_box_31 > ul");
                    $(".yes_pick_box_31 > ul").css("margin-left", 0);
                });

                $(".pickme_count").text((i + 1) + "/2")
            }
            $(".pick2_next").click(function () {
                pickMe_next();
            });
        });
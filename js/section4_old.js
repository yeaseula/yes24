//금주의 중고

        $(function () {

            var i = 0;

            function old_prev() {
                i--;

                if (i < 0) { i = 2 };

                $(".yes_pick_6 li:last").prependTo(".yes_pick_6 > ul ");
                $(".yes_pick_6 > ul").css("margin-left", -1000);
                $(".yes_pick_6 > ul").stop().animate({ "marginLeft": 0 });

                $(".old_count").text((i + 1) + "/3")
            }

            $(".old_prev").click(function () {
                old_prev();
            });

            function old_next() {
                i++;

                if (i > 2) { i = 0 };

                $(".yes_pick_6 > ul").stop().animate({ marginLeft: -1000 }, function () {
                    $(".yes_pick_6 li:first").appendTo(".yes_pick_6 > ul");
                    $(".yes_pick_6 > ul ").css("margin-left", 0);
                });

                $(".old_count").text((i + 1) + "/3")
            }
            $(".old_next").click(function () {
                old_next();
            });
        });


        $(function () {
            $(".yes_pick_6").hover(function () {
                $(".yes_pick_6 > span").css("display", "block");
            }, function () {
                $(".yes_pick_6 > span").css("display", "none");
            });
        });




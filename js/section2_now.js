        //지금 이 책 

        $(function () {

            var i = 0;

            function nowCount_prev() {
                i--;

                if (i < 0) { i = 2 };

                $("#now li:last").prependTo("#now > ul");
                $("#now > ul").css("margin-left", -1000);
                $("#now > ul").stop().animate({ "marginLeft": 0 }, 1000);

                $(".now_count").text((i + 1) + "/3")
            }

            $(".now_prev").click(function () {
                nowCount_prev();
            });

            function nowCount_next() {
                i++;

                if (i > 2) { i = 0 };

                $("#now > ul").stop().animate({ marginLeft: -1000 }, function () {
                    $("#now li:first").appendTo("#now > ul");
                    $("#now > ul").css("margin-left", 0);
                });

                $(".now_count").text((i + 1) + "/3")
            }
            $(".now_next").click(function () {
                nowCount_next();
            });
        });


        //마우스 호버 시 슬라이드 버튼 나타남

        $(function () {
            $("#now").hover(function () {
                $("#now span").css("display", "block");
            }, function () {
                $("#now span").css("display", "none");
            });
        });
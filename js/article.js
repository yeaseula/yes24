        //아티클 왼쪽 슬라이드

        $(function () {

            var i = 0;

            function article_prev() {
                i--;

                if (i < 0) { i = 2 };

                $("#art_left li:last").prependTo("#art_left > ul");
                $("#art_left > ul").css("margin-left", -400);
                $("#art_left > ul").stop().animate({ "marginLeft": 0 });

                $(".card_count").text((i + 1) + "/3")
            }

            $(".art_prev").click(function () {
                article_prev();
            });

            function article_next() {
                i++;

                if (i > 2) { i = 0 };

                $("#art_left > ul").stop().animate({ marginLeft: -400 }, function () {
                    $("#art_left li:first").appendTo("#art_left > ul");
                    $("#art_left > ul").css("margin-left", 0);
                });

                $(".card_count").text((i + 1) + "/3")
            }
            $(".art_next").click(function () {
                article_next();
            });
        });


        $(function () {
            $("#art_left").hover(function () {
                $("#art_left > span:nth-of-type(2)").css("display", "block");
                $("#art_left > span:last-of-type").css("display", "block");
            }, function () {
                $("#art_left > span:nth-of-type(2)").css("display", "none");
                $("#art_left > span:last-of-type").css("display", "none");
            });
        });

        //채널예스 슬라이드

        $(function () {

            var i = 0;

            function channel_prev() {
                i--;

                if (i < 0) { i = 1 };

                $("#channel_ul > li:last").prependTo("#channel_ul ");
                $("#channel_ul ").css("margin-left", -400);
                $("#channel_ul ").stop().animate({ "marginLeft": 0 });

                $(".channel_count").text((i + 1) + "/2")
            }

            $(".channel_prev").click(function () {
                channel_prev();
            });

            function cahnnel_next() {
                i++;

                if (i > 1) { i = 0 };

                $("#channel_ul ").stop().animate({ marginLeft: -400 }, function () {
                    $("#channel_ul > li:first").appendTo("#channel_ul ");
                    $("#channel_ul ").css("margin-left", 0);
                });

                $(".channel_count").text((i + 1) + "/2")
            }
            $(".channel_next").click(function () {
                cahnnel_next();
            });
        });

        $(function () {
            $(".top_box").hover(function () {
                $(".top_box > span:nth-of-type(2)").css("display", "block");
                $(".top_box > span:last-of-type").css("display", "block");
            }, function () {
                $(".top_box > span:nth-of-type(2)").css("display", "none");
                $(".top_box > span:last-of-type").css("display", "none");
            });
        });

        //YES 블로그 슬라이드


        $(function () {

            var i = 0;

            function blog_prev() {
                i--;

                if (i < 0) { i = 1 };

                $("#blog_ul > li:last").prependTo("#blog_ul ");
                $("#blog_ul ").css("margin-left", -400);
                $("#blog_ul ").stop().animate({ "marginLeft": 0 });

                $(".blog_count").text((i + 1) + "/2")
            }

            $(".blog_prev").click(function () {
                blog_prev();
            });

            function blog_next() {
                i++;

                if (i > 1) { i = 0 };

                $("#blog_ul ").stop().animate({ marginLeft: -400 }, function () {
                    $("#blog_ul > li:first").appendTo("#blog_ul ");
                    $("#blog_ul ").css("margin-left", 0);
                });

                $(".blog_count").text((i + 1) + "/2")
            }
            $(".blog_next").click(function () {
                blog_next();
            });
        });

        $(function () {
            $(".bottom_box").hover(function () {
                $(".bottom_box > span:nth-of-type(2)").css("display", "block");
                $(".bottom_box > span:last-of-type").css("display", "block");
            }, function () {
                $(".bottom_box > span:nth-of-type(2)").css("display", "none");
                $(".bottom_box > span:last-of-type").css("display", "none");
            });
        });

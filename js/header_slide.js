        //헤더 세로 슬라이드

        function vertical_slide() {
            $(".vertical").animate({ "marginTop": -28 }, function () {
                $(".vertical li:first").appendTo(".vertical");
                $(".vertical").css("margin-top", 0);
            });
        }

        setInterval(vertical_slide, 3000);


        //가로 미니 슬라이드

        function header_mini_prev() {
            $("#header_slide li:last").prependTo(".header_slide_ul");
            $(".header_slide_ul").css("margin-left", -160);
            $(".header_slide_ul").stop().animate({ "marginLeft": 0 });
        }

        function header_mini_next() {
            $(".header_slide_ul").stop().animate({ marginLeft: -160 }, function () {
                $("#header_slide li:first").appendTo(".header_slide_ul");
                $(".header_slide_ul").css("margin-left", 0);
            });
        }

        $(function () {
            $(".header_slide_prev").click(function () {
                header_mini_prev();
            });
            $(".header_slide_next").click(function () {
                header_mini_next();
            });
        });
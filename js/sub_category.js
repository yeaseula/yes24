        //카테고리 네비게이션 hover

        $(function () {
            $("#category > ul > li:nth-of-type(3)").hover(function () {
                $(".sub_ul_1").css("display", "block");
                $(".sub_ul_2").css("display", "none");
                $(".sub_ul_3").css("display", "none");
            }, function () {
                $(".sub_ul_1").css("display", "none");
                $(".sub_ul_2").css("display", "none");
                $(".sub_ul_3").css("display", "none");
            });
        });

        $(function () {
            $("#category > ul > li:nth-of-type(5)").hover(function () {
                $(".sub_ul_1").css("display", "none");
                $(".sub_ul_2").css("display", "block");
                $(".sub_ul_3").css("display", "none");
            }, function () {
                $(".sub_ul_1").css("display", "none");
                $(".sub_ul_2").css("display", "none");
                $(".sub_ul_3").css("display", "none");

            });
        });

        $(function () {
            $("#category > ul > li:last-of-type").hover(function () {
                $(".sub_ul_1").css("display", "none");
                $(".sub_ul_2").css("display", "none");
                $(".sub_ul_3").css("display", "block");
            }, function () {

                $(".sub_ul_1").css("display", "none");
                $(".sub_ul_2").css("display", "none");
                $(".sub_ul_3").css("display", "none");
            });
        });
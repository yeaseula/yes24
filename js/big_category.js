        //예스픽 빅 카테고리 클릭 시 화면 전환

        $(function () {
            $(".big_category li:first-of-type").click(function () {

                $("#change_section4").css("display", "block");
                $("#change2_section4").css("display", "none");
                $("#change3_section4").css("display", "none");
                $("#change4_section4").css("display", "none");
                $("#change5_section4").css("display", "none");
                $("#change6_section4").css("display", "none");

                $(".big_category li").css({ "fontWeight": "normal", "borderBottom": "1px solid #ddd", "background-color": "#f8f8f8" });
                $(this).css({ "fontWeight": "bold", "borderBottom": "none", "background-color": "#fff" });
            });



            $(".big_category li:nth-of-type(2)").click(function () {

                $("#change_section4").css("display", "none");
                $("#change2_section4").css("display", "block");
                $("#change3_section4").css("display", "none");
                $("#change4_section4").css("display", "none");
                $("#change5_section4").css("display", "none");
                $("#change6_section4").css("display", "none");

                $(".big_category li").css({ "fontWeight": "normal", "borderBottom": "1px solid #ddd", "background-color": "#f8f8f8" });
                $(this).css({ "fontWeight": "bold", "borderBottom": "none", "background-color": "#fff" });
            });

            $(".big_category li:nth-of-type(3)").click(function () {

                $("#change_section4").css("display", "none");
                $("#change2_section4").css("display", "none");
                $("#change3_section4").css("display", "block");
                $("#change4_section4").css("display", "none");
                $("#change5_section4").css("display", "none");
                $("#change6_section4").css("display", "none");

                $(".big_category li").css({ "fontWeight": "normal", "borderBottom": "1px solid #ddd", "background-color": "#f8f8f8" });
                $(this).css({ "fontWeight": "bold", "borderBottom": "none", "background-color": "#fff" });

            });

            $(".big_category li:nth-of-type(4)").click(function () {

                $("#change_section4").css("display", "none");
                $("#change2_section4").css("display", "none");
                $("#change3_section4").css("display", "none");
                $("#change4_section4").css("display", "block");
                $("#change5_section4").css("display", "none");
                $("#change6_section4").css("display", "none");

                $(".big_category li").css({ "fontWeight": "normal", "borderBottom": "1px solid #ddd", "background-color": "#f8f8f8" });
                $(this).css({ "fontWeight": "bold", "borderBottom": "none", "background-color": "#fff" });

            });

            $(".big_category li:nth-of-type(5)").click(function () {

                $("#change_section4").css("display", "none");
                $("#change2_section4").css("display", "none");
                $("#change3_section4").css("display", "none");
                $("#change4_section4").css("display", "none");
                $("#change5_section4").css("display", "block");
                $("#change6_section4").css("display", "none");

                $(".big_category li").css({ "fontWeight": "normal", "borderBottom": "1px solid #ddd", "background-color": "#f8f8f8" });
                $(this).css({ "fontWeight": "bold", "borderBottom": "none", "background-color": "#fff" });

            });

            $(".big_category li:last-of-type").click(function () {

                $("#change_section4").css("display", "none");
                $("#change2_section4").css("display", "none");
                $("#change3_section4").css("display", "none");
                $("#change4_section4").css("display", "none");
                $("#change5_section4").css("display", "none");
                $("#change6_section4").css("display", "block");

                $(".big_category li").css({ "fontWeight": "normal", "borderBottom": "1px solid #ddd", "background-color": "#f8f8f8" });
                $(this).css({ "fontWeight": "bold", "borderBottom": "none", "background-color": "#fff" });

            });

        });
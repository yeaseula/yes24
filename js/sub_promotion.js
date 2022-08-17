        //프로모션

        $(function () {
            $("#bookpro_left li:first-of-type").mouseover(function () {
                $("#bookpro_left li").css({ "backgroundColor": "#fff", "fontWeight": "initial" });
                $(this).css({ "backgroundColor": "#ddd", "fontWeight": "bold" });

                $(".pro_content").css("display", "block");
                $(".pro_content2").css("display", "none");
                $(".pro_content3").css("display", "none");
                $(".pro_content4").css("display", "none");
            });

            $("#bookpro_left li:nth-of-type(2)").mouseover(function () {
                $("#bookpro_left li").css({ "backgroundColor": "#fff", "fontWeight": "initial" });
                $(this).css({ "backgroundColor": "#ddd", "fontWeight": "bold" });

                $(".pro_content").css("display", "none");
                $(".pro_content2").css("display", "block");
                $(".pro_content3").css("display", "none");
                $(".pro_content4").css("display", "none");

            });

            $("#bookpro_left li:nth-of-type(3)").mouseover(function () {
                $("#bookpro_left li").css({ "backgroundColor": "#fff", "fontWeight": "initial" });
                $(this).css({ "backgroundColor": "#ddd", "fontWeight": "bold" });

                $(".pro_content").css("display", "none");
                $(".pro_content2").css("display", "none");
                $(".pro_content3").css("display", "block");
                $(".pro_content4").css("display", "none");
            });

            $("#bookpro_left li:last-of-type").mouseover(function () {
                $("#bookpro_left li").css({ "backgroundColor": "#fff", "fontWeight": "initial" });
                $(this).css({ "backgroundColor": "#ddd", "fontWeight": "bold" });

                $(".pro_content").css("display", "none");
                $(".pro_content2").css("display", "none");
                $(".pro_content3").css("display", "none");
                $(".pro_content4").css("display", "block");
            });

        });
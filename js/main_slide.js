        //메인 슬라이드

        $(function () {

            $("#slider_bottom > li").mouseover(function () {
                $("#slider_img > ul > li").stop().hide();
                $("#slider_img > ul > li").eq($(this).index()).stop().show();

                $("#slider_bottom > li").removeClass("slider_li_hover");
                $(this).addClass("slider_li_hover");
            }).mouseleave(function () {
                $("#slider_bottom li").removeClass("slider_li_hover");
                $(this).addClass("slider_li_hover");
            });

            var i = 0;

            function slider_main() {
                i++;

                if (i > $("#slider_img > ul > li:last").index()) {
                    i = 0;
                }

                $("#slider_img > ul > li").stop().hide();
                $("#slider_img > ul > li").eq(i).stop().show();
                $("#slider_bottom >li").removeClass("slider_li_hover");
                $("#slider_bottom >li").eq(i).addClass("slider_li_hover");
            }

            setInterval(slider_main, 2800)

        });



        //메인 네비게이션 마우스 hover 시 서브메뉴 보여주기

        $(function () {
            $(".main > li").mouseover(function () {
                $(".sub").css("display", "none");
                $(this).find(".sub").css("display", "block");
            }).mouseleave(function () { });
        });


        //서브메뉴에 마우스 호버 시 css변화

        $(function () {
            $(".main>li").hover(function () {
                $(this).css("background-color", "#ffffff");
                $(this).children("a").css("color", "black");
            }, function () {
                $(".main>li").css("background-color", "#196ab3");
                $(".main>li>a").css("color", "#ffffff");
            });
        });

        //YES NOW에 마우스 hover 시 이미지 보여주기

        $(function () {
            $(".main > li:first-of-type").hover(function () {
                $("#hide_slider").css("display", "block");
            }, function () {
                $("#hide_slider").css("display", "none");
            })

        });
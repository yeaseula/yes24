        //함께 산 책

        $(function () {

            var i = 0;

            function together_prev() {
                i--;

                if (i < 0) { i = 2 };

                $("#together_books li:last").prependTo("#together_books > ul");
                $("#together_books > ul").css("margin-left", -1260);
                $("#together_books > ul").stop().animate({ "marginLeft": 0 });

                $(".counting").text((i + 1) + "/3")
            }

            $(".together_prev").click(function () {
                together_prev();
            });

            function together_next() {
                i++;

                if (i > 2) { i = 0 };

                $("#together_books > ul").stop().animate({ marginLeft: -1260 }, function () {
                    $("#together_books li:first").appendTo("#together_books > ul");
                    $("#together_books > ul").css("margin-left", 0);
                });

                $(".counting").text((i + 1) + "/3")
            }
            $(".together_next").click(function () {
                together_next();
            });
        });



        //많이 산 책

        $(function () {

            var i = 0;

            function many_prev() {
                i--;

                if (i < 0) { i = 2 };

                $("#together_many li:last").prependTo("#together_many > ul");
                $("#together_many > ul").css("margin-left", -1260);
                $("#together_many > ul").stop().animate({ "marginLeft": 0 });

                $(".counting").text((i + 1) + "/3")
            }

            $(".together2_prev").click(function () {
                many_prev();
            });

            function many_next() {
                i++;

                if (i > 2) { i = 0 };

                $("#together_many > ul").stop().animate({ marginLeft: -1260 }, function () {
                    $("#together_many li:first").appendTo("#together_many > ul");
                    $("#together_many > ul").css("margin-left", 0);
                });

                $(".counting").text((i + 1) + "/3")
            }
            $(".together2_next").click(function () {
                many_next();
            });
        });

        //hover 시 슬라이드버튼 보이게

        $(function () {
            $("#together_books").hover(function () {
                $(".together_prev").css("display", "block");
                $(".together_next").css("display", "block");
            }, function () {
                $(".together_prev").css("display", "none");
                $(".together_next").css("display", "none");
            });
        });

        $(function () {
            $("#together_many").hover(function () {
                $(".together2_prev").css("display", "block");
                $(".together2_next").css("display", "block");
            }, function () {
                $(".together2_prev").css("display", "none");
                $(".together2_next").css("display", "none");
            });
        });

//많이 산 책, 함께 산 책 호버 시 박스 바뀌게

$(function () {
    $("#together > ul:first-of-type > li").eq(0).mouseover(function () {
        $("#together > ul:first-of-type > li").css({ "backgroundColor": "#f8f8f8", "borderBottom": "1px solid #ddd" });
        $(this).css({ "backgroundColor": "#fff", "borderBottom": "none" });

        $("#together_books").css("display", "block");
        $("#together_many").css("display", "none");
    });
});

$(function () {
    $("#together > ul:first-of-type > li").eq(1).mouseover(function () {
        $("#together > ul:first-of-type > li").css({ "backgroundColor": "#f8f8f8", "borderBottom": "1px solid #ddd" });
        $(this).css({ "backgroundColor": "#fff", "borderBottom": "none" });

        $("#together_many").css("display", "block");
        $("#together_books").css("display", "none");
    });
})
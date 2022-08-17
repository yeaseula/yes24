//북클럽샵 화제의 책

$(function () {

    var i = 0;

    function bestCount_prev() {
        i--;

        if (i < 0) { i = 2 };

        $("#best_books li:last").prependTo("#best_books > ul");
        $("#best_books > ul").css("margin-left", -1000);
        $("#best_books > ul").stop().animate({ "marginLeft": 0 }, 1000);

        $(".best_count").text((i + 1) + "/3")
    }

    $(".now_prev2").click(function () {
        bestCount_prev();
    });

    function bestCount_next() {
        i++;

        if (i > 2) { i = 0 };

        $("#best_books > ul").stop().animate({ marginLeft: -1000 }, function () {
            $("#best_books li:first").appendTo("#best_books > ul");
            $("#best_books > ul").css("margin-left", 0);
        });

        $(".best_count").text((i + 1) + "/3")
    }
    $(".now_next2").click(function () {
        bestCount_next();
    });
});

//마우스 호버 시 슬라이드 버튼 나타남

$(function () {
    $("#best_books").hover(function () {
        $("#best_books span").css("display", "block");
    }, function () {
        $("#best_books span").css("display", "none");
    });
});




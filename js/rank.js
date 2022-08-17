        //국내도서 해외도서 셀렉트 하면 변하는 함수

        $(function () {
            $("#best_select").change(function () {
                if ($(this).val() == "국내도서") {
                    $("#rank_detail_wrap").css("display", "block");
                    $("#rank_detail_wrap_2").css("display", "none");
                } else if ($(this).val() == "해외도서") {
                    $("#rank_detail_wrap").css("display", "none");
                    $("#rank_detail_wrap_2").css("display", "block");
                }
            });
        });

//1~5위 클릭 6~10위 클릭시 순위 페이지 변경

$(function () {
    $(".rank > li:last-child").click(function () {
        $(".rank_detail_1").css("display", "none");
        $(".rank_detail_6").css("display", "block");
    });
    $(".rank > li:first-child").click(function () {
        $(".rank_detail_1").css("display", "block");
        $(".rank_detail_6").css("display", "none");
    });
});

$(function () {
    $(".rank > li:last-child").click(function () {
        $(".rank_detail_2").css("display", "none");
        $(".rank_detail_26").css("display", "block");
    });
    $(".rank > li:first-child").click(function () {
        $(".rank_detail_2").css("display", "block");
        $(".rank_detail_26").css("display", "none");
    });
});
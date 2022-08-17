        //cd 아래부분 미니 카테고리 호버 시 화면전환

        $(function () {
            $("#music li:first-of-type").mouseenter(function () {
                $(".music_bottom_img").css("visibility", "visible");
                $(".music_bottom_img_2").css("visibility", "hidden");
                $(".music_bottom_img_3").css("visibility", "hidden");
            });
        });

        $(function () {
            $("#music li:nth-of-type(2)").mouseenter(function () {
                $(".music_bottom_img").css("visibility", "hidden");
                $(".music_bottom_img_2").css("visibility", "visible");
                $(".music_bottom_img_3").css("visibility", "hidden");
            });
        });

        $(function () {
            $("#music li:last-of-type").mouseenter(function () {
                $(".music_bottom_img").css("visibility", "hidden");
                $(".music_bottom_img_2").css("visibility", "hidden");
                $(".music_bottom_img_3").css("visibility", "visible");
            }).mouseleave(function () {
                $(".music_bottom_img").css("visibility", "visible");
                $(".music_bottom_img_2").css("visibility", "hidden");
                $(".music_bottom_img_3").css("visibility", "hidden");
            });
        });
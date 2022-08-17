        //문구 기프트 아래부분 미니 카테고리 호버 시 화면전환

        $(function () {
            $("#goods li:first-of-type").mouseenter(function () {
                $(".goods_bottom_img").css("visibility", "visible");
                $(".goods_bottom_img_2").css("visibility", "hidden");
                $(".goods_bottom_img_3").css("visibility", "hidden");
                $(".goods_bottom_img_4").css("visibility", "hidden");
            });
        });


        $(function () {
            $("#goods li:nth-of-type(2)").mouseenter(function () {
                $(".goods_bottom_img").css("visibility", "hidden");
                $(".goods_bottom_img_2").css("visibility", "visible");
                $(".goods_bottom_img_3").css("visibility", "hidden");
                $(".goods_bottom_img_4").css("visibility", "hidden");
            });
        });

        $(function () {
            $("#goods li:nth-of-type(3)").mouseenter(function () {
                $(".goods_bottom_img").css("visibility", "hidden");
                $(".goods_bottom_img_2").css("visibility", "hidden");
                $(".goods_bottom_img_3").css("visibility", "visible");
                $(".goods_bottom_img_4").css("visibility", "hidden");
            });
        });

        $(function () {
            $("#goods li:last-of-type").mouseenter(function () {
                $(".goods_bottom_img").css("visibility", "hidden");
                $(".goods_bottom_img_2").css("visibility", "hidden");
                $(".goods_bottom_img_3").css("visibility", "hidden");
                $(".goods_bottom_img_4").css("visibility", "visible");
            }).mouseleave(function () {
                $(".goods_bottom_img").css("visibility", "visible");
                $(".goods_bottom_img_2").css("visibility", "hidden");
                $(".goods_bottom_img_3").css("visibility", "hidden");
                $(".goods_bottom_img_4").css("visibility", "hidden");
            });
        });
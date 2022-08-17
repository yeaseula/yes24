        //예스픽 eBook 섹션

        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: { query: "판타지", size: 50 },
            headers: { Authorization: "KakaoAK 7ef7831f0d6b81e970b30f0cdfa6a4a2" }
        })
            .done(function (msg) {

                // for문

                var lis = document.getElementsByClassName("yes_pick_box_2");

                for (var i = 0; i < lis.length; i++) {

                    var res = Math.floor(Math.random() * 10);


                    $(".yes_pick_box_2").eq(i).append("<img src='" + msg.documents[i + 5].thumbnail + "'/>");
                    $(".yes_pick_box_2").eq(i).append("<h4>" + msg.documents[i + 5].title + "</h4>");
                    $(".yes_pick_box_2").eq(i).append("<p>" + msg.documents[i + 5].authors + " | " + msg.documents[i].publisher + "</p>");
                    $(".yes_pick_box_2").eq(i).append("<p>" + msg.documents[i + 5].price + "원" + " (" + res + "%적립)" + "</p>");

                }

            });

        //오디오북 for you

        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: { query: "역사", size: 20 },
            headers: { Authorization: "KakaoAK 7ef7831f0d6b81e970b30f0cdfa6a4a2" }
        })
            .done(function (msg) {

                // for문

                var lis = document.getElementsByClassName("pb_i");

                for (var i = 0; i < lis.length; i++) {

                    var title = msg.documents[i].title;
                    var res = title.substring(0, 10);

                    $(".pb_i").eq(i).append("<img src='" + msg.documents[i].thumbnail + "'/>");
                    $(".pb_i").eq(i).append("<p>" + res + "<p>");


                }

            });

        //어른의 말 연습

        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: { query: "어른", size: 20 },
            headers: { Authorization: "KakaoAK 7ef7831f0d6b81e970b30f0cdfa6a4a2" }
        })
            .done(function (msg) {

                // for문

                var lis = document.getElementsByClassName("pb_i_2");

                for (var i = 0; i < lis.length; i++) {

                    var title = msg.documents[i].title;
                    var res = title.substring(0, 10);

                    $(".pb_i_2").eq(i).append("<img src='" + msg.documents[i].thumbnail + "'/>");
                    $(".pb_i_2").eq(i).append("<p>" + res + "<p>");


                }

            });

        //만화 인기 신작

        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: { query: "웹툰", size: 20 },
            headers: { Authorization: "KakaoAK 7ef7831f0d6b81e970b30f0cdfa6a4a2" }
        })
            .done(function (msg) {

                // for문

                var lis = document.getElementsByClassName("pb_i_3");

                for (var i = 0; i < lis.length; i++) {

                    var title = msg.documents[i].title;
                    var res = title.substring(0, 10);

                    $(".pb_i_3").eq(i).append("<img src='" + msg.documents[i].thumbnail + "'/>");
                    $(".pb_i_3").eq(i).append("<p>" + res + "<p>");



                }

            });


        //강력추천 eBook

        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: { query: "앵무새 죽이기" },
            headers: { Authorization: "KakaoAK 7ef7831f0d6b81e970b30f0cdfa6a4a2" }
        })
            .done(function (msg) {

                $(".pick_img").append("<img src='" + msg.documents[0].thumbnail + "'/>");

                $(".pick_text").append("<h5>" + msg.documents[0].title + "</h5>");


                var demo = msg.documents[0].contents;
                var res = demo.substring(0, 85);

                $(".pick_text").append("<p>" + res + ".." + "<p>");



                $(function () {
                    $(".pick_text > p").hover(function () {
                        $(this).css("font-weight", "bold");
                    }, function () {
                        $(".pick_text > p").css("font-weight", "initial");
                    });
                });

                $(function () {
                    $(".pick_img > img").hover(function () {
                        $(this).css("opacity", "0.6");
                    }, function () {
                        $(".pick_img > img").css("opacity", "1");
                    });
                });

            });

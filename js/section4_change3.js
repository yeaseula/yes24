//웹소설 코믹

        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: { query: "마션" },
            headers: { Authorization: "KakaoAK 7ef7831f0d6b81e970b30f0cdfa6a4a2" }
        })
            .done(function (msg) {
                $(".yes_pick_box_3").find("li:first-of-type").append("<img src='" + msg.documents[0].thumbnail + "'/>");
                $(".yes_pick_box_3").find("li:first-of-type").append("<h3>" + msg.documents[0].title + "</h3>");
                $(".yes_pick_box_3").find("li:first-of-type").append("<p>" + "코믹 감동 SF 판타지 과학" + "</p>");
                $(".yes_pick_box_3").find("li:first-of-type").append("<p>" + "좌충우돌 화성에서 살아남기!" + "</p>");




            });

        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: { query: "문어의 영혼" },
            headers: { Authorization: "KakaoAK 7ef7831f0d6b81e970b30f0cdfa6a4a2" }
        })
            .done(function (msg) {
                $(".yes_pick_box_3").find("li:last-of-type").append("<img src='" + msg.documents[0].thumbnail + "'/>");
                $(".yes_pick_box_3").find("li:last-of-type").append("<h3>" + msg.documents[0].title + "</h3>");
                $(".yes_pick_box_3").find("li:last-of-type").append("<p>" + "에세이 과학 생물학 해외도서" + "</p>");
                $(".yes_pick_box_3").find("li:last-of-type").append("<p>" + "생명의 경이로움, 바닷속에서 찾다!" + "</p>");


            });

        //pick me up! 첫번째 슬라이드

        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: { query: "내 죽음에 네가" },
            headers: { Authorization: "KakaoAK 7ef7831f0d6b81e970b30f0cdfa6a4a2" }
        })
            .done(function (msg) {
                $(".yes_pick_box_31").find("li:first-of-type").find(".pick_small:first-child").find(".pick_small_img").append("<img src='" + msg.documents[0].thumbnail + "'/>");
                $(".yes_pick_box_31").find("li:first-of-type").find(".pick_small:first-child").find(".pick_small_text")
                    .append("<h5>" + msg.documents[0].title + "</h5>");
                $(".yes_pick_box_31").find("li:first-of-type").find(".pick_small:first-child").find(".pick_small_text")
                    .append("<p>" + msg.documents[0].authors + "</p>");
                $(".yes_pick_box_31").find("li:first-of-type").find(".pick_small:first-child").find(".pick_small_text")
                    .append("<p>" + "모든 걸 포기하려던 순간, 기적처럼 시작된 사랑에 관한 이야기" + "</p>");

            });

        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: { query: "애쓰지 않아도" },
            headers: { Authorization: "KakaoAK 7ef7831f0d6b81e970b30f0cdfa6a4a2" }
        })
            .done(function (msg) {
                $(".yes_pick_box_31").find("li:first-of-type").find(".pick_small:last-child").find(".pick_small_img").append("<img src='" + msg.documents[0].thumbnail + "'/>");
                $(".yes_pick_box_31").find("li:first-of-type").find(".pick_small:last-child").find(".pick_small_text").append("<h5>" + msg.documents[0].title + "</h5>");
                $(".yes_pick_box_31").find("li:first-of-type").find(".pick_small:last-child").find(".pick_small_text")
                    .append("<p>" + msg.documents[0].authors + "</p>");
                $(".yes_pick_box_31").find("li:first-of-type").find(".pick_small:last-child").find(".pick_small_text")
                    .append("<p>" + "삶의 모난 부분을 보듬는 섬세한 시선" + "</p>");
            });


        //pick me up 두번째 슬라이드

        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: { query: "위대한 개츠비" },
            headers: { Authorization: "KakaoAK 7ef7831f0d6b81e970b30f0cdfa6a4a2" }
        })
            .done(function (msg) {
                $(".yes_pick_box_31").find("li:last-of-type").find(".pick_small:first-child").find(".pick_small_img").append("<img src='" + msg.documents[0].thumbnail + "'/>");
                $(".yes_pick_box_31").find("li:last-of-type").find(".pick_small:first-child").find(".pick_small_text")
                    .append("<h5>" + msg.documents[0].title + "</h5>");
                $(".yes_pick_box_31").find("li:last-of-type").find(".pick_small:first-child").find(".pick_small_text")
                    .append("<p>" + msg.documents[0].authors + "</p>");
                $(".yes_pick_box_31").find("li:last-of-type").find(".pick_small:first-child").find(".pick_small_text")
                    .append("<p>" + "화려함 속에 감춰진 극적인 갈등" + "</p>");

            });

        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: { query: "검사내전" },
            headers: { Authorization: "KakaoAK 7ef7831f0d6b81e970b30f0cdfa6a4a2" }
        })
            .done(function (msg) {
                $(".yes_pick_box_31").find("li:last-of-type").find(".pick_small:last-child").find(".pick_small_img").append("<img src='" + msg.documents[0].thumbnail + "'/>");
                $(".yes_pick_box_31").find("li:last-of-type").find(".pick_small:last-child").find(".pick_small_text").append("<h5>" + msg.documents[0].title + "</h5>");
                $(".yes_pick_box_31").find("li:last-of-type").find(".pick_small:last-child").find(".pick_small_text")
                    .append("<p>" + msg.documents[0].authors + "</p>");
                $(".yes_pick_box_31").find("li:last-of-type").find(".pick_small:last-child").find(".pick_small_text")
                    .append("<p>" + "세상을 보는 시선을 달리하다!" + "</p>");
            });


        //bottom3

        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: { query: "공포", size: 20 },
            headers: { Authorization: "KakaoAK 7ef7831f0d6b81e970b30f0cdfa6a4a2" }
        })
            .done(function (msg) {

                // for문 (5개)

                var lis = document.getElementsByClassName("bottom_li");

                for (var i = 0; i < lis.length; i++) {

                    $(".bottom_li").eq(i).append("<img src='" + msg.documents[i].thumbnail + "'/>");

                }

            });
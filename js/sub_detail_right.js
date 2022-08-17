        //오른쪽
        //이 분야 베스트셀러

        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: { query: "파친코1" },
            headers: { Authorization: "KakaoAK 7ef7831f0d6b81e970b30f0cdfa6a4a2" }
        })
            .done(function (msg) {

                $(".best_img").eq(0).append("<img src='" + msg.documents[0].thumbnail + "'/>");

                $(".best_text").eq(0).append("<p>" + msg.documents[0].title + "</p>");
                $(".best_text").eq(0).append("<p>" + msg.documents[0].authors + "</p>");
                $(".best_text").eq(0).append("<p>" + msg.documents[0].price + "원" + "</p>");
            });

        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: { query: "미드나잇 라이브러리" },
            headers: { Authorization: "KakaoAK 7ef7831f0d6b81e970b30f0cdfa6a4a2" }
        })
            .done(function (msg) {

                $(".best_img").eq(1).append("<img src='" + msg.documents[0].thumbnail + "'/>");

                $(".best_text").eq(1).append("<p>" + msg.documents[0].title + "</p>");
                $(".best_text").eq(1).append("<p>" + msg.documents[0].authors + "</p>");
                $(".best_text").eq(1).append("<p>" + msg.documents[0].price + "원" + "</p>");
            });

        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: { query: "테라피스트" },
            headers: { Authorization: "KakaoAK 7ef7831f0d6b81e970b30f0cdfa6a4a2" }
        })
            .done(function (msg) {

                $(".best_img").eq(2).append("<img src='" + msg.documents[0].thumbnail + "'/>");

                $(".best_text").eq(2).append("<p>" + msg.documents[0].title + "</p>");
                $(".best_text").eq(2).append("<p>" + msg.documents[0].authors + "</p>");
                $(".best_text").eq(2).append("<p>" + msg.documents[0].price + "원" + "</p>");
            });
        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: { query: "레슨 인 케미스트리1" },
            headers: { Authorization: "KakaoAK 7ef7831f0d6b81e970b30f0cdfa6a4a2" }
        })
            .done(function (msg) {

                $(".best_img").eq(3).append("<img src='" + msg.documents[0].thumbnail + "'/>");

                $(".best_text").eq(3).append("<p>" + msg.documents[0].title + "</p>");
                $(".best_text").eq(3).append("<p>" + msg.documents[0].authors + "</p>");
                $(".best_text").eq(3).append("<p>" + msg.documents[0].price + "원" + "</p>");
            });

        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: { query: "링컨 하이웨이" },
            headers: { Authorization: "KakaoAK 7ef7831f0d6b81e970b30f0cdfa6a4a2" }
        })
            .done(function (msg) {

                $(".best_img").eq(4).append("<img src='" + msg.documents[0].thumbnail + "'/>");

                $(".best_text").eq(4).append("<p>" + msg.documents[0].title + "</p>");
                $(".best_text").eq(4).append("<p>" + msg.documents[0].authors + "</p>");
                $(".best_text").eq(4).append("<p>" + msg.documents[0].price + "원" + "</p>");
            });


        //이 분야 신상품

        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: { query: "harrypotter", size: "20" },
            headers: { Authorization: "KakaoAK 7ef7831f0d6b81e970b30f0cdfa6a4a2" }
        })
            .done(function (msg) {

                var boxCount = document.getElementsByClassName("new_box");

                for (var i = 0; i < boxCount.length; i++) {

                    $(".new_img").eq(i).append("<img src='" + msg.documents[i].thumbnail + "'/>");

                    var title = msg.documents[i].title;
                    var res = title.substring(0, 32);

                    $(".new_text").eq(i).append("<p>" + res + ".." + "</p>");
                    $(".new_text").eq(i).append("<p>" + msg.documents[i].authors + "</p>");
                    $(".new_text").eq(i).append("<p>" + msg.documents[i].price + "원" + "</p>");

                }
            });

        //이 책의 원서

        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: { query: "Watching You", size: "20" },
            headers: { Authorization: "KakaoAK 7ef7831f0d6b81e970b30f0cdfa6a4a2" }
        })
            .done(function (msg) {

                var boxCount = document.getElementsByClassName("list_box");

                for (var i = 0; i < boxCount.length; i++) {

                    $(".list_img").eq(i).append("<img src='" + msg.documents[i].thumbnail + "'/>");
                    $(".list_text").eq(i).append("<p>" + msg.documents[i].title + "</p>");
                    $(".list_text").eq(i).append("<p>" + msg.documents[i].authors + "</p>");
                    $(".list_text").eq(i).append("<p>" + msg.documents[i].price + "원" + "</p>");

                }
            });
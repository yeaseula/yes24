        //작가의 다른 작품

        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: { query: "다크 플레이스의 비밀" },
            headers: { Authorization: "KakaoAK 7ef7831f0d6b81e970b30f0cdfa6a4a2" }
        })
            .done(function (msg) {

                $(".cover").eq(0).append("<img src='" + msg.documents[0].thumbnail + "'/>");
                $(".cover").eq(0).append("<h5>" + msg.documents[0].title + "</h5>");
                $(".cover").eq(0).append("<p>" + msg.documents[0].price + "원" + "</p>");

            });

        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: { query: "그때 내 딸이 사라졌다" },
            headers: { Authorization: "KakaoAK 7ef7831f0d6b81e970b30f0cdfa6a4a2" }
        })
            .done(function (msg) {

                $(".cover").eq(1).append("<img src='" + msg.documents[0].thumbnail + "'/>");
                $(".cover").eq(1).append("<h5>" + msg.documents[0].title + "</h5>");
                $(".cover").eq(1).append("<p>" + msg.documents[0].price + "원" + "</p>");

            });

        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: { query: "일회용 아내" },
            headers: { Authorization: "KakaoAK 7ef7831f0d6b81e970b30f0cdfa6a4a2" }
        })
            .done(function (msg) {

                $(".cover").eq(2).append("<img src='" + msg.documents[0].thumbnail + "'/>");
                $(".cover").eq(2).append("<h5>" + msg.documents[0].title + "</h5>");
                $(".cover").eq(2).append("<p>" + msg.documents[0].price + "원" + "</p>");

            });

        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: { query: "어둠이 돌아오라 부를때" },
            headers: { Authorization: "KakaoAK 7ef7831f0d6b81e970b30f0cdfa6a4a2" }
        })
            .done(function (msg) {

                $(".cover").eq(3).append("<img src='" + msg.documents[0].thumbnail + "'/>");
                $(".cover").eq(3).append("<h5>" + msg.documents[0].title + "</h5>");
                $(".cover").eq(3).append("<p>" + msg.documents[0].price + "원" + "</p>");

            });

        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: { query: "폴과 비르지니" },
            headers: { Authorization: "KakaoAK 7ef7831f0d6b81e970b30f0cdfa6a4a2" }
        })
            .done(function (msg) {

                $(".cover").eq(4).append("<img src='" + msg.documents[0].thumbnail + "'/>");

                var title = msg.documents[0].title;
                var res = title.substring(0, 11);

                $(".cover").eq(4).append("<h5>" + res + "</h5>");
                $(".cover").eq(4).append("<p>" + msg.documents[0].price + "원" + "</p>");

            });

        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: { query: "수어사이드 하우스" },
            headers: { Authorization: "KakaoAK 7ef7831f0d6b81e970b30f0cdfa6a4a2" }
        })
            .done(function (msg) {

                $(".cover").eq(5).append("<img src='" + msg.documents[0].thumbnail + "'/>");
                $(".cover").eq(5).append("<h5>" + msg.documents[0].title + "</h5>");
                $(".cover").eq(5).append("<p>" + msg.documents[0].price + "원" + "</p>");

            });

        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: { query: "수어사이드 하우스" },
            headers: { Authorization: "KakaoAK 7ef7831f0d6b81e970b30f0cdfa6a4a2" }
        })
            .done(function (msg) {

                $(".cover").eq(6).append("<img src='" + msg.documents[0].thumbnail + "'/>");
                $(".cover").eq(6).append("<h5>" + msg.documents[0].title + "</h5>");
                $(".cover").eq(6).append("<p>" + msg.documents[0].price + "원" + "</p>");

            });

        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: { query: "128호실의 원고" },
            headers: { Authorization: "KakaoAK 7ef7831f0d6b81e970b30f0cdfa6a4a2" }
        })
            .done(function (msg) {

                $(".cover").eq(7).append("<img src='" + msg.documents[0].thumbnail + "'/>");
                $(".cover").eq(7).append("<h5>" + msg.documents[0].title + "</h5>");
                $(".cover").eq(7).append("<p>" + msg.documents[0].price + "원" + "</p>");

            });
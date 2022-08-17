 //메인 슬라이드

        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: { query: "정의의 교실" },
            headers: { Authorization: "KakaoAK 7ef7831f0d6b81e970b30f0cdfa6a4a2" }
        })
            .done(function (msg) {

                $(".main_slider").eq(0).append("<h4>" + "정의란 무엇인가?<br>아직도 잘 모르겠다면" + "</h4>");
                $(".main_slider").eq(0).append("<p>" + "스토리텔링으로 읽는 정의" + "</p>");
                $(".main_slider").eq(0).append("<img src='" + msg.documents[0].thumbnail + "'/>");

            });

        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: { query: "감정이라는 세계" },
            headers: { Authorization: "KakaoAK 7ef7831f0d6b81e970b30f0cdfa6a4a2" }
        })
            .done(function (msg) {

                $(".main_slider").eq(1).append("<h4>" + "20만독자가 열광한<br>심리 베스트셀러!" + "</h4>");
                $(".main_slider").eq(1).append("<p>" + "인간의 감정에 관한 탐구" + "</p>");
                $(".main_slider").eq(1).append("<img src='" + msg.documents[0].thumbnail + "'/>");

            });

        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: { query: "사실은 이렇게 말하고 싶었어요" },
            headers: { Authorization: "KakaoAK 7ef7831f0d6b81e970b30f0cdfa6a4a2" }
        })
            .done(function (msg) {

                $(".main_slider").eq(2).append("<h4>" + "상대를 보듬는<br>대화의 기술" + "</h4>");
                $(".main_slider").eq(2).append("<p>" + "소통, 어려운 게 아니었다" + "</p>");
                $(".main_slider").eq(2).append("<img src='" + msg.documents[0].thumbnail + "'/>");

            });


  //float_right

        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: { query: "에세이" },
            headers: { Authorization: "KakaoAK 7ef7831f0d6b81e970b30f0cdfa6a4a2" }
        })
            .done(function (msg) {

                $(".box2_li").eq(0).append("<img src='" + msg.documents[0].thumbnail + "'/>");
                $(".box2_li").eq(0).append("<p>" + msg.documents[0].title + "</p>");

            });

        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: { query: "침묵의 봄" },
            headers: { Authorization: "KakaoAK 7ef7831f0d6b81e970b30f0cdfa6a4a2" }
        })
            .done(function (msg) {

                $(".box2_li").eq(1).append("<img src='" + msg.documents[0].thumbnail + "'/>");
                $(".box2_li").eq(1).append("<p>" + msg.documents[0].title + "</p>");

            });

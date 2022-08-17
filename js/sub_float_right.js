        //오른쪽 떠있는 박스 최근 본 책

        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: { query: "백광" },
            headers: { Authorization: "KakaoAK 7ef7831f0d6b81e970b30f0cdfa6a4a2" }
        })
            .done(function (msg) {

                $(".seen").append("<img src='" + msg.documents[0].thumbnail + "'/>");

                $(".seen2_text").append("<p>" + msg.documents[0].title + "</p>");
                $(".seen2_text").append("<p>" + msg.documents[0].price + "원" + "</p>");

            });
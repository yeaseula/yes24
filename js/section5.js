 //카드뉴스로 보는 책

        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: { query: "다정하다고 말해주세요" },
            headers: { Authorization: "KakaoAK 7ef7831f0d6b81e970b30f0cdfa6a4a2" }
        })
            .done(function (msg) {

                $(".art_1_img").eq(0).append("<img src='" + msg.documents[0].thumbnail + "'/>");
                $(".art_1_text").eq(0).append("<p>" + "일상뒤에 고요히 써 내려간 독백 " + "<p>");
                $(".art_1_text").eq(0).append("<h4>" + msg.documents[0].title + "</h4>");
                $(".art_1_text").eq(0).append("<p>" + msg.documents[0].authors + " | " + msg.documents[0].publisher + "</p>");
            });

        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: { query: "AI 상식사전" },
            headers: { Authorization: "KakaoAK 7ef7831f0d6b81e970b30f0cdfa6a4a2" }
        })
            .done(function (msg) {

                $(".art_1_img").eq(1).append("<img src='" + msg.documents[0].thumbnail + "'/>");
                $(".art_1_text").eq(1).append("<p>" + "쉽게 설명한 인공 지능" + "<p>");
                $(".art_1_text").eq(1).append("<h4>" + msg.documents[0].title + "</h4>");
                $(".art_1_text").eq(1).append("<p>" + msg.documents[0].authors + " | " + msg.documents[0].publisher + "</p>");
            });

        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: { query: "거의 모든 안경의 역사" },
            headers: { Authorization: "KakaoAK 7ef7831f0d6b81e970b30f0cdfa6a4a2" }
        })
            .done(function (msg) {

                $(".art_1_img").eq(2).append("<img src='" + msg.documents[0].thumbnail + "'/>");
                $(".art_1_text").eq(2).append("<p>" + "보이지 않는 것을 보게 하는 도구" + "<p>");
                $(".art_1_text").eq(2).append("<h4>" + msg.documents[0].title + "</h4>");
                $(".art_1_text").eq(2).append("<p>" + msg.documents[0].authors + " | " + msg.documents[0].publisher + "</p>");
            });

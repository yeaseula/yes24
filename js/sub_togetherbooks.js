     //함께 산 책

        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: { query: "세상의 마지막 기차역" },
            headers: { Authorization: "KakaoAK 7ef7831f0d6b81e970b30f0cdfa6a4a2" }
        })
            .done(function (msg) {

                var res = $("#together_books > ul >li:first-child");

                res.children(".together_box").eq(0).append("<img src='" + msg.documents[0].thumbnail + "'/>");

                res.children(".together_box").eq(0).append("<h5>" + msg.documents[0].title + "</h5>");
                res.children(".together_box").eq(0).append("<p>" + msg.documents[0].authors + "|" + msg.documents[0].publisher + "</p>");

                var mess = Math.floor(Math.random() * 100);
                res.children(".together_box").eq(0).append("<p>" + "Review " + mess + "건" + "</p>");

                res.children(".together_box").eq(0).append("<p>" + msg.documents[0].price + "원 (10% 할인)" + "</p>");

            });

        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: { query: "물고기는 존재하지 않는다" },
            headers: { Authorization: "KakaoAK 7ef7831f0d6b81e970b30f0cdfa6a4a2" }
        })
            .done(function (msg) {

                var res = $("#together_books > ul >li:first-child");

                res.children(".together_box").eq(1).append("<img src='" + msg.documents[0].thumbnail + "'/>");

                res.children(".together_box").eq(1).append("<h5>" + msg.documents[0].title + "</h5>");
                res.children(".together_box").eq(1).append("<p>" + msg.documents[0].authors + "|" + msg.documents[0].publisher + "</p>");

                var mess = Math.floor(Math.random() * 100);
                res.children(".together_box").eq(1).append("<p>" + "Review " + mess + "건" + "</p>");

                res.children(".together_box").eq(1).append("<p>" + msg.documents[0].price + "원 (10% 할인)" + "</p>");

            });

        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: { query: "백광" },
            headers: { Authorization: "KakaoAK 7ef7831f0d6b81e970b30f0cdfa6a4a2" }
        })
            .done(function (msg) {

                var res = $("#together_books > ul >li:first-child");

                res.children(".together_box").eq(2).append("<img src='" + msg.documents[0].thumbnail + "'/>");

                res.children(".together_box").eq(2).append("<h5>" + msg.documents[0].title + "</h5>");
                res.children(".together_box").eq(2).append("<p>" + msg.documents[0].authors + "|" + msg.documents[0].publisher + "</p>");

                var mess = Math.floor(Math.random() * 100);
                res.children(".together_box").eq(2).append("<p>" + "Review " + mess + "건" + "</p>");

                res.children(".together_box").eq(2).append("<p>" + msg.documents[0].price + "원 (10% 할인)" + "</p>");

            });

        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: { query: "칵테일,러브,좀비" },
            headers: { Authorization: "KakaoAK 7ef7831f0d6b81e970b30f0cdfa6a4a2" }
        })
            .done(function (msg) {

                var res = $("#together_books > ul >li:first-child");

                res.children(".together_box").eq(3).append("<img src='" + msg.documents[0].thumbnail + "'/>");

                res.children(".together_box").eq(3).append("<h5>" + msg.documents[0].title + "</h5>");
                res.children(".together_box").eq(3).append("<p>" + msg.documents[0].authors + "|" + msg.documents[0].publisher + "</p>");

                var mess = Math.floor(Math.random() * 100);
                res.children(".together_box").eq(3).append("<p>" + "Review " + mess + "건" + "</p>");

                res.children(".together_box").eq(3).append("<p>" + msg.documents[0].price + "원 (10% 할인)" + "</p>");

            });

        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: { query: "천 개의 파랑" },
            headers: { Authorization: "KakaoAK 7ef7831f0d6b81e970b30f0cdfa6a4a2" }
        })
            .done(function (msg) {

                var res = $("#together_books > ul >li:first-child");

                res.children(".together_box").eq(4).append("<img src='" + msg.documents[0].thumbnail + "'/>");

                res.children(".together_box").eq(4).append("<h5>" + msg.documents[0].title + "</h5>");
                res.children(".together_box").eq(4).append("<p>" + msg.documents[0].authors + "|" + msg.documents[0].publisher + "</p>");

                var mess = Math.floor(Math.random() * 100);
                res.children(".together_box").eq(4).append("<p>" + "Review " + mess + "건" + "</p>");

                res.children(".together_box").eq(4).append("<p>" + msg.documents[0].price + "원 (10% 할인)" + "</p>");

            });

        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: { query: "여름의 빌라" },
            headers: { Authorization: "KakaoAK 7ef7831f0d6b81e970b30f0cdfa6a4a2" }
        })
            .done(function (msg) {

                var res = $("#together_books > ul >li:first-child");

                res.children(".together_box").eq(5).append("<img src='" + msg.documents[0].thumbnail + "'/>");

                res.children(".together_box").eq(5).append("<h5>" + msg.documents[0].title + "</h5>");
                res.children(".together_box").eq(5).append("<p>" + msg.documents[0].authors + "|" + msg.documents[0].publisher + "</p>");

                var mess = Math.floor(Math.random() * 100);
                res.children(".together_box").eq(5).append("<p>" + "Review " + mess + "건" + "</p>");

                res.children(".together_box").eq(5).append("<p>" + msg.documents[0].price + "원 (10% 할인)" + "</p>");

            });



        //

        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: { query: "행성" },
            headers: { Authorization: "KakaoAK 7ef7831f0d6b81e970b30f0cdfa6a4a2" }
        })
            .done(function (msg) {

                var res = $("#together_books > ul >li:nth-child(2)");

                res.children(".together_box").eq(0).append("<img src='" + msg.documents[0].thumbnail + "'/>");

                res.children(".together_box").eq(0).append("<h5>" + msg.documents[0].title + "</h5>");
                res.children(".together_box").eq(0).append("<p>" + msg.documents[0].authors + "|" + msg.documents[0].publisher + "</p>");

                var mess = Math.floor(Math.random() * 100);
                res.children(".together_box").eq(0).append("<p>" + "Review " + mess + "건" + "</p>");

                res.children(".together_box").eq(0).append("<p>" + msg.documents[0].price + "원 (10% 할인)" + "</p>");

            });

        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: { query: "낙원" },
            headers: { Authorization: "KakaoAK 7ef7831f0d6b81e970b30f0cdfa6a4a2" }
        })
            .done(function (msg) {

                var res = $("#together_books > ul >li:nth-child(2)");

                res.children(".together_box").eq(1).append("<img src='" + msg.documents[0].thumbnail + "'/>");

                res.children(".together_box").eq(1).append("<h5>" + msg.documents[0].title + "</h5>");
                res.children(".together_box").eq(1).append("<p>" + msg.documents[0].authors + "|" + msg.documents[0].publisher + "</p>");

                var mess = Math.floor(Math.random() * 100);
                res.children(".together_box").eq(1).append("<p>" + "Review " + mess + "건" + "</p>");

                res.children(".together_box").eq(1).append("<p>" + msg.documents[0].price + "원 (10% 할인)" + "</p>");

            });

        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: { query: "여덟 건의 완벽한 살인" },
            headers: { Authorization: "KakaoAK 7ef7831f0d6b81e970b30f0cdfa6a4a2" }
        })
            .done(function (msg) {

                var res = $("#together_books > ul >li:nth-child(2)");

                res.children(".together_box").eq(2).append("<img src='" + msg.documents[0].thumbnail + "'/>");

                res.children(".together_box").eq(2).append("<h5>" + msg.documents[0].title + "</h5>");
                res.children(".together_box").eq(2).append("<p>" + msg.documents[0].authors + "|" + msg.documents[0].publisher + "</p>");

                var mess = Math.floor(Math.random() * 100);
                res.children(".together_box").eq(2).append("<p>" + "Review " + mess + "건" + "</p>");

                res.children(".together_box").eq(2).append("<p>" + msg.documents[0].price + "원 (10% 할인)" + "</p>");

            });

        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: { query: "명상살인" },
            headers: { Authorization: "KakaoAK 7ef7831f0d6b81e970b30f0cdfa6a4a2" }
        })
            .done(function (msg) {

                var res = $("#together_books > ul >li:nth-child(2)");

                res.children(".together_box").eq(3).append("<img src='" + msg.documents[0].thumbnail + "'/>");

                res.children(".together_box").eq(3).append("<h5>" + msg.documents[0].title + "</h5>");
                res.children(".together_box").eq(3).append("<p>" + msg.documents[0].authors + "|" + msg.documents[0].publisher + "</p>");

                var mess = Math.floor(Math.random() * 100);
                res.children(".together_box").eq(3).append("<p>" + "Review " + mess + "건" + "</p>");

                res.children(".together_box").eq(3).append("<p>" + msg.documents[0].price + "원 (10% 할인)" + "</p>");

            });

        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: { query: "홍학의 자리" },
            headers: { Authorization: "KakaoAK 7ef7831f0d6b81e970b30f0cdfa6a4a2" }
        })
            .done(function (msg) {

                var res = $("#together_books > ul >li:nth-child(2)");

                res.children(".together_box").eq(4).append("<img src='" + msg.documents[0].thumbnail + "'/>");

                res.children(".together_box").eq(4).append("<h5>" + msg.documents[0].title + "</h5>");
                res.children(".together_box").eq(4).append("<p>" + msg.documents[0].authors + "|" + msg.documents[0].publisher + "</p>");

                var mess = Math.floor(Math.random() * 100);
                res.children(".together_box").eq(4).append("<p>" + "Review " + mess + "건" + "</p>");

                res.children(".together_box").eq(4).append("<p>" + msg.documents[0].price + "원 (10% 할인)" + "</p>");

            });

        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: { query: "아무튼, 여름" },
            headers: { Authorization: "KakaoAK 7ef7831f0d6b81e970b30f0cdfa6a4a2" }
        })
            .done(function (msg) {

                var res = $("#together_books > ul >li:nth-child(2)");

                res.children(".together_box").eq(5).append("<img src='" + msg.documents[0].thumbnail + "'/>");

                res.children(".together_box").eq(5).append("<h5>" + msg.documents[0].title + "</h5>");
                res.children(".together_box").eq(5).append("<p>" + msg.documents[0].authors + "|" + msg.documents[0].publisher + "</p>");

                var mess = Math.floor(Math.random() * 100);
                res.children(".together_box").eq(5).append("<p>" + "Review " + mess + "건" + "</p>");

                res.children(".together_box").eq(5).append("<p>" + msg.documents[0].price + "원 (10% 할인)" + "</p>");

            });

        //

        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: { query: "더 로드" },
            headers: { Authorization: "KakaoAK 7ef7831f0d6b81e970b30f0cdfa6a4a2" }
        })
            .done(function (msg) {

                var res = $("#together_books > ul >li:nth-child(3)");

                res.children(".together_box").eq(0).append("<img src='" + msg.documents[0].thumbnail + "'/>");

                res.children(".together_box").eq(0).append("<h5>" + msg.documents[0].title + "</h5>");
                res.children(".together_box").eq(0).append("<p>" + msg.documents[0].authors + "|" + msg.documents[0].publisher + "</p>");

                var mess = Math.floor(Math.random() * 100);
                res.children(".together_box").eq(0).append("<p>" + "Review " + mess + "건" + "</p>");

                res.children(".together_box").eq(0).append("<p>" + msg.documents[0].price + "원 (10% 할인)" + "</p>");

            });

        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: { query: "우편함 속 세계사" },
            headers: { Authorization: "KakaoAK 7ef7831f0d6b81e970b30f0cdfa6a4a2" }
        })
            .done(function (msg) {

                var res = $("#together_books > ul >li:nth-child(3)");

                res.children(".together_box").eq(1).append("<img src='" + msg.documents[0].thumbnail + "'/>");

                res.children(".together_box").eq(1).append("<h5>" + msg.documents[0].title + "</h5>");
                res.children(".together_box").eq(1).append("<p>" + msg.documents[0].authors + "|" + msg.documents[0].publisher + "</p>");

                var mess = Math.floor(Math.random() * 100);
                res.children(".together_box").eq(1).append("<p>" + "Review " + mess + "건" + "</p>");

                res.children(".together_box").eq(1).append("<p>" + msg.documents[0].price + "원 (10% 할인)" + "</p>");

            });

        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: { query: "길 위의 인문학" },
            headers: { Authorization: "KakaoAK 7ef7831f0d6b81e970b30f0cdfa6a4a2" }
        })
            .done(function (msg) {

                var res = $("#together_books > ul >li:nth-child(3)");

                res.children(".together_box").eq(2).append("<img src='" + msg.documents[0].thumbnail + "'/>");

                res.children(".together_box").eq(2).append("<h5>" + msg.documents[0].title + "</h5>");
                res.children(".together_box").eq(2).append("<p>" + msg.documents[0].authors + "|" + msg.documents[0].publisher + "</p>");

                var mess = Math.floor(Math.random() * 100);
                res.children(".together_box").eq(2).append("<p>" + "Review " + mess + "건" + "</p>");

                res.children(".together_box").eq(2).append("<p>" + msg.documents[0].price + "원 (10% 할인)" + "</p>");

            });

        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: { query: "불멸의 열쇠" },
            headers: { Authorization: "KakaoAK 7ef7831f0d6b81e970b30f0cdfa6a4a2" }
        })
            .done(function (msg) {

                var res = $("#together_books > ul >li:nth-child(3)");

                res.children(".together_box").eq(3).append("<img src='" + msg.documents[0].thumbnail + "'/>");

                res.children(".together_box").eq(3).append("<h5>" + msg.documents[0].title + "</h5>");
                res.children(".together_box").eq(3).append("<p>" + msg.documents[0].authors + "|" + msg.documents[0].publisher + "</p>");

                var mess = Math.floor(Math.random() * 100);
                res.children(".together_box").eq(3).append("<p>" + "Review " + mess + "건" + "</p>");

                res.children(".together_box").eq(3).append("<p>" + msg.documents[0].price + "원 (10% 할인)" + "</p>");

            });

        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: { query: "미물일기" },
            headers: { Authorization: "KakaoAK 7ef7831f0d6b81e970b30f0cdfa6a4a2" }
        })
            .done(function (msg) {

                var res = $("#together_books > ul >li:nth-child(3)");

                res.children(".together_box").eq(4).append("<img src='" + msg.documents[0].thumbnail + "'/>");

                res.children(".together_box").eq(4).append("<h5>" + msg.documents[0].title + "</h5>");
                res.children(".together_box").eq(4).append("<p>" + msg.documents[0].authors + "|" + msg.documents[0].publisher + "</p>");

                var mess = Math.floor(Math.random() * 100);
                res.children(".together_box").eq(4).append("<p>" + "Review " + mess + "건" + "</p>");

                res.children(".together_box").eq(4).append("<p>" + msg.documents[0].price + "원 (10% 할인)" + "</p>");

            });
        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: { query: "움직임의 뇌과학" },
            headers: { Authorization: "KakaoAK 7ef7831f0d6b81e970b30f0cdfa6a4a2" }
        })
            .done(function (msg) {

                var res = $("#together_books > ul >li:nth-child(3)");

                res.children(".together_box").eq(5).append("<img src='" + msg.documents[0].thumbnail + "'/>");

                res.children(".together_box").eq(5).append("<h5>" + msg.documents[0].title + "</h5>");
                res.children(".together_box").eq(5).append("<p>" + msg.documents[0].authors + "|" + msg.documents[0].publisher + "</p>");

                var mess = Math.floor(Math.random() * 100);
                res.children(".together_box").eq(5).append("<p>" + "Review " + mess + "건" + "</p>");

                res.children(".together_box").eq(5).append("<p>" + msg.documents[0].price + "원 (10% 할인)" + "</p>");

            });
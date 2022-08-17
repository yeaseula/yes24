     //중고샵
        //마지막 체인지

        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: { query: "인류본사" },
            headers: { Authorization: "KakaoAK 7ef7831f0d6b81e970b30f0cdfa6a4a2" }
        })
            .done(function (msg) {

                var res = Math.floor(Math.random() * 10);

                $(".yes_pick_box_6").eq(0).append("<img src='" + msg.documents[0].thumbnail + "'/>");
                $(".yes_pick_box_6").eq(0).append("<h4>" + msg.documents[0].title + "</h4>");
                $(".yes_pick_box_6").eq(0).append("<p>" + msg.documents[0].authors + " | " + msg.documents[0].publisher + "</p>");
                $(".yes_pick_box_6").eq(0).append("<p>" + msg.documents[0].price + "원" + " (" + res + "%할인)" + "</p>");

            });

        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: { query: "신녀성의 레미장센" },
            headers: { Authorization: "KakaoAK 7ef7831f0d6b81e970b30f0cdfa6a4a2" }
        })
            .done(function (msg) {

                var res = Math.floor(Math.random() * 10);

                $(".yes_pick_box_6").eq(1).append("<img src='" + msg.documents[0].thumbnail + "'/>");
                $(".yes_pick_box_6").eq(1).append("<h4>" + msg.documents[0].title + "</h4>");
                $(".yes_pick_box_6").eq(1).append("<p>" + msg.documents[0].authors + " | " + msg.documents[0].publisher + "</p>");
                $(".yes_pick_box_6").eq(1).append("<p>" + msg.documents[0].price + "원" + " (" + res + "%할인)" + "</p>");

            });

        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: { query: "지구 끝의 온실" },
            headers: { Authorization: "KakaoAK 7ef7831f0d6b81e970b30f0cdfa6a4a2" }
        })
            .done(function (msg) {

                var res = Math.floor(Math.random() * 10);

                $(".yes_pick_box_6").eq(2).append("<img src='" + msg.documents[0].thumbnail + "'/>");
                $(".yes_pick_box_6").eq(2).append("<h4>" + msg.documents[0].title + "</h4>");
                $(".yes_pick_box_6").eq(2).append("<p>" + msg.documents[0].authors + " | " + msg.documents[0].publisher + "</p>");
                $(".yes_pick_box_6").eq(2).append("<p>" + msg.documents[0].price + "원" + " (" + res + "%할인)" + "</p>");

            });

        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: { query: "불편한 편의점" },
            headers: { Authorization: "KakaoAK 7ef7831f0d6b81e970b30f0cdfa6a4a2" }
        })
            .done(function (msg) {

                var res = Math.floor(Math.random() * 10);

                $(".yes_pick_box_6").eq(3).append("<img src='" + msg.documents[0].thumbnail + "'/>");
                $(".yes_pick_box_6").eq(3).append("<h4>" + msg.documents[0].title + "</h4>");
                $(".yes_pick_box_6").eq(3).append("<p>" + msg.documents[0].authors + " | " + msg.documents[0].publisher + "</p>");
                $(".yes_pick_box_6").eq(3).append("<p>" + msg.documents[0].price + "원" + " (" + res + "%할인)" + "</p>");

            });

        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: { query: "아몬드" },
            headers: { Authorization: "KakaoAK 7ef7831f0d6b81e970b30f0cdfa6a4a2" }
        })
            .done(function (msg) {

                var res = Math.floor(Math.random() * 10);

                $(".yes_pick_box_6").eq(4).append("<img src='" + msg.documents[0].thumbnail + "'/>");
                $(".yes_pick_box_6").eq(4).append("<h4>" + msg.documents[0].title + "</h4>");
                $(".yes_pick_box_6").eq(4).append("<p>" + msg.documents[0].authors + " | " + msg.documents[0].publisher + "</p>");
                $(".yes_pick_box_6").eq(4).append("<p>" + msg.documents[0].price + "원" + " (" + res + "%할인)" + "</p>");

            });

        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: { query: "망원동 브라더스" },
            headers: { Authorization: "KakaoAK 7ef7831f0d6b81e970b30f0cdfa6a4a2" }
        })
            .done(function (msg) {

                var res = Math.floor(Math.random() * 10);

                $(".yes_pick_box_6").eq(5).append("<img src='" + msg.documents[0].thumbnail + "'/>");
                $(".yes_pick_box_6").eq(5).append("<h4>" + msg.documents[0].title + "</h4>");
                $(".yes_pick_box_6").eq(5).append("<p>" + msg.documents[0].authors + " | " + msg.documents[0].publisher + "</p>");
                $(".yes_pick_box_6").eq(5).append("<p>" + msg.documents[0].price + "원" + " (" + res + "%할인)" + "</p>");

            });

        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: { query: "물고기는 존재하지 않는다" },
            headers: { Authorization: "KakaoAK 7ef7831f0d6b81e970b30f0cdfa6a4a2" }
        })
            .done(function (msg) {

                var res = Math.floor(Math.random() * 10);

                $(".yes_pick_box_6").eq(6).append("<img src='" + msg.documents[0].thumbnail + "'/>");
                $(".yes_pick_box_6").eq(6).append("<h4>" + msg.documents[0].title + "</h4>");
                $(".yes_pick_box_6").eq(6).append("<p>" + msg.documents[0].authors + " | " + msg.documents[0].publisher + "</p>");
                $(".yes_pick_box_6").eq(6).append("<p>" + msg.documents[0].price + "원" + " (" + res + "%할인)" + "</p>");

            });

        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: { query: "향수" },
            headers: { Authorization: "KakaoAK 7ef7831f0d6b81e970b30f0cdfa6a4a2" }
        })
            .done(function (msg) {

                var res = Math.floor(Math.random() * 10);

                $(".yes_pick_box_6").eq(7).append("<img src='" + msg.documents[0].thumbnail + "'/>");
                $(".yes_pick_box_6").eq(7).append("<h4>" + msg.documents[0].title + "</h4>");
                $(".yes_pick_box_6").eq(7).append("<p>" + msg.documents[0].authors + " | " + msg.documents[0].publisher + "</p>");
                $(".yes_pick_box_6").eq(7).append("<p>" + msg.documents[0].price + "원" + " (" + res + "%적립)" + "</p>");

            });

        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: { query: "아가미" },
            headers: { Authorization: "KakaoAK 7ef7831f0d6b81e970b30f0cdfa6a4a2" }
        })
            .done(function (msg) {

                var res = Math.floor(Math.random() * 10);

                $(".yes_pick_box_6").eq(8).append("<img src='" + msg.documents[0].thumbnail + "'/>");
                $(".yes_pick_box_6").eq(8).append("<h4>" + msg.documents[0].title + "</h4>");
                $(".yes_pick_box_6").eq(8).append("<p>" + msg.documents[0].authors + " | " + msg.documents[0].publisher + "</p>");
                $(".yes_pick_box_6").eq(8).append("<p>" + msg.documents[0].price + "원" + " (" + res + "%적립)" + "</p>");

            });


  //bottom

        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: { query: "스토커" },
            headers: { Authorization: "KakaoAK 7ef7831f0d6b81e970b30f0cdfa6a4a2" }
        })
            .done(function (msg) {

                $(".super_book").eq(0).append("<img src='" + msg.documents[0].thumbnail + "'/>");
                $(".super_book").eq(0).append("<p>" + msg.documents[0].title + "</p>");

            });

        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: { query: "천 개의 찬란한 태양" },
            headers: { Authorization: "KakaoAK 7ef7831f0d6b81e970b30f0cdfa6a4a2" }
        })
            .done(function (msg) {

                $(".super_book").eq(1).append("<img src='" + msg.documents[0].thumbnail + "'/>");
                $(".super_book").eq(1).append("<p>" + msg.documents[0].title + "</p>");

            });
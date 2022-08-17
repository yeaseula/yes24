   //예스픽 도서 섹션

        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: { query: "소설", size: 20 },
            headers: { Authorization: "KakaoAK 7ef7831f0d6b81e970b30f0cdfa6a4a2" }
        })
            .done(function (msg) {

                // for문

                var lis = document.getElementsByClassName("yes_pick_box");

                for (var i = 0; i < lis.length; i++) {

                    var res = Math.floor(Math.random() * 10);


                    $(".yes_pick_box").eq(i).append("<img src='" + msg.documents[i + 3].thumbnail + "'/>");
                    $(".yes_pick_box").eq(i).append("<h4>" + msg.documents[i + 3].title + "</h4>");
                    $(".yes_pick_box").eq(i).append("<p>" + msg.documents[i + 3].authors + " | " + msg.documents[i].publisher + "</p>");
                    $(".yes_pick_box").eq(i).append("<p>" + msg.documents[i + 3].price + "원" + " (" + res + "%적립)" + "</p>");

                }

            });

        //bottom

        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: { query: "지혜", size: 20 },
            headers: { Authorization: "KakaoAK 7ef7831f0d6b81e970b30f0cdfa6a4a2" }
        })
            .done(function (msg) {

                var title = msg.documents[2].title;
                var res = title.substring(0, 11);

                $(".yes_pick_bottom li:nth-of-type(2)").append("<img src='" + msg.documents[2].thumbnail + "'/>");
                $(".yes_pick_bottom li:nth-of-type(2)").append("<p>" + res + ".." + "</p>");

            });

        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: { query: "과학", size: 20 },
            headers: { Authorization: "KakaoAK 7ef7831f0d6b81e970b30f0cdfa6a4a2" }
        })
            .done(function (msg) {

                var title = msg.documents[4].title;
                var res = title.substring(0, 11);

                $(".yes_pick_bottom li:nth-of-type(3)").append("<img src='" + msg.documents[4].thumbnail + "'/>");
                $(".yes_pick_bottom li:nth-of-type(3)").append("<p>" + res + ".." + "</p>");

            });

        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: { query: "인류", size: 20 },
            headers: { Authorization: "KakaoAK 7ef7831f0d6b81e970b30f0cdfa6a4a2" }
        })
            .done(function (msg) {



                $(".yes_pick_bottom li:nth-of-type(4)").append("<img src='" + msg.documents[4].thumbnail + "'/>");
                $(".yes_pick_bottom li:nth-of-type(4)").append("<p>" + msg.documents[4].title+ "</p>");

            });

        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: { query: "요리", size: 20 },
            headers: { Authorization: "KakaoAK 7ef7831f0d6b81e970b30f0cdfa6a4a2" }
        })
            .done(function (msg) {

                var title = msg.documents[1].title;
                var res = title.substring(0, 11);

                $(".yes_pick_bottom li:nth-of-type(5)").append("<img src='" + msg.documents[1].thumbnail + "'/>");
                $(".yes_pick_bottom li:nth-of-type(5)").append("<p>" + res + ".." + "</p>");


            });

        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: { query: "철학", size: 20 },
            headers: { Authorization: "KakaoAK 7ef7831f0d6b81e970b30f0cdfa6a4a2" }
        })
            .done(function (msg) {



                $(".yes_pick_bottom li:nth-of-type(6)").append("<img src='" + msg.documents[1].thumbnail + "'/>");
                $(".yes_pick_bottom li:nth-of-type(6)").append("<p>" + msg.documents[1].title + "</p>");


            });
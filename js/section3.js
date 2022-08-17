
        //북클럽샵 화제의 책

        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: { query: "식물", size: 20 },
            headers: { Authorization: "KakaoAK 7ef7831f0d6b81e970b30f0cdfa6a4a2" }
        })
            .done(function (msg) {

                // for문 (4개)

                var lis = document.getElementsByClassName("best_box");

                for (var i = 0; i < lis.length; i++) {


                    $(".best_box").eq(i).append("<img src='" + msg.documents[i].thumbnail + "'/>");

                    var title = msg.documents[i].title;
                    var res = title.substring(0, 10)

                    $(".best_box").eq(i).append("<h5>" + res + ".." + "</h5>");
                    $(".best_box").eq(i).append("<p>" + msg.documents[i].authors + "</p>");
                    $(".best_box").eq(i).append("<p>" + msg.documents[i].price + "원" + "</p>");

                    //css

                    $(".best_box").children("p").css("font-size", "12px");
                    $(".best_box").children("img").css("margin", "19px 0 0 0px");
                }

            });

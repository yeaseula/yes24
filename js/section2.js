  //지금 이책

        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: { query: "자바스크립트", size: 20 },
            headers: { Authorization: "KakaoAK 7ef7831f0d6b81e970b30f0cdfa6a4a2" }
        })
            .done(function (msg) {

                // for문 (4개)

                var lis = document.getElementsByClassName("now_box");

                for (var i = 0; i < lis.length; i++) {

                    $(".now_box").eq(i).append("<img src='" + msg.documents[i].thumbnail + "'/>");

                    var title = msg.documents[i].title;
                    var res = title.substring(0, 10);

                    $(".now_box").eq(i).append("<h5>" + res + ".." + "</h5>");
                    $(".now_box").eq(i).append("<p>" + msg.documents[i].authors + "</p>");
                    $(".now_box").eq(i).append("<p>" + msg.documents[i].price + "원" + "</p>");

                    
                }

            });


        //출판사 추천

        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: { query: "커피" },
            headers: { Authorization: "KakaoAK 7ef7831f0d6b81e970b30f0cdfa6a4a2" }
        })
            .done(function (msg) {

                $(".rec_box:first-of-type").children(".rec_box_img").append("<img src='" + msg.documents[1].thumbnail + "'/>");
                $(".rec_box:first-of-type").children(".rec_box_text").append("<h5>" + msg.documents[1].title + "</h5>");
                $(".rec_box:first-of-type").children(".rec_box_text").append("<p>" + "향긋한 세계사를 한 권에! 2030 필독서" + "</p>");

            });

        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: { query: "토끼" },
            headers: { Authorization: "KakaoAK 7ef7831f0d6b81e970b30f0cdfa6a4a2" }
        })
            .done(function (msg) {

                $(".rec_box:last-of-type").children(".rec_box_img").append("<img src='" + msg.documents[3].thumbnail + "'/>");
                $(".rec_box:last-of-type").children(".rec_box_text").append("<h5>" + msg.documents[3].title + "</h5>");
                $(".rec_box:last-of-type").children(".rec_box_text").append("<p>" + "토끼 소중해! 제일 소중해!" + "</p>");

            });
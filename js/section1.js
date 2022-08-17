//섹션1 

$.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: { query: "너무 잘하려고 애쓰지 마라" },
            headers: { Authorization: "KakaoAK 7ef7831f0d6b81e970b30f0cdfa6a4a2" }
        })
            .done(function (msg) {

                $(".ad_1:first").append("<h4>" + msg.documents[0].title + "</h4>");

                $(".ad_1:first").append("<p>" + "풀꽃 시인 나태주의 신작시집" + "</p>");
                $(".ad_1:first").append("<img src='" + msg.documents[0].thumbnail + "'/>");
            });


        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: { query: "상실의 시대" },
            headers: { Authorization: "KakaoAK 7ef7831f0d6b81e970b30f0cdfa6a4a2" }
        })
            .done(function (msg) {

                $(".ad_1_text").append("<h5>" + msg.documents[0].title + "</h5>");
                $(".ad_1_text").append("<p>" + msg.documents[0].authors[0] + "</p>");
                $(".ad_1_img").append("<img src='" + msg.documents[0].thumbnail + "'/>");

            });



 $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: { query: "부서진 여름"},
            headers: { Authorization: "KakaoAK 7ef7831f0d6b81e970b30f0cdfa6a4a2" }
        })
            .done(function (msg) {


                    $(".today_book_li").eq(0).children(".tb_li_img").append("<img src='" + msg.documents[0].thumbnail + "'/>");

                    $(".today_book_li").eq(0).children(".tb_li_text").append("<h3>" + "여름은 오래 그곳에 남아" + "</h3>");

                    var str = msg.documents[0].contents;
                    var str2 = str.substring(0, 190);

                    $(".today_book_li").eq(0).children(".tb_li_text").append("<p>" + str2 + "</p>");
                    $(".today_book_li").eq(0).children(".tb_li_text").append("<p>" + msg.documents[0].title + "</p>");
                    $(".today_book_li").eq(0).children(".tb_li_text").append("<p>" + msg.documents[0].authors + " | " + msg.documents[0].publisher+ "</p>");
                    $(".today_book_li").eq(0).children(".tb_li_text").append("<p>" + msg.documents[0].sale_price + "원" + "</p>");

                    var math = Math.floor(Math.random()*10 + 3);

                    $(".tb_li_text").eq(0).children("p:nth-of-type(4)").after("<span>" + "("+ math +"% 할인)" + "</span>");

            });



        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: { query: "불편한 편의점" },
            headers: { Authorization: "KakaoAK 7ef7831f0d6b81e970b30f0cdfa6a4a2" }
        })
            .done(function (msg) {
             
                    $(".today_book_li").eq(1).children(".tb_li_img").append("<img src='" + msg.documents[0].thumbnail + "'/>");

                    $(".today_book_li").eq(1).children(".tb_li_text").append("<h3>" + "22년 상반기 가장 많이 팔린 책" + "</h3>");

                    var str = msg.documents[0].contents;
                    var str2 = str.substring(0, 190);

                    $(".today_book_li").eq(1).children(".tb_li_text").append("<p>" + str2 + "</p>");
                    $(".today_book_li").eq(1).children(".tb_li_text").append("<p>" + msg.documents[0].title + "</p>");
                    $(".today_book_li").eq(1).children(".tb_li_text").append("<p>" + msg.documents[0].authors + " | " + msg.documents[0].publisher + "</p>");
                    $(".today_book_li").eq(1).children(".tb_li_text").append("<p>" + msg.documents[0].sale_price + "원" + "</p>");

                    var math = Math.floor(Math.random() * 10 + 3);

                    $(".tb_li_text").eq(1).children("p:nth-of-type(4)").after("<span>" + "(" + math + "% 할인)" + "</span>");


            });


        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: { query: "기분이 태도가 되지 않게" },
            headers: { Authorization: "KakaoAK 7ef7831f0d6b81e970b30f0cdfa6a4a2" }
        })
            .done(function (msg) {


                    $(".today_book_li").eq(2).children(".tb_li_img").append("<img src='" + msg.documents[0].thumbnail + "'/>");

                    $(".today_book_li").eq(2).children(".tb_li_text").append("<h3>" + "후회가 사라지고 오해가 줄어드는 기적의 기분 사용법" + "</h3>");

                    var str = msg.documents[0].contents;
                    var str2 = str.substring(0, 190);

                    $(".today_book_li").eq(2).children(".tb_li_text").append("<p>" + str2 + "</p>");
                    $(".today_book_li").eq(2).children(".tb_li_text").append("<p>" + msg.documents[0].title + "</p>");
                    $(".today_book_li").eq(2).children(".tb_li_text").append("<p>" + msg.documents[0].authors + " | " + msg.documents[0].publisher + "</p>");
                    $(".today_book_li").eq(2).children(".tb_li_text").append("<p>" + msg.documents[0].sale_price + "원" + "</p>");

                    var math = Math.floor(Math.random() * 10 + 3);

                    $(".tb_li_text").eq(2).children("p:nth-of-type(4)").after("<span>" + "(" + math + "% 할인)" + "</span>");

            });


//오른쪽 랭킹


        //베스트셀러

        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: { query: "경험", size: 20 },
            headers: { Authorization: "KakaoAK 7ef7831f0d6b81e970b30f0cdfa6a4a2" }
        })
            .done(function (msg) {

                // for문

                var lis2 = document.getElementsByClassName("details");

                for (var i = 0; i < lis2.length; i++) {


                    $(".details").eq(i).children(".best_box_book").append("<img src='" + msg.documents[i].thumbnail + "'/>");

                    var title = msg.documents[i].title;
                    var res = title.substring(0, 15)

                    $(".details").eq(i).children(".best_box_text").append("<h6>" + res + ".." + "</h6>");

                }

            });

        //베스트셀러 6~10위


        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: { query: "바다", size: 20 },
            headers: { Authorization: "KakaoAK 7ef7831f0d6b81e970b30f0cdfa6a4a2" }
        })
            .done(function (msg) {

                // for문

                var lis2 = document.getElementsByClassName("details_6");

                for (var i = 0; i < lis2.length; i++) {


                    $(".details_6").eq(i).children(".best_box_book_6").append("<img src='" + msg.documents[i].thumbnail + "'/>");

                    var title = msg.documents[i].title;
                    var res = title.substring(0, 15)

                    $(".details_6").eq(i).children(".best_box_text_6").append("<h6>" + res + ".." + "</h6>");

                }

            });

        //베스트셀러 세렉트 해외도서로 바뀌었을때 1~5위

        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: { query: "에세이", size: 20 },
            headers: { Authorization: "KakaoAK 7ef7831f0d6b81e970b30f0cdfa6a4a2" }
        })
            .done(function (msg) {

                // for문

                var lis2 = document.getElementsByClassName("details_2");

                for (var i = 0; i < lis2.length; i++) {


                    $(".details_2").eq(i).children(".best_box_book_2").append("<img src='" + msg.documents[i].thumbnail + "'/>");

                    var title = msg.documents[i].title;
                    var res = title.substring(0, 15)

                    $(".details_2").eq(i).children(".best_box_text_2").append("<h6>" + res + ".." + "</h6>");

                }

            });

        //베스트셀러 셀렉트 해외도서로 바뀌었을때 6~10위

        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: { query: "세계", size: 20 },
            headers: { Authorization: "KakaoAK 7ef7831f0d6b81e970b30f0cdfa6a4a2" }
        })
            .done(function (msg) {

                // for문

                var lis2 = document.getElementsByClassName("details_26");

                for (var i = 0; i < lis2.length; i++) {


                    $(".details_26").eq(i).children(".best_box_book_26").append("<img src='" + msg.documents[i].thumbnail + "'/>");

                    var title = msg.documents[i].title;
                    var res = title.substring(0, 15)

                    $(".details_26").eq(i).children(".best_box_text_26").append("<h6>" + res + ".." + "</h6>");

                }

            });


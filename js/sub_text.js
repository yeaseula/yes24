        //메모장으로 sub 텍스트 가져오기, 서버에 올려야 보임

        $(function () {

            $.get("./sub_txt/cardnews.txt", function (data) {
                $("#contents").html(data);
            })
        });

        //목차

        $(function () {

            $.get("./sub_txt/index.txt", function (data) {
                $("#index").html(data);
            })
        });

        //작가

        $(function () {

            $.get("./sub_txt/author.txt", function (data) {
                $(".author_text").html(data);
            })
        });

        $(function () {

            $.get("./sub_txt/author2.txt", function (data) {
                $("#an").html(data);
            })
        });

        $(function () {

            $.get("./sub_txt/into_book.txt", function (data) {
                $("#into_book").html(data);
            })
        });

        $(function () {

            $.get("./sub_txt/story.txt", function (data) {
                $("#story").html(data);
            })
        });

        //리뷰

        $(function () {

            $.get("./sub_txt/review1.txt", function (data) {
                $(".personal_review").eq(0).html(data);
            })
        });

        $(function () {

            $.get("./sub_txt/review2.txt", function (data) {
                $(".personal_review").eq(1).html(data);
            })
        });

        $(function () {

            $.get("./sub_txt/review3.txt", function (data) {
                $(".personal_review").eq(2).html(data);
            })
        });

        $(function () {

            $.get("./sub_txt/review4.txt", function (data) {
                $(".personal_review").eq(3).html(data);
            })
        });

        $(function () {

            $.get("./sub_txt/review5.txt", function (data) {
                $(".personal_review").eq(4).html(data);
            })
        });


        //배송

        $(function () {


            $.get("./sub_txt/package.txt", function (data) {
                $("#package_infor").html(data);
            })
        });

        $(function () {
            $.get("./sub_txt/change1.txt", function (data) {
                $("#change1").html(data);
            })
        });

        $(function () {
            $.get("./sub_txt/change2.txt", function (data) {
                $("#change2").html(data);
            })
        });

        $(function () {
            $.get("./sub_txt/change3.txt", function (data) {
                $("#change3").html(data);
            })
        });

        $(function () {
            $.get("./sub_txt/change4.txt", function (data) {
                $("#change4").html(data);
            })
        });

        $(function () {
            $.get("./sub_txt/change5.txt", function (data) {
                $("#change5").html(data);
            })
        });

        $(function () {
            $.get("./sub_txt/change6.txt", function (data) {
                $("#change6").html(data);
            })
        });
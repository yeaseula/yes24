        //스크롤 내리면 해당 페이지로 이동

        var select = document.getElementById("fix_wrap");
        var select2 = select.getElementsByTagName("ul")[0];

        var res = select2.getElementsByTagName("li")[0];
        var res2 = select2.getElementsByTagName("li")[1];
        var res3 = select2.getElementsByTagName("li")[2];

        res.addEventListener('click', function (e) {
            e.preventDefault();
            document.getElementById("detail_1").scrollIntoView(true);
        });

        res2.addEventListener('click', function (e) {
            e.preventDefault();
            document.getElementById("review").scrollIntoView(true);
        });

        res3.addEventListener('click', function (e) {
            e.preventDefault();
            document.getElementById("delivery").scrollIntoView(true);
        });
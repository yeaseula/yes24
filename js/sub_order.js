        //주문수량 체크하기

        $(function () {

            var i = 0;

            function sale_min() {
                i--;

                if (i < 0) {
                    alert('최소 주문 수량은 1권 입니다.');
                    i = 0;
                }

                $("#count > ul > li:nth-of-type(2)").text(i)
            }

            $("#count > ul > li:first-of-type").click(function () {
                sale_min();
            });



            function sale_plus() {
                i++;

                $("#count > ul > li:nth-of-type(2)").text(i)
            }

            $("#count > ul > li:last-of-type").click(function () {
                sale_plus();
            });

        });
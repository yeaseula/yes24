        //섹션1 가운데 슬라이드 

        $(function () {
            $(".today_book_wrap > ul > li").mouseover(function () {
                $(".today_book_li").stop().hide();
                $(".today_book_li").eq($(this).index()).stop().show();

                $(".today_book_wrap > ul > li").css({
                    backgroundColor: "#fff",
                    color: "#000"
                })
                $(this).css({
                    backgroundColor: "#5e6b9e",
                    color: "#000"
                })
            }).mouseout(function () {
                $(".today_book_wrap > ul > li").css({
                    backgroundColor: "#fff",
                    color: "#000"
                })
                $(this).css({
                    backgroundColor: "#5e6b9e",
                    color: "#fff"
                })
            });
        });
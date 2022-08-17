        //이벤트

        $(function () {

            $.ajax({

                url: "./json/event.json",

                dataType: "json",

                success: function (data) {

                    if (data.length > 0) {

                        for (var i in data) {


                            $(".event_box").eq(i).append('<div class="e_img">' + "<img src='img/" + data[i].url + "'/>" + '</div>');

                            $(".event_box").eq(i).append('<div class="e_text"><p>' + data[i].contents + "</p>" + "<p>" + data[i].contents2 + "</p><h5>");

                            var demo = document.getElementsByClassName("e_text")[i];

                            var node = document.createElement("span");
                            var text = document.createTextNode("사은품");

                            node.appendChild(text);

                            demo.insertBefore(node, demo.children[0]);

                        }

                    }

                }
            });

        });
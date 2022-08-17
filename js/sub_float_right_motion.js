var seen = document.getElementsByClassName("seen")[0];
        var seen2 = document.getElementsByClassName("seen2")[0];

        seen.onmouseover = function () {
            seen2.style.display = "block";
        };

        seen.onmouseout = function () {
            seen2.style.display = "none";
        }
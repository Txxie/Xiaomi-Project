window.addEventListener("load", function () {
    var lis = document.querySelector('.little_nav').querySelectorAll('li');
    var divs = document.querySelectorAll(".bigbox");
    for (var i = 0; i < lis.length - 2; i++) {
        lis[i].index = i;
        lis[i].addEventListener("mouseover", chuxian);
        lis[i].addEventListener("mouseout", yincang);
    }
    function chuxian() {
        // 先清除所有
        for (var i = 0; i < lis.length - 2; i++) {
            divs[i].style.display = "none";
        }
        divs[this.index].style.display = "block";
        divs[this.index].style.height = "233px";
        divs[this.index].style.borderTop = "1px solid #e0e0e0";
        // console.log(this.index);
    };
    function yincang() {
        divs[this.index].style.height = "0px";
        divs[this.index].style.border = "none";
        // divs[this.index].style.transition = ".3s";
        // console.log("离开了");
    };


    var leftnav_lis = document.querySelector('.left_nav').querySelectorAll('li');
    var leftnav_divs = document.querySelectorAll('.xiangqing');
    for (var i = 0; i < leftnav_lis.length; i++) {
        leftnav_lis[i].index = i;
        leftnav_lis[i].addEventListener("mouseover", function () {
            for (var i = 0; i < leftnav_lis[i].length; i++) {
                leftnav_divs[i].style.display = "none";
            }
            leftnav_divs[this.index].style.display = "block";
            // console.log(this.index);
        });
        leftnav_lis[i].addEventListener("mouseout", function () {
            leftnav_divs[this.index].style.display = "none";
            // console.log("离开了");
        });
    }

    //商品盒子-------------------------------------------------------------------------------------------------

    var mainpage = document.querySelector('.mainpage');
    var shoppings = mainpage.querySelectorAll('.shopping');
    var wenzis = mainpage.querySelectorAll('.wenzi');
    // console.log(shoppings.length);//9
    // console.log(wenzis.length);//8

    for (var i = 1; i < shoppings.length; i++) {
        // console.log(i);12345678
        shoppings[i].words = wenzis[i - 1].querySelectorAll('li');
        // console.log(shoppings[i].words.length);//21244444
        shoppings[i].wl = shoppings[i].words.length;
        // console.log(shoppings[i].wl);
        shoppings[i].rs = shoppings[i].querySelectorAll('.r');
        // console.log(shoppings[i].rs.length);21244444
        shoppings[i].rl = shoppings[i].rs.length;
        // console.log(shoppings[i].rs);

        for (var j = 0; j < shoppings[i].wl; j++) {
            // console.log("i是" + i);
            // console.log("j是" + j);
            shoppings[i].words[j].sindex = i;
            shoppings[i].words[j].windex = j;
            shoppings[i].words[j].addEventListener('mouseover', function () {
                // for (var i = 1; i < shoppings.length; i++) {
                //     for (var j = 0; j < shoppings[i].wl; j++) {//有问题
                //         console.log(shoppings[i].wl);
                //         shoppings[i].words[j].className = '';
                //         shoppings[i].rs[j].style.display = 'none';
                //         console.log("经过了");
                //     }
                //     this.className = 'w-current';
                //     shoppings[this.sindex].rs[this.windex].style.display = 'block';
                // }
                for (var i = 0; i < shoppings[this.sindex].words.length; i++) {
                    shoppings[this.sindex].words[i].className = '';
                    shoppings[this.sindex].rs[i].style.display = 'none';
                    // console.log("经过了");
                }
                this.className = 'w-current';
                shoppings[this.sindex].rs[this.windex].style.display = 'block';
            });
        }
        // console.log("-------------------------------");
    }
})
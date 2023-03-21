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
                for (var i = 0; i < shoppings[this.sindex].words.length; i++) {
                    shoppings[this.sindex].words[i].className = '';
                    shoppings[this.sindex].rs[i].style.display = 'none';
                    // console.log("经过了");
                }
                this.className = 'w-current';
                shoppings[this.sindex].rs[this.windex].style.display = 'block';
            });
        }
    }

    // 侧边栏---------------------------------------------------------------------
    var cbl1 = document.querySelector('.cbl-1');
    var cbl1lis = cbl1.querySelectorAll('a');
    var cbl1img = cbl1.querySelectorAll('.static');
    var cbl1imghover = cbl1.querySelectorAll('.img-hover');
    var cbl1text = cbl1.querySelectorAll('.cbl-text');
    // console.log(cbl1lis.length);
    // console.log(cbl1img.length);
    // console.log(cbl1imghover.length);
    // console.log(cbl1text.length);
    for (var i = 0; i < cbl1lis.length; i++) {
        cbl1lis[i].index = i;
        // console.log(cbl1lis[i].index);01234
        // console.log(i);//01234
        cbl1lis[i].addEventListener('mouseover', function () {
            for (var i = 0; i < cbl1lis.length; i++) {
                cbl1img[i].style.display = 'block';
                cbl1imghover[i].style.display = 'none';
                cbl1text[i].style.color = '#757575';
                // console.log("全部清除");
            }
            cbl1img[this.index].style.display = 'none';
            cbl1imghover[this.index].style.display = 'block';
            cbl1text[this.index].style.color = '#ff6700';
            // console.log("经过了");
        });
        cbl1lis[i].addEventListener('mouseout', function () {
            cbl1img[this.index].style.display = 'block';
            cbl1imghover[this.index].style.display = 'none';
            cbl1text[this.index].style.color = '#757575';
            // console.log("经过了");
        });
        // console.log("--------");
    }
    //返回顶部------------------------------------------------------
    var hdb = document.querySelector('.huidingbu');
    var hdbimg = hdb.querySelector('.static');
    var hdbimghover = hdb.querySelector('.img-hover');
    var hdbtext = hdb.querySelector('.cbl-text');
    hdb.addEventListener('mouseover', function () {
        hdbimg.style.display = 'none';
        hdbimghover.style.display = 'block';
        hdbtext.style.color = '#ff6700';
    });
    hdb.addEventListener('mouseout', function () {
        hdbimg.style.display = 'block';
        hdbimghover.style.display = 'none';
        hdbtext.style.color = '#757575';
    })

    // 滚动效果------------------------------------------------------
    var cbl = document.querySelector('.cbl');
    var hdb = document.querySelector('.huidingbu');
    var mainpage = document.querySelector('.mainpage');
    // var banner1 = mainpage.querySelector('.banner1');
    var mainpageTop = mainpage.offsetTop;
    var cblBottom = 70 + 'px';
    var cblnewBottom = 170 + 'px';
    // var banner1Height = banner1.offsetHeight;
    // console.log(banner1Height);124
    // var cblnewTop = mainpageTop + banner1Height;
    // console.log(cblnewTop);930
    document.addEventListener('scroll', function () {
        // console.log(window.pageYOffset);
        if (window.pageYOffset >= mainpageTop) {
            // cbl.style.position = 'fixed';
            cbl.style.bottom = cblnewBottom;
            hdb.style.display = 'block';
        } else {
            cbl.style.bottom = cblBottom;
            hdb.style.display = 'none';
        }
    });

    hdb.addEventListener('click', function () {
        window.scroll(0, 0);
    })
})
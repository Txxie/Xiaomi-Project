window.addEventListener("load", function () {
    //动态生成小圆点
    var lunbo = document.querySelector('.lunbo');
    var ul = lunbo.querySelector('ul');
    // console.log(ul.children.length);
    var ol = lunbo.querySelector('.circle');
    //小圆圈跟随左右侧按钮变化 全局变量
    var circle = 0;
    for (var i = 0; i < ul.children.length; i++) {
        //创建小li
        var li = document.createElement('li');
        li.setAttribute('index', i);
        //把小li插入到需要插入的地方
        ol.appendChild(li);
        li.addEventListener('click', function () {
            for (var i = 0; i < ol.children.length; i++) {
                ol.children[i].className = '';
            }
            this.className = 'current';
            var index = this.getAttribute('index');
            circle = index;
            //点击小圆点滚动图片
            //ul的移动距离 索引号*图片宽度
            var lunboWidth = lunbo.offsetWidth;
            animate(ul, - index * lunboWidth);
            // console.log("点击了");
            // console.log(lunbo.offsetWidth);
            // console.log(index);
        });
    }
    ol.children[0].className = 'current';

    // 克隆第一张图片放到最后面
    var first = ul.children[0].cloneNode(true);
    ul.appendChild(first);

    // 点击右侧按钮图片切换
    var btnr = lunbo.querySelector('.btn_r');
    var num = 0;
    var lunboWidth = lunbo.offsetWidth;
    // 节流阀：防止连续点击过快
    var flag = true;
    btnr.addEventListener('click', function () {
        if (flag) {
            flag = false;
            // alert(1);
            if (num == ul.children.length - 1) {
                ul.style.left = 0;
                num = 0;
            }
            num++;
            animate(ul, -num * lunboWidth, function () {
                flag = true;
            });
            circle++;
            if (circle == ol.children.length) {
                circle = 0;
            }
            circleChange();
        }
    });

    // 点击左侧按钮图片切换
    var btnl = lunbo.querySelector('.btn_l');
    var num = 0;
    var lunboWidth = lunbo.offsetWidth;
    btnl.addEventListener('click', function () {
        if (flag) {
            flag = false;
            // alert(1);
            if (num == 0) {
                num = ul.children.length - 1;
                ul.style.left = - num * lunboWidth + 'px';
            }
            num--;
            animate(ul, -num * lunboWidth, function () {
                flag = true;
            });
            circle--;
            // if (circle < 0) {
            //     circle = ol.children.length - 1;
            // }
            circle = circle < 0 ? ol.children.length - 1 : circle;
            circleChange();
        }
    });

    function circleChange() {
        // 先清除所有
        for (var i = 0; i < ol.children.length; i++) {
            ol.children[i].className = '';
        }
        // 再留下当前
        ol.children[circle].className = 'current';
    };

    // 自动播放功能
    var timer = this.setInterval(function () {
        // 手动调用右侧按钮点击事件
        btnr.click();
    }, 2000);

    // 鼠标经过停止定时器
    lunbo.addEventListener('mouseenter', function () {
        clearInterval(timer);
        timer = null;//清除定时器变量
    });
    // 鼠标离开继续定时器
    lunbo.addEventListener('mouseleave', function () {
        timer = this.setInterval(function () {
            // 手动调用右侧按钮点击事件
            btnr.click();
        }, 2000);
    });
})
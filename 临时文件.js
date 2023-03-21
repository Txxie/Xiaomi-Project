// 穿戴、热门效果
var shoppingtwo = document.querySelector('.shopping-two');
var wenzi2 = shoppingtwo.querySelector('.wenzi');
var words2 = wenzi2.querySelectorAll('li');
var rs2 = shoppingtwo.querySelectorAll('.r');
// console.log(rs.length);
for (var i = 0; i < words2.length; i++) {
    words2[i].index = i;
    words2[i].addEventListener('mouseover', function () {
        for (var j = 0; j < words2.length; j++) {
            words2[j].className = '';
            rs2[j].style.display = 'none';
        }
        this.className = 'w-current';
        // console.log(this.index);
        rs2[this.index].style.display = 'block';
        // alert(1);
    });
}

// 家电盒子穿戴效果
var shoppingfour = document.querySelector('.shopping-four');
var wenzi4 = shoppingfour.querySelector('.wenzi');
var words4 = wenzi4.querySelectorAll('li');
var rs4 = shoppingfour.querySelectorAll('.r');
// console.log(rs4.length);
for (var i = 0; i < words4.length; i++) {
    words4[i].index = i;
    words4[i].addEventListener('mouseover', function () {
        for (var j = 0; j < words4.length; j++) {
            words4[j].className = '';
            rs4[j].style.display = 'none';
        }
        this.className = 'w-current';
        // console.log(this.index);
        rs4[this.index].style.display = 'block';
        // alert(1);
    });
}

// 生活电器盒子
var shoppingfive = document.querySelector('.shopping-five');
var wenzi5 = shoppingfive.querySelector('.wenzi');
var words5 = wenzi5.querySelectorAll('li');
// console.log(words5.length);
var rs5 = shoppingfive.querySelectorAll('.r');
// console.log(rs5.length);
for (var i = 0; i < words5.length; i++) {
    words5[i].index = i;
    words5[i].addEventListener('mouseover', function () {
        for (var j = 0; j < words5.length; j++) {
            words5[j].className = '';
            rs5[j].style.display = 'none';
        }
        this.className = 'w-current';
        // console.log(this.index);
        rs5[this.index].style.display = 'block';
        // alert(1);
    });
}

// 厨房电器盒子
var shoppingsix = document.querySelector('.shopping-six');
var wenzi6 = shoppingsix.querySelector('.wenzi');
var words6 = wenzi6.querySelectorAll('li');
// console.log(words5.length);
var rs6 = shoppingsix.querySelectorAll('.r');
// console.log(rs5.length);
for (var i = 0; i < words6.length; i++) {
    words6[i].index = i;
    words6[i].addEventListener('mouseover', function () {
        for (var j = 0; j < words6.length; j++) {
            words6[j].className = '';
            rs6[j].style.display = 'none';
        }
        this.className = 'w-current';
        // console.log(this.index);
        rs6[this.index].style.display = 'block';
        // alert(1);
    });
}

// 智能家居盒子
var shoppingseven = document.querySelector('.shopping-seven');
var wenzi7 = shoppingseven.querySelector('.wenzi');
var words7 = wenzi7.querySelectorAll('li');
// console.log(words5.length);
var rs7 = shoppingseven.querySelectorAll('.r');
// console.log(rs5.length);
for (var i = 0; i < words7.length; i++) {
    words7[i].index = i;
    words7[i].addEventListener('mouseover', function () {
        for (var j = 0; j < words7.length; j++) {
            words7[j].className = '';
            rs7[j].style.display = 'none';
        }
        this.className = 'w-current';
        // console.log(this.index);
        rs7[this.index].style.display = 'block';
        // alert(1);
    });
}

// 运动出行盒子
var shopping8 = document.querySelector('.shopping-8');
var wenzi8 = shopping8.querySelector('.wenzi');
var words8 = wenzi8.querySelectorAll('li');
// console.log(words5.length);
var rs8 = shopping8.querySelectorAll('.r');
// console.log(rs5.length);
for (var i = 0; i < words8.length; i++) {
    words8[i].index = i;
    words8[i].addEventListener('mouseover', function () {
        for (var j = 0; j < words8.length; j++) {
            words8[j].className = '';
            rs8[j].style.display = 'none';
        }
        this.className = 'w-current';
        // console.log(this.index);
        rs8[this.index].style.display = 'block';
        // alert(1);
    });
}

// 日用百货盒子
var shopping9 = document.querySelector('.shopping-9');
var wenzi9 = shopping9.querySelector('.wenzi');
var words9 = wenzi9.querySelectorAll('li');
// console.log(words5.length);
var rs9 = shopping9.querySelectorAll('.r');
// console.log(rs5.length);
for (var i = 0; i < words9.length; i++) {
    words9[i].index = i;
    words9[i].addEventListener('mouseover', function () {
        for (var j = 0; j < words9.length; j++) {
            words9[j].className = '';
            rs9[j].style.display = 'none';
        }
        this.className = 'w-current';
        // console.log(this.index);
        rs9[this.index].style.display = 'block';
        // alert(1);
    });
}
})
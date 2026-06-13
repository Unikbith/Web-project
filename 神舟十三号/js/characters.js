let width = 1200;
let index = 1;
let arr = document.getElementById('box-banner').getElementsByTagName('img')

function changeImage(isNet) {
    let targetLeft = 0;
    if (isNet) {
        if (index == arr.length) {
            index = 1;
        } else {
            index++;
            targetLeft = -(width * (index - 1))
        }
    } else {
        if (index == 1) {
            index = arr.length;
            targetLeft = -(arr.length - 1) * width;
        } else {
            index--;
            targetLeft = -(width * (index - 1))
        }
    }
    // 动画执行
    document.getElementById('box-banner').animate([{
        // 如果切换到最后一张图片 则退回到第一张图
        transform: 'translateX(' + targetLeft == -1200 ? 0 : targetLeft + 'px)'
    }, {
        transform: 'translateX(' + targetLeft + 'px)'
    }], {
        duration: 700,
        fill: "forwards"
    })
}

function auto(flag) {
    // 如果flag等于false就关闭定时器并return跳出函数
    if (!flag) {
        clearInterval(timer)
        return
    }
    // 开启自动翻页
    timer = setInterval(() => {
        changeImage(true)
    }, 2000)
}
// 开启自动切换
auto(true);
// 手动切换下一页
function btn_right() {
    auto(false);
    changeImage(true);
    auto(true);
}

// 手动切换上一页
function btn_left() {
    // 关闭自动切换
    auto(false)
    changeImage(false);
    // 重新开启自动切换
    auto(true)
}
// 传入数据,12位的数组
function rander_bar(list) {

    if (list.length === 12) {
        list = list;
    } else {
        list = list[0];
    }
    console.log(list)
    // let list = [10, 40, 10, 6, 5, 6, 8, 6, 6, 6, 7, 26]
    // 基准刻度
    let baseDistance = (225 / findMaxOfList(list)).toFixed(4);

    // div 325 240
    // svg 320 225  4:3
    // 上下左右间距 10
    // 先确定比例，然后把数据往里面塞
    let xHeight = 235;
    let yWidth = 330;
    // <rect x="15" y="10" width="10" height="225"/>
    // bar 间距为5，宽20，
    let innhtml = '';
    let x = 15;
    for (let i = 2; i < list.length; i++) {
        let height = (list[i] * baseDistance).toFixed(4);
        let line = '<rect x="' + x + '" y="' + (xHeight - height) + '" width="20" height="' + height + '"/>'
        console.log(line)
        innhtml += line;
        x += 25;
    }

    document.getElementById('barBox').innerHTML = '';
    document.getElementById('barBox').innerHTML = innhtml;
}

// 返回数字列表中的最大值
function findMaxOfList(list) {
    let max = 0;
    for (let i = 0; i < list.length; i++) {
        if (list[i] > max) {
            max = list[i];
        }
    }
    return max
}
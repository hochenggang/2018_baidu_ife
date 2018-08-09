APP.render = {
    // 表格渲染
    'colorList': ['#F03434', '#663399', '#913D88', '#446CB3', '#1F3A93', '#87D37C', '#1E824C', '#FABE58', '#95A5A6'],
    'table': function () {
        var data = APP.chooseBoxData.getData();
        var table = document.createElement('table');
        var tr, th, td;
        // 生成表头
        var chooseData = APP.chooseBoxData.getChoose();
        // 判断是否调整列序
        if (chooseData.chooseDataRegion.select.length === 1) {
            var th_list = ['地区', '商品', '一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'];
        } else {
            var th_list = ['商品', '地区', '一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'];
        }
        tr = document.createElement('tr');
        for (var i = 0; i < th_list.length; i++) {
            th = document.createElement('th');
            th.appendChild(document.createTextNode(th_list[i]));
            tr.appendChild(th);
        }
        table.appendChild(tr);

        // 生成普通内容
        for (var i = 0; i < data.length; i++) {
            tr = document.createElement('tr');
            // 判断是否调整列序
            if (chooseData.chooseDataRegion.select.length === 1) {
                td = document.createElement('td');
                td.appendChild(document.createTextNode(data[i].region));
                tr.appendChild(td);
                td = document.createElement('td');
                td.setAttribute('style', 'color:' + APP.render.colorList[i]);
                td.appendChild(document.createTextNode(data[i].product));
                tr.appendChild(td);
            } else {
                td = document.createElement('td');
                td.appendChild(document.createTextNode(data[i].product));
                tr.appendChild(td);
                td = document.createElement('td');
                td.setAttribute('style', 'color:' + APP.render.colorList[i]);
                td.appendChild(document.createTextNode(data[i].region));
                tr.appendChild(td);
            }
            for (var s = 0; s < data[i].sale.length; s++) {
                td = document.createElement('td');
                td.setAttribute('data-type', 'value');
                td.setAttribute('style', 'color:' + APP.render.colorList[i]);
                td.appendChild(document.createTextNode(data[i].sale[s]));
                tr.appendChild(td);
            }
            table.appendChild(tr);
        }
        if (document.querySelector('#table table')) {
            document.querySelector('#table').removeChild(document.querySelector('#table table'));
        }
        // 渲染表格
        document.querySelector('#table').appendChild(table);

        // 判断合并第一列重复项
        var allTr = document.querySelectorAll('#table tr');
        var rowspanCount = 1;
        // 筛选重复项并添加标记
        for (var i = 1; i < allTr.length - 1; i++) {
            td1Now = allTr[i].querySelector('td');
            td1Next = allTr[i + 1].querySelector('td');
            if (td1Now.innerHTML === td1Next.innerHTML) {
                rowspanCount += 1;
                td1Next.setAttribute('data-delete', '1');
                allTr[i + 2 - rowspanCount].querySelector('td').setAttribute('rowspan', rowspanCount);
            } else {
                rowspanCount = 1;
            }
        }
        // 删除所有标记删除项
        var allTr = document.querySelectorAll('#table tr');
        for (var i = 1; i < allTr.length; i++) {
            td1Now = allTr[i].querySelector('td');
            if (td1Now.getAttribute('data-delete') === '1') {
                allTr[i].removeChild(td1Now)
            }
        }
    },

    // 柱状图渲染
    'bar': function () {
        var H = window.innerHeight;
        var W = window.innerWidth - 20;
        console.log(W,W/2)
        var data = APP.chooseBoxData.getData();
        var dataList = [];
        for (var i = 0; i < data.length; i++) {
            dataList.push(data[i].sale);
        }
        var maxNum = findMaxOfList(dataList);
        let bar = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        bar.style.width = W / 2;
        bar.style.height = H / 2;
        // 建立坐标轴和指示器
        var boxarea = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        var xline = drawSvgLine('mainAreaLine', [0, H / 2], [W / 2, H / 2]);
        var yline = drawSvgLine('mainAreaLine', [0, 0], [0, H / 2]);
        boxarea.appendChild(xline);
        boxarea.appendChild(yline);
        bar.appendChild(boxarea);
        // 绘制数据
        var dataarea = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        for (var i = 0; i < dataList.length; i++) {
            // 转换系数
            var transferNum = (H / 2) / maxNum;
            var columnsWidth = (W / 2) / 12;
            // 计算一个数据列的宽度，减去8是为留出左右各4的列距
            var sigelColumnsWidth = (columnsWidth - 8) / dataList.length;
            var list = dataList[i];
            var color = APP.render.colorList[i];
            for (var ii = 0; ii < list.length; ii++) {
                var startWidth = columnsWidth * ii + sigelColumnsWidth * (i) + 4;
                var value = list[ii];
                // 减一是为了避免绘制区和坐标轴重合
                let rect = drawSvgRect('AreaRect', [startWidth, (H / 2) - (transferNum * value)], [sigelColumnsWidth, (transferNum * value) - 1]);
                rect.setAttribute('fill', color);
                dataarea.appendChild(rect);
            }
        }
        bar.appendChild(dataarea)
        document.querySelector('#render').appendChild(bar);
        // 绘制SVG直线
        function drawSvgLine(nodeClass, lineStart, lineEnd) {
            let line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
            line.setAttribute('class', nodeClass);
            line.setAttribute('x1', lineStart[0]);
            line.setAttribute('y1', lineStart[1]);
            line.setAttribute('x2', lineEnd[0]);
            line.setAttribute('y2', lineEnd[1]);
            return line
        }
        // 绘制SVG矩形
        function drawSvgRect(nodeClass, rectStart, rectHW) {
            let rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
            rect.setAttribute('class', nodeClass);
            rect.setAttribute('x', rectStart[0]);
            rect.setAttribute('y', rectStart[1]);
            rect.setAttribute('height', rectHW[1]);
            rect.setAttribute('width', rectHW[0]);
            return rect
        }
    },
    // 柱状图渲染
    'line': function () {
        var H = window.innerHeight;
        var W = window.innerWidth - 20;
        var data = APP.chooseBoxData.getData();
        var dataList = [];
        for (var i = 0; i < data.length; i++) {
            dataList.push(data[i].sale);
        }
        var maxNum = findMaxOfList(dataList);
        APP.render.colorList

        var line = document.createElement('canvas');
        line.setAttribute('width', W / 2);
        line.setAttribute('height', H / 2);
        var ctx = line.getContext("2d");



        document.querySelector('#render').appendChild(line);





    }
}

// 返回数字列表中的最大值
function findMaxOfList(lists) {
    let max = 0;
    for (let l = 0; l < lists.length; l++) {
        var list = lists[l]
        for (let i = 0; i < list.length; i++) {
            if (list[i] > max) {
                max = list[i];
            }
        }
    }
    return max
}

// 初始化渲染
APP.render.table();
APP.render.bar();
APP.render.line();
APP.Style.flush();




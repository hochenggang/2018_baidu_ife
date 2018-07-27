// 图形绘制
function draw(data) {
    if (data) {
        rander_bar(data);
        rander_line(data);
    } else {
        let data = [120, 100, 140, 160, 180, 185, 190, 210, 230, 245, 255, 270];
        rander_bar(data);
        rander_line(data);
    }
}


// 绘制容器，容器填充四分之一个屏幕区域
var screenWidth = Number(window.innerWidth);
var screenHeight = Number(window.innerHeight);
let Y = (screenHeight / 2).toFixed(4);
let X = (screenWidth / 2).toFixed(4);
document.querySelector('#pic').appendChild(generalArea('bar-rander'))
document.querySelector('#pic').appendChild(generalArea('line-rander'))

function generalArea(boxId) {
    let div = document.createElement('div');
    div.setAttribute('id', boxId);
    div.style.width = screenWidth / 2 + 'px';
    div.style.height = screenHeight / 2 + 'px';
    return div
}


// 绘制单栏柱状图。传入数据,12位的数组

function rander_bar(list) {
    let svg = baseBar();

    let baseDistance = (screenHeight / 2 / findMaxOfList(list)).toFixed(4);

    let group = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    for (let i = 0; i < list.length; i++) {
        let nodeClass = 'rect';
        let x = (screenWidth / 14 / 2 * (i + 1)).toFixed(4);
        let y = (screenHeight / 2 - baseDistance * list[i]).toFixed(4) - 20;
        let H = (baseDistance * list[i]).toFixed(4);
        if (y <= Y / 4) {
            y = y + 40;
            H = H -40;
        }
        let rectStart = [x, y]

        let rectHW = [H, (screenWidth / 2 / 12 / 2).toFixed(4)];
        let rect = drawSvgRect(nodeClass, rectStart, rectHW);
        group.appendChild(rect);
    }
    svg.appendChild(group)
    document.getElementById('bar-rander').innerHTML = '';

    document.getElementById('bar-rander').appendChild(svg);
}

// 画坐标轴和指示线
function baseBar() {
    // 建立绘制区
    let svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('id', 'svgBarBox');
    // 建立坐标轴组
    let group = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    // 绘画区域被包含在容器内，向内缩近 20 px
    // 坐标轴
    let svgX = drawSvgLine('mainLine', [20, (screenHeight / 2 - 20).toFixed(8)], [(screenWidth / 2 - 20).toFixed(8), (screenHeight / 2 - 20).toFixed(8)]);
    let svgY = drawSvgLine('mainLine', [20, 20], [20, (screenHeight / 2 - 20)]);
    // 指示线
    let standerY = (screenHeight / 4 / 2).toFixed(8);
    let svgx1 = drawSvgLine('noteLine', [20, standerY * 1], [(screenWidth / 2 - 20), standerY * 1]);
    let svgx2 = drawSvgLine('noteLine', [20, standerY * 2], [(screenWidth / 2 - 20), standerY * 2]);
    let svgx3 = drawSvgLine('noteLine', [20, standerY * 3], [(screenWidth / 2 - 20), standerY * 3]);

    group.appendChild(svgX)
    group.appendChild(svgY)
    group.appendChild(svgx1)
    group.appendChild(svgx2)
    group.appendChild(svgx3)
    svg.appendChild(group)

    return svg
}

// 绘制SVG直线，传入起点[x1.y1]和终点[x2,y2]
function drawSvgLine(nodeClass, lineStart, lineEnd) {
    let line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line.setAttribute('class', nodeClass);
    line.setAttribute('x1', lineStart[0]);
    line.setAttribute('y1', lineStart[1]);
    line.setAttribute('x2', lineEnd[0]);
    line.setAttribute('y2', lineEnd[1]);
    return line
}
function drawSvgRect(nodeClass, rectStart, rectHW) {
    let rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    rect.setAttribute('class', nodeClass);
    rect.setAttribute('x', rectStart[0]);
    rect.setAttribute('y', rectStart[1]);
    rect.style.height = rectHW[0];
    rect.style.width = rectHW[1];
    return rect
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



// 绘制折线图。传入数据,12位的数组
var xycor = 'rgb(32,96,79)'
var pointcor = 'rgb(36,147,110)'
var linecor = 'rgb(0,128,108)'

function rander_line(list) {
    // 初始化
    document.getElementById("line-rander").innerHTML = '';
    document.getElementById("line-rander").appendChild(document.createElement('canvas'));
    let c = document.querySelector('#line-rander canvas');
    c.setAttribute('width', X);
    c.setAttribute('height', Y);

    let baseDistance = (Y / findMaxOfList(list)).toFixed(4);
    //console.log('最大值' + findMaxOfList(list))

    let ctx = c.getContext("2d");
    
    // 绘制坐标轴
    let startCanv = [20, 20];
    let endCanv = [20, Y - 20];
    let lineWidth = 2;
    drawCanvasLine(ctx, lineWidth, startCanv, endCanv)

    startCanv = [20, Y - 20];
    endCanv = [X - 20, Y - 20];
    lineWidth = 2;
    drawCanvasLine(ctx, lineWidth, startCanv, endCanv)

    let standerY2 = screenHeight / 4 / 2;
    let l = [standerY2 * 1, standerY2 * 2, standerY2 * 3]
    for (let i = 0; i < l.length; i++) {
        startCanv = [20, l[i]];
        endCanv = [X - 20, l[i]];
        lineWidth = .5;
        drawCanvasLine(ctx, lineWidth, startCanv, endCanv)
    }


    let canvasData = [];
    for (let i = 0; i < list.length; i++) {
        let linelocal = [(screenWidth / 13 / 2 * (i + 1)).toFixed(4), (screenHeight / 2 - baseDistance * list[i]).toFixed(4) - 20]
        let y = Number(linelocal[1]);
        if (y <= Y / 4) {
            y = y + 40;
        }
        let x = Number(linelocal[0]);
        ctx.beginPath();
        ctx.arc(x, y, 5, 0, 2 * Math.PI);
        //console.log(x, y)
        canvasData.push([x, y])
        ctx.fillStyle = pointcor;
        ctx.fill();
    }

    for (let i = 0; i < canvasData.length; i++) {
        if (i < canvasData.length - 1) {
            let x1 = canvasData[i][0]
            let y1 = canvasData[i][1]
            let x2 = canvasData[i + 1][0]
            let y2 = canvasData[i + 1][1]
            ctx.beginPath();
            ctx.lineWidth = "2";
            ctx.strokeStyle = linecor;
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);
            ctx.stroke();
        }
    }
    //console.log(canvasData)
}

function drawCanvasLine(ctx, lineWidth, startCanv, endCanv) {
    ctx.beginPath();
    ctx.lineWidth = lineWidth;
    ctx.strokeStyle = xycor;
    ctx.moveTo(startCanv[0], startCanv[1]);
    ctx.lineTo(endCanv[0], endCanv[1]);
    ctx.stroke();
}


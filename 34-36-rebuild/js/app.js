var APP = {};
document.querySelector('#chooseBox').addEventListener('click', Run, false);
document.querySelector('#table').addEventListener('mouseleave', Run, false);
function Run(event) {
    // 储存点击事件
    var e = event || window.event;
    APP.chooseBoxClickTarget = e.target || e.srcElement;
    // 开始输入逻辑判断
    APP.chooseBoxData.logicCheck();
    // 渲染表格
    APP.render.table();
    // 重置绘图区
    document.querySelector('#render').innerHTML = '';
    // 渲染图表
    var data = APP.chooseBoxData.getData();
    APP.render.bar(data);
    APP.render.line(data);
    // 设置样式
    APP.Style.flush();
}

document.querySelector('#table').addEventListener('mouseover', flushByTr);
function flushByTr(event) {
    // 储存点击事件
    var e = event || window.event;
    APP.tableMouseTarget = e.target || e.srcElement;
    var data = []
    var tds = APP.tableMouseTarget.parentNode.querySelectorAll('[data-type=value]');
    for (let index = 0; index < tds.length; index++) {
        let element = tds[index];
        data.push(element.innerHTML)
    }
    
    data = [{'sale':data}]
    // 重置绘图区
    document.querySelector('#render').innerHTML = '';
    // 渲染图表
    APP.render.bar(data);
    APP.render.line(data);
}



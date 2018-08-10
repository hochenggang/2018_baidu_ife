var APP = {};
document.querySelector('#chooseBox').addEventListener('click', Run, false);
function Run(event) {
    // 储存点击事件
    e = event || window.event;
    APP.chooseBoxClickTarget = e.target || e.srcElement;
    // 开始输入逻辑判断
    APP.chooseBoxData.logicCheck();
    // 渲染表格
    APP.render.table();
    // 重置绘图区
    document.querySelector('#render').innerHTML = '';
    // 渲染图表
    APP.render.bar();
    APP.render.line();
    // 设置样式
    APP.Style.flush();
}
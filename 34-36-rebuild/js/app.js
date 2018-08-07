// 何成刚 20180729
// 核心逻辑：处理数据->取得输入->生成输出
// 处理数据：数据对象化，允许筛选数据
// 取得输入：取得多选框输入，判断逻辑后返回输入
// 生成输出：取得数据，渲染表格和图表

// 用于放置全局参数
var APP = {};
APP.chooseBox = document.querySelector('#chooseBox');
APP.chooseBox.addEventListener('click', Run, false);
function Run(e) {
    // 储存点击事件
    var e = event || window.event
    APP.chooseBoxClickTarget = e.target || e.srcElement;
    // 开始输入逻辑判断
    APP.chooseBoxData.logicCheck();
    console.log(APP.chooseBoxData.getData())
}


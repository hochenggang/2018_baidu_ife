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
};

document.querySelector('#table').addEventListener('mouseover', flushByTr);
function flushByTr(event) {
    // 储存点击事件
    var e = event || window.event;
    let src = e.target || e.srcElement;
    var data = []
    var tds = src.parentNode.querySelectorAll('[data-type=value]');
    for (let index = 0; index < tds.length; index++) {
        let element = tds[index];
        data.push(Number(element.innerHTML))
    }
    // 判断来自表头的触发
    if (data.length !== 12) {
        console.log('表头事件，跳过渲染')
    } else {
        data = [{ 'sale': data }]
        document.querySelector('#render').innerHTML = '';
        APP.render.bar(data);
        APP.render.line(data);
    }
};

document.querySelector('#table').addEventListener('dblclick', change);
function change(event) {
    var e = event || window.event;
    let target = e.target || e.srcElement;
    var data = []
    var tds = target.parentNode.querySelectorAll('[data-type=value]');
    for (let index = 0; index < tds.length; index++) {
        let element = tds[index];
        data.push(Number(element.innerHTML))
    }
    // 判断来自表头的触发
    if (data.length !== 12) {
        console.log('表头事件，跳过渲染')
    } else {
        if (target.getAttribute('data-type') === 'value') {
            var value = target.innerHTML;
            target.innerHTML = '';
            var inp = document.createElement('input');
            inp.setAttribute('value', value);
            inp.setAttribute('data-type', 'inputing');
            target.appendChild(inp);
            target.querySelector('input').focus();
            inp.addEventListener('blur', blur);
            function blur() {
                let value = this.value;
                if (!isNaN(value)) {
                    APP.render.table();
                    let index = this.parentNode.getAttribute('data-table-clomn');
                    let r = this.parentNode.parentNode.getAttribute('data-table-r');
                    let p = this.parentNode.parentNode.getAttribute('data-table-p');
                    for (let i = 0; i < APP.chooseBoxData.srcData.length; i++) {
                        if (APP.chooseBoxData.srcData[i]['region'] === r && APP.chooseBoxData.srcData[i]['product'] === p) {
                            APP.chooseBoxData.srcData[i].sale[index] = value;
                        }
                    }
                    localStorage.setItem('srcData', JSON.stringify(APP.chooseBoxData.srcData));
                    APP.render.table();
                    document.querySelector('#render').innerHTML = '';
                    var data = APP.chooseBoxData.getData();
                    APP.render.bar(data);
                    APP.render.line(data);
                    APP.Style.flush();
                } else {
                    APP.render.table();
                    alert('接受值类型为：数字')
                }
            };
            inp.addEventListener('keydown', keydown);
            function keydown(event) {
                // 响应回车键被按下
                if (event.keyCode === 13) {
                    let value = this.value;
                    if (!isNaN(value)) {
                        APP.render.table();
                        let index = this.parentNode.getAttribute('data-table-clomn');
                        let r = this.parentNode.parentNode.getAttribute('data-table-r');
                        let p = this.parentNode.parentNode.getAttribute('data-table-p');
                        for (let i = 0; i < APP.chooseBoxData.srcData.length; i++) {
                            if (APP.chooseBoxData.srcData[i]['region'] === r && APP.chooseBoxData.srcData[i]['product'] === p) {
                                APP.chooseBoxData.srcData[i].sale[index] = value;
                            }
                        }
                        localStorage.setItem('srcData', JSON.stringify(APP.chooseBoxData.srcData));
                        APP.render.table();
                        document.querySelector('#render').innerHTML = '';
                        var data = APP.chooseBoxData.getData();
                        APP.render.bar(data);
                        APP.render.line(data);
                        APP.Style.flush();
                    } else {
                        APP.render.table();
                        alert('接受值类型为：数字')
                    }
                }
            }
        }
    }
}

// 解析hash
function decodeHash() {
    var hash = location.hash;
    if (hash.length > 1) {
        var splitHash = hash.split('#')[1];
        var list = splitHash.split('');
        loop(list);
        function loop(list) {
            var selects = document.querySelectorAll('#chooseBox input');
            for (let i = 0; i < list.length; i++) {
                if (list[i]==='1'){
                    selects[i].checked = true;
                }else {
                    selects[i].checked = false;
                }
            }
        }
    }
}
decodeHash()
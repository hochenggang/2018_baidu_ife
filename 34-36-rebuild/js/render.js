// 何成刚 20180729
// 生成输出：取得数据，渲染表格和图表

var Rander = function () {
    this.table = function () {
        rander_data(APP.rList, APP.pList);
    }

    this.tableCheck = function(){
        console.log(APP.state)
        multiple_wrapper_logic(APP.state['r']);
        multiple_wrapper_logic(APP.state['p']);
    }
}

// 渲染数据
function rander_data(r, p) {
    let th_list = ['商品', '地区', '一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'];
    let td_list = APP.data['list'];
    let table;
    // 数据都存在时，渲染数据
    if (r && p) {
        table = general_table_senior('code2-table', th_list, td_list);
    } else {
        table = document.createTextNode('');
    }
    // console.log(table)
    document.querySelector('#table').innerHTML = '';
    document.querySelector('#table').appendChild(table);
}


// 表格生成器
function general_table_senior(table_id, th_list, td_list) {
    if (th_list.length > 0 && td_list.length > 0) {
        var table = document.createElement('table');
        table.setAttribute('id', table_id);
        var tbody = document.createElement('tbody');
        // 生成表头
        var tr = document.createElement('tr');
        for (var i = 0; i < th_list.length; i++) {
            let th = document.createElement('th');
            th.appendChild(document.createTextNode(th_list[i]));
            tr.appendChild(th);
        }
        tbody.appendChild(tr);
        // 生成普通内容
        for (var i = 0; i < td_list.length; i++) {
            var tr_nomal = document.createElement('tr');
            tr_nomal.setAttribute('data-type', 'tableValue');
            for (var s = 0; s < td_list[i].length; s++) {
                let td = document.createElement('td');
                td.appendChild(document.createTextNode(td_list[i][s]));
                tr_nomal.appendChild(td);
            }
            tbody.appendChild(tr_nomal);
        }
        table.appendChild(tbody);
        return table
    } else {
        return document.createTextNode('');
    }
}

// 复选框逻辑处理，传入复选框状态
function multiple_wrapper_logic(state) {
    // 如果当前是全选状态，取消任何一个子选项，则全选CheckBox也要置为未勾选状态
    if (state.isAllValue === true && state.notOkValue.length !== 0) {
        state.isAllInput.checked = false;
        state.isAllValue = false;
    }
    // 点击全选时，如果单个选项中只要有一个不是被选上的状态，则进行全选操作

    // 点击最后一个未被选中的单个选项后，全选CheckBox也要置为被勾选状态
    if (state.notOkValue.length === 0) {
        state.isAllInput.checked = true;
    }
    // 不允许一个都不勾选，所以当用户想取消唯一一个被勾选的子选项时，无交互反应，不允许取消勾选

}

// 全选操作，传入复选框状态
function multiple_wrapper_logic_selectAll(state) {
    for (let i = 0; i < state.notOkInput.length; i++) {
        state.notOkInput[i].checked = true;
    }
}
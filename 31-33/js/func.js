function region_element_change(){
    document.querySelector('#code1-table-wraper').innerHTML = '';
    region_selected = region_element.options[region_element.selectedIndex];
    // 判断选择框的选取情况，分别对应单一选取，均选取，均未选取。
    if (region_selected.value !== '请选择地区' && product_selected.value !== '请选择商品'){
        let td_list = data_filter_2(region_selected.value,'region',product_selected.value);
        let th_list = ['商品','地区','一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'];
        let table = general_table('code1-table',th_list,td_list);
        if(document.querySelector('#code1-table')){
            document.querySelector('#code1-table-wraper').innerHTML = '';
        }
        document.querySelector('#code1-table-wraper').appendChild(table);
    } else if(region_selected.value === '请选择地区' && product_selected.value === '请选择商品'){
        document.querySelector('#code1-table-wraper').innerHTML = '';
    } else if(region_selected.value !== '请选择地区' && product_selected.value === '请选择商品') {
        // 单一选择框的情况
        let td_list = data_filter_1(region_selected.value,'region');
        let th_list = ['商品','地区','一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'];
        let table = general_table('code1-table',th_list,td_list);
        if(document.querySelector('#code1-table')){
            document.querySelector('#code1-table-wraper').innerHTML = '';
        }
        document.querySelector('#code1-table-wraper').appendChild(table);
    } else {
        product_element_change();
    }
};


function product_element_change(){
    document.querySelector('#code1-table-wraper').innerHTML = '';
    product_selected = product_element.options[product_element.selectedIndex];
    // 合选情况
    if (region_selected.value !== '请选择地区' && product_selected.value !== '请选择商品'){
        let td_list = data_filter_2(region_selected.value,'region',product_selected.value);
        let th_list = ['商品','地区','一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'];
        let table = general_table('code1-table',th_list,td_list);
        if(document.querySelector('#code1-table')){
            document.querySelector('#code1-table-wraper').innerHTML = '';
        }
        document.querySelector('#code1-table-wraper').appendChild(table);
    }else if(region_selected.value === '请选择地区' && product_selected.value === '请选择商品'){
        document.querySelector('#code1-table-wraper').innerHTML = '';
    }else if(region_selected.value === '请选择地区' && product_selected.value !== '请选择商品'){
        // 单一选择框的情况
        let td_list = data_filter_1(product_selected.value,'product');
        let th_list = ['商品','地区','一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'];
        let table = general_table('code1-table',th_list,td_list);
        if(document.querySelector('#code1-table')){
            document.querySelector('#code1-table-wraper').innerHTML = '';
        }
        document.querySelector('#code1-table-wraper').appendChild(table);
    } else {
        region_element_change();
    }
}


// 一维数据筛选
function data_filter_1(attr,key){
    var filter = [];
    for (var i=0; i < sourceData.length; i++){
        //console.log(sourceData[i]['region'])
        if (sourceData[i][key] === attr){
            var data = [sourceData[i]['product'],sourceData[i]['region']];
            for (var s=0; s < sourceData[i]['sale'].length; s++){
                data.push(sourceData[i]['sale'][s])
            }
            filter.push(data);
        }
    }
    return filter
}

// 二维数据筛选
// key1是地区，value1是地区值，key2是商品值
function data_filter_2(value1,key1,value2){
    var filter = [];
    var data_container = [];
    for (var i=0; i < sourceData.length; i++){
        //console.log(sourceData[i]['region'])
        // 第一次筛选
        if (sourceData[i][key1] === value1){
            var data = [sourceData[i]['product'],sourceData[i]['region']];
            for (var s=0; s < sourceData[i]['sale'].length; s++){
                data.push(sourceData[i]['sale'][s])
            }
            data_container.push(data);
        }
    }
    // console.log('第一次筛选的结果');
    // console.log(data_container);
    // 第二次筛选
    for (var m = 0; m < data_container.length; m++){
        if(data_container[m][0] === value2){
            filter.push(data_container[m])
        }
    }
    // console.log('第二次筛选的结果');
    // console.log(filter);
    return filter
}

// 表格生成，两个参数，th_list,td_list
function general_table(table_id,th_list,td_list){
    if(th_list.length>0 && td_list.length>0){
        var table = document.createElement('table');
        table.setAttribute('id',table_id);
        var tbody = document.createElement('tbody');
        // 生成表头
        var tr = document.createElement('tr');
        for (var i=0; i < th_list.length; i++){
            let th = document.createElement('th');
            th.appendChild(document.createTextNode(th_list[i]));
            tr.appendChild(th);
        }
        tbody.appendChild(tr);
        // 生成普通内容
        for (var i=0; i < td_list.length; i++){
            // 初始化 tr 标签
            var tr_nomal = document.createElement('tr');
            for (var s=0; s < td_list[i].length; s++){
                let td = document.createElement('td');
                td.appendChild(document.createTextNode(td_list[i][s]));
                tr_nomal.appendChild(td);
            }
            tbody.appendChild(tr_nomal);
        }
        table.appendChild(tbody);
        return table
    }else {
        return document.createTextNode('');
    }
}



// 建立复选选项，接受一个复选框的容器id和复选值，
function general_wrapper_item(wrapper_id,wrapper_item_list){
    // 使用传入的ID来创建复选容器
    let wrapper = document.createElement('div');
    wrapper.setAttribute('id',wrapper_id);
    // 先创建一个全选按钮
    let lable = document.createElement('label');
    let input = document.createElement('input');
    input.setAttribute('type','checkbox');
    input.setAttribute('value','全选');
    lable.appendChild(input);
    lable.appendChild(document.createTextNode('全选'));
    wrapper.appendChild(lable);
    // 创建复选值
    for (let i = 0; i < wrapper_item_list.length; i++){
        let lable = document.createElement('label');
        let input = document.createElement('input');
        input.setAttribute('type','checkbox');
        input.setAttribute('value',wrapper_item_list[i]);
        lable.appendChild(input);
        lable.appendChild(document.createTextNode(wrapper_item_list[i]));
        wrapper.appendChild(lable);
    }
    return wrapper
}

// 取得复选的状态
function get_choose_state(wrapper_id){
    var wrapper_element = document.getElementById(wrapper_id);
    var inputs = wrapper_element.getElementsByTagName('input');
    let result = {};
    let okindex = [];
    let notokindex = [];
    let okvalue = [];
    let notokvalue = [];
    if(inputs[0].checked) {
        result['isAllValue'] = true;
        result['isAllInput'] = inputs[0];
    }else {
        result['isAllValue'] = false;
        result['isAllInput'] = inputs[0];
    }
    for (let i = 1; i < inputs.length; i++){
        if(inputs[i].checked) {
            okvalue.push(inputs[i].value)
            okindex.push(inputs[i]);
        }else {
            notokvalue.push(inputs[i].value)
            notokindex.push(inputs[i]);
        }
    }
    result['id'] = wrapper_id;
    result['okInput'] = okindex;
    result['notOkInput'] = notokindex;
    result['okValue'] = okvalue;
    result['notOkValue'] = notokvalue;
    return result
}

// 复选框逻辑处理，传入复选框状态
function multiple_wrapper_logic(state){
    // 如果当前是全选状态，取消任何一个子选项，则全选CheckBox也要置为未勾选状态
    if (state.isAllValue === true && state.notOkValue.length !== 0){
        state.isAllInput.checked = false;
        state.isAllValue = false;
    }
    // 点击全选时，如果单个选项中只要有一个不是被选上的状态，则进行全选操作
    if (state.srcElement.value === '全选' && state.notOkValue.length > 0){
        multiple_wrapper_logic_selectAll(state);
        state.isAllInput.checked = true;
        state.isAllValue = true;
    }
    // 点击最后一个未被选中的单个选项后，全选CheckBox也要置为被勾选状态
    if (state.notOkValue.length === 0){
        state.isAllInput.checked = true;
    }
    // 不允许一个都不勾选，所以当用户想取消唯一一个被勾选的子选项时，无交互反应，不允许取消勾选
    if (state.okValue.length === 0){
        if (state.srcElement.value !== '全选'){
            state.srcElement.checked = true;
        }
    }
    return get_choose_state(state.id)
}

// 全选操作，传入复选框状态
function multiple_wrapper_logic_selectAll(state){
    for (let i = 0; i < state.notOkInput.length; i++){
        state.notOkInput[i].checked = true;
    }
}



// 渲染数据
function rander_data(data){
    let r = data[0]['data'];
    let p = data[1]['data'];
    // console.log(region['wrapper_id'],region['data'])
    // console.log(product['wrapper_id'],product['data'])
    // 数据都存在时，渲染数据
    if (r&&p){
        // 当商品和地区都只选择一个的情况下，以商品为第一列，地区为第二列
        if (r.length === 1 && p.length === 1){
            // 直接利用code1的函数生成
            let td_list = data_filter_2(r[0],'region',p[0]);
            let th_list = ['商品','地区','一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'];
            let table = general_table('code2-table',th_list,td_list);
            document.getElementById('code2-result').innerHTML = '';
            document.getElementById('code2-result').appendChild(table);
        }
        // 当商品和地区都选择了多于一个的情况下，
        // 以商品为第一列，地区为第二列，商品列对同样的商品单元格进行合并

        if (r.length > 1 && p.length > 1){
            let td_list = data_filter_by_list(r,'region',p);
            let th_list = ['商品','地区','一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'];
            let table = general_table_senior('code2-table',th_list,td_list);
            document.getElementById('code2-result').innerHTML = '';
            document.getElementById('code2-result').appendChild(table);
        }

        // 当地区选择了一个，商品选择了多个的时候，
        // 地区作为第一列，商品作为第二列，
        // 并且把地区这一列的单元格做一个合并，只保留一个地区名称
        // 因为只有此处地区排列在前，所以直接在数据选择函数中做了判断
        if (r.length === 1 && p.length > 1){
            let td_list = data_filter_by_list(r,'region',p);
            let th_list = ['地区','商品','一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'];
            let table = general_table_senior('code2-table',th_list,td_list);
            document.getElementById('code2-result').innerHTML = '';
            document.getElementById('code2-result').appendChild(table);
        }

        // 当商品选择了一个，地区选择了多个的时候，
        // 商品作为第一列，地区作为第二列，
        // 并且把商品这一列的单元格做一个合并，只保留一个商品名称
        if (r.length > 1 && p.length === 1){
            let td_list = data_filter_by_list(r,'region',p);
            let th_list = ['商品','地区','一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'];
            let table = general_table_senior('code2-table',th_list,td_list);
            document.getElementById('code2-result').innerHTML = '';
            document.getElementById('code2-result').appendChild(table);
        }
    }
}


// 二维数组数据筛选
function data_filter_by_list(value1_list,key1,value2_list){
    var filter = [];
    var data_container = [];
    for (var t=0; t < value1_list.length; t++){
        let value1 = value1_list[t]
        for (var i=0; i < sourceData.length; i++){
            // 第一次筛选
            if (sourceData[i][key1] === value1){
                if (value1_list.length === 1 && value2_list.length > 1){
                    var data = [sourceData[i]['region'],sourceData[i]['product']];
                    for (var s=0; s < sourceData[i]['sale'].length; s++){
                        data.push(sourceData[i]['sale'][s])
                    }
                    data_container.push(data);
                } else {
                    var data = [sourceData[i]['product'],sourceData[i]['region']];
                    for (var s=0; s < sourceData[i]['sale'].length; s++){
                        data.push(sourceData[i]['sale'][s])
                    }
                    data_container.push(data);
                }

            }
        }
    }
    // 第二次筛选
    for (var t2=0; t2 < value2_list.length; t2++){
        let value2 = value2_list[t2]
        for (var m = 0; m < data_container.length; m++){
            if (value1_list.length === 1 && value2_list.length > 1){
                if(data_container[m][1] === value2){
                    filter.push(data_container[m])
                }
            } else {
                if(data_container[m][0] === value2){
                    filter.push(data_container[m])
                }
            }
        }
    }
    // console.log('第二次筛选的结果');
    // console.log(filter);
    return filter
}

// 编码2的表格生成器
function general_table_senior(table_id,th_list,td_list){
    if(th_list.length>0 && td_list.length>0){
        var table = document.createElement('table');
        table.setAttribute('id',table_id);
        var tbody = document.createElement('tbody');
        // 生成表头
        var tr = document.createElement('tr');
        for (var i=0; i < th_list.length; i++){
            let th = document.createElement('th');
            th.appendChild(document.createTextNode(th_list[i]));
            tr.appendChild(th);
        }

        tbody.appendChild(tr);
        // 生成普通内容
        var col1 = '';
        for (var i=0; i < td_list.length; i++){
            // 初始化 tr 标签
            var tr_nomal = document.createElement('tr');
            // 判断第一列合并
            for (var s=0; s < td_list[i].length; s++){
                // 如果头部相同，不再写入第一列内容
                if (col1 === td_list[i][0]){
                    // 刷新头部值
                    col1 = td_list[i][0];
                    let td = document.createElement('td');
                    if (s === 0){
                        continue
                    }else {
                        td.appendChild(document.createTextNode(td_list[i][s]));
                        tr_nomal.appendChild(td); 
                    }
                }
                // 如果头部与此前记录的不同，则生成rowspan 数量写入第一列td 
                else {
                    // 刷新头部值
                    col1 = td_list[i][0];
        
                    let td = document.createElement('td');
                    // 判断头部出现的次数，value,all
                    rowspan_num = count_col1(td_list[i][0],td_list);
                    td.setAttribute('rowspan',rowspan_num);
                    td.appendChild(document.createTextNode(td_list[i][s]));
                    tr_nomal.appendChild(td);
                }           
            }
            tbody.appendChild(tr_nomal);
        }
        table.appendChild(tbody);
        return table
    }else {
        return document.createTextNode('');
    }
}

// 判断头部出现的次数
function count_col1(value,list){
    count =0;
    for (let i=0; i<list.length;i++){
        if (list[i][0] === value){
            count += 1;
        }
    }
    return count
}
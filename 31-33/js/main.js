// 流程：获取输入，选择数据，格式化数据，输出


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

// 表格生成，两个参数，th_list,td_list
function general_table(table_id,th_list,td_list){
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
}



// 监听地区选择器，并取得输入。
var region_element = document.querySelector('#region_select');
region_element.addEventListener('change',function() {
    let selected = region_element.options[region_element.selectedIndex];

    let td_list = data_filter_1(selected.value,'region');
    let th_list = ['商品','地区','一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'];
    let table = general_table('table-region',th_list,td_list);
    if(document.querySelector('#table-region')){
        document.querySelector('#table-wraper').removeChild(document.querySelector('#table-region'));
    }
    
    document.querySelector('#table-wraper').appendChild(table);


    
})

// 监听商品选择器，并取得输入。
var product_element = document.querySelector('#product_select');
product_element.addEventListener('change',function() {
    let selected = product_element.options[product_element.selectedIndex];
    
    let td_list = data_filter_1(selected.value,'product');
    let th_list = ['商品','地区','一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'];
    let table = general_table('table-product',th_list,td_list);
    if(document.querySelector('#table-product')){
        document.querySelector('#table-wraper').removeChild(document.querySelector('#table-product'));
    }
    
    document.querySelector('#table-wraper').appendChild(table);


    
})



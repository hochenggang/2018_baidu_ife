// 捕获按钮组
var btngroup = document.getElementById('Button-group');
// 为按钮组添加点击监听
btngroup.addEventListener('click',function(event){compute(event)});
function compute(event){
    console.log('--------------START--------------');
    // 判断哪一个 RADIO 被选中
    var radio_check_a = document.getElementById('radio-a').checked;
    var radio_check_b = document.getElementById('radio-b').checked;
    if (radio_check_a) {
        choosed_num = 'A';
    }else if(radio_check_b){
        choosed_num = 'B';
    }else{
        choosed_num = '';
    }
    console.log('被选中的数字是：' + choosed_num);
    // 为按钮组添加事件代理
    // 捕获传入的事件，断点的两端分别对应主流浏览器和IE
    var event = event || window.event;
    // 通过事件追溯源事件，并捕获
    var orievent = event.target || event.srcElement;
    //测试能否返回源Element的内容
    console.log('执行的功能是：' + orievent.innerHTML);
    // 取得按钮对应的功能
    var btn_func = orievent.getAttributeNode('data-func').value;
    //console.log(btn_func);
    // 取得输入值
    var input_a = document.getElementById('num-a').value;
    var input_b = document.getElementById('num-b').value;
    //console.log(input_a.value,input_b.value);
    // 捕获输出DOM
    var result = document.getElementById('result');
    // 使用SWICH来做功能判断
    switch (btn_func) {
        // 判断输入是否为数字
        case 'isNum':
            if (choosed_num !== ''){
                if (choosed_num === 'A'){
                    var isNum_input = input_a;
                }else{
                    var isNum_input = input_b;
                }

                if (isNum(isNum_input)==='1'){
                    var isNum_result = '是数字'
                }else {
                    var isNum_result = '不是数字'
                }
            }else {
                var isNum_result = '请先选中数字'
            }

            console.log('执行结果：' + choosed_num +isNum_result);
            result.innerHTML = '执行结果：' + choosed_num +isNum_result;
            break;

        // 把 A 四舍五入为 B 个小数位数的数字
        case 'roundAbyB':
            if (isNum(input_a)==='1' && isNum(input_b)==='1'){
                var roundAbyB_result = Number(input_a).toFixed(Number(input_b));

            }else {
                var roundAbyB_result = '期望的输入值是数字'
            }
            
            console.log('执行结果：' + roundAbyB_result);
            result.innerHTML = '执行结果：' + roundAbyB_result;
            break;

        // 当前选中数字的绝对值
        case 'toabs':
            if (choosed_num !== ''){
                if (choosed_num === 'A'){
                    var isNum_input = input_a;
                }else{
                    var isNum_input = input_b;
                }

                if (isNum(isNum_input)==='1'){
                    var toabs_result = Math.abs(isNum_input);
                }else {
                    var toabs_result = '期望的输入值是数字'
                }
            }else {
                var toabs_result = '请先选中数字'
            }

            console.log('执行结果：'  + toabs_result);
            result.innerHTML = '执行结果：' + toabs_result;
            break;

        // 对当前选中的数字进行上舍入
        case 'toceil':
            if (choosed_num !== ''){
                if (choosed_num === 'A'){
                    var isNum_input = input_a;
                }else{
                    var isNum_input = input_b;
                }

                if (isNum(isNum_input)==='1'){
                    var toceil_result = Math.ceil(isNum_input);
                }else {
                    var toceil_result = '期望的输入值是数字'
                }
            }else {
                var toceil_result = '请先选中数字'
            }

            console.log('执行结果：'  + toceil_result);
            result.innerHTML = '执行结果：' + toceil_result;
            break;

        // 对当前选中的数字进行下舍入
        case 'tofloor':
            if (choosed_num !== ''){
                if (choosed_num === 'A'){
                    var isNum_input = input_a;
                }else{
                    var isNum_input = input_b;
                }

                if (isNum(isNum_input)==='1'){
                    var tofloor_result = Math.floor(isNum_input);
                }else {
                    var tofloor_result = '期望的输入值是数字'
                }
            }else {
                var tofloor_result = '请先选中数字'
            }

            console.log('执行结果：'  + tofloor_result);
            result.innerHTML = '执行结果：' + tofloor_result;
            break;

        // 把当前选中的数字四舍五入为最接近的整数
        case 'toround':
            if (choosed_num !== ''){
                if (choosed_num === 'A'){
                    var isNum_input = input_a;
                }else{
                    var isNum_input = input_b;
                }

                if (isNum(isNum_input)==='1'){
                    var toround_result = Math.round(isNum_input);
                }else {
                    var toround_result = '期望的输入值是数字'
                }
            }else {
                var toround_result = '请先选中数字'
            }

            console.log('执行结果：'  + toround_result);
            result.innerHTML = '执行结果：' + toround_result;
            break;

        // 返回 A 和 B 中的最高值
        case 'tomax':
            if (isNum(input_a)==='1' && isNum(input_b)==='1'){
                var tomax_result = Math.max(input_a,input_b);

            }else {
                var tomax_result = '期望的输入值是数字'
            }
            
            console.log('执行结果：' + tomax_result);
            result.innerHTML = '执行结果：' + tomax_result;
            break;

        // 返回 A 和 B 中的最低值
        case 'tomin':
            if (isNum(input_a)==='1' && isNum(input_b)==='1'){
                var tomin_result = Math.min(input_a,input_b);

            }else {
                var tomin_result = '期望的输入值是数字'
            }
            
            console.log('执行结果：' + tomin_result);
            result.innerHTML = '执行结果：' + tomin_result;
            break;

        default:
            break;
    }
    console.log('--------------END--------------');
}

// 判断数字的功能代码
function isNum(input){
    if((input !== '' && input !== null)){
        if(!isNaN(input)){
            var isNum_result = '1';
        }else{
            var isNum_result = '0';
        }
    }
    return isNum_result;
 }
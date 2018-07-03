//以下是简易计算器的代码，包含数字判断，事件监听和多重判断。
document.getElementById("simple-calculator-start").addEventListener("click", simple_calculator_start);
function simple_calculator_start(){
    var simple_calculator_operater = document.getElementById('simple-calculator-operater').value;
    var simple_calculator_num1 = document.getElementById('simple-calculator-first-number').value;
    var simple_calculator_num2 = document.getElementById('simple-calculator-second-number').value;
    var simple_calculator_result;
    var number_check_result_num1 = number_check(simple_calculator_num1);
    var number_check_result_num2 = number_check(simple_calculator_num2);
    if(number_check_result_num1 === true && number_check_result_num2 === true ){
        simple_calculator_num1 = Number(simple_calculator_num1);
        simple_calculator_num2 = Number(simple_calculator_num2);
        if (simple_calculator_operater === 'simple-calculator-add'){
            simple_calculator_result = simple_calculator_num1 + simple_calculator_num2;
        }
        else if (simple_calculator_operater === 'simple-calculator-minus'){
            simple_calculator_result = simple_calculator_num1 - simple_calculator_num2;
        }
        else if (simple_calculator_operater === 'simple-calculator-times'){
            simple_calculator_result = simple_calculator_num1 * simple_calculator_num2;
        }
        else {
            simple_calculator_result = simple_calculator_num1 / simple_calculator_num2;
        }
        document.getElementById('simple-calculator-result').innerHTML = simple_calculator_result;
        console.log(simple_calculator_result);
    }
    else{
        document.getElementById('simple-calculator-result').innerHTML = '简易计算器暂时不支持非数字计算';
        console.log('简易计算器暂时不支持非数字计算');
    }
}
function number_check(strValue){
    var number_check_re = /^(-?\d+|-?\d+\.\d+)$/;
    return number_check_re.test(strValue);  
}

//以下是简易十进制转二进制。
document.getElementById("simple-dec2bin-start").addEventListener("click", simple_dec2bin_start);
function simple_dec2bin_start(){
    var simple_dec2bin_input = document.getElementById('simple-dec2bin-input').value;
    var list = [];
    var number_check_simple_dec2bin_input = dec2bin_number_check(simple_dec2bin_input);
    if (number_check_simple_dec2bin_input === true) {
        simple_dec2bin_input = Number(simple_dec2bin_input);
        
        while (simple_dec2bin_input !== 0){
            console.log(simple_dec2bin_input);
            simple_dec2bin_output = simple_dec2bin_input % 2;
            simple_dec2bin_input = parseInt(simple_dec2bin_input / 2);
            list.unshift(simple_dec2bin_output);
            }
        result = list.join("")
            document.getElementById('simple-dec2bin-result').innerHTML = result;
            console.log(list);
        }
    else {
        document.getElementById('simple-dec2bin-result').innerHTML = '暂时只支持正十进制整数的转换';
        console.log('暂时只支持正十进制整数的转换');
    }
}
function dec2bin_number_check(strValue){
    var number_check_re = /^\d+$/;
    return number_check_re.test(strValue);  
}

//以下是简易十进制转二进制的第二版。
document.getElementById("simple2-dec2bin-start").addEventListener("click", simple2_dec2bin_start);
function simple2_dec2bin_start(){
    var simple2_dec2bin_input = document.getElementById('simple2-dec2bin-input').value;
    var list = [];
    var number_check_simple_dec2bin_input = dec2bin_number_check(simple2_dec2bin_input);
    if (number_check_simple_dec2bin_input === true) {
        simple2_dec2bin_input = Number(simple2_dec2bin_input);
        console.log('原始输入为：'+simple2_dec2bin_input);
        while (simple2_dec2bin_input !== 0){
            simple2_dec2bin_output = simple2_dec2bin_input % 2;
            simple2_dec2bin_input = parseInt(simple2_dec2bin_input / 2);
            list.unshift(simple2_dec2bin_output);
            }
        result = list.join("")
        if(document.getElementById('simple2-dec2bin-limit').value){
            var limit = document.getElementById('simple2-dec2bin-limit').value;
            console.log('最低位数为：'+limit);
            var number_check_simple_dec2bin_limit = dec2bin_number_check(limit);
            if(number_check_simple_dec2bin_limit === true) {
                console.log('原始结果为：'+result);
                console.log('加0次数：'+(limit-result.length));
                if(result.length < limit){
                    while(result.length < limit){
                        result = '0' + result;
                    }
                    document.getElementById('simple2-dec2bin-result').innerHTML = result;
                    console.log('输出结果为：'+result);
                }
                else{
                    document.getElementById('simple2-dec2bin-result').innerHTML = result;
                    console.log('输出结果为：'+result);
                } 
            }
            else{
                document.getElementById('simple2-dec2bin-result').innerHTML = '限制位数必须是正整数';
                console.log('限制位数必须是正整数');
            } 
        }
        else{
            document.getElementById('simple2-dec2bin-result').innerHTML = result;
            console.log('输出结果为：'+result);
        }
    }
    else {
        document.getElementById('simple2-dec2bin-result').innerHTML = '暂时只支持正十进制整数的转换';
        console.log('暂时只支持正十进制整数的转换');
    }
}
function dec2bin_number_check(strValue){
    var number_check_re = /^\d+$/;
    return number_check_re.test(strValue);  
}

//以下是一到一百的数字输出游戏。
document.getElementById("papapa-start").addEventListener("click", papapa);
function papapa(){
    var papapa_input = document.getElementById('papapa-input').value;
    if (papapa_number_check(papapa_input) === true) {
        papapa_input = Number(papapa_input)
        var result = [];
        for (let i = 1; i < papapa_input; i++) {
            if (i%3 === 0){
                var pa = 'PA';
                result.push(pa)
                console.log(pa);
            }
            else{
                var si = i.toString();
                if (si.includes("3")) {
                    var pa = 'PA';
                    result.push(pa)
                    console.log(pa);
                }
                else{
                    result.push(i)
                    console.log(i);
                }
                
            }  
        }
        document.getElementById('papapa-result').innerHTML = result;
    }
    else{
        document.getElementById('papapa-result').innerHTML = '暂时只支持正整数喔';
    }
}
function papapa_number_check(strValue){
    var number_check_re = /^\d+$/;
    return number_check_re.test(strValue);  
}

//以下是九九乘法表。
document.getElementById("times-table-start").addEventListener("click", times_table_start);
function times_table_start(){
    var column = [ "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    var row = ["9", "8", "7", "6", "5", "4", "3", "2", "1" ];
    var table = [];
    for (let i = 0; i < column.length; i++) {
        var a_clomn = [];
        for (let r = 1; r <= row[i]; r++) {
            a_clomn.push('<td>'+row[i].toString()+'*'+r.toString()+'='+row[i]*r.toString()+'</td>');
        }
        table.push('<tr>'+a_clomn.join("")+'</tr>');
    }
    result = '<table><tbody>'+table.reverse().join("")+'</tbody></table>';
    document.getElementById('times-table-result').innerHTML = result;
}

// 实现根据时间来说你好
window.addEventListener('load',say_hello);
function say_hello(){
    var d = new Date();
    var h = d.getHours();
    if (h > 6){
        var hello = '又一个上午，你好呀！'
    }
    else if ( h > 11){
        var hello = '吃午饭了吗，这将使你元气满满喔。'
    }
    else if ( h > 14){
        var hello = '下午了，别犯困喔。'
    }
    else if ( h > 18){
        var hello = '马上就到晚上了呢。'
    }
    else{
        var hello = '夜猫子你好。'
    }

    document.getElementById('say-hello').innerHTML = hello;
}
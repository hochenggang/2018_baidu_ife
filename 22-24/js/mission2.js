// 捕获按钮组
var btngroup_2 = document.getElementById('Button-group-2');
// 为按钮组添加点击监听
btngroup_2.addEventListener('click',function(event){compute_2(event)});
function compute_2(event){
    console.log('--------------START--------------');
    // 判断哪一个 RADIO 被选中
    var radio_check_a_2 = document.getElementById('radio-a-2').checked;
    var radio_check_b_2 = document.getElementById('radio-b-2').checked;
    if (radio_check_a_2) {
        choosed_num = 'A';
    }else if(radio_check_b_2){
        choosed_num = 'B';
    }else{
        choosed_num = '';
    }
    console.log('被选中的文本框是：' + choosed_num);
    // 为按钮组添加事件代理
    // 捕获传入的事件，断点的两端分别对应主流浏览器和IE
    var event_2 = event || window.event;
    // 通过事件追溯源事件，并捕获
    var orievent_2 = event.target || event.srcElement;
    //测试能否返回源Element的内容
    console.log('执行的功能是：' + orievent_2.innerHTML);
    // 取得按钮对应的功能
    var btn_func = orievent_2.getAttributeNode('data-func').value;
    //console.log(btn_func);
    // 取得文本框输入值
    var input_str_a_2 = document.getElementById('str-a-2').value;
    var input_str_b_2 = document.getElementById('str-b-2').value;
   
    //console.log(input_str_a,input_str_b)
    // 取得数字框输入值
    var input_num_a_2 = document.getElementById('num-a-2').value;
    var input_num_b_2 = document.getElementById('num-b-2').value;
    //console.log(input_num_a,input_num_b);
    // 捕获输出DOM
    var result_2 = document.getElementById('result-2');
    // 使用SWICH来做功能判断
    //console.log(btn_func)
    switch (btn_func) {
        
        case 'get-strlength':
            // 判断输入
            var get_strlength_inputstr = '';
            if (choosed_num !== ''){
                if(choosed_num === 'A'){
                    get_strlength_inputstr = input_str_a_2;
                }else{
                    get_strlength_inputstr = input_str_b_2;
                }
                // 开始获取文本长度
                get_strlength_result = get_strlength_inputstr.length
            }else{
                get_strlength_result = '请先选择一个文本框';
            }
            console.log('执行结果：'  + get_strlength_result);
            result_2.innerHTML = '执行结果：' + get_strlength_result;
            break;
        
        case 'get-strnumber3':
            // 判断输入
            if (choosed_num !== ''){
                if(choosed_num === 'A'){
                    var get_strlength_inputstr = input_str_a_2;
                }else{
                    var get_strlength_inputstr = input_str_b_2;
                }
                // 开始获取文本的第三个字符
                get_strlength_result = get_strlength_inputstr.charAt(2);
            }else{
                var get_strlength_result = '请先选择一个文本框';
            }
            console.log('执行结果：'  + get_strlength_result);
            result_2.innerHTML = '执行结果：' + get_strlength_result;
            break;            

        case 'str-concat':
            // 不需要判断输入，直接合并字符串
            var str_concat_result = input_str_a_2.concat(input_str_b_2);
            console.log('执行结果：'  + str_concat_result);
            result_2.innerHTML = '执行结果：' + str_concat_result;
            break;            

        case 'BindexOfA':
            // 不需要判断输入，直接合并字符串
            var BindexOfA_result = input_str_a_2.indexOf(input_str_b_2);
            if (BindexOfA_result === -1){
                BindexOfA_result = '检索无结果'
            }
            console.log('执行结果：'  + BindexOfA_result);
            result_2.innerHTML = '执行结果：' + BindexOfA_result;
            break;    

        case 'A-lastIndexOf-B':
            // 不需要判断输入，直接合并字符串
            var A_lastIndexOf_B_result = input_str_b_2.lastIndexOf(input_str_a_2);
            if (A_lastIndexOf_B_result === -1){
                A_lastIndexOf_B_result = '检索无结果'
            }
            console.log('执行结果：'  + A_lastIndexOf_B_result);
            result_2.innerHTML = '执行结果：' + A_lastIndexOf_B_result;
            break;           
        
        case 'slice-by-ab':
            var slice_by_ab_result = '';
            // 不需要判断输入，直接合并字符串
            if (isNum(input_num_a_2)==='1' && isNum(input_num_b_2)==='1'){
                var star = Number(input_num_a_2);
                var end = Number(input_num_b_2);
            } else {
                var star = '';
                var end = '';
            }            
            // 判断输入
            if (star !== ''){
                if (choosed_num !== ''){
                    if(choosed_num === 'A'){
                        slice_by_ab_result_inputstr = input_str_a_2;
                    }else{
                        slice_by_ab_result_inputstr = input_str_b_2;
                    }
                    slice_by_ab_result_result = slice_by_ab_result_inputstr.slice(star,end);
                }else{
                    slice_by_ab_result_result = '请先选择一个文本框';
                }      
            } else{
                slice_by_ab_result_result = '请输入数字';
            }   
            
            console.log('执行结果：'  + slice_by_ab_result_result);
            result_2.innerHTML = '执行结果：' + slice_by_ab_result_result;
            break;           

            case 'A-lastIndexOf-B':
            // 不需要判断输入，直接合并字符串
            var A_lastIndexOf_B_result = input_str_b_2.lastIndexOf(input_str_a_2);
            if (A_lastIndexOf_B_result === -1){
                A_lastIndexOf_B_result = '检索无结果'
            }
            console.log('执行结果：'  + A_lastIndexOf_B_result);
            result_2.innerHTML = '执行结果：' + A_lastIndexOf_B_result;
            break;           
        
        case 'get-lines':
            
            // 判断输入
            
            if (choosed_num !== ''){
                if(choosed_num === 'A'){
                    
                }else{
                    
                }
                
            }else{
                
            }      
          
            
            console.log('执行结果：'  );
            result_2.innerHTML = '执行结果：';
            break;                 

        case 'get-substr':
            
            // 判断输入
            
            if (choosed_num !== ''){
                if(choosed_num === 'A'){
                    
                }else{
                    
                }
                
            }else{
                
            }      
          
            
            console.log('执行结果：'  );
            result_2.innerHTML = '执行结果：';
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
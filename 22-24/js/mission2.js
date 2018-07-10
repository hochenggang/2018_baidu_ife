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
                    document.getElementById('str-a-2').getAttributeNode('id').value = 'ta';
                    get_lines_result = calculateHeight();
                    document.getElementById('ta').getAttributeNode('id').value = 'str-a-2';
                }else{
                    document.getElementById('str-b-2').getAttributeNode('id').value = 'ta';
                    get_lines_result = calculateHeight();
                    document.getElementById('ta').getAttributeNode('id').value = 'str-b-2';
                }
                
            }else{
                get_lines_result = '输入为空';
            }      
            console.log('执行结果：'+get_lines_result  );
            result_2.innerHTML = '执行结果：'+get_lines_result;
            break;                 

        case 'get-substr':
            var get_substr_result = '';
            if (isNum(input_num_a_2)==='1' && isNum(input_num_b_2)==='1'){
                var star = Number(input_num_a_2);
                var length = Number(input_num_b_2);
            } else {
                var star = '';
                var length = '';
            }            
            // 判断数值
            if (star !== ''){
                if (choosed_num !== ''){
                    if(choosed_num === 'A'){
                        get_substr_result_inputstr = input_str_a_2;
                    }else{
                        get_substr_result_inputstr = input_str_b_2;
                    }
                    get_substr_result = get_substr_result_inputstr.substr(star,length);
                }else{
                    get_substr_result = '请先选择一个文本框';
                }      
            } else{
                get_substr_result = '请输入数字';
            }   
            
            console.log('执行结果：'  + get_substr_result);
            result_2.innerHTML = '执行结果：' + get_substr_result;
            break;  

        case 'to-upper':
            // 判断输入
            if (choosed_num !== ''){
                if(choosed_num === 'A'){
                    to_upper_result = input_str_a_2.toLocaleUpperCase();

                }else{
                    to_upper_result = input_str_b_2.toLocaleUpperCase();
                }
                
            }else{
                to_upper_result = '请先选择一个文本框';
            }      
            console.log('执行结果：'+to_upper_result);
            result_2.innerHTML = '执行结果：'+to_upper_result;
            break;   

        case 'to-lower':
            // 判断输入
            if (choosed_num !== ''){
                if(choosed_num === 'A'){
                    to_lower_result = input_str_a_2.toLocaleLowerCase();

                }else{
                    to_lower_result = input_str_b_2.toLocaleLowerCase();
                }
                
            }else{
                to_lower_result = '请先选择一个文本框';
            }      
            console.log('执行结果：'+to_lower_result);
            result_2.innerHTML = '执行结果：'+to_lower_result;
            break;   

        case 'str-ipblank':
            // 判断输入
            if (choosed_num !== ''){
                if(choosed_num === 'A'){
                    
                    str_ipblank_result = input_str_a_2.replace(/ /g,'');

                }else{
                    str_ipblank_result = input_str_b_2.replace(/ /g,'');
                }
                
            }else{
                str_ipblank_result = '请先选择一个文本框';
            }      
            console.log('执行结果：'+str_ipblank_result);
            result_2.innerHTML = '执行结果：'+str_ipblank_result;
            break;  

        case 'replace-a':
            // 判断输入
            if (choosed_num !== ''){
                if(choosed_num === 'A'){
                    
                    replace_a_result = input_str_a_2.replace(/a/g,input_str_b_2);
                    document.getElementById('str-a-2').value = input_str_a_2.replace(/a/g,input_str_b_2);
    
                }else{
                    replace_a_result = input_str_b_2.replace(/a/g,input_str_a_2);
                    document.getElementById('str-b-2').value =  input_str_b_2.replace(/a/g,input_str_a_2);

                }
                
            }else{
                replace_a_result = '请先选择一个文本框';
            }      
            console.log('执行结果：'+replace_a_result);
            result_2.innerHTML = '执行结果：'+replace_a_result;
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

 // 判断文本框行数，引用自 https://stackoverflow.com/questions/1760629/how-to-get-number-of-rows-in-textarea-using-javascript/1761203#1761203
 var calculateContentHeight = function( ta, scanAmount ) {
    var origHeight = ta.style.height,
        height = ta.offsetHeight,
        scrollHeight = ta.scrollHeight,
        overflow = ta.style.overflow;
    /// only bother if the ta is bigger than content
    if ( height >= scrollHeight ) {
        /// check that our browser supports changing dimension
        /// calculations mid-way through a function call...
        ta.style.height = (height + scanAmount) + 'px';
        /// because the scrollbar can cause calculation problems
        ta.style.overflow = 'hidden';
        /// by checking that scrollHeight has updated
        if ( scrollHeight < ta.scrollHeight ) {
            /// now try and scan the ta's height downwards
            /// until scrollHeight becomes larger than height
            while (ta.offsetHeight >= ta.scrollHeight) {
                ta.style.height = (height -= scanAmount)+'px';
            }
            /// be more specific to get the exact height
            while (ta.offsetHeight < ta.scrollHeight) {
                ta.style.height = (height++)+'px';
            }
            /// reset the ta back to it's original height
            ta.style.height = origHeight;
            /// put the overflow back
            ta.style.overflow = overflow;
            return height;
        }
    } else {
        return scrollHeight;
    }
}

var calculateHeight = function() {
    var ta = document.getElementById("ta"),
        style = (window.getComputedStyle) ?
            window.getComputedStyle(ta) : ta.currentStyle,
        
        // This will get the line-height only if it is set in the css,
        // otherwise it's "normal"
        taLineHeight = parseInt(style.lineHeight, 10),
        // Get the scroll height of the textarea
        taHeight = calculateContentHeight(ta, taLineHeight),
        // calculate the number of lines
        numberOfLines = Math.ceil(taHeight / taLineHeight);

    return numberOfLines;
};


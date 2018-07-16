// 流程：获取输入，生成提示，响应（输入，点击，键盘），设置结果
// 取得需要元素
var input_element = document.querySelector('#email-input');
var notice_element = document.querySelector('#email-sug-wrapper');

// 输入清洗
function clean_input(input_element_value){
    if (input_element_value.length>0){
        return trim(input_element_value)
    }else{
        return ''
    }
}

// 清除空格
function trim(str) {
    return str.replace(/(^\s+)|(\s+$)/g, "");
}

// 判断是否显示提示器
function is_display_notice(input_element_value){
    if (input_element_value.length < 1){
        notice_element.innerHTML = '';
    }
}

// 生成提示
function general_notice(postfixList,input_element_value,notice_element){
    // 清空 notice_element
    notice_element.innerHTML = '';

    var input_element_value_before = '';
    var input_element_value_after = '';

    // 若存在@，将输入值用@分割，并取得第一个@的前值和后值
    if (input_element_value.indexOf('@').toString()){
        input_element_value_before = input_element_value.split('@')[0];
        input_element_value_after = input_element_value.split('@')[1];
    }
    // 使用@后值在邮件列表中检索，如果存在：则返回存在值，若否：返回全部值
    var satisfy_email = [];
    for (var i=0; i<postfixList.length;i++){
        var one_email = postfixList[i];
        if (one_email.indexOf(input_element_value_after).toString() !== '-1'){
            satisfy_email.push(one_email);
        }
    }
    if (satisfy_email.length < 1){
        satisfy_email = postfixList;
    }

    // 创建li节点
    for (var i=0; i<satisfy_email.length;i++){
        notice_element_li = document.createElement('li');
        //console.log(input_element_value_before +'@'+ satisfy_email[i])
        notice_text = document.createTextNode(input_element_value_before +'@'+ satisfy_email[i]);
        notice_element_li.appendChild(notice_text);
        notice_element.appendChild(notice_element_li);
        //console.log(notice_element)
    }

    // 若有效输入为空，则关闭提示
    is_display_notice(input_element_value)

    // 设置焦点
    input_element.focus()

}

// 响应输入变化
input_element.addEventListener('input',input_element_input);
function input_element_input(){
    let input_element = document.querySelector('#email-input');
    let notice_element = document.querySelector('#email-sug-wrapper');
    // 调用 clean_input 来清除输入中的空格
    let input_element_value = clean_input(input_element.value);
    let postfixList = ['163.com', 'gmail.com', '126.com', 'qq.com', '263.net'];
    // 生成提示
    general_notice(postfixList,input_element_value,notice_element);
    // 初始化 li 的索引
    li_index = -1;
}

// 响应提示框点击
notice_element.addEventListener('click',function(event){notice_element_click(event)} );
function notice_element_click(event){
    // 捕获传入的事件，断点的两端分别对应主流浏览器和IE
    var event = event || window.event;
    // 通过事件追溯源事件，并捕获
    var child_event = event.target || event.srcElement;
    // 这样就选中了 父元素中被点击的子元素，后面就可以对这个子元素进行操作
    //console.log(child_event.innerHTML);
    input_element.value = child_event.textContent;
    // 点击后关闭提示
    notice_element.innerHTML = '';
    // 设置焦点
    input_element.focus()
}

// 设置样式
function set_selected_li_css_on (selected_li){
    selected_li.style.borderLeft = '2px solid #3f87a6';
    selected_li.style.padding = '2px 5px';
    selected_li.style.color = '#3f87a6';

}
function set_selected_li_css_off (selected_li){
    selected_li.style.color  = '';
    selected_li.style.borderLeft = '';
    selected_li.style.padding = '';
}

// 响应键盘
// 数据化 li 的位置
var li_index = -1;
input_element.addEventListener('keydown',function(event){input_element_keydown(event)} );
function input_element_keydown(event){
    // 选取提取中的所有的 Li
    var all_li = notice_element.querySelectorAll('li');
    var selected_li = '';
    // 响应下键被按下
    if (event.keyCode === 40){
        // 自增li的位置
        li_index += 1;
        // 判断是否上越界，若是：将定位设置为0
        if (li_index === all_li.length){
            var selected_li = all_li.item(li_index-1);
            set_selected_li_css_off(selected_li);
            li_index = 0;
        }
        // 设置样式
        var selected_li = all_li.item(li_index);
        set_selected_li_css_on(selected_li);

        // 在非下越界的情况下，取消上一li的样式
        if(li_index > 0) {
            let selected_li_before = all_li.item(li_index-1);
            set_selected_li_css_off(selected_li_before);
        }
    }

    // 响应上键被按下
    else if(event.keyCode === 38){
        // 自减li的位置
        li_index -= 1;
        // 判断是否下越界，若是：将定位设置为最后一个Li
        if (li_index === -1){
            var selected_li = all_li.item(li_index + 1);
            set_selected_li_css_off(selected_li);
            li_index = all_li.length-1;
        }
        // 判断是否下越界，若否：设置样式
        if(li_index > -1) {
            var selected_li = all_li.item(li_index);
            set_selected_li_css_on(selected_li);
        }
        // 判断是否下越界，若否：取消上一Li的样式
        if (li_index < all_li.length -1){
            let selected_li_before = all_li.item(li_index + 1);
            set_selected_li_css_off(selected_li_before);
        }
    }
    // 响应回车键被按下
    else if (event.keyCode === 13){
        // 获取当前被选li的值，填充到 input
        input_element.value = all_li.item(li_index).innerHTML;
        // 点击后关闭提示
        notice_element.innerHTML = '';
        // 设置焦点
        input_element.focus()
        
    } 
    else if (event.keyCode === 27){
        // 获取当前被选li的值，填充到 input
        input_element.select();
        // 设置焦点
        input_element.focus()  
    } 
    
}


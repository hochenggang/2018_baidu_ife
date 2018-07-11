// 数组来实现简单栈列

var stack_btng_right = document.getElementById('stack-btng-right');
var stack_input_right = document.getElementById('stack-input-right');
var stack_cont_right = document.getElementById('stack-cont-right');
var stack_right = ["apple" ,"pear"];
stack_btng_right.addEventListener('click',function(event){array_stack_right(event);});

function array_stack_right(event){
    console.log('--------------START--------------');
    var event = event || window.event;
    var src_element = event.target || event.srcElement;
    console.log('点击的按钮是：' + src_element.innerHTML)
    var btnfunc = src_element.getAttributeNode('data-btnfunc').value;
    console.log(btnfunc)
    switch (btnfunc) {
        case 'stack-in-btn':
            if (stack_input_right.value.length > 0){
                //在数组左边插入输入框中的元素
                stack_right.unshift(stack_input_right.value);
                stack_cont_right.innerHTML = stack_right.join('-> ');
                console.log('输出为：' + stack_cont_right.innerHTML)
            }else {
                stack_cont_right.innerHTML = '输入不能为空';
            }
            break;
        case 'stack-out-btn':
            if (stack_right.length > 0){
                stack_cont_right.innerHTML = '元素 ' + stack_right.pop() + ' 出栈，栈更新为：' + stack_right.join('-> ');
                console.log('输出为：' + stack_cont_right.innerHTML)
            }else {
                stack_cont_right.innerHTML = '栈已经取尽';
            }
            break;
        case 'stack-font-btn':
            if (stack_right.length > 0){
                stack_cont_right.innerHTML = '栈顶为 ' + stack_right[stack_right.length-1];
                console.log('输出为：' + stack_cont_right.innerHTML)
            }else {
                stack_cont_right.innerHTML = '栈已经取尽';
            }
            break;
        case 'stack-empty-btn':
            if (stack_right.length > 0){
                stack_cont_right.innerHTML = '栈不为空： ' + stack_right.join('->');
                console.log('输出为：' + stack_cont_right.innerHTML)
            }else {
                stack_cont_right.innerHTML = '栈已经取尽';
            }
            break;

        default:
            break;
    }





    console.log('--------------END--------------');
}
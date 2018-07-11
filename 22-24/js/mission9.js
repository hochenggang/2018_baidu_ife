// 数组来实现简单栈列

var stack_btng_left = document.getElementById('stack-btng-left');
var stack_input_left = document.getElementById('stack-input-left');
var stack_cont_left = document.getElementById('stack-cont-left');
var stack_left = ["apple" ,"pear"];
stack_btng_left.addEventListener('click',function(event){array_stack_left(event);});

function array_stack_left(event){
    console.log('--------------START--------------');
    var event = event || window.event;
    var src_element = event.target || event.srcElement;
    console.log('点击的按钮是：' + src_element.innerHTML)
    var btnfunc = src_element.getAttributeNode('data-btnfunc').value;
    console.log(btnfunc)
    switch (btnfunc) {
        case 'stack-in-btn':
            if (stack_input_left.value.length > 0){
                //在数组左边插入输入框中的元素
                stack_left.push(stack_input_left.value);
                stack_cont_left.innerHTML = stack_left.join('<-');
                console.log('输出为：' + stack_cont_left.innerHTML)
            }else {
                stack_cont_left.innerHTML = '输入不能为空';
            }
            break;
        case 'stack-out-btn':
            if (stack_left.length > 0){
                stack_cont_left.innerHTML = '元素 ' + stack_left.shift() + ' 出栈，栈更新为：' + stack_left.join('<-');
                console.log('输出为：' + stack_cont_left.innerHTML)
            }else {
                stack_cont_left.innerHTML = '栈已经取尽';
            }
            break;
        case 'stack-font-btn':
            if (stack_left.length > 0){
                stack_cont_left.innerHTML = '栈顶为 ' + stack_left[0];
                console.log('输出为：' + stack_cont_left.innerHTML)
            }else {
                stack_cont_left.innerHTML = '栈已经取尽';
            }
            break;
        case 'stack-empty-btn':
            if (stack_left.length > 0){
                stack_cont_left.innerHTML = '栈不为空： ' + stack_left.join('<-');
                console.log('输出为：' + stack_cont_left.innerHTML)
            }else {
                stack_cont_left.innerHTML = '栈已经取尽';
            }
            break;

        default:
            break;
    }





    console.log('--------------END--------------');
}
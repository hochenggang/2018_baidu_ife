// 数组来实现简单队列

var queue_btng_left = document.getElementById('queue-btng-left');
var queue_input_left = document.getElementById('queue-input-left');
var queue_cont_left = document.getElementById('queue-cont-left');
var queue_left = ["apple" ,"pear"];
queue_btng_left.addEventListener('click',function(event){array_queue_left(event);});

function array_queue_left(event){
    console.log('--------------START--------------');
    var event = event || window.event;
    var src_element = event.target || event.srcElement;
    console.log('点击的按钮是：' + src_element.innerHTML)
    var btnfunc = src_element.getAttributeNode('data-btnfunc').value;
    console.log(btnfunc)
    switch (btnfunc) {
        case 'queue-in-btn':
            if (queue_input_left.value.length > 0){
                //在数组左边插入输入框中的元素
                queue_left.push(queue_input_left.value);
                queue_cont_left.innerHTML = queue_left.join('<-');
                console.log('输出为：' + queue_cont_left.innerHTML)
            }else {
                queue_cont_left.innerHTML = '输入不能为空';
            }
            break;
        case 'queue-out-btn':
            if (queue_left.length > 0){
                queue_cont_left.innerHTML = '元素 ' + queue_left.shift() + ' 出队，队列更新为：' + queue_left.join('<-');
                console.log('输出为：' + queue_cont_left.innerHTML)
            }else {
                queue_cont_left.innerHTML = '队列已经取尽';
            }
            break;
        case 'queue-font-btn':
            if (queue_left.length > 0){
                queue_cont_left.innerHTML = '队头为 ' + queue_left[0];
                console.log('输出为：' + queue_cont_left.innerHTML)
            }else {
                queue_cont_left.innerHTML = '队列已经取尽';
            }
            break;
        case 'queue-empty-btn':
            if (queue_left.length > 0){
                queue_cont_left.innerHTML = '队列不为空： ' + queue_left.join('<-');
                console.log('输出为：' + queue_cont_left.innerHTML)
            }else {
                queue_cont_left.innerHTML = '队列已经取尽';
            }
            break;

        default:
            break;
    }





    console.log('--------------END--------------');
}
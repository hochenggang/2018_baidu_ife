// 数组来实现简单队列

var queue_btng = document.getElementById('queue-btng');
var queue_input = document.getElementById('queue-input');
var queue_cont = document.getElementById('queue-cont');
var queue = ["apple", "pear"];
queue_btng.addEventListener('click',function(event){array_queue(event);});

function array_queue(event){
    console.log('--------------START--------------');
    var event = event || window.event;
    var src_element = event.target || event.srcElement;
    console.log('点击的按钮是：' + src_element.innerHTML)
    var btnfunc = src_element.getAttributeNode('data-btnfunc').value;
    console.log(btnfunc)
    switch (btnfunc) {
        case 'queue-in-btn':
            if (queue_input.value.length > 0){
                //在数组左边插入输入框中的元素
                queue.unshift(queue_input.value);
                queue_cont.innerHTML = queue.join('->');
                console.log('输出为：' + queue_cont.innerHTML)
            }else {
                queue_cont.innerHTML = '输入不能为空';
            }
            break;
        case 'queue-out-btn':
            if (queue.length > 0){
                queue_cont.innerHTML = '元素 ' + queue.pop() + ' 出队，队列更新为：' + queue.join('->');
                console.log('输出为：' + queue_cont.innerHTML)
            }else {
                queue_cont.innerHTML = '队列已经取尽';
            }
            break;
        case 'queue-font-btn':
            if (queue.length > 0){
                queue_cont.innerHTML = '队头为 ' + queue[queue.length-1];
                console.log('输出为：' + queue_cont.innerHTML)
            }else {
                queue_cont.innerHTML = '队列已经取尽';
            }
            break;
        case 'queue-empty-btn':
            if (queue.length > 0){
                queue_cont.innerHTML = '队头不为空： ' + queue.join('->');
                console.log('输出为：' + queue_cont.innerHTML)
            }else {
                queue_cont.innerHTML = '队列已经取尽';
            }
            break;

        default:
            break;
    }





    console.log('--------------END--------------');
}
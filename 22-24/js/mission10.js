var sort_1 = [43, 54, 4, -4, 84, 100, 58, 27, 140];
var sort_2 = ['apple', 'dog', 'cat', 'car', 'zoo', 'orange', 'airplane'];
var sort_3 = [[10, 14], [16, 60], [7, 44], [26, 35], [22, 63]];
var sort_4 = [{id:1,name:"candy",value:40},{id:2,name:"Simon",value:50},{id:3,name:"Tony",value:45},{id:4,name:"Annie",value:60}];


var sort_btng = document.getElementById('sort-btng');
var sort_result = document.getElementById('sort-result');

sort_btng.addEventListener('click',function(event){sort_array(event);});

function sort_array(event){
    console.log('--------------START--------------');
    var event = event || window.event;
    var src_element = event.target || event.srcElement;
    console.log('点击的按钮是：' + src_element.innerHTML)
    var btnfunc = src_element.getAttributeNode('data-btnfunc').value;
    //console.log(btnfunc)
    switch (btnfunc) {
        case 'sort1':
            var positive_sort1 = sort_1.sort(function (x, y) {return x - y;});
            sort_result.innerHTML =  positive_sort1;
            break;
        case 'sort1_':
            var inverted_sort1 = sort_1.sort(function (x, y) {return y - x;});
            sort_result.innerHTML = inverted_sort1;
            break;

        case 'sort2':
            var sort2 = sort_2.sort();
            sort_result.innerHTML = sort2;
            break;

        case 'sort2_':
            var sort2_ = sort_2.sort(function (x, y) {if (y > x){return 1}});
            sort_result.innerHTML = sort2_;
            break;

        case 'sort3':
            var sort3 = sort_3.sort(function (x, y) {if (y[1] > x[1]){return 1}});
            console.log('输出结果为：');
            console.log(sort3);
            sort_result.innerHTML = '已输出到console';
            break;

        case 'sort4':
            var sort4 = sort_4.sort(function (a, b) { return (a.value - b.value)});
            console.log('输出结果为：');
            console.log(sort4);
            sort_result.innerHTML = '已输出到console';
            break;
        default:
            break;
    }
    console.log('--------------END--------------');
}


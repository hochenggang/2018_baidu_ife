// 编码二
// 第一步是新建复选框
// 第二步是监听复选框，在完成其内部逻辑后，返回所选值和当前复选框的ID
// 第三步是根据所选值进行渲染

// 生成选项
document.getElementById('mul-select-wrapper').appendChild(general_wrapper_item('wrapper-region', ['华北', '华东', '华南']));
document.getElementById('mul-select-wrapper').appendChild(general_wrapper_item('wrapper-product', ['手机', '笔记本', '智能音箱']));
// 监听选择框,当点击checkbox时，返回当前复选框的状态
var wrapper_region = document.getElementById('wrapper-region');
var wrapper_product = document.getElementById('wrapper-product');
wrapper_region.addEventListener('click', processEvent, false);
wrapper_product.addEventListener('click', processEvent, false);

var r;
var p;

function initialization(){
    let stater = get_choose_state('wrapper-region');
    let statep = get_choose_state('wrapper-product');
    p = statep.okValue;
    r = stater.okValue;
    rander_data(r, p);
    draw(null)
}

initialization()

function processEvent(event) {
    let e = event || window.event;
    let srcElement = e.target || e.srcElement;
    if (srcElement.getAttribute('type')) {
        if (srcElement.getAttribute('type') === 'checkbox') {
            let state = get_choose_state(this.getAttribute('id'));
            state['srcElement'] = srcElement;
            switch (this.getAttribute('id')) {
                case 'wrapper-region':
                    r = multiple_wrapper_logic(state).okValue;
                    rander_data(r, p);
                    break;
                case 'wrapper-product':
                    p = multiple_wrapper_logic(state).okValue;
                    rander_data(r, p);
                    break;
                default:
                    break;
            }
        }
    }
}

let table = document.querySelector('#code2-table');
table.addEventListener('mouseover',flushPic);
function flushPic(e){
    let event = e || window.event;
    let src = event.target || event.srcElement; 
    //console.log(src.parentNode)
    let tr = src.parentNode;
    let tds = tr.querySelectorAll('td');
    if (tds.length === 14){
        var k =2;
    }else {
        var k =1;
    }
    let data = [];
    for (let i=k;i<tds.length;i++){
        data.push(Number(tds[i].innerHTML));
    }
    if (data[1].length){
        data = null;
    }
    draw(data)
}
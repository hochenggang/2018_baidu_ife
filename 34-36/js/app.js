// 编码二
// 第一步是新建复选框
// 第二步是监听复选框，在完成其内部逻辑后，返回所选值和当前复选框的ID
// 第三步是根据所选值进行渲染
document.getElementById('mul-select-wrapper').appendChild(general_wrapper_item('wrapper-region', ['华北', '华东', '华南']));
document.getElementById('mul-select-wrapper').appendChild(general_wrapper_item('wrapper-product', ['手机', '笔记本', '智能音箱']));

var wrapper_region = document.getElementById('wrapper-region');
var wrapper_product = document.getElementById('wrapper-product');

// 监听选择框,当点击checkbox时，返回当前复选框的状态
wrapper_region.addEventListener('click', processEvent, false);
wrapper_product.addEventListener('click', processEvent, false);

var r;
var p;
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
                    rander_bar(data_filter_by_list(r, 'region', p));
                    break;
                case 'wrapper-product':
                    p = multiple_wrapper_logic(state).okValue;
                    rander_data(r, p);
                    rander_bar(data_filter_by_list(r, 'region', p));
                    break;
                default:
                    break;
            }
        }
    }
}
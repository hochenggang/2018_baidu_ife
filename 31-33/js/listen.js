region_element.addEventListener('change',region_element_change);
product_element.addEventListener('change',product_element_change);

wrapper_region.addEventListener('click',function(event) {
    event = event || window.event;
    let srcElement = event.target || event.srcElement;
    if(srcElement.getAttribute('type')) {
        if (srcElement.getAttribute('type') === 'checkbox'){
            let state = get_choose_state('wrapper-region');
            state['srcElement'] = srcElement;
            // 状态获取后开始复选框内部逻辑处理
            wrapper_region_values['wrapper_id'] = multiple_wrapper_logic(state).id;
            wrapper_region_values['data'] = multiple_wrapper_logic(state).okValue;
            let data = [wrapper_region_values,wrapper_product_values]
            // 开始渲染
            //
            rander_data(data)

        }
    }
},false);


wrapper_product.addEventListener('click',function(event) {
    event = event || window.event;
    let srcElement = event.target || event.srcElement;
    if(srcElement.getAttribute('type')) {
        if (srcElement.getAttribute('type') === 'checkbox'){
            let state = get_choose_state('wrapper-product');
            state['srcElement'] = srcElement;
            // 状态获取后开始复选框内部逻辑处理
            wrapper_product_values['wrapper_id'] = multiple_wrapper_logic(state).id;
            wrapper_product_values['data'] = multiple_wrapper_logic(state).okValue;
            let data = [wrapper_region_values,wrapper_product_values]
            // 开始渲染
            //
            rander_data(data)
        }
    }
},false);
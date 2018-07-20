// 流程：获取输入，选择数据，格式化数据，输出
// 编码一，分别监听两个输入，分别输出。编码二在编码一的基础上做一次存在判断，用来输出合集。
// 监听地区选择器，并取得输入。
var region_element = document.querySelector('#code1-region_select');
var region_selected = region_element.options[region_element.selectedIndex];
// 监听商品选择器，并取得输入。
var product_element = document.querySelector('#code1-product_select');
var product_selected = product_element.options[product_element.selectedIndex];
// 编码二
// 思路
// 第一步是新建复选框
// 第二步是监听复选框，在完成其内部逻辑后，返回所选值和当前复选框的ID
// 第三步是根据所选值进行渲染
// 在ID 为 code2 的容器中，建立复选框容器
document.getElementById('code2-wrapper').appendChild(general_wrapper_item('wrapper-region',['华北','华东','华南']));
document.getElementById('code2-wrapper').appendChild(general_wrapper_item('wrapper-product',['手机','笔记本','智能音箱']));
var wrapper_region_values = {};
var wrapper_product_values = {};
// 监听选择框,当点击checkbox时，返回当前复选框的状态
var wrapper_region = document.getElementById('wrapper-region');
var wrapper_product = document.getElementById('wrapper-product');
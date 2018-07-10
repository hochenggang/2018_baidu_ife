// 字符串练习-去除首尾空格
// 思路：获取字符串，使用while来持续监测首尾是否空格，若是则去除，若否则输出
var id_strpro_input = document.getElementById('id-strpro-input');
var id_strpro_button = document.getElementById('id-strpro-button');
var id_strpro_result = document.getElementById('id-strpro-result');

id_strpro_button.addEventListener('click', strpro);
function strpro(){
    console.log('--------------START--------------');
    if (id_strpro_input.value !== ''){
        //console.log('输入存在')
        var id_strpro_result_value = id_strpro_input.value;
        while(id_strpro_result_value.substr(0,1)===' '){
            id_strpro_result_value = id_strpro_result_value.substr(1,id_strpro_result_value.length);
            //console.log('去除前空格+1');
        }
        while(id_strpro_result_value.substr(-1,1)===' '){
            id_strpro_result_value = id_strpro_result_value.substr(0,id_strpro_result_value.length-1);
            //console.log('去除后空格+1');
        }
        id_strpro_result.innerHTML = id_strpro_result_value;
        console.log('执行结果：' + id_strpro_result_value);
    }else{
        console.log('输入为空');
        id_strpro_result.innerHTML = '输入为空';
    }
    console.log('--------------END--------------');
}

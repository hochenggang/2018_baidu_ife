// 字符串练习-去除重复字符
// 思路：获取字符串，使用while来持续监测连续两个字符是否相等是否空格，若是则替换一次该字符为空字符，若否则输出
var id_strpro2_input = document.getElementById('id-strpro2-input');
var id_strpro2_button = document.getElementById('id-strpro2-button');
var id_strpro2_result = document.getElementById('id-strpro2-result');

id_strpro2_button.addEventListener('click', strpro2);
function strpro2(){
    console.log('--------------START--------------');
    if (id_strpro2_input.value !== ''){
        //console.log('输入存在')
        var id_strpro2_result_value = id_strpro2_input.value;
        var id_strpro2_result_value_Array = id_strpro2_result_value.split("");
        for (var i = 0; i < id_strpro2_result_value_Array.length-1; i++){
            if (id_strpro2_result_value_Array[i]===id_strpro2_result_value_Array[i+1]){
                id_strpro2_result_value_Array.splice(i,1,'');
            }
        }
        console.log('执行结果：'+id_strpro2_result_value_Array.join(''));
        id_strpro2_result.innerHTML = id_strpro2_result_value_Array.join('');
    }else{
        console.log('输入为空');
        id_strpro2_result.innerHTML = '输入为空';
    }
    console.log('--------------END--------------');
}

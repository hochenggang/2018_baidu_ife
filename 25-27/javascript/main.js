// 功能：取值
function get_element_value(css_selector){
    return document.querySelector(css_selector).value;
}

// 功能：选项生成器
function option_creator(option_type,option_extend){
    start_value = option_extend[0];
    end_value = option_extend[1];
    option_dom = '';
    while(start_value < end_value+1){
        option_template = '<option value="'+ start_value +'">'+ start_value +'</option>';
        option_dom += option_template;
        start_value += 1;
    }
    switch (option_type) {
        case 'YE': document.querySelector('#year-select').innerHTML = option_dom; break;         
        case 'MO': document.querySelector('#month-select').innerHTML = option_dom; break;         
        case 'DA': document.querySelector('#day-select').innerHTML = option_dom; break;     
        case 'HO': document.querySelector('#hour-select').innerHTML = option_dom; break;     
        case 'MI': document.querySelector('#minute-select').innerHTML = option_dom; break;     
        case 'SE': document.querySelector('#second-select').innerHTML = option_dom; break;         
        default: break;
    } 
}

// 功能：执行选项生成
function general_initial_selection(){
    option_creator('YE',[2000,2032]);
    option_creator('MO',[1,12]);
    option_creator('DA',[1,31]);
    option_creator('HO',[0,23]);
    option_creator('MI',[0,59]);
    option_creator('SE',[0,59]); 
}

// 功能：判断闰年，刷新天选择器
function judge_month(){
    let year_select_value = get_element_value('#year-select');
    let month_select_value = get_element_value('#month-select');
    if (year_select_value % 4 === 0 && (year_select_value % 100 !== 0 || year_select_value % 400 === 0)){
        year_month_day = [31,29,31,30,31,30,31,31,30,31,30,31];
        option_creator('DA',[1,year_month_day[month_select_value-1]]);
    }else {
        year_month_day = [31,28,31,30,31,30,31,31,30,31,30,31];
        option_creator('DA',[1,year_month_day[month_select_value-1]]);
    }
}

// 功能：读取当前时间。
function get_now_time(){
    let time_now = new Date();
    return time_now.getTime();
}

// 功能：读取所选时间。
function get_input_time(){
    let value_list = [];
    let Selection_id_list = ["#year-select","#month-select","#day-select","#hour-select","#minute-select","#second-select"];
    for (var i=0; i < Selection_id_list.length; i++){
        let value = get_element_value(Selection_id_list[i]);
        value_list.push(value);
    }
    // 通过日期生成时间戳 Date.UTC(YE,MO,DA,HO,MI,SE)
    let timestamp = (new Date(value_list[0],value_list[1]-1,value_list[2],value_list[3],value_list[4],value_list[5])).getTime();
    //console.log(timestamp);
    return timestamp
}

 // 功能：格式化周
 function get_str_week(int_week){
    let str_week = '';
    switch (int_week) {
        case 0: str_week = '日';break
        case 1: str_week = '一';break
        case 2: str_week = '二';break
        case 3: str_week = '三';break
        case 4: str_week = '四';break
        case 5: str_week = '五';break
        case 6: str_week = '六';break
        default: break;
    }
    return str_week
}

// 功能：补足一位数
function add_num(sigle_num){
    if (sigle_num > 9){
        return sigle_num;
    }else{
        return '0'+sigle_num.toString();
    }
}

// 功能：通过时间戳生成日期列表
function general_date_list(timestamp){
    let date = new Date(timestamp);
    let str_week = get_str_week(date.getDay());
    let date_list = [date.getFullYear(),date.getMonth()+1,date.getDate(),date.getHours(),date.getMinutes(),date.getSeconds(),str_week];
    return date_list
}

// 功能：比较当前时间和输入的时间，返回比较结果
function compare_timestamp(input_time,now_time){
    if (input_time > now_time){
        let mss = input_time - now_time;
        return [-1,'还有',second_to_day(mss)];
    }else if (input_time < now_time){
        let mss = now_time - input_time;
        return [1,'已经过去',second_to_day(mss)];
    }else {
        return [0,'我嚓，你手这么巧？所选即现在。','']
    }
}

// 功能：毫秒转换为天，时，分，秒
function second_to_day(mss){
    days = mss / (1000 * 60 * 60 * 24);
    hours = (mss % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60);
    minutes = (mss % (1000 * 60 * 60)) / (1000 * 60);
    seconds = (mss % (1000 * 60)) / 1000;
    return [Math.floor(days),add_num(Math.floor(hours)),add_num(Math.floor(minutes)),add_num(Math.floor(seconds))]
}

// 功能：生成结果
function general_output_by_timestamp(){
    let now_time = get_now_time();
    let input_time = get_input_time();
    // 得到文本日期
    let pass = general_date_list(input_time);
    let pass_text = pass[0]+'年'+pass[1]+'月'+pass[2]+'日'+add_num(pass[3])+':'+add_num(pass[4])+':'+add_num(pass[5])+' 星期'+pass[6];
    let now = general_date_list(now_time);
    let now_text = now[0]+'年'+now[1]+'月'+now[2]+'日'+add_num(now[3])+':'+add_num(now[4])+':'+add_num(now[5])+' 星期'+now[6];
    // 得到日期差值
    let compare = compare_timestamp(input_time,now_time);
    // 获得输出
    let line1 = '现在距离'+pass_text;
    let line2 = compare[1];
    let line3 = compare[2][0] + '天' +  compare[2][1] + '小时' + compare[2][2]+ '分'+ compare[2][3] + '秒';
    document.querySelector('#result-wrapper').innerHTML = line1 + '<br/>' + line2 + '<br/>' + line3;
    setTimeout(general_output_by_timestamp, 100);
}

// 功能：监听月份选择框，如果发生变动就刷新天选择框
var month_selector = document.querySelector('#month-select');
month_selector.addEventListener('change',month_selector_event);
function month_selector_event(){
    // 判断闰年
    judge_month()
}

// 形成选项初始值
general_initial_selection()

// 生成结果
general_output_by_timestamp()
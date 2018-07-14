
// 选项生成器，传入选择器类型（YY,MM,DD,HH,MM.SS）和所需选项数量（num），然后添加选项到对应的选择器
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
        case 'YE':
            document.querySelector('#year-select').innerHTML = option_dom;
            break;
        case 'MO':
            document.querySelector('#month-select').innerHTML = option_dom;
            break;
        case 'DA':
            document.querySelector('#day-select').innerHTML = option_dom;
            break;        
        case 'HO':
            document.querySelector('#hour-select').innerHTML = option_dom;
            break;        
        case 'MI':
            document.querySelector('#minute-select').innerHTML = option_dom;
            break;        
        case 'SE':
            document.querySelector('#second-select').innerHTML = option_dom;
            break;
        default:
            break;
    } 
}

// 生成默认的年月选项，其它选项需要经过判断后再生成
option_creator('YE',[2000,2032]);
option_creator('MO',[1,12]);
option_creator('DA',[1,31]);
option_creator('HO',[0,23]);
option_creator('MI',[0,59]);
option_creator('SE',[0,59]);


// 为所有六个选择器添加 change 事件监听，当选项改变时，响应相关事件。
var year_select = document.querySelector('#year-select');
var month_select = document.querySelector('#month-select');
var day_select = document.querySelector('#day-select');
var hour_select = document.querySelector('#hour-select');
var minute_select = document.querySelector('#minute-select');
var second_select = document.querySelector('#second-select');

var year_select_value = document.querySelector('#year-select').value;
var month_select_value = document.querySelector('#month-select').value;
var day_select_value = document.querySelector('#day-select').value;
var hour_select_value = document.querySelector('#hour-select').value;
var minute_select_value = document.querySelector('#minute-select').value;
var second_select_value = document.querySelector('#second-select').value;

year_select.addEventListener('change',function(event){year_select_event(event)});
function year_select_event(event){
    var event = event || window.event;
    var src_event = event.target || event.srcElement;
    year_select_value = src_event.value;
    //console.log(year_select_value)
}
month_select.addEventListener('change',function(event){month_select_event(event)});
function month_select_event(event){
    var event = event || window.event;
    var src_event = event.target || event.srcElement;
    month_select_value = src_event.value;
    //console.log(month_select_value)
    // 生成所选月份的天数，注意判断闰年和所选月份，
    //console.log(year_select_value,year_select_value % 4,year_select_value % 100);
    if (year_select_value % 4 === 0 && year_select_value % 100 !== 0){
        year_month_day = [31,29,31,30,31,30,31,31,30,31,30,31];
        option_creator('DA',[1,year_month_day[month_select_value-1]]);
    }else {
        year_month_day = [31,28,31,30,31,30,31,31,30,31,30,31];
        option_creator('DA',[1,year_month_day[month_select_value-1]]);
    }
}
day_select.addEventListener('change',function(event){day_select_event(event)});
function day_select_event(event){
    var event = event || window.event;
    var src_event = event.target || event.srcElement;
    day_select_value = src_event.value;
    //console.log(day_select_value)
}
hour_select.addEventListener('change',function(event){hour_select_event(event)});
function hour_select_event(event){
    var event = event || window.event;
    var src_event = event.target || event.srcElement;
    hour_select_value = src_event.value;
    //console.log(hour_select_value)
}
minute_select.addEventListener('change',function(event){minute_select_event(event)});
function minute_select_event(event){
    var event = event || window.event;
    var src_event = event.target || event.srcElement;
    minute_select_value = src_event.value;
    //console.log(minute_select_value)
}
second_select.addEventListener('change',function(event){second_select_event(event)});
function second_select_event(event){
    var event = event || window.event;
    var src_event = event.target || event.srcElement;
    second_select_value = src_event.value;
    //console.log(second_select_value)
}



// 监听整个选择框，如果发生变动就刷新显示结果
var date_selector = document.querySelector('#date-selector');
date_selector.addEventListener('change',date_selector_event);
function date_selector_event(){

    // 通过日期生成时间戳 Date.UTC(YE,MO,DA,HO,MI,SE)
    var timestamp_input = Date.UTC(year_select_value,month_select_value,day_select_value,hour_select_value,minute_select_value,second_select_value);
    //console.log(timestamp_input);

    // 获取当前时间戳
    var time_now = new Date();
    timestamp_now = time_now.getTime();
    //console.log(timestamp_now);

    // 判断是过去还是现在
    var date_state = compare_timestamp(timestamp_input,time_now);

    // 获取所选时间的星期
    var timestamp_to_week = new Date(timestamp_input);
    timestamp_to_week = timestamp_to_week.getDay();
    //console.log(timestamp_to_week);

    // 准备输出结果
    var result_wrapper = document.querySelector('#result-wrapper');
    result_wrapper_html = '现在距离 '+ year_select_value +' 年'+ month_select_value +' 月'+ day_select_value +' 日 星期'+ get_beautiful_week(timestamp_to_week) +'  '+ get_beautiful_hour(hour_select_value) +':'+ get_beautiful_minute(minute_select_value) +':'+ get_beautiful_second(second_select_value) +'</br>'+ date_state[1] +' '+ date_state[2][0] +' 天 '+ get_beautiful_hour(date_state[2][1]) + ' 小时 '+ get_beautiful_minute(date_state[2][2]) +' 分 '+ get_beautiful_second(date_state[2][3]) +' 秒';
    result_wrapper.innerHTML = result_wrapper_html;
}
 // 格式化周
function get_beautiful_week(timestamp_to_week){
    var beautiful_week = ''
    switch (timestamp_to_week) {
        case 0:
            beautiful_week = '日'
            return beautiful_week
        case 1:
            beautiful_week = '一'
            return beautiful_week
        case 2:
            beautiful_week = '二'
            return beautiful_week
        case 3:
            beautiful_week = '三'
            return beautiful_week
        case 4:
            beautiful_week = '四'
            return beautiful_week
        case 5:
            beautiful_week = '五'
            return beautiful_week
        case 6:
            beautiful_week = '六'
            return beautiful_week
    
        default:
            break;
    }
}
// 格式化小时
function get_beautiful_hour(hour_select_value){
    if (hour_select_value > 9){
        return hour_select_value;
    }else{
        return '0'+hour_select_value.toString();
    }
}
// 格式化分钟
function get_beautiful_minute(minute_select_value){
    if (minute_select_value > 9){
        return minute_select_value;
    }else{
        return '0'+minute_select_value.toString();
    }
}
// 格式化秒钟
function get_beautiful_second(second_select_value){
    if (second_select_value > 9){
        return second_select_value;
    }else{
        return '0'+second_select_value.toString();
    }
}
// 比较当前时间和输入的时间，返回比较结果
function compare_timestamp(timestamp_input,timestamp_now){
    if (timestamp_input > timestamp_now){
        mss = timestamp_input - timestamp_now;
        //console.log(second_to_day(mss));
        return [-1,'还有',second_to_day(mss)];
    }else if (timestamp_input < timestamp_now){
        mss = timestamp_now - timestamp_input;
        //console.log(second_to_day(mss));
        return [1,'已经过去',second_to_day(mss)];
    }else {
        return [0,'我嚓，你手这么巧？所选即现在。','']
    }
}
// 毫秒转换为天，时，分，秒
function second_to_day(mss){
    days = mss / (1000 * 60 * 60 * 24);
    hours = (mss % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60);
    minutes = (mss % (1000 * 60 * 60)) / (1000 * 60);
    seconds = (mss % (1000 * 60)) / 1000;
    return [Math.round(days),Math.round(hours),Math.round(minutes),Math.round(seconds)]
}

// 压缩实时日期容器到一个函数
// 显示当前时间
function flush_time_container(){
    var data_container = document.querySelector('#data-container');
    var now_data = new Date();
    //日
    var ri = now_data.getDate().toString();
    //月
    var yue = now_data.getMonth().toString();
    //年
    var nian = now_data.getFullYear().toString();
    //时
    var shi = now_data.getHours().toString();
    if (shi.length === 1){
        shi = '0' + shi;
    }
    if (12>Number(shi)>0){
        var apm = 'AM'
    }else{
        var apm = 'PM'
    }
    //分
    var fen = now_data.getMinutes().toString();
    if (fen.length === 1){
        fen = '0' + fen;
    }
    //秒
    var miao = now_data.getSeconds().toString();
    if (miao.length === 1){
        miao = '0' + miao;
    }
    //星期
    var xinqi = now_data.getDay();
    var xinqi_2 = '';
    switch (xinqi) {
        case 0:
            xinqi = '日';
            xinqi_2 = 'Sunday';
            break;
        case 1:
            xinqi = '一';
            xinqi_2 = 'Monday';
            break;
        case 2:
            xinqi = '二';
            xinqi_2 = 'Tuesday';
            break;
        case 3:
            xinqi = '三';
            xinqi_2 = 'Wednesday';
            break;
        case 4:
            xinqi = '四';
            xinqi_2 = 'Thursday';
            break;
        case 5:
            xinqi = '五';
            xinqi_2 = 'Friday';
            break;
        case 6:
            xinqi = '六';
            xinqi_2 = 'Saturday';
            break;
        default:
            break;
    }
    time_style1 = nian + '-' + yue + '-' + ri + '  ' + '周' + xinqi + '  ' + shi + ':' + fen + ':' + miao;
    time_style2 = nian + '-' + yue + '-' + ri + '  ' + xinqi_2 + '  ' + shi + ':' + fen + ':' + miao + '  ' + apm;

    data_container.innerHTML = time_style1 + '</br>' + time_style2;
    // 把时间计算器的刷新寄放到当前时间的函数里跟随刷新，省一个刷新函数
    date_selector_event();
    // 刷新，间隔一秒
    setTimeout(flush_time_container,1000);
}
// 执行当前时间显示器
flush_time_container();
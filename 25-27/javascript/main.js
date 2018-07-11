// 刷新日期容器
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
    setTimeout(flush_time_container,1000);
}
flush_time_container();
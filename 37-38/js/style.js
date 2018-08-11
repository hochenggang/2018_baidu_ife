APP.Style = {
    'innerSize': function () {
        // 刷新网页显示面积
        APP.height = window.innerHeight;
        APP.width = window.innerWidth;
        return {'h':APP.height,'w':APP.width}
    },
    'flush':function(){
        document.querySelector('#render').style.height = (window.innerHeight)/2 + 'px';
        document.querySelector('#render').style.width = (window.innerWidth)/2 + 'px';
    }
};

// 何成刚 20180729
// 数据对象化，允许筛选数据

APP.chooseBoxData = {
    getChoose: function () {
        var chooseData;
        // 选中所有的选择器，并返回它们的状态
        chooseData = document.querySelectorAll('#chooseBoxRegion [type=checkbox]');
        var chooseDataRegion = loop_chooseData(chooseData);
        chooseData = document.querySelectorAll('#chooseBoxProduct [type=checkbox]');
        var chooseDataProduct = loop_chooseData(chooseData);
        return { 'chooseDataRegion': chooseDataRegion, 'chooseDataProduct': chooseDataProduct }

        function loop_chooseData(chooseData) {
            var result = { 'select': [], 'check': [], 'element': [] };
            for (var i = 0; i < chooseData.length; i++) {
                let input = chooseData[i];
                result.element.push(input);
                let inputValue = input.value;
                let inputCheck = input.checked;
                result.check.push(inputCheck);
                if (inputCheck) {
                    if (inputValue !== '全选') {
                        result.select.push(inputValue);
                    }
                }
            }
            return result
        }
    },
    logicCheck: function () {
        // 取得选择框状态
        var chooseData = APP.chooseBoxData.getChoose();
        // 进行逻辑判断
        check(chooseData.chooseDataRegion);
        check(chooseData.chooseDataProduct)
        function check(Data) {
            // console.log(Data); 
            // 判断全选
            // 所选是普通元素，全选按钮未勾选，且所有元素被选中，此时应勾选“全选按钮”
            if (Data.check[0] === false && Data.select.length === 3 && APP.chooseBoxClickTarget.value !== '全选') {
                Data.element[0].checked = true;
            }
            // 所选是普通元素，全选按钮已勾选，且不是所有元素被选中，此时应取消勾选“全选按钮”
            if (Data.check[0] === true && Data.select.length !== 3 && APP.chooseBoxClickTarget.value !== '全选') {
                Data.element[0].checked = false;
            }
            // 所选是全选按钮，全选按钮已勾选，且不是所有元素被选中，此时应选中全部按钮
            if (Data.check[0] === true && Data.select.length !== 3 && APP.chooseBoxClickTarget.value === '全选') {
                Data.element[1].checked = true;
                Data.element[2].checked = true;
                Data.element[3].checked = true;
            }
            // 所选是普通按钮，全选按钮未勾选，被选中元素数量为0时，此时无法取消选中
            if (Data.check[0] === false && Data.select.length === 0 && APP.chooseBoxClickTarget.value !== '全选') {
                APP.chooseBoxClickTarget.checked = true;
            }
            // 所选是全选按钮，全选按钮未勾选，且所有元素被选中，此时取消全部勾选
            if (Data.check[0] === false && Data.select.length === 3 && APP.chooseBoxClickTarget.value === '全选') {
                Data.element[0].checked = false;
                Data.element[1].checked = false;
                Data.element[2].checked = false;
                Data.element[3].checked = false;
            }
        }
    },
    getData: function () {
        var chooseData = APP.chooseBoxData.getChoose();
        var rList = chooseData.chooseDataRegion.select;
        var pList = chooseData.chooseDataProduct.select;
        let dict = [];
        let data = APP.chooseBoxData.srcData;
        for (let i = 0; i < data.length; i++) {
            let r = data[i]['region']
            let p = data[i]['product']
            let rCheck;
            let pCheck;

            if (!rList) {
                rCheck = true;
            } else {
                for (let b = 0; b < rList.length; b++) {
                    if (r === rList[b]) {
                        rCheck = true;
                    }
                }
            }
            if (!pList) {
                pCheck = true;
            } else {
                for (let c = 0; c < pList.length; c++) {
                    if (p === pList[c]) {
                        pCheck = true;
                    }
                }
            }

            if (rCheck && pCheck) {
                var d = data[i];
                dict.push(d)
            }
        }
        return dict
    },
    srcData: [{
        product: "手机",
        region: "华东",
        sale: [120, 100, 140, 160, 180, 185, 190, 210, 230, 245, 255, 270]
    }, {
        product: "手机",
        region: "华北",
        sale: [80, 70, 90, 110, 130, 145, 150, 160, 170, 185, 190, 200]
    }, {
        product: "手机",
        region: "华南",
        sale: [220, 200, 240, 250, 260, 270, 280, 295, 310, 335, 355, 380]
    }, {
        product: "笔记本",
        region: "华东",
        sale: [50, 60, 80, 110, 30, 20, 70, 30, 420, 30, 20, 20]
    }, {
        product: "笔记本",
        region: "华北",
        sale: [30, 35, 50, 70, 20, 15, 30, 50, 710, 130, 20, 20]
    }, {
        product: "笔记本",
        region: "华南",
        sale: [80, 120, 130, 140, 70, 75, 120, 90, 550, 120, 110, 100]
    }, {
        product: "智能音箱",
        region: "华东",
        sale: [10, 30, 4, 5, 6, 5, 4, 5, 6, 5, 5, 25]
    }, {
        product: "智能音箱",
        region: "华北",
        sale: [15, 50, 15, 15, 12, 11, 11, 12, 12, 14, 12, 40]
    }, {
        product: "智能音箱",
        region: "华南",
        sale: [10, 40, 10, 6, 5, 6, 8, 6, 6, 6, 7, 26]
    }]
}

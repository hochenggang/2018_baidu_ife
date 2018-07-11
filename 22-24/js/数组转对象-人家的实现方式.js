
    //对象转为数组：
    var scoreObject = {
        "Tony": {
            "Math": 95,
            "English": 79,
            "Music": 68
        },
        "Simon": {
            "Math": 100,
            "English": 95,
            "Music": 98
        },
        "Annie": {
            "Math": 54,
            "English": 65,
            "Music": 88
        }
    };
    console.log("原对象为:"+JSON.stringify(scoreObject));
    var scoreArray=new Array();
    for( x in scoreObject){
        var one=scoreObject[x];
        scoreArray.push([x,one.Math,one.English,one.Music]);
    }
    console.log("转化后数组为:"+scoreArray);
    console.log("************************************************");


    //数组转为对象：
    var menuArr = [
        [1, "Area1", -1],
        [2, "Area2", -1],
        [3, "Area1-1", 1],
        [4, "Area1-2", 1],
        [5, "Area2-1", 2],
        [6, "Area2-2", 2],
        [7, "Area1-2-3", 4],
        [8, "Area2-2-1", 6]
    ];
    console.log("原数组:"+menuArr);
//    var menuObject=new Object();



    // 遍历数组组装对象，不处理数据异常情况
    var menuObject = {};

    // 循环查找父级元素
    var objectLoop = function(obj, id) {
        // 存放元素
        var parent = null;
        // 根据id查找key
        for(key in obj) {
            if (key === id) {
                // 存在key但并非对象，需先处理成对象
                if (!obj[key]) obj[key] = {};
                // 找到后退出循环
                parent = obj[key];
                break;
            } else if (obj[key].subMenu) {
                // 继续查找子级
                parent = objectLoop(obj[key].subMenu, id);
                // 找到后退出循环
                if (parent) break;
            }
        }
        return parent;
    };
    menuArr.map(function(item) {
        // key转化为字符串
        var keyP = item[2].toString(); // 父级key
        var keyC = item[0].toString(); // 数据对应key值
        // 查找父级
        var parentObj = objectLoop(menuObject, keyP);
        // 无父级时，父级为根对象
        if (!parentObj) {
            menuObject[keyC] = { name: item[1] };
        } else {
            // 若subMenu非对象，需先处理成对象
            if (!parentObj.subMenu) parentObj.subMenu = {};
            parentObj.subMenu[keyC] = { name: item[1] };
        }
    });
    console.log("转化后对象为:"+JSON.stringify(menuObject));


var change_result = document.getElementById('change-result');
var change_btng = document.getElementById('change-btng');

change_btng.addEventListener('click',function(event){change_func(event);});

function change_func(event){
    console.log('--------------START--------------');
    var event = event || window.event;
    var src_element = event.target || event.srcElement;
    console.log('点击的按钮是：' + src_element.innerHTML)
    var btnfunc = src_element.getAttributeNode('data-btnfunc').value;
    //console.log(btnfunc)
    switch (btnfunc) {
        case 'change1':
            var scoreObject={"Tony":{"Math":95,"English":79,"Music":68},"Simon":{"Math":100,"English":95,"Music":98},"Annie":{"Math":54,"English":65,"Music":88}};
            var scoreArray = [];
            for (key in scoreObject){
                var individual = scoreObject[key];
                var sc = [];
                sc.push(key);
                for (k in individual){
                    individual_2 = individual[k];
                    sc.push(individual_2);
                }
                scoreArray.push(sc);
            }
            console.log(scoreArray);
            change_result.innerHTML = '已输出到console';
            break;

        case 'change2':
            var menuArr = [
                [1, "Area1", -1],
                [2, "Area2", -1],
                [3, "Area1-1", 1],
                [4, "Area1-2", 1],
                [5, "Area2-1", 2],
                [6, "Area2-2", 2],
                [7, "Area1-2-3", 4],
                [8, "Area2-2-1", 6],
            ];
            var result_obj = {};
            var obj_menu = {};
            var list_menu1 = [];
            var list_menu2 = [];
            var list_menu3 = [];
            for (var i in menuArr){
                obj_menu[menuArr[i][1]] = menuArr[i][0];
                if (menuArr[i][1].length === 5){
                    list_menu1.push(menuArr[i][1]);
                }else if (menuArr[i][1].length === 7){
                    list_menu2.push(menuArr[i][1]);
                }else{
                    list_menu3.push(menuArr[i][1]);
                }
            }
            //console.log(list_menu1,list_menu2,list_menu3,obj_menu);
            for (var l1 in list_menu1){
                //console.log(obj_menu[list_menu1[l1]])
                result_obj[obj_menu[list_menu1[l1]]] = {name:list_menu1[l1],subMenu:''};
 
                //console.log(result_obj)
                var l1_sub = {};
                if (list_menu1[l1][4]==='1') {
                    for (var l2 in list_menu2){
                        //console.log(list_menu2[l2])
                        //console.log(list_menu2[l2][4])
                        if (list_menu2[l2][4]==='1'){
                        l1_sub[obj_menu[list_menu2[l2]]] = {name:list_menu2[l2] ,subMenu:''};
                    }
                    result_obj[obj_menu[list_menu1[l1]]]['subMenu'] = l1_sub;
                    }
                }
                if (list_menu1[l1][4]==='2') {
                    for (var l2 in list_menu2){
                        //console.log(list_menu2[l2])
                        //console.log(list_menu2[l2][4])
                        if (list_menu2[l2][4]==='2'){
                        l1_sub[obj_menu[list_menu2[l2]]] = {name:list_menu2[l2] ,subMenu:''};
                    }
                    result_obj[obj_menu[list_menu1[l1]]]['subMenu'] = l1_sub;
                    }
                }
            }
            console.log(result_obj);
            console.log('只能转换到第二级对象，更深层次逻辑太复杂，后续再找寻更好的办法');
        
            change_result.innerHTML = '已输出到console';
           
        default:
            break;
    }
    console.log('--------------END--------------');
}
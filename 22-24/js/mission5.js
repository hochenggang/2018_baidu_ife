var tree = {
    "id": 0,
    "name": "root",
    "left": {
        "id": 1,
        "name": "Simon",
        "left": {
            "id": 3,
            "name": "Carl1",
            "left": {
                "id": 7,
                "name": "Lee",
                "left": {
                    "id": 11,
                    "name": "Fate"
                }
            },
            "right": {
                "id": 8,
                "name": "Annie",
                "left": {
                    "id": 12,
                    "name": "Saber"
                }
            }
        },
        "right": {
            "id": 4,
            "name": "Tony",
            "left": {
                "id": 9,
                "name": "Candy"
            }
        }
    },
    "right": {
        "id": 2,
        "name": "right",
        "left": {
            "id": 5,
            "name": "Carl2",
        },
        "right": {
            "id": 6,
            "name": "Carl3",
            "right": {
                "id": 10,
                "name": "Kai"
            }        
        }
    }
}

// 假设id和name均不会重复，根据输入name找到对应的id
function findIdByName(name) {
    
    // 遍历对象，创建只含ID和NAME的新对象；
    var value_container_1 = ['left','right'];
    var id_name_container = {};
    id_name_container[tree.id] = tree.name;
    for(var v in value_container_1){
        if(tree[value_container_1[v]]){
            id_name_container[tree[value_container_1[v]].id] = tree[value_container_1[v]].name;
            for (vv in value_container_1){
                if(tree[value_container_1[v]][value_container_1[vv]]){
                    id_name_container[tree[value_container_1[v]][value_container_1[vv]].id] = tree[value_container_1[v]][value_container_1[vv]].name;
                    for (vvv in value_container_1){
                        if (tree[value_container_1[v]][value_container_1[vv]][value_container_1[vvv]]){
                            id_name_container[tree[value_container_1[v]][value_container_1[vv]][value_container_1[vvv]].id] = tree[value_container_1[v]][value_container_1[vv]][value_container_1[vvv]].name;
                            for (vvvv in value_container_1){
                                if (tree[value_container_1[v]][value_container_1[vv]][value_container_1[vvv]][value_container_1[vvvv]]){
                                    id_name_container[tree[value_container_1[v]][value_container_1[vv]][value_container_1[vvv]][value_container_1[vvvv]].id] = tree[value_container_1[v]][value_container_1[vv]][value_container_1[vvv]][value_container_1[vvvv]].name;
                                }
                            }
                        }
                    }
                }
            }
        }  
    }
    var indexbyname = {};
    var indexbyid = id_name_container;
    for(k in id_name_container) {
        indexbyname[id_name_container[k]] = k;
    }

    // 监听点击事件，输入ID来查找NAME
    var id_object_input = document.getElementById('id-object-input');
    var id_object_button = document.getElementById('id-object-button');
    var id_object_result = document.getElementById('id-object-result');
    id_object_button.addEventListener('click',get_name_by_id);
    function get_name_by_id(){
        id_object_input_value = id_object_input.value;
        // 检查输入长度
        if (id_object_input_value.length>=1 && id_object_input_value !== ' '){
            // 输入值须为数字
            //console.log(isNum(id_object_input_value));
            if(isNum(id_object_input_value) === '1'){
                id_object_result.innerHTML = indexbyid[id_object_input_value];
            }
            else{
                id_object_result.innerHTML = '期望的输入值是数字';
            }
        }else{
            id_object_result.innerHTML = '输入为空';
        }
    }

    // 监听点击事件，输入NAME来查找ID
    var id_object_input2 = document.getElementById('id-object-input2');
    var id_object_button2 = document.getElementById('id-object-button2');
    var id_object_result2 = document.getElementById('id-object-result2');
    id_object_button2.addEventListener('click',get_id_by_name);
    function get_id_by_name(){
        id_object_input2_value = id_object_input2.value;
        // 检查输入长度
        if (id_object_input2_value.length>=1 && id_object_input2_value !== ' '){
            // 输入值须为非数字
            //console.log(isNum(id_object_input2_value));
            if(isNum(id_object_input2_value) === '0'){
                id_object_result2.innerHTML = indexbyname[id_object_input2_value];
            }
            else{
                id_object_result2.innerHTML = '期望的输入值是字符串';
            }
        }else{
            id_object_result2.innerHTML = '输入为空';
        }
    }
    
}
findIdByName();

// 把这个对象中所有的名字以“前序遍历”的方式全部输出到console中
function getListWithDLR() {
    // 遍历对象，创建只含ID和NAME的新对象；
    // DLR前序
    var name_container = [];
    // 根节点
    name_container.push(tree.name) ;
    // 左右节点顺序通过改变 value_container的顺序来确定
    var value_container_1 = ['left','right'];
    // left
    name_container.push(tree[value_container_1[0]].name);
    for (vv in value_container_1){
        if(tree[value_container_1[0]][value_container_1[vv]]){
            name_container.push(tree[value_container_1[0]][value_container_1[vv]].name);
            for (vvv in value_container_1){
                if (tree[value_container_1[0]][value_container_1[vv]][value_container_1[vvv]]){
                    name_container.push(tree[value_container_1[0]][value_container_1[vv]][value_container_1[vvv]].name);
                    for (vvvv in value_container_1){
                        if (tree[value_container_1[0]][value_container_1[vv]][value_container_1[vvv]][value_container_1[vvvv]]){
                            name_container.push(tree[value_container_1[0]][value_container_1[vv]][value_container_1[vvv]][value_container_1[vvvv]].name);
                        }
                    }
                }
            }
        }
    }
    // right
    name_container.push(tree[value_container_1[1]].name);
    for (vv in value_container_1){
        if(tree[value_container_1[1]][value_container_1[vv]]){
            name_container.push(tree[value_container_1[1]][value_container_1[vv]].name);
            for (vvv in value_container_1){
                if (tree[value_container_1[1]][value_container_1[vv]][value_container_1[vvv]]){
                    name_container.push(tree[value_container_1[1]][value_container_1[vv]][value_container_1[vvv]].name);
                    for (vvvv in value_container_1){
                        if (tree[value_container_1[1]][value_container_1[vv]][value_container_1[vvv]][value_container_1[vvvv]]){
                            name_container.push(tree[value_container_1[1]][value_container_1[vv]][value_container_1[vvv]][value_container_1[vvvv]].name);
                        }
                    }
                }
            }
        }
    }
    console.log('DLR:'+name_container)
}
getListWithDLR()

// 把这个对象中所有的名字以“中序遍历”的方式全部输出到console中
function getListWithLDR() {
    // 遍历对象，创建只含ID和NAME的新对象；
    // LDR前序
    var name_container = [];
    
    // 左右节点顺序通过改变 value_container的顺序来确定
    var value_container_1 = ['left','right'];
    // left
    name_container.push(tree[value_container_1[0]].name);
    for (vv in value_container_1){
        if(tree[value_container_1[0]][value_container_1[vv]]){
            name_container.push(tree[value_container_1[0]][value_container_1[vv]].name);
            for (vvv in value_container_1){
                if (tree[value_container_1[0]][value_container_1[vv]][value_container_1[vvv]]){
                    name_container.push(tree[value_container_1[0]][value_container_1[vv]][value_container_1[vvv]].name);
                    for (vvvv in value_container_1){
                        if (tree[value_container_1[0]][value_container_1[vv]][value_container_1[vvv]][value_container_1[vvvv]]){
                            name_container.push(tree[value_container_1[0]][value_container_1[vv]][value_container_1[vvv]][value_container_1[vvvv]].name);
                        }
                    }
                }
            }
        }
    }
    // 根节点
    name_container.push(tree.name) ;
    // right
    name_container.push(tree[value_container_1[1]].name);
    for (vv in value_container_1){
        if(tree[value_container_1[1]][value_container_1[vv]]){
            name_container.push(tree[value_container_1[1]][value_container_1[vv]].name);
            for (vvv in value_container_1){
                if (tree[value_container_1[1]][value_container_1[vv]][value_container_1[vvv]]){
                    name_container.push(tree[value_container_1[1]][value_container_1[vv]][value_container_1[vvv]].name);
                    for (vvvv in value_container_1){
                        if (tree[value_container_1[1]][value_container_1[vv]][value_container_1[vvv]][value_container_1[vvvv]]){
                            name_container.push(tree[value_container_1[1]][value_container_1[vv]][value_container_1[vvv]][value_container_1[vvvv]].name);
                        }
                    }
                }
            }
        }
    }
    console.log('LDR:'+name_container)
}
getListWithLDR()

// 把这个对象中所有的名字以“后序遍历”的方式全部输出到console中
function getListWithLRD() {
    // 遍历对象，创建只含ID和NAME的新对象；
    // LRD前序
    var name_container = [];
    
    // 左右节点顺序通过改变 value_container的顺序来确定
    var value_container_1 = ['left','right'];
    // left
    name_container.push(tree[value_container_1[0]].name);
    for (vv in value_container_1){
        if(tree[value_container_1[0]][value_container_1[vv]]){
            name_container.push(tree[value_container_1[0]][value_container_1[vv]].name);
            for (vvv in value_container_1){
                if (tree[value_container_1[0]][value_container_1[vv]][value_container_1[vvv]]){
                    name_container.push(tree[value_container_1[0]][value_container_1[vv]][value_container_1[vvv]].name);
                    for (vvvv in value_container_1){
                        if (tree[value_container_1[0]][value_container_1[vv]][value_container_1[vvv]][value_container_1[vvvv]]){
                            name_container.push(tree[value_container_1[0]][value_container_1[vv]][value_container_1[vvv]][value_container_1[vvvv]].name);
                        }
                    }
                }
            }
        }
    }
    
    // right
    name_container.push(tree[value_container_1[1]].name);
    for (vv in value_container_1){
        if(tree[value_container_1[1]][value_container_1[vv]]){
            name_container.push(tree[value_container_1[1]][value_container_1[vv]].name);
            for (vvv in value_container_1){
                if (tree[value_container_1[1]][value_container_1[vv]][value_container_1[vvv]]){
                    name_container.push(tree[value_container_1[1]][value_container_1[vv]][value_container_1[vvv]].name);
                    for (vvvv in value_container_1){
                        if (tree[value_container_1[1]][value_container_1[vv]][value_container_1[vvv]][value_container_1[vvvv]]){
                            name_container.push(tree[value_container_1[1]][value_container_1[vv]][value_container_1[vvv]][value_container_1[vvvv]].name);
                        }
                    }
                }
            }
        }
    }
    // 根节点
    name_container.push(tree.name) ;
    console.log('LRD:'+name_container)
}
getListWithLRD()

// 判断数字的功能代码
function isNum(input){
    if((input !== '' && input !== null)){
        if(!isNaN(input)){
            var isNum_result = '1';
        }else{
            var isNum_result = '0';
        }
    }
    return isNum_result;
 }
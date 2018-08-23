'use strict';
// 定义一个全局变量
var APP = {};
// 定义餐馆，接受 资金，座位数，雇员数量
APP.Restaurant = (function () {
    var Restaurant = function (m, s, em) {
        this.money = m;
        this.seatNum = s;
        this.employeeList = em;
        this.addEmployee = function (name) {
            console.log(this.employeeList)
        }
        this.dismissEmployee = function (index) {
            console.log(this.employeeList)
        }
    };
    var instance;
    return {
        'start': function (m, s, em) {
            if (!instance) {
                instance = new Restaurant(m, s, em);
            };
            return instance;
        }
    };
})();

// 服务员
APP.Attendant = (function (id, name, salary) {
    var Attendant = function (id, name, salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
        this.offerFoodlist = function (CUS) {
            // 调用顾客点菜
            console.log(this.name + '：您要吃些什么呢？')
            var food = CUS.order();
            console.log(this.name + '：一份' + food.price + '元的' + food.name + '是吧')
            console.log(this.name + '：稍等，已经喊厨师做了')
            var food = Chef.cook(food)
            console.log(this.name + '：您慢用')
            CUS.eat(food);
            console.log(this.name + '：下一位')
            console.log('----------------------------')
        };
    };
    var instance;
    return {
        'start': function (id, name, salary) {
            if (!instance) {
                instance = new Attendant(id, name, salary);
            }
            return instance;
        }
    };
})();

// 厨师
APP.Chef = (function (id, name, salary) {
    var Chef = function (id, name, salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
        this.cook = function (food) {
            console.log(this.name + '：正在做' + food.price + '元的' + food.name)
            console.log(this.name + '：' + food.name + '做好了')
            return food
        };
    };
    var instance;
    return {
        'start': function (id, name, salary) {
            if (!instance) {
                instance = new Chef(id, name, salary);
            }
            return instance;
        }
    };
})();

// 顾客
APP.Customer = function () {
    this.order = function () {
        var food = APP.Food[random(0, APP.Food.length)];
        console.log('顾客：来一份' + food.price + '元的' + food.name)
        return food
    };
    this.eat = function (food) {
        console.log('顾客：爽，' + food.price + '元拿好')
    };
};

// 食物
APP.Food = [
    { 'name': '米饭', 'price': 5 },
    { 'name': '面条', 'price': 15 },
    { 'name': '辣椒', 'price': 25 },
    { 'name': '红薯', 'price': 35 }
];

// 取随机数
function random(lower, upper) {
    return Math.floor(Math.random() * (upper - lower)) + lower;
}


// 开始流程
// 建立顾客队列
var cuslist = [];
for (var index = 0; index < 3; index++) {
    var CUS = new APP.Customer();
    cuslist.push(CUS);
}
// 实例人员类
var R = new APP.Restaurant.start(10000, 1, 2);
var Chef = new APP.Chef.start(1, '大厨A', 2000);
var ATT = new APP.Attendant.start(2, '服务生A', 1500);

while (cuslist.length > 0) {
    var R = new APP.Restaurant.start();
    var Chef = new APP.Chef.start();
    var ATT = new APP.Attendant.start();
    var CUS = cuslist.shift()
    ATT.offerFoodlist(CUS)
}
document.body.appendChild(document.createTextNode('结果已输出至 console '))
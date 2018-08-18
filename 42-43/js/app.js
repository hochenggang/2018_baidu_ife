// 定义一个全局变量
var APP = {};
APP.Restaurant = function (m, s, em) {
    'use strict';
    this.money = m;
    this.seatNum = s;
    this.employeeList = em;

    this.addEmployee = function (name) {
        this.employeeList.push(name);
    }
    this.dismissEmployee = function (index) {
        this.employeeList.splice(index, 1);
    }
};
APP.Staff = function (id, name, salary) {
    'use strict';
    this.id = id;
    this.name = name;
    this.salary = salary;
    this.do = '';
};
APP.Attendant = function (id, name, salary, thing) {
    'use strict';
    APP.Staff.call(this, id, name, salary);
    this.do = function () {
        if (typeof (thing) === 'object') {
            console.log('点餐')
        } else {
            console.log('上菜')
        };
    };

};
APP.Chef = function (id, name, salary, attrs) {
    'use strict';
    APP.Staff.call(this, id, name, salary);
    this.do = function () {
        console.log('烹饪');
    };
};
APP.Customer = function () {
    'use strict';
    this.order = function () {
        console.log('点菜');
    };
    this.eat = function () {
        console.log('吃菜');
    };
};
APP.Food = function (name,cost,price) {
    'use strict';
    this.name = name;
    this.cost = cost;
    this.price = price;
};



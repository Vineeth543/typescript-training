var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Human = /** @class */ (function () {
    function Human() {
        this.name = "Vineeth";
        this.gender = "Male";
        this.height = 5.8;
        this.weight = 70;
    }
    Human.prototype.getName = function () {
        return this.name;
    };
    Human.prototype.setName = function (name) {
        this.name = name;
    };
    return Human;
}());
console.log(new Human());
var User = /** @class */ (function (_super) {
    __extends(User, _super);
    function User() {
        var _this = _super.call(this) || this;
        _this.newName = new Human().getName + "New";
        _this.newGender = new Human().gender + "New";
        return _this;
        // Why do we need to call super() here?
        // Because we are extending the Human class
        // and we need to call the constructor of the Human class
        // to initialize the properties of the Human class
        // and then we can initialize the properties of the User class
        // If we don't call super() here, we will get an error
        // because we are trying to access the properties of the Human class
        // which are not initialized yet
    }
    return User;
}(Human));
console.log(new User());

var House = /** @class */ (function () {
    function House(address, price, size, lot) {
        this.address = address;
        this.price = price;
        this.size = size;
        this.lot = lot;
    }
    return House;
}());
var Zillow = /** @class */ (function () {
    function Zillow(houses, price, size, lot) {
        this.observers = [];
        this.qualifiedHouses = [];
        this.houses = [];
        this.price = 0;
        this.size = 0;
        this.lot = 0;
        this.houses = houses;
        this.price = price;
        this.size = size;
        this.lot = lot;
    }
    Zillow.prototype.registerObserver = function (o) {
        this.observers.push(o);
    };
    Zillow.prototype.removeObserver = function (o) {
        var index = this.observers.indexOf(o);
        this.observers.splice(index, 1);
    };
    Zillow.prototype.notifyObservers = function () {
        for (var _i = 0, _a = this.observers; _i < _a.length; _i++) {
            var observer = _a[_i];
            observer.update(this.qualifiedHouses);
        }
    };
    Zillow.prototype.isHouseQualified = function (house) {
        var price = house.price, size = house.size, lot = house.lot;
        return (price <= this.price && size >= this.size && lot >= this.lot);
    };
    Zillow.prototype.getQualifiedHouses = function () {
        var _this = this;
        this.houses.forEach(function (house) {
            if (_this.isHouseQualified(house)) {
                _this.qualifiedHouses.push(house);
            }
        });
        this.notifyObservers();
    };
    Zillow.prototype.addHouse = function (house) {
        this.houses.push(house);
        if (this.isHouseQualified(house)) {
            this.qualifiedHouses.push(house);
            this.notifyObservers();
        }
    };
    Zillow.prototype.removeHouse = function (house) {
        var index = this.houses.indexOf(house);
        this.houses.splice(index, 1);
        var q_index = this.qualifiedHouses.indexOf(house);
        if (q_index > -1) {
            this.qualifiedHouses.splice(q_index, 1);
            this.notifyObservers();
        }
    };
    return Zillow;
}());
var MoradiFamily = /** @class */ (function () {
    function MoradiFamily(zillow) {
        this.subject = zillow;
        zillow.registerObserver(this);
    }
    MoradiFamily.prototype.update = function (qualifiedHouses) {
        console.log("------");
        console.log(qualifiedHouses);
        console.log("------");
    };
    return MoradiFamily;
}());
var miMikeHouse = new House("123 Covert Rd", 200000, 2300, 2);
var tnErnieHouse = new House("777 Hills Rd", 300000, 3100, 5);
var upperJoe = new House("123 Up", 80000, 2500, 10);
var zillowInstance = new Zillow([miMikeHouse, tnErnieHouse], 225000, 2299, 2);
var familyValues = new MoradiFamily(zillowInstance);
zillowInstance.getQualifiedHouses();
zillowInstance.addHouse(upperJoe);
zillowInstance.removeHouse(miMikeHouse);

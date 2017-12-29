// ------- abstract classes -------
// - base class
// - options base class
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Bass = /** @class */ (function () {
    function Bass() {
    }
    Bass.prototype.getFretboard = function () {
        return this.fretboard;
    };
    return Bass;
}());
var BassOptions = /** @class */ (function (_super) {
    __extends(BassOptions, _super);
    function BassOptions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return BassOptions;
}(Bass));
// ------- Options classes -------
// - require Bass param
var RosewoodFretBoard = /** @class */ (function (_super) {
    __extends(RosewoodFretBoard, _super);
    function RosewoodFretBoard(bass) {
        var _this = _super.call(this) || this;
        _this.decoratedBass = bass;
        return _this;
    }
    RosewoodFretBoard.prototype.getFretboard = function () {
        return this.decoratedBass.getFretboard() + ', with Rosewood fretboard';
    };
    RosewoodFretBoard.prototype.cost = function () {
        return this.decoratedBass.cost() + 50;
    };
    return RosewoodFretBoard;
}(BassOptions));
var IvoryInlays = /** @class */ (function (_super) {
    __extends(IvoryInlays, _super);
    function IvoryInlays(bass) {
        var _this = _super.call(this) || this;
        _this.decoratedBass = bass;
        return _this;
    }
    IvoryInlays.prototype.getFretboard = function () {
        return this.decoratedBass.getFretboard() + ', with Ivory Inlays';
    };
    IvoryInlays.prototype.cost = function () {
        return this.decoratedBass.cost() + 299;
    };
    return IvoryInlays;
}(BassOptions));
// ------- Type classes -------
var FenderPrecision = /** @class */ (function (_super) {
    __extends(FenderPrecision, _super);
    function FenderPrecision() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.fretboard = "maple, 24 fret";
        return _this;
    }
    FenderPrecision.prototype.cost = function () {
        return 1200;
    };
    return FenderPrecision;
}(Bass));
var FenderJazz = /** @class */ (function (_super) {
    __extends(FenderJazz, _super);
    function FenderJazz() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.fretboard = "rosewood, 24 fret";
        return _this;
    }
    FenderJazz.prototype.cost = function () {
        return 900;
    };
    return FenderJazz;
}(Bass));
// ------- Implementation -------
var aaronsFavBass = new FenderPrecision();
var aaronsMostFavBass = new IvoryInlays(aaronsFavBass);

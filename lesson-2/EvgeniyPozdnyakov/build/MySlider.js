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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define(["require", "exports", "./Slider.abstract"], function (require, exports, Slider_abstract_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    Slider_abstract_1 = __importDefault(Slider_abstract_1);
    var voidImage = new Image();
    voidImage.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg==';
    var MySlider = /** @class */ (function (_super) {
        __extends(MySlider, _super);
        function MySlider() {
            var data = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                data[_i] = arguments[_i];
            }
            var _this = _super.apply(this, data) || this;
            _this._isDragging = false;
            return _this;
        }
        /**
         * Returns value which is gte this._minValue && lte this._maxValue
         */
        MySlider.prototype.limitValue = function (value) {
            return Math.min(this._maxValue, Math.max(this._minValue, value));
        };
        /**
         * Creates slider html + style, add event listeners
         */
        MySlider.prototype.createSlider = function () {
            this._ctnr = document.createElement('div');
            this._ctnr.setAttribute('class', 'slider-ui');
            this._axis = document.createElement('div');
            this._axis.setAttribute('class', 'axis');
            this._handle = document.createElement('div');
            this._handle.setAttribute('class', 'handle');
            this._handle.draggable = true;
            this._handle.ondragstart = this.onDragStart.bind(this);
            this._handle.ondrag = this.onDrag.bind(this);
            this._handle.ondragleave = this.onDragLeave.bind(this);
            this._ctnr.appendChild(this._axis);
            this._ctnr.appendChild(this._handle);
            return this._ctnr;
        };
        MySlider.prototype.onPositionChange = function (newValue, prevValue) {
            this._onChangeCb(newValue, prevValue);
        };
        MySlider.prototype.onDragStart = function (ev) {
            this._isDragging = true;
            this._screenX = ev.screenX;
            ev.dataTransfer.setDragImage(voidImage, 0, 0);
        };
        MySlider.prototype.onDrag = function (ev) {
            if (ev.screenX === 0 && ev.screenY === 0) {
                return;
            }
            var deltaX = ev.screenX - this._screenX;
            var prevValue = this._value;
            this._value += this.pxToValue(deltaX);
            this._value = this.limitValue(this._value);
            this._screenX = ev.screenX;
            this.redrawHandle();
            this.onPositionChange(prevValue, this._value);
        };
        MySlider.prototype.onDragLeave = function () {
            this._isDragging = false;
        };
        MySlider.prototype.redrawHandle = function () {
            this.setSliderWidthOnce();
            var px = Math.round(this.valueToPx(this._value));
            this._handle.style.left = px + "px";
        };
        MySlider.prototype.setSliderWidthOnce = function () {
            if (!this._sliderWidth) {
                this._sliderWidth = this._axis.offsetWidth;
            }
        };
        MySlider.prototype.valueToPx = function (value) {
            return (value - this._minValue) / (this._maxValue - this._minValue) * this._sliderWidth;
        };
        MySlider.prototype.pxToValue = function (px) {
            return (this._maxValue - this._minValue) * px / this._sliderWidth + this._minValue;
        };
        MySlider.prototype.onWindowResize = function () {
            console.log('======== on resize ');
            this._sliderWidth = 0;
            this.redrawHandle();
        };
        return MySlider;
    }(Slider_abstract_1.default));
    exports.default = MySlider;
});

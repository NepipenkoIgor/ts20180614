define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var AbstractSlider = /** @class */ (function () {
        function AbstractSlider(initValue, minValue, maxValue) {
            if (initValue === void 0) { initValue = 50; }
            if (minValue === void 0) { minValue = 0; }
            if (maxValue === void 0) { maxValue = 100; }
            this._minValue = minValue;
            this._maxValue = maxValue;
            this._value = this.limitValue(initValue);
        }
        Object.defineProperty(AbstractSlider.prototype, "value", {
            get: function () {
                return this._value;
            },
            set: function (value) {
                this._value = this.limitValue(value);
                this.redrawHandle();
            },
            enumerable: true,
            configurable: true
        });
        AbstractSlider.prototype.createSliderAt = function (ctnr, onPositionChange) {
            this._sliderElement = this.createSlider();
            this._onChangeCb = onPositionChange;
            ctnr.appendChild(this._sliderElement);
            this.redrawHandle();
            window.addEventListener('resize', this.onWindowResize.bind(this));
        };
        AbstractSlider.prototype.destroySlider = function () {
            window.removeEventListener('resize', this.onWindowResize.bind(this));
            this._sliderElement.remove();
        };
        return AbstractSlider;
    }());
    exports.default = AbstractSlider;
});

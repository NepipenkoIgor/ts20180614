var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define(["require", "exports", "./MySlider"], function (require, exports, MySlider_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    MySlider_1 = __importDefault(MySlider_1);
    makeSlider();
    function makeSlider() {
        var slider = new MySlider_1.default();
        var ctnr = document.querySelector('.slider-ctnr');
        if (!ctnr) {
            return;
        }
        slider.createSliderAt(ctnr, function (value) {
            console.log('value: ', value);
        });
    }
});

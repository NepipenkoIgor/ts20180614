"use strict";
var Slider = /** @class */ (function () {
    function Slider(element) {
        var _this = this;
        this.handleMouseUp = function (e) {
            document.removeEventListener("mouseup", _this.handleMouseDown);
            document.removeEventListener("mousemove", _this.handleMouseMove);
        };
        this.handleMouseDown = function (e) {
            document.addEventListener("mouseup", _this.handleMouseUp);
            _this.sliderCoords = _this.getCoords(_this.sliderEl);
            _this.thumbCoords = _this.getCoords(_this.thumbEl);
            _this.shiftX = e.pageX - _this.thumbCoords.left;
            document.addEventListener("mousemove", _this.handleMouseMove);
        };
        this.handleMouseMove = function (e) {
            var newLeft = e.pageX - _this.shiftX - _this.sliderCoords.left;
            if (newLeft < 0) {
                newLeft = 0;
            }
            var rightEdge = _this.sliderEl.offsetWidth - _this.thumbEl.offsetWidth;
            if (newLeft > rightEdge) {
                newLeft = rightEdge;
            }
            _this.thumbEl.style.left = newLeft + "px";
        };
        this.sliderEl = element;
        var thumbEl = element.querySelector(".thumb");
        if (thumbEl) {
            this.thumbEl = thumbEl;
            this.thumbEl.addEventListener("mousedown", this.handleMouseDown);
        }
    }
    Slider.prototype.getCoords = function (el) {
        var box = el.getBoundingClientRect();
        return {
            top: box.top + window.pageYOffset,
            left: box.left + window.pageXOffset,
        };
    };
    return Slider;
}());
var el = document.querySelector("#slider");
if (el) {
    new Slider(el);
}

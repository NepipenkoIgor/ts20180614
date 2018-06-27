var Slider = /** @class */ (function () {
    function Slider(element) {
        var runner = element.querySelector('.runner');
        this._sliderWidth = element.offsetWidth;
        this._sliderLeft = element.offsetLeft;
        if (runner)
            this.runner = runner;
        else {
            this.runner = document.createElement('div');
            this.runner.setAttribute('class', 'runner');
            element.appendChild(this.runner);
        }
        this.runner.addEventListener('mousedown', this._start.bind(this));
    }
    Slider.prototype._start = function (mousedownEvent) {
        var _this = this;
        var dx = mousedownEvent.pageX - this.runner.offsetLeft;
        var _stop = function () {
            document.removeEventListener('mouseup', _stop);
            document.removeEventListener('mousemove', _move);
        };
        var _move = function (mousemoveEvent) {
            var left = mousemoveEvent.pageX - dx - _this._sliderLeft;
            if (left < 0)
                left = 0;
            var right = _this._sliderWidth - _this.runner.offsetWidth;
            if (left > right)
                left = right;
            _this.runner.style.left = left + "px";
        };
        document.addEventListener('mousemove', _move);
        document.addEventListener('mouseup', _stop);
    };
    return Slider;
}());
var slider = document.querySelector('.slider');
if (slider)
    new Slider(slider);

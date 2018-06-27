"use strict";
function ready() {
    var thumb = document.body.querySelector('.thumb');
    var slider = document.body.querySelector('.slider');
    thumb.onmousedown = function (e) {
        var sliderCoords = getCoords(slider);
        var thumbCoords = getCoords(thumb);
        var shiftX = e.pageX - getShiftCoords(thumb).x;
        // let shiftY = e.pageY - getShiftCoords(thumb).y;
        thumb.style.position = 'absolute';
        moveAt(e);
        document.body.appendChild(thumb);
        thumb.style.zIndex = '999';
        thumb.ondragstart = function () { return false; };
        document.onmousemove = function (e) {
            moveAt(e);
        };
        document.onmouseup = function () {
            clearMove();
        };
        function clearMove() {
            document.onmousemove = null;
            // thumb.onmousedown = null;
        }
        function moveAt(e) {
            thumb.style.left = calcNewXCoord(e) + 'px';
            thumb.style.top = thumbCoords.top + 'px';
        }
        function calcNewXCoord(e) {
            var fineShiftX = e.pageX - shiftX;
            var newPosX = e.pageX - (e.pageX - fineShiftX);
            if (newPosX < sliderCoords.left) {
                return sliderCoords.left;
            }
            else if (newPosX > sliderCoords.right) {
                return sliderCoords.right - (thumbCoords.right - thumbCoords.left);
            }
            return newPosX;
        }
    };
    function getCoords(el) {
        var box = el.getBoundingClientRect();
        return {
            left: box.left,
            right: box.right,
            top: box.top,
            bottom: box.bottom
        };
    }
    function getShiftCoords(element) {
        var box = element.getBoundingClientRect();
        var x = box.left + pageXOffset;
        var y = box.top + pageYOffset;
        return { y: y, x: x };
    }
}
document.addEventListener('DOMContentLoaded', ready);

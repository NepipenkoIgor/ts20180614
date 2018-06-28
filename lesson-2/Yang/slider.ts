interface ICoords {
    x: number,
    y: number,
}

interface ISizes {
    left: number,
    right: number,
    top: number,
    bottom: number,
}


function ready(): void {

    const thumb = <HTMLElement>document.body.querySelector('.thumb');
    const slider = <HTMLElement>document.body.querySelector('.slider');


    thumb.onmousedown = (e: MouseEvent): void => {

        const sliderCoords: ISizes = getCoords(slider);
        const thumbCoords: ISizes = getCoords(thumb);

        const shiftX = e.pageX - getShiftCoords(thumb).x;
        // let shiftY = e.pageY - getShiftCoords(thumb).y;


        thumb.style.position = 'absolute';
        moveAt(e);
        document.body.appendChild(thumb);
        thumb.style.zIndex = '999';
        thumb.ondragstart = () => false;


        document.onmousemove = (e: MouseEvent) => {
            moveAt(e);
        };

        document.onmouseup = () => {
            clearMove();
        };

        function clearMove() {
            document.onmousemove = null;
            // thumb.onmousedown = null;
        }


        function moveAt(e: MouseEvent): void {
            thumb.style.left = calcNewXCoord(e) + 'px';
            thumb.style.top = thumbCoords.top + 'px';
        }

        function calcNewXCoord(e:MouseEvent): number {
            const fineShiftX = e.pageX - shiftX;
            const newPosX = e.pageX - (e.pageX - fineShiftX);
            if (newPosX < sliderCoords.left) {
                return sliderCoords.left;
            } else if (newPosX > sliderCoords.right) {
                return sliderCoords.right - (thumbCoords.right - thumbCoords.left);
            }
            return newPosX;
        }
    };

    function getCoords(el: HTMLElement): ISizes {
        let box = el.getBoundingClientRect();
        return {
            left: box.left,
            right: box.right,
            top: box.top,
            bottom: box.bottom
        };
    }

    function getShiftCoords(element: HTMLElement): ICoords {
        let box = element.getBoundingClientRect();
        let x = box.left + pageXOffset;
        let y = box.top + pageYOffset;
        return {y, x};
    }

}

document.addEventListener('DOMContentLoaded', ready);
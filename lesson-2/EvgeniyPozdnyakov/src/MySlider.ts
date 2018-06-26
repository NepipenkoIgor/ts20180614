import AbstractSlider from './Slider.abstract';

const voidImage: HTMLImageElement = new Image();

voidImage.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg==';

class MySlider extends AbstractSlider {
    private _isDragging: boolean;
    private _screenX!: number;
    private _ctnr!: HTMLDivElement;
    private _handle!: HTMLDivElement;
    private _axis!: HTMLDivElement;
    private _sliderWidth!: number;

    constructor(...data: any[]) {
        super(...data);

        this._isDragging = false;
    }

    /**
     * Returns value which is gte this._minValue && lte this._maxValue
     */
    limitValue(value: number) {
        return Math.min(this._maxValue, Math.max(this._minValue, value));
    }

    /**
     * Creates slider html + style, add event listeners
     */
    createSlider(): HTMLDivElement {
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
    }

    protected onPositionChange(newValue: number, prevValue: number): void {
        this._onChangeCb(newValue, prevValue);
    }

    private onDragStart(ev: DragEvent): void {
        this._isDragging = true;
        this._screenX = ev.screenX;
        ev.dataTransfer.setDragImage(voidImage, 0, 0);
    }

    private onDrag(ev: DragEvent): void {
        if (ev.screenX === 0 && ev.screenY === 0) {
            return;
        }

        const deltaX: number = ev.screenX - this._screenX;

        const prevValue = this._value;
        this._value += this.pxToValue(deltaX);
        this._value = this.limitValue(this._value);
        this._screenX = ev.screenX;
        this.redrawHandle();

        this.onPositionChange(prevValue, this._value);
    }

    private onDragLeave(): void {
        this._isDragging = false;
    }

    protected redrawHandle() {
        this.setSliderWidthOnce();

        const px = Math.round(this.valueToPx(this._value));

        this._handle.style.left = `${px}px`;
    }

    private setSliderWidthOnce(): void {
        if (!this._sliderWidth) {
            this._sliderWidth = this._axis.offsetWidth;
        }
    }

    private valueToPx(value: number) {
        return (value - this._minValue) / (this._maxValue - this._minValue) * this._sliderWidth;
    }

    private pxToValue(px: number) {
        return (this._maxValue - this._minValue) * px / this._sliderWidth + this._minValue;
    }

    protected onWindowResize() {
        this._sliderWidth = 0;
        this.redrawHandle();
    }
}

export default MySlider;

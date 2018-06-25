type OnPositionChangeCb = (this: void, value: number, prevValue: number) => void;

abstract class AbstractSlider {
    protected _sliderElement!: HTMLDivElement;
    protected _value: number;
    protected _minValue: number;
    protected _maxValue: number;
    protected _onChangeCb!: OnPositionChangeCb;

    /**
     * Returns value which is gte this._minValue && lte this._maxValue
     */
    abstract limitValue(value: number): number;

    constructor(initValue: number= 50, minValue: number = 0, maxValue: number = 100) {
        this._minValue = minValue;
        this._maxValue = maxValue;
        this._value = this.limitValue(initValue);
    }

    public get value(): number {
        return this._value;
    }

    public set value(value: number) {
        this._value = this.limitValue(value);
    }

    /**
     * Creates slider html + style, add event listeners
     */
    abstract createSlider(): HTMLDivElement;

    /**
     * Method must call this._onChangeCb
     * @param newValue
     * @param prevValue
     */
    abstract onPositionChange(newValue: number, prevValue: number): void;

    createSliderAt(ctnr: HTMLDivElement, onPositionChange: OnPositionChangeCb): void {
        this._sliderElement = this.createSlider();
        this._onChangeCb = onPositionChange;

        ctnr.appendChild(this._sliderElement);
    }

    destroySlider(): void {
        this._sliderElement.remove();
    }
}

export default AbstractSlider;

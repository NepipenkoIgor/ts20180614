abstract class AbstractSlider {
    protected sliderElement!: HTMLDivElement;
    protected _value: number;
    protected _minValue: number;
    protected _maxValue: number;

    /**
     * Returns value which is gte this._minValue && lte this._maxValue
     */
    abstract limitValue(value: number): number;

    constructor(initValue: number=50, minValue: number = 0, maxValue: number = 100) {
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

    abstract onPositionChange(newValue: number, prevValue: number): void;

    createSliderAt(ctnr: HTMLDivElement, initPosition: number): void {
        this.sliderElement = this.createSlider()
        this._value = initPosition;

        ctnr.appendChild(this.sliderElement);
    }
    
    destroySlider(): void {
        this.sliderElement.remove();
    }
}

export default AbstractSlider;

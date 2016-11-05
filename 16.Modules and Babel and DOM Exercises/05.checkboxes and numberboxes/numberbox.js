class Numberbox {
    constructor (label, selector, minValue, maxValue) {
        this._label = label;
        this._minValue = minValue;
        this._maxValue = maxValue;
        this._elements = $(selector);
        this._value = $(selector).val();

        let self = this;
        self._elements.on('change', function (ev) {
            self.value = newValue;
        });
    }

    get label () {
        return this._label;
    }

    get elements () {
        return this._elements;
    }

    get value () {
        return this._value;
    }

    set value (newValue) {
        if (newValue > this._maxValue || newValue < this._minValue) {
            throw new Error('Error');
        }

        this._value = newValue;
        this._elements.val(newValue);
    }
}

module.exports.Numberbox = Numberbox;

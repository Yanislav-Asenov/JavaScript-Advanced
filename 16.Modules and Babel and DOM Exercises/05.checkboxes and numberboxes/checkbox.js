class Checkbox {
    constructor (label, selector) {
        this._label = label;
        this._selector = selector;
        this._elements = $(selector);
        this._value = this._elements.is(':checked');

        let self = this;
        self._elements.on('change', function (ev) {
            self.value = $(this).prop('checked');
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
        if (typeof newValue !== 'boolean') {
            throw new Error('Error');
        }

        this._value = newValue;
        this._elements.prop('checked', newValue);
    }
}

module.exports.Checkbox = Checkbox;

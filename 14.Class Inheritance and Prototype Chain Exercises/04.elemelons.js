function solve () {
    class Melon {
        constructor (weight, melonSort, element) {
            if (new.target === Melon) {
                throw new Error('Abstract class cannot be instantiated directly');
            }
            this.weight = weight;
            this.melonSort  = melonSort;
            this.element = element;
        }

        toString () {
            return `Element: ${this.element}\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`;
        }

        get elementIndex () {
            return this.weight * this.melonSort.length;
        }
    }

    class Watermelon extends Melon {
        constructor (weight, melonSort, element = 'Water') {
            super(weight, melonSort, element);
        }
    }

    class Firemelon extends Melon {
        constructor (weight, melonSort, element = 'Fire') {
            super(weight, melonSort, element);
        }
    }

    class Earthmelon extends Melon {
        constructor (weight, melonSort, element = 'Earth') {
            super(weight, melonSort, element);
        }
    }

    class Airmelon extends Melon {
        constructor (weight, melonSort, element = 'Air') {
            super(weight, melonSort, element);
        }
    }

    class Melolemonmelon extends Firemelon {
        constructor (weight, melonSort, element = 'Water') {
            super(weight, melonSort, element);
            this.elements = ['Fire', 'Earth', 'Air', 'Water'];
        }

        morph () {
            this.elements.push(this.element);
            this.element = this.elements.shift();
            return this;
        }
    }

    return {
        Melon,
        Watermelon,
        Firemelon,
        Earthmelon,
      	Airmelon,
        Melolemonmelon
    };
}

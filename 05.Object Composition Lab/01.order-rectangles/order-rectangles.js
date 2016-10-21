function solve (inputArray) {
    let rectangles = [];



    for (let [width, height] of inputArray) {
        rectangles.push(createRect(width, height));
    }

    rectangles.sort((a, b) => a.compareTo(b));
    return rectangles;

    function createRect (width, height) {
        let rect = {
            width: width,
            height: height,
            area: () => rect.width * rect.height,
            compareTo: (other) => {
                let result = other.area() - rect.area();
                return result || (other.width - rect.width);
            }
        }

        return rect;
    }
}

// solve([[10,5], [3,20], [5,12]]);

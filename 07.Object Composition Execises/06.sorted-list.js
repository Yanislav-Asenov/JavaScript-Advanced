function solve () {
    let sortedList = {
        items: [],
        add: add,
        remove: remove,
        get: get,
        size: 0
    };

    return sortedList;


    function add (item) {
        sortedList.items.push(item);
        sortedList.size++;

        let resultArr = [];
        for (let index in sortedList.items) {
            resultArr.push(sortedList.items[index]);
        }

        resultArr.sort((a, b) => a > b);
        sortedList.items = resultArr;
        sort();
    }

    function remove (index) {
        if (index >= sortedList.size || index < 0) {

        } else {
            sortedList.items.splice(index, 1);
            sortedList.size--;

            let resultArr = [];
            for (let index in sortedList.items) {
                resultArr.push(sortedList.items[index]);
            }

            resultArr.sort((a, b) => a > b);
            sortedList.items = resultArr;
             sort();
        }
    }

    function get (index) {
        if (index >= sortedList.size || index < 0) {

        } else {
            sort();
            return sortedList.items[index];
        }
    }

    function sort () {
        sortedList.items.sort((a, b) => a > b);
    }
}
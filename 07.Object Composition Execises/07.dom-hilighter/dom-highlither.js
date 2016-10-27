(function solve () {
    let startElement = $('#content');
    let depth = 1;

    let deepestChild = '';
    let maxDepth = 0;

    getDepth(depth, startElement);

    function getDepth (depth, element) {
        if (depth > maxDepth) {
            deepestChild = $(element);
            maxDepth = depth;
        }

        let children = $(element).children();
        children.each((index, element) => getDepth(depth + 1, element));
    }

    $(deepestChild).addClass('.highlight');
    console.log(deepestChild);
    console.log(maxDepth);

    // while (maxDepth >= 0) {
    //     deepestChild.addClass()
    // }
})();


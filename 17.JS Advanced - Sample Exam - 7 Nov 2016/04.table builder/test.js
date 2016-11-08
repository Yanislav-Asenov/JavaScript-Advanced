function tableBuilder(selector) {
    function createTable (columnNames) {
        let table = $('<table>');
        let firstRow = $('<tr>');
        for(let columnName of columnNames) {
            let currentColumn = $('<th>');
            currentColumn.text(currentColumn);
            firstRow.append(currentColumn);
        }
        table.append(firstRow);
        $(selector).innerHTML = table.html();
        console.log(table.html());
    }
}
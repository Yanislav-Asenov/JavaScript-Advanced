function tableBuilder (selector) {
    function createTable (columnNames) {
        let table = $('<table>');
        let firstRow = $('<tr>');

        for (let columnName of columnNames) {
            let currentColumn = $(`<th>${columnName}</th>`);
            firstRow.append(currentColumn);
        }

        let actionColumn = $('<th>Action</th>'); 
        firstRow.append(actionColumn);
        table.append(firstRow);

        let container = $(selector);
        container.empty();
        container.append(table);
    }

    function fillData (dataRows) {            
        for (let dataRow of dataRows) {
            let currentRow = $('<tr>');

            for (let columnData of dataRow) {
                let currentData = $(`<td>${columnData}</td>`);
                currentRow.append(currentData);
            }

            let action = $('<td><button>Delete</button></td>');
            currentRow.append(action);
            $(`${selector} table`).append(currentRow);
        }

        $(`${selector} button`).on('click', function (ev) {
            $(ev.target).parent().parent().remove();
        });
    }

    return {
        createTable,
        fillData
    };
}

$(function() {
    let builder = tableBuilder("#main");
    builder.createTable(['Name', 'Town']);
    builder.fillData([
        ['Maria', 'Sofia'],
        ['Kiril', 'Varna'],
        ['Ani <new>', 'Ruse'],
    ]);
});

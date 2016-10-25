function bugTracker () {
    let reportedBugs = [];
    let id = -1;
    let outputElement = '';

    function report (author, description, reproducible, severity) {
        let newBugReport = {
            ID: ++id,
            author: author,
            description: description,
            reproducible: reproducible,
            severity: severity,
            status: 'Open'
        };

        reportedBugs.push(newBugReport);
        printReports();
    }

    function setStatus (bugId, newStatus) {
        for (let i = 0; i < reportedBugs.length; i++) {
            let currentReportedBug = reportedBugs[i];
            if (currentReportedBug.ID === bugId) {
                reportedBugs[i].status = newStatus;
                break;
            }
        }

        printReports();
    }

    function remove (bugId) {
        let bugIndexInTheArray = -1;
        for (let i = 0; i < reportedBugs.length; i++) {
            if (reportedBugs[i].ID === bugId) {
                bugIndexInTheArray = i;
                break;
            }
        }

        reportedBugs.splice(bugIndexInTheArray, 1);
        printReports();
    }

    function sort (methodForSorting) {
        if (methodForSorting === 'ID') {
            reportedBugs.sort((a, b) => a.ID > b.ID);
        } else if (methodForSorting === 'author') {
            reportedBugs.sort((a, b) => a.author > b.author);
        } else if (methodForSorting === 'severity') {
            reportedBugs.sort((a, b) => a.severity > b.severity);
        } else {
            reportedBugs.sort((a, b) => a.ID > b.ID);
        }

        printReports();
    }

    function output (selector) {
        outputElement = $(selector);
    }

    function createHTMLReportElement (reportObject) {
        let reportDiv = $('<div>');
        reportDiv.attr('id', 'report_' + reportObject.ID);
        reportDiv.addClass('report');

        let bodyDiv = $('<div>');
        bodyDiv.addClass('body');

        let descriptionParagraph = $('<p>');
        descriptionParagraph.text(reportObject.description);
        bodyDiv.append(descriptionParagraph);
        reportDiv.append(bodyDiv);

        let titleDiv = $('<div>');
        titleDiv.addClass('title');

        let authorSpan = $('<span>');
        authorSpan.addClass('author');
        authorSpan.text('Submitted by: ' + reportObject.author);

        let statusSpan = $('<span>');
        statusSpan.addClass('status');
        statusSpan.text(reportObject.status + ' | ' + reportObject.severity);
        titleDiv.append(authorSpan);
        titleDiv.append(statusSpan);
        reportDiv.append(titleDiv);

        return reportDiv;
    }

    function printReports () {
        outputElement.empty();
        let resultReportsFragment = document.createDocumentFragment();

        for (let i = 0; i < reportedBugs.length; i++) {
            let reportDiv = createHTMLReportElement(reportedBugs[i]);
            reportDiv.appendTo(resultReportsFragment);
        }

        outputElement.append(resultReportsFragment);
    }

    return {
        report: report,
        setStatus: setStatus,
        remove: remove,
        sort: sort,
        output: output
        // printBugs: () => console.log(reportedBugs)
    };
}


// test.report('d', 'Mn e dobyr brat', true, 5555);
// test.report('c', 'Mn ne e dobyr brat', false, 55);
// test.report('b', 'Zle e toq :/', true, 555);
// test.report('a', 'Brat yeah meow', false, 5);
// test.setStatus(2, 'Banana');
// test.sort('severity');
// test.printBugs();


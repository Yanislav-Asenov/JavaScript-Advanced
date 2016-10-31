function solve (buttonSelector) {
    $(buttonSelector).on('click', () => {
        let strongElements = $('#content strong');
        let summaryContainer = $('<div id="summary"></div>');
        let summaryHeading = $('<h2>Summary</h2>');
        let summaryParagraph = $('<p>');

        let paragraphContent = '';
        for (let i = 0; i < strongElements.length; i++) {
            paragraphContent += $(strongElements[i]).text();
        }
        summaryParagraph.text(paragraphContent);
        summaryContainer.append(summaryHeading).append(summaryParagraph);
        $('#content').parent().append(summaryContainer);
    });
}
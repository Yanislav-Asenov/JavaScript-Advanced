let expect = require('chai').expect;
let jsdom = require('jsdom-global')();
let $ = require('jquery');

document.body.innerHTML = `<div id="target test">
    <div id="target test" class="nested target">
        <p id="target test">This is some text</p>
    </div>
    <div id="target test" class="target">
        <p>Empty div</p>
    </div>
    <div class="inside">
        <span class="nested">Some more text</span>
        <span class="target">Some more text</span>
    </div>
</div>
`;

function nuke (selector1, selector2) {
    if (selector1 === selector2) return;
    $(selector1).filter(selector2).remove();
}

describe('nuke', () => {
    it('should operates in HTML document', function () {
        expect($('body').length).to.equal(1, 'The function is not operating in HTML document');
    });
});
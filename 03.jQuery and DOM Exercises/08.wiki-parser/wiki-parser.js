function wikiParser (selector) {
    let content = $(selector);
    let text = content.text();
 
    text = replaceTag(text,"'''","b");
    text = replaceTag(text,"''","i");
    text = replaceTag(text,"===","h3");
    text = replaceTag(text,"==","h2");
    text = replaceTag(text,"=","h1");
 
 
 
    function replaceTag(str,symbol,tag) {
        let pattern = `${symbol}(.*?)${symbol}`;
        let regex = new RegExp(pattern,'g');
        return str=str.replace(regex,(m,g) => `<${tag}>${g}</${tag}>`);
    }
 
    content.html(text);
}

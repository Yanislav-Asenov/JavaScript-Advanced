class MailBox {
    constructor () {
        this.mailbox = [];
    }

    addMessage (subject, text) {
        this.mailbox.push({ subject: subject, text: text });
        return this;
    }

    get messageCount () {
        return this.mailbox.length;
    }

    deleteAllMessages () {
        this.mailbox = [];
    }

    findBySubject (substr) {
        let resultArr = [];
        for (let object of this.mailbox) {
            if (object.subject.indexOf(substr) > -1) {
                resultArr.push(object);
            }
        }

        return resultArr;
    }

    toString () {
        if (this.mailbox.length === 0) {
            return ` * (empty mailbox)`;
        } else {
            let resultString = ` * [${this.mailbox[0].subject}] ${this.mailbox[0].text}`;
            for (let i = 1; i < this.mailbox.length; i++) {
                let object = this.mailbox[i];
                resultString += `\n * [${object.subject}] ${object.text}`;
            }

            return resultString;
        }
    }
}

let mb = new MailBox();
console.log("Msg count: " + mb.messageCount);
console.log('Messages:\n' + mb);
mb.addMessage("meeting", "Let's meet at 17/11");
mb.addMessage("beer", "Wanna drink beer tomorrow?");
mb.addMessage("question", "How to solve this problem?");
mb.addMessage("Sofia next week", "I am in Sofia next week.");
console.log("Msg count: " + mb.messageCount);
console.log('Messages:\n' + mb);
console.log("Messages holding 'rakiya': " +
    JSON.stringify(mb.findBySubject('rakiya')));
console.log("Messages holding 'ee': " +
    JSON.stringify(mb.findBySubject('ee')));

mb.deleteAllMessages();
console.log("Msg count: " + mb.messageCount);
console.log('Messages:\n' + mb);

console.log("New mailbox:\n" +
    new MailBox()
        .addMessage("Subj 1", "Msg 1")
        .addMessage("Subj 2", "Msg 2")
        .addMessage("Subj 3", "Msg 3")
        .toString());


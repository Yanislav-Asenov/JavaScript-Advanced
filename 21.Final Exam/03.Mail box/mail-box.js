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

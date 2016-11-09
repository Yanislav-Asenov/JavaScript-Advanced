class TrainingCourse {
    constructor (title, trainer) {
        this.title = title;
        this.trainer = trainer;
        this.topics = [];
    }

    addTopic (title, date) {
        this.topics.push({ title: title, date: date });
        this.sortTopics();
    }

    get firstTopic () {
        return this.topics[0];
    }

    get lastTopic () {
        return this.topics[this.topics.length - 1];
    }

    toString () {
        let resultString = `Course "${this.title}" by ${this.trainer}`;          
        
        if (this.topics.length > 0) {
            for (let topic of this.topics) {
                resultString += `\n * ${topic.title} - ${topic.date}`;
            }
        } else {
            resultString += '\n';
        }

        return resultString;
    }

    sortTopics () {
        this.topics.sort(function(a, b) {
            return a.date - b.date; 
        });
    }
}

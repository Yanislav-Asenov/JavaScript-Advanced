function solve (descritionArray, status) {
    class Ticket {
        constructor (destination, price, status) {
            this.destination = destination;
            this.price = Number(price);
            this.status = status;
        }
    }

    let sortedTickets = [];

    for (let i = 0; i < descritionArray.length; i++) {
        let currentTicketArgs = descritionArray[i].split('|');
        let destination = currentTicketArgs[0];
        let price = Number(currentTicketArgs[1]);
        let status = currentTicketArgs[2];

        let currentTicket = new Ticket(destination, price, status);
        sortedTickets.push(currentTicket);
    }

    if (status === 'destination') {
        sortedTickets.sort((a, b) => {
            return a.destination > b.destination;
        });
    } else if (status === 'price') {
        sortedTickets.sort((a, b) => {
            return a.price - b.price;
        });
    } else if (status === 'status') {
        sortedTickets.sort((a, b) => {
            return a.status > b.status;
        });
    }

    return sortedTickets;
}

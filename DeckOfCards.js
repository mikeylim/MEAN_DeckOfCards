function Deck() {
    this.cards = [];

    this.reset = function() {
        var suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
        var numbers = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];
        for(suit of suits) {
            for(number of numbers) {
                this.cards.push({ name : number + ' of ' + suit})
            }
        }
    }

    this.swap = function(x,y) {
        var temp = this.cards[x];
        this.cards[x] = this.cards[y];
        this.cards[y] = temp;
    }

    this.shuffle = function() {
        for(let i = 0; i < this.cards.length; i++) {
            var rand = MAth.floor(Math.random() * this.cards.length);
            this.swap(i, rand);
        }
    }

    this.deal = function() {
        // remove the bottom most card 
        return this.cards.pop();
    }

    this.reset();
}

var newDeck = new Deck();
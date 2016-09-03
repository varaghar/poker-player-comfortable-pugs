module.exports = {

    VERSION: "Please JS, please STAPHHH",

    bet_request: function(game_state, bet) {

        try {

            var cards = getMyCards(game_state),
                player = getMyPlayer(game_state),
                myBet = 0,
                trans = {
                    "1": 1,
                    "2": 2,
                    "3": 3,
                    "4": 4,
                    "5": 5,
                    "6": 6,
                    "7": 7,
                    "8": 8,
                    "9": 9,
                    "10": 10,
                    "J": 11,
                    "Q": 12,
                    "K": 13,
                    "A": 14
                },
                x = trans[cards[0].rank],
                y = trans[cards[1].rank],
                c1 = cards[0].suit,
                c2 = cards[1].suit,
                cardsDown = game_state.community_cards,
                ranks = {
                    "NIMNIC": 0,
                    "PAIR": 1,
                    "TWO_PAIRS": 2,
                    "THREE_OF_A_KIND": 3,
                    "STRAIGHT": 4,
                    "FLUSH": 5,
                    "FULL_HOUSE": 6,
                    "FOUR_OF_A_KIND": 7,
                    "ROYAL_FLUSH": 8
                };

            // OPENING HAND
            // The cards are equal
            if (cardsDown.length === 0) {
                if (x === y) {
                    myBet = bid(game_state, 4);
                    if (x > 10) {
                        myBet = player.stack;
                    }
                } else if (c2 === c1) {
                    myBet = game_state.current_buy_in;
                    if (Math.abs(x - y) < 4) {
                        myBet = bid(game_state, 4);
                    }
                }
                if (Math.abs(x - y) < 4) {
                    myBet = call(game_state) ;
                }

            } else if (cardsDown.length > 3) {
                if (myBet > 0) {
                    var rank = getRanks(cardsDown, hand, ranks);
                    myBet = call(game_state);
                    switch (rank) {
                        case 8:
                            myBet = player.stack;
                            break;
                        case 7:
                            myBet = player.stack;
                            break;
                        case 6:
                            myBet = player.stack;
                            break;
                        case 5:
                            myBet = player.stack;
                            break;
                        case 4:
                            myBet = player.stack;
                            break;
                        case 3:
                            myBet = player.stack;
                            break;
                        case 2:
                            myBet = bid(game_state, 4);
                            break;
                        case 1:
                            myBet = call(game_state);
                            break;
                        default:
                           minRaise;
                    }

                }
            } 

            console.log(cards[0]);
            console.log(cards[1]);
            console.log("My bet is : " + myBet);
            bet(parseInt(myBet));

        } catch (ex) {
            console.log("Caught exception: " + ex);
        }




        function getMyCards(game_state) {

            var cards_down = game_state.community_cards;
            var players = game_state.players;

            var nrOfPlayers = players.length;
            for (var i = 0; i < nrOfPlayers; i++) {
                if (players[i].name == 'Comfortable Pugs') {
                    return players[i].hole_cards;
                }
            }

        };

        function getMyPlayer(game_state) {
            var players = game_state.players;

            var nrOfPlayers = players.length;
            for (var i = 0; i < nrOfPlayers; i++) {
                if (players[i].name == 'Comfortable Pugs') {
                    return players[i];
                }
            }
        }

        function bid(gameState, raise) {
            var call = gameState.current_buy_in - gameState.players[gameState.in_action]['bet'],
                minRaise = call + gameState.minimum_raise + player.stack / raise;
            return minRaise > player.stack ? player.stack : minRaise ;
        }
        
        function minRaise(gameState) {
            var call = gameState.current_buy_in - gameState.players[gameState.in_action]['bet'],
                minRaise = call + gameState.minimum_raise;
            return minRaise;
        }
        
        function call(gameState) {
            var call = gameState.current_buy_in - gameState.players[gameState.in_action]['bet'];
            return call;
        }

        function getRanks(cardsDown, hand, ranks) {
            var cards = cardsDown.concat(hand),
                cardsDownNr = cardsDown.length,
                numbers = {
                    "1": 0,
                    "2": 0,
                    "3": 0,
                    "4": 0,
                    "5": 0,
                    "6": 0,
                    "7": 0,
                    "8": 0,
                    "9": 0,
                    "10": 0,
                    "J": 0,
                    "Q": 0,
                    "K": 0,
                    "A": 0,
                },
                color = {
                    "diamonds": 0,
                    "spades": 0,
                    "hearts": 0,
                    "clubs": 0
                },
                card = null;

            for (var i = 0; i < cardsDownNr; i++) {
                card = cards[i];
                numbers[card.rank] = numbers[card.rank] + 1;
                color[card.suit] = color[card.suit] + 1;
            }

            for (var key in numbers) {
                if (numbers[key] == 4) {
                    return ranks["FOUR_OF_A_KIND"];
                }
            }

            for (var key in color) {
                if (color[key] > 4) {
                    return ranks["FLUSH"];
                }
            }

            var threeOfAKind = false;
            for (var key in numbers) {
                if (numbers[key] == 3) {
                    threeOfAKind = true;
                }
            }

            for (var key in numbers) {
                var pairs = 0;
                if (numbers[key] > 2) {
                    pairs++;
                }

                if (threeOfAKind) {
                    if (pairs > 1) {
                        return ranks["FULL_HOUSE"];
                    }

                    return ranks["THREE_OF_A_KIND"];
                }

                if (pairs == 1) {
                    return ranks["PAIRS"];
                }

                if (pairs > 1) {
                    return ranks["TWO_PAIRS"];
                }
            }
            return 0;
        }

    },

    showdown: function(game_state) {

    }

};
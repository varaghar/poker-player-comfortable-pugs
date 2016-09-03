module.exports = {

    VERSION: "Please JS, please STAPHHH",

    bet_request: function(game_state, bet) {

        try {

            var cards = getMyCards(game_state),
                player = getMyPlayer(game_state),
                myBet = 1,
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
            myBet = 0;
            if (game_state.current_buy_in - game_state.players[game_state.in_action]['bet'] < player.stack / 4) {
                if (cardsDown.length === 0) {
                    if (x === y) {
                        if (x > 8) {
                            myBet = player.stack;
                        }
                    }
                    if (x + y > 24) {
                        myBet = player.stack / 4;
                    }
                    
                    if (c1 === c2 && (x + y > 17) && (x > 7 && x > 8)) {
                        myBet = player.stack / 4;
                    }
                }
                if (cardsDown.length >= 3) {
                    var rank = getRanks(cardsDown, cards, ranks);
                    if (rank >= 2) {
                        myBet = player.stack;
                    }
                    if (x + y > 24) {
                        myBet = player.stack;
                    }
                    
                }
            }
           /* if (cardsDown.length === 0) {
                if (x === y) {
                    myBet = bid(game_state, 4);
                    if (x > 9) {
                        myBet = player.stack;
                    }
                } else if (c2 === c1) {
                    if (otherPLayerbet < player.stack / 9) {
                        myBet = call(game_state) ;    
                    }
                    if (Math.abs(x - y) < 4) {
                        myBet = bid(game_state, 10);
                    }
                }
                if (Math.abs(x - y) < 4 &&
                    x + y > 13 ) {
                    if (otherPLayerbet < player.stack / 9) {
                        myBet = call(game_state) ;    
                    }
                }

            } else if (cardsDown.length >= 3) {
                var rank = getRanks(cardsDown, cards, ranks);
                console.log('RANK: ', rank);
                console.log('CARDS: ', cards);
                console.log('CARDSDown: ', cardsDown);
                myBet = call(game_state);
                switch (rank) {
                    case 8:
                        myBet = player.stack -1;
                        break;
                    case 7:
                        myBet = player.stack -1 ;
                        break;
                    case 6:
                        myBet = player.stack -1 ;
                        break;
                    case 5:
                        myBet = player.stack - 1;
                        break;
                    case 4:
                        myBet = player.stack -1 ;
                        break;
                    case 3:
                        myBet = player.stack -1;
                        break;
                    case 2:
                        myBet = bid(game_state, 4);
                        break;
                    case 1:
                        if (x > 11) {
                            myBet = bid(game_state, 10);
                        } else {
                            myBet = call(game_state);    
                        }
                        break;
                    default:
                       myBet = minRaise(game_state);
                }

            } 

            console.log(cards[0]);
            console.log(cards[1]);
            console.log("My bet is : " + myBet);*/
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
            console.log("CALL IS : ", call);
            console.log("Raise : ", minRaise);
            console.log("minraise : ", gameState.minimum_raise);
            console.log("Current By IN", gameState.current_buy_in);
            console.log("The fuck is this", gameState.players[gameState.in_action]['bet']);
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
                cardsDownNr = cards.length,
                numbers = {
                    "1":  0,
                    "2":  0,
                    "3":  0,
                    "4":  0,
                    "5":  0,
                    "6":  0,
                    "7":  0,
                    "8":  0,
                    "9":  0,
                    "10": 0,
                    "J":  0,
                    "Q":  0,
                    "K":  0,
                    "A":  0
                },
                color = {
                    "diamonds": 0,
                    "spades":   0,
                    "hearts":   0,
                    "clubs":    0
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
             console.log("Numbers ",numbers);
            console.log("Colors ",color);
            var threeOfAKind = false;
            for (var key in numbers) {
                if (numbers[key] == 3) {
                    threeOfAKind = true;
                }
            }
            var pairs = 0;
            for (var key in numbers) {
                if (numbers[key] > 1) {
                    pairs++;
                }
            }
            if (threeOfAKind) {
                if (pairs > 1) {
                    return ranks["FULL_HOUSE"];
                }

                return ranks["THREE_OF_A_KIND"];
            }

            if (pairs > 1) {
                return ranks["TWO_PAIRS"];
            }
            if (pairs == 1) {
                return ranks["PAIR"];
            }

            return 0;
        }

    },

    showdown: function(game_state) {

    }

};
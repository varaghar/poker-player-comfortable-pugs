
module.exports = {

  VERSION: "Default JavaScript folding player",

  bet_request: function(game_state, bet) {
    
    console.log(game_state);
      
    /*var cards =  getMyCards(game_state);
     
    if (cards[0].rank === cards[1].rank) {
       bet(game_state.pot);
    } else {
       bet(game_state.current_buy_in);          
    }*/
    bet(game_state.current_buy_in);  
      
    
  },

  showdown: function(game_state) {

  },
    
 getMyCards: function(game_state) {
    var players = game_state.players;
     var nrOfPlayers = players.size;
        for (var i=0; i<nrOfPlayers;i++) {
            if (player.name == 'Comfortable Pugs') {
                return player.hole_cards;
            }
        }
    },
    getAllCards: function(game_state) {
        var myCards = getMyCards(game_state);
        var cards_down = game_state.community_cards;
        
        cards.push(myCards[0]);
        cards.push(myCards[1]);
        
        var cards = [];
        var cardsDownSize = cards_down.size; 
         for (var i=0; i<cardsDownSize;i++) {
            cards.push(cards_down[i]);
        }
        return cards;
    },
    getMyPlayer: function(game_state) {
              var players = game_state.players;
        
     var nrOfPlayers = players.size;
        for (var i=0; i<nrOfPlayers;i++) {
            if (player.name == 'Comfortable Pugs') {
                return player;
            }
        }
    }
};

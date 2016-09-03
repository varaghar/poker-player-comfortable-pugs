
module.exports = {

  VERSION: "Default JavaScript folding player",

  bet_request: function(game_state, bet) {
    
    console.log(game_state);
      
    var cards =  getCards(game_state);
     
    if (cards[0].rank === cards[1].rank) {
       bet(game_state.pot)
       return;
    }
      
      
    bet(game_state.current_buy_in);  
  },

  showdown: function(game_state) {

  },
    
 getMyCards: function(game_state) {
   
      var cards_down = game_state.community_cards;
      var players = game_state.players;
        
     var nrOfPlayers = players.size;
        for (var i=0; i<nrOfPlayers;i++) {
            if (player.name == 'Comfortable Pugs') {
                return player.hole_cards;
            }
        }
     
    }
};

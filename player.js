
module.exports = {

  VERSION: "Default JavaScript folding player",

  bet_request: function(game_state, bet) {
    bet(100);
      console.log(game_state);
      
    var cards =  getCards(game_state);
     
    
      
      
      
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

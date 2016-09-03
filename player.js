
module.exports = {

  VERSION: "Default JavaScript folding player",

  bet_request: function(game_state, bet) {
      
   try
{ 
      
    var cards =  getMyCards(game_state),
        player = getMyPlayer(game_state),
        myBet = game_state.current_buy_in; 
   /* if (cards[0].rank === cards[1].rank) {
       bet(game_state.pot);
    } else {
       bet(game_state.current_buy_in);          
    }*/
    
    console.log(cards[0]);
    console.log(cards[1]);
    if (cards[1].rank === cards[1].rank) {
        myBet = game_state.current_buy_in * 2;  
    }
    bet(myBet);  
      
}
catch (ex)
{
    console.log("Caught exception: " + ex);
}      
    
      

      
      
          
  function getMyCards(game_state) {
   
      var cards_down = game_state.community_cards;
      var players = game_state.players;
        
     var nrOfPlayers = players.length;
        for (var i=0; i<nrOfPlayers;i++) {
            if (players[i].name == 'Comfortable Pugs') {
                return players[i].hole_cards;
            }
        }
     
   };
 function getAllCards(game_state) {
        var myCards = getMyCards(game_state);
        var cards_down = game_state.community_cards;
        
        cards.push(myCards[0]);
        cards.push(myCards[1]);
        
        var cards = [];
        var cardsDownSize = cards_down.length; 
         for (var i=0; i<cardsDownSize;i++) {
            cards.push(cards_down[i]);
        }
        return cards;
    };
    function getMyPlayer(game_state) {
              var players = game_state.players;
        
     var nrOfPlayers = players.length;
        for (var i=0; i<nrOfPlayers;i++) {
            if (players[i].name == 'Comfortable Pugs') {
                return players[i];
            }
        }
    }

  },

  showdown: function(game_state) {

  },

};

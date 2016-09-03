
module.exports = {

  VERSION: "Default JavaScript folding player",

  bet_request: function(game_state, bet) {
      
   try
{ 
      
    var cards =  getMyCards(game_state),
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
        x = trans(cards[0].rank),
        y = trans(cards[1].rank); 
    
    // OPENING HAND
    // The cards are equal
    if (x === y) {
        myBet = game_state.pot * 2;
      if ( x > 10) {
        myBet = player.stack;  
      }   
    }
    
    console.log(cards[0]);
    console.log(cards[1]);
    console.log("My bet is : " + myBet);
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

  }

};
